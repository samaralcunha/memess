import { useState } from "react";
export default function App() {
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");

  async function image() {
    const response = await fetch("https://api.imgflip.com/get_memes");

    //tranforma em json
    const json = await response.json();

    //floor - num inteiro -sortear
    const randomnum = Math.floor(Math.random() * 99);

    const randommeme = json.data.memes[randomnum];

    setLink(randommeme.url);
    setTitle(randommeme.name);
  }

  return (
    <>
      <div className="grid grid-rows-[auto_80%_auto] justify-center gap-4 bg-[#48cae4] h-screen p-4">
        <h1 className=" text-4xl text-center">{title}</h1>
        <img className="rounded shadow-2xl h-full " src={link} />
        <button className="bg-[#0096c7] p-2 rounded text-xl" onClick={image}>
          Trocar
        </button>
      </div>
    </>
  );
}
