import { dockApps } from "#constants";
import { Tooltip } from "react-tooltip";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "#store/Window";

const Dock = () => {
  const { windows, openWindow, closeWindow } = useWindowStore();

  const dockRef = useRef(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return () => {}; // Guard clause

    const icons = Array.from(dock.querySelectorAll(".dock-icon")); //Converts to array

    const animateIcons = (mouseX) => {
      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const { left: dockLeft } = dock.getBoundingClientRect();
        const center = iconLeft - dockLeft + width / 2.5;
        const distance = Math.abs(mouseX - center);

        const intensity = Math.max(0, Math.exp(-(distance ** 2) / 2000));

        gsap.to(icon, {
          scale: 1 + intensity * 0.5,
          y: -30 * intensity,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcons = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  const toogleApp = (app) => {
    if (!app.canOpen) return;

    // Map trash to archive window
    const windowId = app.id === "trash" ? "archive" : app.id;
    const window = windows[windowId];

    if (!window) {
      console.error(`window not for app: ${app.id}`);
      return;
    }

    if (window.isOpen) {
      closeWindow(windowId);
    } else {
      openWindow(windowId);
    }
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={id !== "trash" && !canOpen}
              onClick={() => toogleApp({ id, canOpen: id === "trash" || canOpen })}
            >
              <img src={`/images/${icon}`} alt={name} loading="lazy" className={id === "trash" || canOpen ? "" : "opacity-60"} />
            </button>
          </div>
        ))}

        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
