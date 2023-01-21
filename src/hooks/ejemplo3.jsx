import React, { useState } from "react";
import Papel from "../IMAGEN/PAPEL.png";
import Tijera from "../IMAGEN/TIJERA.png";
import Piedra from "../IMAGEN/PIEDRA.png";
import Background from "../IMAGEN/background.jpg";

export function Ejemplo3() {
  const estadoIncial = {
    card1: Background,
    card2: Background,
    fix: "imagen",
  };

  const [sessionData, setResult] = useState(estadoIncial);
  const nombres = [Papel, Tijera, Piedra];

  const UpdateSession = () => {
    setResult({
      card1: nombres[Math.floor(Math.random() * nombres.length)],
      card2: nombres[Math.floor(Math.random() * nombres.length)],
      fix: "fixed",
    });
  };
  return (
    <div class="mainBlock">
      <div class="column">
        <div>
          <p id="jugador">JUGADOR 1</p>
          <p id="card1">
            <img id={sessionData.fix} src={sessionData.card1} alt="description of image"></img>
          </p>
        </div>
        <div>
          <p id="jugador">JUGADOR 2</p>
          <p id="card1">
            <img id={sessionData.fix} src={sessionData.card2} alt="description of image"></img>
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
