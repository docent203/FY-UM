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

  // 토큰 불러오기
  const accessToken = localStorage.getItem("token");

  const [description, setDescription] = useState(true);
  const [frame, setFrame] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  // const [speak, setSpeak] = useState(false);

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

  const baseURL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    axios
      .get(baseURL + `/api/paintings/detail/7`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const imgURL = data.imgSrc;
  console.log(data);
  console.log(imgURL);
  return (
    <DetailContainer>
      <BackgroundImg src={imgURL} description={description} />
      {description === true ? (
        <ContentContainer>
          <Title>{data.titleOrigin}</Title>
          <Content>{data.description}</Content>
          {/* <SpeakerImg /> */}
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
