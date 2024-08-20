import { useEffect, useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [dados, setDados] = useState();
  useEffect(() => {
    console.log('chamei o useEffect')

    const realizarRequest = async () => {
      try {
        const res = await axios('https://api.discogs.com/releases/9006205?&key=fDPuzDCZvRVudVyXTyMJ&secret=ncLniYJXSgMCoydevODixTIDrgULdzLM')
        console.log('axios res.data', res.data)
        setDados(res.data)
      } catch (erro) {
        console.log(erro)
      }
    }
    realizarRequest()
  }, [])

  if (!dados) {
    return <div>Fazendo o dowload...</div>
  }

  return <div>
    <a href={dados.uri}></a>
    {/* <div>{JSON.stringify(dados)}</div> */}
    <div>artista</div>
    <div>{dados.title}</div>
    <img src={dados.thumb}></img>
    <div>tag1</div>
    <div>tag2</div>
  </div >

}
export default App
