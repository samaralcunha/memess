import { useState } from 'react'
function App() {

  const [link, setLink] = useState("")
  const [title, setTitle] = useState("")


  async function image(){
    const response = await fetch('https://api.imgflip.com/get_memes')

    //tranforma em json
    const json = await response.json()

    //floor - num inteiro -sortear
    const randomnum = Math.floor(Math.random() * 99)

    const randommeme = json.data.memes[randomnum]

    setLink(randommeme.url)
    setTitle(randommeme.name)
  }

  return (
    <>
    <h1>{title} </h1>
      <img src={link} />
      <button onClick={image}>
        Trocar
    </button >
    </>
  )
}

export default App
