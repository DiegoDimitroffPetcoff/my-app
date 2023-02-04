import React from "react";
import Papel from "../IMAGEN/PAPEL.png";
import Tijera from "../IMAGEN/TIJERA.png";
import Piedra from "../IMAGEN/PIEDRA.png";
import Background from "../IMAGEN/background.jpg";

export function Cards() {
  return (
    <div class="mainDiv">
      <div class="card">
        <div class="face front">
          <img src={Piedra} alt="Papel"></img>
          <h3>Piedra</h3>
        </div>
        <div class="face back">
          <h3>Piedra</h3>
          <p>
            Con la Piedra puedes ganar a la tijera, pero perder contra el papel
          </p>
          {/* <div class="link">
            <a href="#">diatils..</a>
          </div> */}
        </div>
      </div>
      <div class="card">
        <div class="face front">
          <img src={Papel} alt="Papel"></img>
          <h3>Papel</h3>
        </div>
        <div class="face back">
          <h3>Papel</h3>
          <p>
            Con el Papel puedes ganar a la piedra, pero perder contra la tijera
          </p>
          {/* <div class="link">
            <a href="#">diatils..</a>
          </div> */}
        </div>
      </div>

      <div class="card">
        <div class="face front">
          <img src={Tijera} alt="Papel"></img>
          <h3>Tijera</h3>
        </div>

        <div class="face back">
          <h3>Tijera</h3>
          <p>
            Con la Tijera puedes ganar al papel, pero perder contra la piedra
          </p>
          {/* <div class="link">
            <a href="#">diatils..</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
