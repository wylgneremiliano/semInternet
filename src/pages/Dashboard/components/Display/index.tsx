import React from "react";
import { Background, Cactus, Container } from "./styles";
import tRex from "../../../../assets/ak47.gif";
import cactusImg from "../../../../assets/cactus.png";
import bala from "../../../../assets/bala.png";
import explosion from "../../../../assets/explosion.png";
import backgroundImg from "../../../../assets/background.png";

const Display: React.FC = () => {
  const addJump = (event) => {
    const tRex = document.getElementsByClassName("tRex")[0];
    if (event.key === "ArrowUp") {
      tRex.classList.add("jump");
      setTimeout(() => {
        tRex.classList.remove("jump");
      }, 500);
    }
  };

  const fire = () => {
    const bala = document.getElementsByClassName("bala")[0];
    const explosao = document.getElementsByClassName("explosao")[0];
    bala.classList.add("onFire");
    explosao.classList.add("onFireExplosion");
    setTimeout(() => {
      bala.classList.remove("onFire");
    }, 200);
    setTimeout(() => {
      explosao.classList.remove("onFireExplosion");
    }, 100);
  };

  document.addEventListener("keydown", (event) => addJump(event));
  document.addEventListener("click", fire);

  return (
    <Container>
      <Background>
        <Cactus />
        <img src={backgroundImg} className="Background" />
        <img src={backgroundImg} className="Background" />
        <img src={backgroundImg} className="Background" />
        <img src={backgroundImg} className="Background" />

        <img
          src={tRex}
          alt="tRex"
          style={{ maxHeight: 100, maxWidth: 100 }}
          className="tRex"
        />
        <img
          src={bala}
          alt="bala"
          style={{ maxHeight: 15, maxWidth: 15 }}
          className="bala"
        />
        <img
          src={explosion}
          alt="explosao"
          style={{ maxHeight: 15, maxWidth: 15 }}
          className="explosao"
        />
        <img src={cactusImg} alt="cactus" className="cactus" />
      </Background>
    </Container>
  );
};

export { Display };
