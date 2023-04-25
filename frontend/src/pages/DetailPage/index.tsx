import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DetailContainer,
  BackgroundImg,
  ContentContainer,
  Title,
  Content,
  GoBackBtn,
  LeftArrowIcStyle,
  GoBackBtnContent,
  DescriptionBtn,
  DescriptionP,
} from "./styles";
import detailImg from "../../assets/dummyImg/starrynight.png";

const DetailPage = () => {
  const navigate = useNavigate();
  const moveToList = () => {
    navigate("/artlist");
  };

  const [description, setDescription] = useState(true);

  const changeState = () => {
    setDescription(!description);
  };
  console.log(description);
  return (
    <DetailContainer>
      <BackgroundImg src={detailImg} description={description} />
      {description === true ? (
        <ContentContainer>
          <Title>The Starry Night</Title>
          <Content>
            《별이 빛나는 밤》(영어: The Starry Night)은 네덜란드의 화가 빈센트
            반 고흐의 가장 널리 알려진 작품이자 정신병을 앓고 있을 당시 고흐가
            그린 그림이다. 1889년 생레미의 정신병원에서 고흐는 정신적 질환으로
            인한 고통을 떠올려 그림 속의 소용돌이로 묘사했다.
          </Content>
          <GoBackBtn onClick={moveToList}>
            <LeftArrowIcStyle />
            &nbsp;&nbsp;&nbsp;
            <GoBackBtnContent>Go Back</GoBackBtnContent>
          </GoBackBtn>
        </ContentContainer>
      ) : null}
      <DescriptionBtn onClick={changeState}>
        {description === true ? (
          <DescriptionP>Description On.</DescriptionP>
        ) : (
          <DescriptionP>Description Off.</DescriptionP>
        )}
      </DescriptionBtn>
    </DetailContainer>
  );
};
export default DetailPage;
