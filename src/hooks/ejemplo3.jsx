import React, { useState } from "react";
import Papel from "../IMAGEN/PAPEL.png";
import Tijera from "../IMAGEN/TIJERA.png";
import Piedra from "../IMAGEN/PIEDRA.png";

export function Ejemplo3() {
  const estadoIncial = {
    card1: "CARTA 1",
    card2: "CARTA 2",
  };

  const [sessionData, setResult] = useState(estadoIncial);

  const UpdateSession = () => {
    const nombres = [Papel, Tijera, Piedra];
    const aleatorio1 = nombres[Math.floor(Math.random() * nombres.length)];
    const aleatorio2 = nombres[Math.floor(Math.random() * nombres.length)];
    setResult({
      card1: aleatorio1,
      card2: aleatorio2,
    });
  };
  return (
    <div class="mainBlock">
      <div class="column">
        <div>
          <p id="jugador">jugador 1</p>
          <p id="card1">
            <img id="imagen" src={sessionData.card1}></img>
          </p>
        </div>
        <div>
          <p id="jugador">jugador 2</p>
          <p id="card1">
            <img id="imagen" src={sessionData.card2}></img>
          </p>
        </div>
      </div>
      <div class="column">
        <button id="buttonCambiarToken" onClick={UpdateSession}>
          JUGAR
        </button>
      </div>
    </div>
  );
}
