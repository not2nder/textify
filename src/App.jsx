import { useState, useEffect } from "react";
import TextItem from "./components/TextItem";
import icon from "../public/icon.svg";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const fontset = [
  {
    type: "Computador",
    fonts: [
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
      {
        name: "Negrito",
        charset:
          "𝗔 𝗕 𝗖 𝗗 𝗘 𝗙 𝗚 𝗛 𝗜 𝗝 𝗞 𝗟 𝗠 𝗡 𝗢 𝗣 𝗤 𝗥 𝗦 𝗧 𝗨 𝗩 𝗪 𝗫 𝗬 𝗭 𝗮 𝗯 𝗰 𝗱 𝗲 𝗳 𝗴 𝗵 𝗶 𝗷 𝗸 𝗹 𝗺 𝗻 𝗼 𝗽 𝗾 𝗿 𝘀 𝘁 𝘂 𝘃 𝘄 𝘅 𝘆 𝘇 𝟬 𝟭 𝟮 𝟯 𝟰 𝟱 𝟲 𝟳 𝟴 𝟵 𝟬",
      },
      {
        name: "Itálico",
        charset:
          "𝘈 𝘉 𝘊 𝘋 𝘌 𝘍 𝘎 𝘏 𝘐 𝘑 𝘒 𝘓 𝘔 𝘕 𝘖 𝘗 𝘘 𝘙 𝘚 𝘛 𝘜 𝘝 𝘞 𝘟 𝘠 𝘡 𝘢 𝘣 𝘤 𝘥 𝘦 𝘧 𝘨 𝘩 𝘪 𝘫 𝘬 𝘭 𝘮 𝘯 𝘰 𝘱 𝘲 𝘳 𝘴 𝘵 𝘶 𝘷 𝘸 𝘹 𝘺 𝘻 0 1 2 3 4 5 6 7 8 9 0",
      },
      {
        name: "Serif",
        charset:
          "𝐴 𝐵 𝐶 𝐷 𝐸 𝐹 𝐺 𝐻 𝐼 𝐽 𝐾 𝐿 𝑀 𝑁 𝑂 𝑃 𝑄 𝑅 𝑆 𝑇 𝑈 𝑉 𝑊 𝑋 𝑌 𝑍 𝑎 𝑏 𝑐 𝑑 𝑒 𝑓 𝑔 ℎ 𝑖 𝑗 𝑘 𝑙 𝑚 𝑛 𝑜 𝑝 𝑞 𝑟 𝑠 𝑡 𝑢 𝑣 𝑤 𝑥 𝑦 𝑧 0 1 2 3 4 5 6 7 8 9",
      },
    ],
  },
  {
    type: "Medieval",
    fonts: [
      {
        name: "Cursive",
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
    ],
  },
  {
    type: "Hacker",
    fonts: [
      {
        name: "W1r3d",
        charset:
          "4 B C D 3 F 9 H 1 J K L M N 0 P Q R 5 T U V W X Y Z 4 b c d 3 f g h 1 j k 1 m n 0 p q r 5 t u v w x y z 0 1 2 3 4 5 6 7 8 9 0",
      },
      {
        name: "Rabiscado",
        charset:
          "A̷ ̷B̷ ̷C̷ ̷D̷ ̷E̷ ̷F̷ ̷G̷ ̷H̷ ̷I̷ ̷J̷ ̷K̷ ̷L̷ ̷M̷ ̷N̷ ̷O̷ ̷P̷ ̷Q̷ ̷R̷ ̷S̷ ̷T̷ ̷U̷ ̷V̷ ̷W̷ ̷X̷ ̷Y̷ ̷Z̷ ̷a̷ ̷b̷ ̷c̷ ̷d̷ ̷e̷ ̷f̷ ̷g̷ ̷h̷ ̷i̷ ̷j̷ ̷k̷ ̷l̷ ̷m̷ ̷n̷ ̷o̷ ̷p̷ ̷q̷ ̷r̷ ̷s̷ ̷t̷ ̷u̷ ̷v̷ ̷w̷ ̷x̷ ̷y̷ ̷z̷ ̷0̷ ̷1̷ ̷2̷ ̷3̷ ̷4̷ ̷5̷ ̷6̷ ̷7̷ ̷8̷ ̷9̷",
      },
      {
        name: "Vírus",
        charset:
          "A҉ ҉B҉ ҉C҉ ҉D҉ ҉E҉ ҉F҉ ҉G҉ ҉H҉ ҉I҉ ҉J҉ ҉K҉ ҉L҉ ҉M҉ ҉N҉ ҉O҉ ҉P҉ ҉Q҉ ҉R҉ ҉S҉ ҉T҉ ҉U҉ ҉V҉ ҉W҉ ҉X҉ ҉Y҉ ҉Z҉ ҉a҉ ҉b҉ ҉c҉ ҉d҉ ҉e҉ ҉f҉ ҉g҉ ҉h҉ ҉i҉ ҉j҉ ҉k҉ ҉l҉ ҉m҉ ҉n҉ ҉o҉ ҉p҉ ҉q҉ ҉r҉ ҉s҉ ҉t҉ ҉u҉ ҉v҉ ҉w҉ ҉x҉ ҉y҉ ҉z҉ ҉0҉ ҉1҉ ҉2҉ ҉3҉ ҉4҉ ҉5҉ ҉6҉ ҉7҉ ҉8҉ ҉9҉",
      },
      {
        name: "???",
        charset:
          "A҉ B҉ C҉ D҉ E҉ F҉ G҉ H҉ I҉ J҉ K҉ L҉ M҉ N҉ O҉ P҉ Q҉ R҉ S҉ T҉ U҉ V҉ W҉ X҉ Y҉ Z҉ a҉ b҉ c҉ d҉ e҉ f҉ g҉ h҉ i҉ j҉ k҉ l҉ m҉ n҉ o҉ p҉ q҉ r҉ s҉ t҉ u҉ v҉ w҉ x҉ y҉ z҉ 0҉ 1҉ 2҉ 3҉ 4҉ 5҉ 6҉ 7҉ 8҉ 9҉ 0҉",
      },
    ],
  },
];

function App() {
  const [text, setText] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    document.documentElement.className = darkTheme ? "dark" : "";
  }, [darkTheme]);

  return (
    <div className="w-screen min-h-screen flex justify-center items-center p-4 bg-slate-200 dark:bg-[#021117]">
      <div
        className="w-full max-w-[560px] relative rounded-xl p-4 space-y-4
        bg-white dark:bg-[#0E1E25]
        shadow-lg dark:shadow-black/30
        ring-1 ring-black/5 dark:ring-white/5"
      >
        <div className="absolute right-5 top-5">
          <div className="bg-zinc-100 dark:bg-[#16262C] p-1 rounded-xl flex gap-2 border dark:border-slate-700">
            <button
              className="p-2 rounded-lg text-black dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              onClick={() => setDarkTheme(!darkTheme)}
            >
              {darkTheme ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 flex-col">
          <img src={icon} width="54" alt="" />
          <h1 className="text-3xl text-neutral-900 dark:text-teal-400">
            Textify
          </h1>
        </div>

        <p className="text-neutral-500 text-center dark:text-gray-400">
          Converta seu texto para fontes estilizadas
        </p>

        <input
          type="text"
          placeholder="Digite Seu Texto"
          className="w-full px-4 py-3 rounded-xl border border-slate-300
          bg-white
          focus:outline-none focus:ring-2 focus:ring-teal-500

          dark:bg-[#16262C]
          dark:border-[#1F2E34]
          dark:text-white 
          dark:placeholder:text-gray-400"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />

        <div className="flex flex-wrap border-b gap-2 dark:border-gray-600">
          {fontset.map((font, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 font-semibold rounded-t ${
                activeTab === index
                  ? "border-b-2 border-teal-500 text-teal-500 bg-slate-200/60 dark:bg-slate-700/40"
                  : "text-gray-500 hover:text-teal-500 hover:bg-slate-200 dark:hover:bg-slate-700/50"
              }`}
              onClick={() => setActiveTab(index)}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
            >
              {font.type}
            </motion.button>
          ))}
        </div>

        <ul className="h-[300px] space-y-3 overflow-y-scroll no-scrollbar">
          {fontset[activeTab].fonts.map((font, i) => (
            <motion.li
              key={font.name}
              className="flex rounded-md cursor-pointer border
              bg-slate-200 border-slate-300 hover:bg-slate-300 hover:shadow-md

              dark:bg-[#16262C] dark:border-[#1F2E34] 
              dark:hover:bg-slate-700/60 dark:shadow-none"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <TextItem fontset={font} text={text} />
            </motion.li>
          ))}
        </ul>

        <div className="text-center text-slate-600 dark:text-gray-400 text-sm">
          Criado por not2nder •{" "}
          <a
            href="https://github.com/not2nder/textify.git"
            className="text-slate-500 underline dark:text-gray-500"
          >
            Código no Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
