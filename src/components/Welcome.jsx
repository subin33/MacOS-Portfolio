import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FONT_WEIGHT = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span key={i} className={className} style={{ fontVariationSettings: `'wght' ${baseWeight}` }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return () => {}; // cleanup을 반드시 반환해야 하는 함수 이기 때문에, 두 cleanup 중 하나라도 undefined 라면 바로 오류 때문에, container 가 없으면 아무 일도 안 하는 cleanup함수 반환

  const letters = container.querySelectorAll("span"); // 모든 span 요소 저장
  const { min, max, default: base } = FONT_WEIGHT[type]; //FONT_WEIGHT 구조분해 할당

  const animateLetter = (letter, intensity, duration = 0.25) => {
    const weight = min + (max - min) * intensity; // map [0,1] -> [min,max]

    return gsap.to(letter, {
      duration, // 실행시간
      ease: "power2.out", // 처음은 좀 빠르게, 갈수록 천천히 멈추는 곡선
      fontVariationSettings: `'wght' ${weight}`, // 굵기 애니메이션
      y: -10 * intensity,
      scale: 1 + 0.2 * intensity,
      overwrite: "auto",
    });
  };

  const handleMouseMove = (e) => {
    // container.getBoundingClientRect() 는 화면(뷰포트) 기준으로 container의 위치와 크기를 알려주는 함수
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left; // 화면은 x=0 기준에서 container의 왼쪽이 어디인지를 가져옴.

    letters.forEach((letter) => {
      //span 을 순회하면서
      const { left: l, width: w } = letter.getBoundingClientRect(); // 각 span의 위치와 크기를 가져옴

      // 1. 마우스와 글자 사이의 거리
      const distance = Math.abs(mouseX - (l - left + w / 2));

      // 2. 그 거리를 0~1 강도로 바꾸기
      const intensity = Math.exp(-(distance ** 2) / 2000);

      // 3. 강도에 따라 글자 굵기 정하기
      animateLetter(letter, intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      gsap.to(letter, {
        duration: 0.4,
        ease: "power2.out",
        fontVariationSettings: `'wght' ${base}`,
        y: 0,
        scale: 1,
        rotate: 0,
      });
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  // cleanup fn
  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

function Welcome() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, "title");
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      subtitleCleanup();
      titleCleanup();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>{renderText("Hey, I'm Subin! Welcome to my", "text-3xl font-georama", 100)}</p>
      <h1 ref={titleRef} className="mt-7">
        {renderText("Portfolio", "text-9xl italic font-georama")}
      </h1>

      <div className="small-screen">
        <p>This Portfolio is designed for the desktop/tablet screens</p>
      </div>
    </section>
  );
}

export default Welcome;
