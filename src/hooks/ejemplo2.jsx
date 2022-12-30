// Ejemplo de HOOK useState(), useRef() y useEffect()

// useRef() sirve para crear elemnetos referenciados y despues utilizarlo

import React, { useEffect, useState, useRef } from "react";

export const Ejemplo2 = () => {
  const estado1 = 1;
  const estado2 = 1;

  const [contador1, setContador1] = useState(estado1);
  const [contador2, setContador2] = useState(estado2);

  function aumentarContador1() {
    setContador1(contador1 + 1);
  }

  function aumentarContador2() {
    setContador2(contador2 + 1);
  }

  const miRef = useRef();

// useEffect() cada vez que haya un cambio en la aplicacion se ejecuta la porcion
// de codigo que esta dentro. Si agregamos como tercer parametro una funcion, se 
// ejecutara el snippet de codigo solo cuando esta funcion e ejecute
// EJECUTA UN SNIPPET DE CODIGO
  useEffect(() => {
    console.log("useEffect()");
    console.log("useRef()");
    console.log(miRef);
  }, [contador1]);

  return (
    <div>
      <p>CONTADOR 1: {contador1} </p>
      <p>CONTADOR 2: {contador2}</p>

      <button onClick={aumentarContador1}>aumentarContador1</button>
      <button onClick={aumentarContador2}>aumentarContador2</button>

      <h4 ref={miRef}> MI ELEMENTO REFERENCIADO</h4>
    </div>
  );
};
