import React, { useState } from "react";
import Papel from "../IMAGEN/PAPEL.png";
import Tijera from "../IMAGEN/TIJERA.png";
import Piedra from "../IMAGEN/PIEDRA.png";
import Background from "../IMAGEN/background.jpg";
import { Game } from "../hooks/ejemplo3";

export function Ejemplo3() {
  // const estadoIncial = {
  //   card1: Background,
  //   card2: Background,
  //   fix: "imagen",
  // };

  // const [sessionData, setResult] = useState(estadoIncial);
  // const nombres = [Papel, Tijera, Piedra];

  // const UpdateSession = () => {
  //   setResult({
  //     card1: nombres[Math.floor(Math.random() * nombres.length)],
  //     card2: nombres[Math.floor(Math.random() * nombres.length)],
  //     fix: "fixed",
  //   });
  // };
  return (
    <div id="mainDiv">
      <section class="title">TITLE</section>
      <section class="articulosContainer">
        <article id="art"> <div class="img">
        </div>
        <div class="text">Todo esto es un articulo        </div></article>
        <article id="art">
        <div class="img">
        </div>
        <div class="text">Todo esto es un articulo
        </div>
        </article>
      </section>

      <section id="cardContainer">
        <article>CARD 1 </article>
        <article>CARD 2</article>
      </section>

      <section>footer</section>
    </div>
  );
}
