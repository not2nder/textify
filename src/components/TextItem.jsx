import { useState } from "react";
import { Clipboard } from "lucide-react";
import { Tooltip } from "react-tooltip";

function TextItem({ fontset, text }) {
  function stylize(str, charset) {
    let font = {};

    const alfabeto =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    charset.split(" ").map((char, index) => {
      font[alfabeto[index]] = char;
    });

    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split("")
      .map((char) => font[char] || char)
      .join("");
  }

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error(err);
    }
  };

  const output = text.trim() ? text.trim() : "Textify";
  const [tipText, setTipText] = useState("clique para copiar");

  return (
    <div
      className="flex gap-2 w-full justify-between px-4 py-3 items-center
    text-slate-700

    dark:text-gray-300
    dark:hover:bg-[slate-700]/60"
      onClick={() => {
        copyToClipboard(stylize(output, fontset.charset));
        setTipText("Copiado!");
      }}
      onMouseOver={() => setTipText("Clique para copiar")}
      data-tooltip-id="tooltip"
      data-tooltip-content={tipText}
      data-tooltip-float="false"
    >
      <div className="flex gap-2 truncate">
        <p className="text-slate-500 dark:text-gray-400">{fontset.name} •</p>

        <p className="truncate text-slate-900 dark:text-gray-200">
          {stylize(output, fontset.charset)}
        </p>
      </div>

      <Clipboard className="text-slate-400 dark:text-gray-500 group-hover:text-teal-400" />

      <Tooltip
        id="tooltip"
        style={{
          borderRadius: "6px",
          color: "#e2e8f0",
        }}
      />
    </div>
  );
}

export default TextItem;
