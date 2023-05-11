import styled from "styled-components";
import BackImg from "../../assets/images/artListBackground.png";
import { ReactComponent as CloseIc } from "../../assets/icon/closeIc.svg";
import { black, grey, white } from "../../styles/colors";

export const ArtListContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${BackImg});
  @media screen and (max-width: 768px) {
    position: absolute;
    top: -3%;
    height: 103%;
  }
`;

//-----------------------------------------------

export const SideBarDimmer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

export const SideBarContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 100vh;
  left: 0%;
  top: 0%;
  background: ${black};
  border-radius: 0px 15px 15px 0px;
  z-index: 9999999;

  @media (max-width: 768px) {
    width: 100vw;
    border-radius: 0px;
  }
`;

export const SideBarCloseIcStyle = styled(CloseIc)`
  position: absolute;
  right: 1%;
  pointer-events: auto;
  margin: 3%;
  height: 18px;
  width: 18px;
  top: 1%;
  fill: ${grey[300]};
  cursor: pointer;
  z-index: 999999999;
`;

export const SideBarContentContainer = styled.div`
  height: 90%;
  margin: 7%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //gap
  @media (max-width: 768px) {
    margin: 10% 7%;
  }
`;
export const SideBarNameStyle = styled.div``;

export const SideBarInfoStyle = styled.div``;

export const SideBarFontStyle = styled.div`
  color: ${white};
  font-weight: 700;
  /* margin: 0 7% 0 7%; */

  &.kr {
    margin-top: 40px;
    font-size: 40px;
    font-family: SUIT;
  }
  &.en {
    color: ${grey[200]};
    font-weight: 300;
    font-size: 24px;
    margin: 3% 0;
  }
  &.infoString {
    font-size: 35px;
    border-bottom: solid 2px ${grey[500]};
  }
  &.info {
    color: ${grey[100]};
    font-weight: 500;
    font-size: 15px;
    font-family: SUIT;
    overflow-y: auto;
    margin: 3% 0;
    height: 150px;
    padding-right: 10px;
    &::-webkit-scrollbar {
      width: 8px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
    }
  }
`;
