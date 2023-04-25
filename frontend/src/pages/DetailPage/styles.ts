import styled from "styled-components";
import { black, white } from "../../styles/colors";
import { ReactComponent as LeftArrowIc } from "../../assets/icon/leftArrowIc.svg";

interface BackgroundImgProps {
  src: string;
  description: boolean; // description 프로퍼티 타입 정의
}

export const DetailContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${black};
  /* overflow-y: hidden; */
`;

export const BackgroundImg = styled.img<BackgroundImgProps>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  object-fit: fill;
  filter: brightness(
    ${(props) => (props.description === true ? "40%" : "100%")}
  );
`;

export const ContentContainer = styled.div`
  position: absolute;
  width: 60%;
  top: 5%;
  left: 15%;
`;

export const Title = styled.p`
  font-size: 5vw;
  color: ${white};
  margin-bottom: 5%;
`;

export const Content = styled.p`
  font-size: 1vw;
  color: ${white};
`;

export const GoBackBtn = styled.div`
  /* position: absolute; */
  display: flex;
  margin-top: 10%;

  &:hover {
    cursor: pointer;
  }
`;
export const LeftArrowIcStyle = styled(LeftArrowIc)`
  width: 4vw;
  /* height: 15px; */
  fill: ${white};
`;

export const GoBackBtnContent = styled.p`
  font-size: 1.5vw;
  color: ${white};
  padding-bottom: 0.2%;
`;

export const DescriptionBtn = styled.div`
  position: absolute;
  bottom: 0.5vw;
  left: 1.5vw;

  &:hover {
    cursor: pointer;
  }
`;

export const DescriptionP = styled.p`
  color: ${white};
  font-size: 1.5vw;
`;
