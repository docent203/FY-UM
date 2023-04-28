import {
  BackgroundContainer,
  GridItems,
  TitleContainer,
  Underline,
  CanvasBtnContainer,
  BtnContainer,
} from "./styles";

import DrawingApp from "../../components/Drawing";
import Btn from "../../components/common/Btn";

const DrawingPage = () => {
  return (
    <>
      <BackgroundContainer>
        <TitleContainer>
          Drawing
          <Underline />
        </TitleContainer>
        <CanvasBtnContainer>
          <DrawingApp />
          <BtnContainer>
            <Btn
              type="square"
              text="내 기기에 저장"
              language="en"
              widthM={250}
            />
            <Btn
              type="square"
              text="My Drawings에 저장"
              language="en"
              widthM={250}
            />
          </BtnContainer>
        </CanvasBtnContainer>
      </BackgroundContainer>
    </>
  );
};
export default DrawingPage;
