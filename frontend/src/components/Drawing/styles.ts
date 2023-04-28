import styled from "styled-components";

import woodImg from "../../assets/images/wood.png";

export const WoodContainer = styled.div`
  width: 800px;
  height: 500px;
  position: relative;
  border-radius: 20px;
  background-image: url(${woodImg});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 3px 15px inset rgba(0, 0, 0, 0.7);

  @media screen and (max-width: 768px) {
    width: 450px;
  }

  @media screen and (max-width: 500px) {
    width: 380px;
  }
`;

export const CanvasContainer = styled.div`
  width: 768px;
  height: 400px;

  background-color: white;
  border-radius: 10px;
  z-index: 2;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -58%);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.7);

  @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    width: 350px;
  }
`;
