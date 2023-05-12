import styled from "styled-components";
import { white, black } from "../../styles/colors";
import StrikImg from "../../assets/images/ophelia.png";
export const NotFoundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${black};
`;

export const ContentContainer = styled.div`
  position: absolute;
  display: flex;
  top: 18%;
`;

export const Content = styled.p`
  margin-left: 5vw;
  font-size: 3.5vw;
  color: ${white};
  margin-bottom: 2%;
`;

export const ContentImg = styled.img.attrs({
  src: `${StrikImg}`,
})`
  width: 27vw;
  margin-left: 20vw;
`;
