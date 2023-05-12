import styled from "styled-components";
import { grey, white } from "../../styles/colors";

import leftImg from "../../assets/images/exhibitionLeftNoBackground.png";
import rightImg from "../../assets/images/exhibitionRightNoBackground.png";
import { ReactComponent as SearchIc } from "../../assets/icon/searchIc.svg";

export const ExhibitionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const MyGalleryContainer = styled.div`
  background-color: ${grey[800]};

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MyGalleryImgStyle = styled.img.attrs({
  src: `${leftImg}`,
})`
  height: 70%;
  width: 80%;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
`;

export const MyGalleryEnterStyle = styled.div``;

export const MyGalleryTextStyle = styled.div`
  position: absolute;
  color: ${white};
  bottom: 10%;
  right: 5%;
  font-weight: 700;
  font-size: 50px;
  cursor: pointer;

  &.code {
    bottom: 3%;
    font-size: 40px;
    cursor: auto;
  }
`;

export const OtherGalleryContainer = styled.div`
  background-color: ${grey[700]};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const OtherGalleryImgStyle = styled.img.attrs({
  src: `${rightImg}`,
})`
  height: 70%;
  width: 80%;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
`;

export const OtherGalleryEnterStyle = styled.label``;

export const OtherGalleryTextStyle = styled.div`
  position: absolute;
  color: ${white};
  bottom: 10%;
  left: 5%;
  font-weight: 700;
  font-size: 50px;
`;

export const OtherGallerySearchContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const SearchInputStyle = styled.input`
  position: absolute;
  bottom: 5%;
  left: 5%;
  border: 2px solid #959595;
  height: 3%;
  width: 50%;
  border-radius: 15px;
`;

export const SearchIcContainer = styled(SearchIc)`
  position: absolute;
  bottom: 5.6%;
  left: 51.5%;
  cursor: pointer;
`;
