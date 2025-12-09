import { WindowControls } from "#components";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Search } from "lucide-react";
import React from "react";
import useLocationStore from "#store/Location";
import clsx from "clsx";
import useWindowStore from "#store/Window";

const Finder = () => {
  const { openWindow } = useWindowStore();

  const { activeLocation, setActiveLocation } = useLocationStore();

  const renderList = (name, item) => (
    <div>
      <h3>Favorites</h3>
      <ul>
        {item.map((item) => (
          <li key={item.id} onClick={() => setActiveLocation(item)} className={clsx(item.id === activeLocation.id ? "active" : "not-active")}>
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href) return window.open(item.href, "_blank");

    // Map file types to window keys
    const fileTypeToWindowKey = {
      txt: "txtfile",
      img: "imgfile",
    };

    const windowKey = fileTypeToWindowKey[item.fileType];
    if (windowKey) {
      openWindow(windowKey, item);
    }
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            {renderList("Favorites", Object.values(locations))}
            {renderList("Work", locations.work.children)}
          </div>
        </div>

        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li key={item.id} className={item.position} onClick={() => openItem(item)}>
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
