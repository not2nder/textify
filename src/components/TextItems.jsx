import { Clipboard } from "lucide-react";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

function TextItems({ fonts, text }) {
  function stylize(text, charset) {
    return text
      .normalize("NFD")
      .split("")
      .map((char) => charset[char] || char)
      .join("");
  }

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const output = text.trim() ? text.trim() : "Textify";
  const [tooltipText, setTipText] = useState("Clique para copiar");

  return (
    <ul className="h-[280px] space-y-3 overflow-y-scroll no-scrollbar">
      {fonts.map((font, index) => (
        <li
          key={index}
          className="w-100 flex justify-between px-4 py-3 bg-slate-200 shadow rounded-md hover:bg-slate-300 hover:shadow-md hover:shadow-slate-200 transition-all duration-300 cursor-pointer border border-slate-400"
          onClick={() => {
            copyToClipboard(stylize(output, font));
            setTipText("Copiado!");
            setTimeout(() => {
              setTipText("Clique para copiar");
            }, 2000);
          }}
          data-tooltip-id="tooltip"
          data-tooltip-content={stylize(tooltipText, font)}
          data-tooltip-delay-show={200}
          data-tooltip-float="true"
        >
          <p className="truncate text-slate-900">{stylize(output, font)}</p>
          <Clipboard className="text-slate-500" />
        </li>
      ))}
      <Tooltip id="tooltip" />
    </ul>
  );
}

export default TextItems;
