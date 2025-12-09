import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/Window";
import React from "react";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>

      <div className="p-8 bg-white h-full overflow-auto">
        {data.image && <img src={data.image} alt={data.name} className="w-32 h-32 rounded-lg object-cover mb-6" />}

        {data.subtitle && <h3 className="text-xl font-semibold mb-4 text-gray-800">{data.subtitle}</h3>}

        <div className="space-y-4">
          {data.description?.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
