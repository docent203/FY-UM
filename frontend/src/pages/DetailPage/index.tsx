import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  DetailContainer,
  BackgroundImg,
  ContentContainer,
  Title,
  Content,
  SpeakerImg,
  DescriptionBtn,
  DescriptionP,
  MarkContainer,
  EmptyFrameIcStyle,
  FullFrameIcStyle,
  EmptyBookMarkIcStyle,
  FullBookMarkIcStyle,
  FixedContainer,
} from "./styles";
import detailImg from "../../assets/dummyImg/starrynight.png";
import longImg from "../../assets/images/main2Img1.png";

interface detailInfo {
  paintingId: number;
  titleKr: string;
  titleOrigin: string;
  createdAt: string;
  imgSrc: string;
  painterId: number;
  painterKr: string;
  painterOrigin: string;
  trendId: number;
  trend: string;
  paintingType: string;
  technique: string;
  description: string;
  wishStatus: boolean;
  exhibitionStatus: boolean;
}

const DetailPage = () => {
  const navigate = useNavigate();

  const [description, setDescription] = useState(true);
  const [frame, setFrame] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [speak, setSpeak] = useState(false);

  // 받아온 데이터 저장
  const [data, setData] = useState<detailInfo>({
    paintingId: 0,
    titleKr: "",
    titleOrigin: "",
    createdAt: "",
    imgSrc: "",
    painterId: 0,
    painterKr: "",
    painterOrigin: "",
    trendId: 0,
    trend: "",
    paintingType: "",
    technique: "",
    description: "",
    wishStatus: false,
    exhibitionStatus: false,
  });

  const changeState = () => {
    setDescription(!description);
  };

  const changeFrame = () => {
    setFrame(!frame);
  };

  const changeBookmark = () => {
    setBookmark(!bookmark);
  };

  const baseURL = "http://192.168.100.93:1234";

  useEffect(() => {
    axios
      .get(baseURL + `/api/paintings/detail/7`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
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
          <SpeakerImg />
        </ContentContainer>
      ) : null}
      <FixedContainer>
        <DescriptionBtn onClick={changeState}>
          {description === true ? (
            <DescriptionP>Description On.</DescriptionP>
          ) : (
            <DescriptionP>Description Off.</DescriptionP>
          )}
        </DescriptionBtn>
        {description === true ? (
          <MarkContainer>
            {frame === false ? (
              <EmptyFrameIcStyle onClick={changeFrame} />
            ) : (
              <FullFrameIcStyle onClick={changeFrame} />
            )}
            {bookmark === false ? (
              <EmptyBookMarkIcStyle onClick={changeBookmark} />
            ) : (
              <FullBookMarkIcStyle onClick={changeBookmark} />
            )}
          </MarkContainer>
        ) : null}
      </FixedContainer>
    </DetailContainer>
  );
};
export default DetailPage;
