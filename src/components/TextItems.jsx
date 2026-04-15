import { Clipboard } from "lucide-react";

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
      alert("Copiado para a Área de Transferência!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const output = text.trim() ? text.trim() : "Textify";

  return (
    <ul className="h-[280px] space-y-3 overflow-y-scroll no-scrollbar">
      {fonts.map((font, index) => (
        <li
          key={index}
          className="w-100 flex justify-between px-4 py-3 bg-slate-200 shadow rounded-md hover:bg-slate-300 hover:shadow-md hover:shadow-slate-200 transition-all duration-300 cursor-pointer border border-slate-200"
          onClick={() => copyToClipboard(stylize(output, font))}
        >
          <p className="truncate text-slate-900">{stylize(output, font)}</p>
          <Clipboard className="text-slate-500" />
        </li>
      ))}
    </ul>
  );
}

export default TextItems;
