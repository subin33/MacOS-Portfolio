import { WindowControls } from "#components";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/Window";
import React from "react";

const Archive = () => {
  const { openWindow } = useWindowStore();

  const openItem = (item) => {
    if (item.fileType === "txt") {
      openWindow("txtfile", item);
    } else if (item.fileType === "img") {
      openWindow("imgfile", {
        name: item.name,
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        imageUrl: item.imageUrl,
      }); 
    }
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="archive" />
        <h2>Archive</h2>
      </div>

      <ul className="archive-content">
        {locations.trash.children.map((item) => (
          <li
            key={item.id}
            className="archive-item"
            onClick={() => openItem(item)}
          >
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

const ArchiveWindow = WindowWrapper(Archive, "archive");

export default ArchiveWindow;
