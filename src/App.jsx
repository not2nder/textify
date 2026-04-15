import { useState } from "react";
import TextItem from "./components/TextItem";
import icon from "../public/icon.svg";

const fontset = [
  {
    name: "Cursive Bold",
    charset:
      "𝓐 𝓑 𝓒 𝓓 𝓔 𝓕 𝓖 𝓗 𝓘 𝓙 𝓚 𝓛 𝓜 𝓝 𝓞 𝓟 𝓠 𝓡 𝓢 𝓣 𝓤 𝓥 𝓦 𝓧 𝓨 𝓩 𝓪 𝓫 𝓬 𝓭 𝓮 𝓯 𝓰 𝓱 𝓲 𝓳 𝓴 𝓵 𝓶 𝓷 𝓸 𝓹 𝓺 𝓻 𝓼 𝓽 𝓾 𝓿 𝔀 𝔁 𝔂 𝔃 0 1 2 3 4 5 6 7 8 9",
  },
  {
    name: "Medieval",
    charset:
      "𝕬 𝕭 𝕮 𝕯 𝕰 𝕱 𝕲 𝕳 𝕴 𝕵 𝕶 𝕷 𝕸 𝕹 𝕺 𝕻 𝕼 𝕽 𝕾 𝕿 𝖀 𝖁 𝖂 𝖃 𝖄 𝖅 𝕬 𝕭 𝕮 𝕯 𝕰 𝕱 𝕲 𝕳 𝕴 𝕵 𝕶 𝕷 𝕸 𝕹 𝕺 𝕻 𝕼 𝕽 𝕾 𝕿 𝖀 𝖁 𝖂 𝖃 𝖄 𝖅 𝟎 𝟏 𝟐 𝟑 𝟒 𝟓 𝟔 𝟕 𝟖 𝟗",
  },
  {
    name: "Gothic",
    charset:
      "𝔄 𝔅 ℭ 𝔇 𝔈 𝔉 𝔊 ℌ ℑ 𝔍 𝔎 𝔏 𝔐 𝔑 𝔒 𝔓 𝔔 ℜ 𝔖 𝔗 𝔘 𝔙 𝔚 𝔛 𝔜 ℨ 𝔞 𝔟 𝔠 𝔡 𝔢 𝔣 𝔤 𝔥 𝔦 𝔧 𝔨 𝔩 𝔪 𝔫 𝔬 𝔭 𝔮 𝔯 𝔰 𝔱 𝔲 𝔳 𝔴 𝔵 𝔶 𝔷 0 1 2 3 4 5 6 7 8 9",
  },
  {
    name: "Monospace",
    charset:
      "𝙰 𝙱 𝙲 𝙳 𝙴 𝙵 𝙶 𝙷 𝙸 𝙹 𝙺 𝙻 𝙼 𝙽 𝙾 𝙿 𝚀 𝚁 𝚂 𝚃 𝚄 𝚅 𝚆 𝚇 𝚈 𝚉 𝚊 𝚋 𝚌 𝚍 𝚎 𝚏 𝚐 𝚑 𝚒 𝚓 𝚔 𝚕 𝚖 𝚗 𝚘 𝚙 𝚚 𝚛 𝚜 𝚝 𝚞 𝚟 𝚠 𝚡 𝚢 𝚣 𝟶 𝟷 𝟸 𝟹 𝟺 𝟻 𝟼 𝟽 𝟾 𝟿 𝟶",
  },
  {
    name: "Small",
    charset:
      "ᴀ ʙ ᴄ ᴅ ᴇ ꜰ ɢ ʜ ɪ ᴊ ᴋ ʟ ᴍ ɴ ᴏ ᴘ ǫ ʀ s ᴛ ᴜ ᴠ ᴡ x ʏ ᴢ ᴀ ʙ ᴄ ᴅ ᴇ ꜰ ɢ ʜ ɪ ᴊ ᴋ ʟ ᴍ ɴ ᴏ ᴘ ǫ ʀ s ᴛ ᴜ ᴠ ᴡ x ʏ ᴢ 0 1 2 3 4 5 6 7 8 9 0",
  },
];

function App() {
  const [text, setText] = useState("");

  return (
    <div className="w-screen min-h-screen bg-slate-200 flex justify-center items-center p-4">
      <div className="w-full max-w-[560px] rounded-xl p-4 ring-1 ring-white/10  bg-slate-50 shadow-lg space-y-3 border border-white">
        <div className="flex items-center justify-center gap-2 flex-col">
          <img src={icon} width="54" alt="" />
          <h1 className="text-3xl text-neutral-900">Textify</h1>
        </div>
        <p className="text-neutral-500 text-center">
          Converta seu texto para fontes estilizadas
        </p>
        <input
          type="text"
          placeholder="Digite Seu Texto"
          className="w-full border-2 border-slate-300 outline-slate-400 px-4 py-3 rounded-xl"
          onChange={(event) => {
            setText(event.target.value);
          }}
          value={text}
        />
        <ul className="h-[300px] space-y-3 overflow-y-scroll no-scrollbar">
          {fontset.map((font, index) => (
            <TextItem key={index} fontset={font} text={text} />
          ))}
        </ul>

        <div className="text-center text-slate-600">
          Criado por not2nder •{" "}
          <a
            href="https://github.com/not2nder/textify.git"
            className="text-slate-400 underline"
          >
            {" "}
            Código no Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
