import './App.css'
import Card from "./components/Card"
import Carderror from "./components/Carderror"
import {useState} from "react"

function App() {
const [nombre, setNombre] = useState('')
const [animal, setAnimal] = useState('')
const [color, setColor] = useState('')

const onChangeNombre = (e) => setNombre(e.target.value); 
const onChangeAnimal = (e) => setAnimal(e.target.value); 
const onChangeColor = (e) => setColor(e.target.value); 

const infoPersona= {}

let seMuestra = false;

const handlerSubmit = (e) => {
  e.preventDefault();

  
  infoPersona["nombre"]= {nombre}
  infoPersona["animal"]= {animal}
  infoPersona["color"]= {color}



const validar = () => {

  const trimmed = nombre.trim();
  if (trimmed !== nombre && nombre.length > 2 ){
    if(animal.length > 5){
      if(color.length == 7){
        seMuestra = true;
      }
    }
  }
}
validar();

  
console.log(infoPersona);
}

  return (
    
    <div className="App">

      <h1>¡Hola! Contános sobre vos</h1>
      <form onSubmit={handlerSubmit}>  
      <input type="text" value={nombre} onChange={onChangeNombre}  placeholder='Ingresá tu nombre'/>
      <input type="text" value={animal} onChange={onChangeAnimal} placeholder='Ingresá tu animal favorito'/>
      <input type="text" value={color} onChange={onChangeColor} placeholder='Ingresá tu color favorito'/>
      <button type='submit'>Enviar</button>

      </form>
      {seMuestra ? <Card mostrar={infoPersona}/> : <Carderror/> }
      
    </div>
  )
}

export default App
