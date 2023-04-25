import { useNavigate } from "react-router-dom";

import {
  BackgroundStyle,
  MainGridContainer,
  MainGridItems,
  MainGridFontItem,
  RightArrowIcStyle,
} from "../styles";
import { Main2Img1Style, Main2Img2Style, FontStyle } from "./styles";

import main2Img1 from "../../../assets/images/main3Img1.png";
import main2Img2 from "../../../assets/images/main3Img2.png";

const FourthMain = () => {
  const navigate = useNavigate();

  const handleClickView = () => {
    navigate("/exhibition");
  };

  return (
    <BackgroundStyle>
      <MainGridContainer>
        <MainGridFontItem>
          <FontStyle className="exp">
            Appreciating masterpieces <br /> by painter/trend/theme
          </FontStyle>
        </MainGridFontItem>
        <MainGridItems>
          <FontStyle className="view" onClick={handleClickView}>
            view
            <RightArrowIcStyle />
          </FontStyle>
          <Main2Img1Style src={main2Img1} />
          <FontStyle className="title">Collection.</FontStyle>
          <Main2Img2Style src={main2Img2} />
        </MainGridItems>
      </MainGridContainer>
    </BackgroundStyle>
  );
};

export default FourthMain;
