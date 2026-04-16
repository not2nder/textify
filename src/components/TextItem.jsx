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
    <li
      className="w-100 flex justify-between px-4 py-3 bg-slate-200 shadow rounded-md hover:bg-slate-300 hover:shadow-md hover:shadow-slate-200 transition-all duration-300 cursor-pointer border border-slate-400"
      onClick={() => {
        copyToClipboard(stylize(output, fontset.charset));
        setTipText("Copiado!");
      }}
      onMouseOver={() => setTipText("clique para copiar")}
      data-tooltip-id="tooltip"
      data-tooltip-content={stylize(tipText, fontset.charset)}
      data-tooltip-float="true"
    >
      <div className="flex gap-2 ">
        <p className="text-slate-500">{fontset.name} •</p>
        <p className=" text-slate-900 truncate">
          {stylize(output, fontset.charset)}
        </p>
      </div>
      <Clipboard className="text-slate-400" />
      <Tooltip style={{ borderRadius: "6px" }} id="tooltip" />
    </li>
  );
}

export default TextItem;
