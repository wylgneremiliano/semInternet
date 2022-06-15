import styled, { keyframes } from "styled-components";

const CactusMove = keyframes`  
  from { right: -60px }
  to { right: 100% }
`;
const BackgroundMove = keyframes`  
  from { right: 0px }
  to { right: 100% }
`;

const BulletMove = keyframes`  
  from { left: 110px}
  to { left: 100% }
`;

const Jump = keyframes`  
  0% {
    bottom: 0;
  }
  40%{
    bottom: 120px;
  }
  50%{
    bottom: 120px;
  }

  80%{
    bottom: 80px;
  }

  100%{
    bottom: 0;
  }

`;
export const Container = styled.div`
  position: relative;
  width: 50%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
`;
export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  .tRex {
    position: absolute;
    bottom: 0;
    left: 30px;
  }
  .bala {
    position: absolute;
    bottom: 41px;
    transform: rotateY(180deg);
    display: none;
  }
  .explosao {
    position: absolute;
    left: 116px;
    bottom: 37px;
    display: none;
  }
  .onFire {
    display: block;
    animation: ${BulletMove} 200ms linear;
  }
  .onFireExplosion {
    display: block;
  }
  .jump {
    animation: ${Jump} 500ms ease-out;
  }
  .cactus {
    position: absolute;
    bottom: 5px;
    width: 60px;
    height: 60px;
    animation: ${CactusMove} 1.5s infinite linear;
  }
  .Background {
    position: absolute;
    width: 100%;
    height: 200px;
    /* animation: ${BackgroundMove} 20s infinite linear; */
  }
`;

export const Cactus = styled.img`
  position: absolute;
  bottom: 0;
`;
