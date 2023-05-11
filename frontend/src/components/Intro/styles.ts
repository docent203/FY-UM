import styled, { keyframes } from "styled-components";
import IntroImg from "../../assets/images/introImg.png";
import { white } from "../../styles/colors";

// 서서히 나타나는 효과
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

//배경사진
export const IntroDiv = styled.video`
  height: 100vh;
  width: 100vw;
  object-fit: fill;
  position: absolute;
  z-index: -1;
  @media (max-width: 768px) {
    object-fit: cover;
  }
`;

//텍스트를 감싸는 div
export const TextDiv = styled.div`
  margin: 1rem;
  /* height: 100%; */
  width: 100%;
  position: fixed;
  bottom: 0px;
  animation: ${fadeIn} 1.5s ease-in; /* fade-in 애니메이션을 적용합니다. */

  @media (max-width: 768px) {
    top: 27%;
    text-align: center;
    left: -4%;
  }
`;
export const LogoText = styled.div`
  color: ${white};
  font-weight: 700;
  font-size: 8vw;
  margin-bottom: -3%;

  @media (max-width: 768px) {
    margin-bottom: 0%;

    text-align: center;
    font-size: 15.5vw;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-position: under;
  }
`;
export const IntroText = styled.div`
  color: ${white};
  font-weight: 700;
  font-size: 3.4vw;
  @media (max-width: 768px) {
    text-align: center;
    margin: -3%;
    font-size: 2vw;
  }
`;
export const MobileText = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
    color: ${white};
    position: absolute;
    text-align: center;
    top: 80%;
    left: 35%;
    font-size: 7vw;
  }
`;
