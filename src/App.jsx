import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useEffect(()=>{
console.log('chamei o useEffect')
  },[])
return <div>
<span>imagem</span>
<div>titulo</div>
<div>artista</div>
<div>
  <div>tag1</div>
  <div>tag2</div>
</div>
  </div>
     
}
export default App
