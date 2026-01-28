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
  // cleanup을 반드시 반환해야 하는 함수이므로, container가 없으면 no-op cleanup 반환
  if (!container) return () => {};

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHT[type];

  const animateLetter = (letter, intensity, duration = 0.25) => {
    const weight = min + (max - min) * intensity;

    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
      y: -10 * intensity,
      scale: 1 + 0.2 * intensity,
      overwrite: "auto",
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 2000);
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

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

function Welcome() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  // Mobile redirect settings
  const MOBILE_SITE = "https://2026-portfolio-eosin.vercel.app/";
  const REDIRECT_DELAY_MS = 10000;

  const [isMobileRedirecting, setIsMobileRedirecting] = useState(false);
  const [countdown, setCountdown] = useState(Math.ceil(REDIRECT_DELAY_MS / 1000));

  const startedRef = useRef(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () =>
      /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent) ||
      (window.matchMedia && window.matchMedia("(max-width: 768px)").matches);

    const cleanupTimers = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const stopRedirect = () => {
      // PC/태블릿으로 돌아오면 리다이렉트 취소 + UI 원복
      cleanupTimers();
      startedRef.current = false;
      setIsMobileRedirecting(false);
      setCountdown(Math.ceil(REDIRECT_DELAY_MS / 1000));
    };

    const startRedirect = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      setIsMobileRedirecting(true);

      // countdown UI
      const tick = 1000;
      let remaining = REDIRECT_DELAY_MS;
      setCountdown(Math.ceil(remaining / 1000));

      intervalRef.current = setInterval(() => {
        remaining -= tick;
        setCountdown(Math.max(0, Math.ceil(remaining / 1000)));
      }, tick);

      // redirect
      timeoutRef.current = setTimeout(() => {
        window.location.href = MOBILE_SITE;
      }, REDIRECT_DELAY_MS);
    };

    const sync = () => {
      // 현재 상태에 맞게 시작/중지 동기화
      if (checkMobile()) startRedirect();
      else stopRedirect();
    };

    // initial
    sync();

    // listen changes
    const mq = window.matchMedia && window.matchMedia("(max-width: 768px)");
    const handleChange = () => sync();

    if (mq) {
      if (mq.addEventListener) mq.addEventListener("change", handleChange);
      else if (mq.addListener) mq.addListener(handleChange);
    } else {
      window.addEventListener("resize", handleChange);
    }

    return () => {
      cleanupTimers();
      if (mq) {
        if (mq.removeEventListener) mq.removeEventListener("change", handleChange);
        else if (mq.removeListener) mq.removeListener(handleChange);
      } else {
        window.removeEventListener("resize", handleChange);
      }
    };
  }, []);

  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, "title");
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      subtitleCleanup();
      titleCleanup();
    };
  }, []);

  // 모바일 감지되면: 안내 화면 렌더링
  if (isMobileRedirecting) {
    return (
      <section id="welcome">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <p style={{ marginBottom: ".75rem" }}>This portfolio is designed for desktop/tablet screens.</p>
          <h2 style={{ fontSize: "1.25rem", marginBottom: ".5rem" }}>Redirecting to mobile portfolio</h2>
          <p style={{ marginBottom: ".5rem" }}>For the best experience please use a desktop. You will be redirected to the mobile site shortly.</p>
          <p style={{ opacity: 0.8 }}>
            Redirecting in {countdown} second{countdown !== 1 ? "s" : ""}…
          </p>
          <p style={{ marginTop: ".75rem", fontSize: ".9rem" }}>
            <a href={MOBILE_SITE}>{MOBILE_SITE}</a>
          </p>
        </div>
      </section>
    );
  }

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
