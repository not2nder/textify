import icon from "../../public/icon.svg";

function Header() {
  return (
    <>
      <div className="flex items-center justify-center gap-2 flex-col">
        <img src={icon} width="54" alt="" />
        <h1 className="text-3xl text-neutral-900 dark:text-teal-400">
          Textify
        </h1>
      </div>

      <p className="text-neutral-500 text-center dark:text-gray-400">
        Converta seu texto para fontes estilizadas
      </p>
    </>
  );
}

export default Header;
