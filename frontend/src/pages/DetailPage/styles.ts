import styled from "styled-components";
import { black, white } from "../../styles/colors";
import { ReactComponent as LeftArrowIc } from "../../assets/icon/leftArrowIc.svg";
import { ReactComponent as EmptyFrame } from "../../assets/icon/empty_frame.svg";
import { ReactComponent as EmptyBookmark } from "../../assets/icon/empty_bookmark.svg";
import { ReactComponent as FullFrame } from "../../assets/icon/full_frame.svg";
import { ReactComponent as FullBookmark } from "../../assets/icon/full_bookmark.svg";

interface BackgroundImgProps {
  src: string;
  description: boolean; // description 프로퍼티 타입 정의
}

export const DetailContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${black};
  overflow-x: hidden;
`;

export const BackgroundImg = styled.img<BackgroundImgProps>`
  width: 100vw;
  /* height: 100vh; */
  position: absolute;
  object-fit: fill;
  filter: brightness(
    ${(props) => (props.description === true ? "40%" : "100%")}
  );
`;

export const ContentContainer = styled.div`
  position: fixed;
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
  bottom: 1vw;
  left: 1.5vw;

  &:hover {
    cursor: pointer;
  }
`;

export const DescriptionP = styled.p`
  color: ${white};
  font-size: 1.5vw;
  font-weight: 700;
`;

export const MarkContainer = styled.div`
  position: absolute;
  bottom: 1.5vw;
  right: 3vw;
`;

export const EmptyFrameIcStyle = styled(EmptyFrame)`
  width: 2vw;
  fill: ${white};
  margin-right: 1vw;
`;

export const FullFrameIcStyle = styled(FullFrame)`
  width: 2vw;
  margin-right: 1vw;
`;
export const EmptyBookMarkIcStyle = styled(EmptyBookmark)`
  width: 1.5vw;
  fill: ${white};
`;

export const FullBookMarkIcStyle = styled(FullBookmark)`
  width: 1.5vw;
`;

export const FixedContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
