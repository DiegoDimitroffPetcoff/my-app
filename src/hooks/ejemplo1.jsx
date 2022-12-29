// Ejemplo de HOOK useState

// Crear un componente de tipo FUNCIONAL, acceder y poder modificar su estado privado a traves de este hooks

import React, {useState} from 'react'

export const Ejemplo1 = () => {
// El valor inicial puede ser tanto un valor primitivo (un numero) como un objeto literal
  const valorInicial = 0
  const personaInicial = {nombre: "Diego", apellido: "Dimitroff"}


// El valor inicial y persona inicial serian parte del ESTADO privado del componente para poder gestionar su cambio
// y que este sea reflejado en el componente
// const [nombreDeLaVariable, Funcion] = useState(ValorInicial)

const [contador, setContador] = useState(valorInicial);
const [persona, setPersona] = useState(personaInicial)


function aumentarValorInicial() {
  // funcion para actualizar el ESTADO PRIVADO del contador/valor inicial
  setContador(contador + 1)
}

function actualizarValorInicial() {
  // Funcion para actualizar el ESTADO PRIVADO de la persona inicial
  setPersona({nombre: "Leonardo", apellido: "Petcoff"})
}

  return (
    <div>
    Ejemplo1<h6> useState()</h6>
    <h2>Contador:{contador}</h2>
    <h2>Datos de la Persona: {persona.nombre} {persona.apellido}</h2>
    {/* Blocke de botones para actualizar los estados */}
    <button onClick={ aumentarValorInicial }>Incrementar el Contador</button>
    <button onClick={ actualizarValorInicial }>Incrementar el Contador</button>
    </div>
  )
}
