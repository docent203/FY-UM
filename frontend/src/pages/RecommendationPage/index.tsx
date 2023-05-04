import { getRecommendApi } from "../../store/api";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  RecommendContainer,
  TitleContainer,
  TitleP,
  TitleHr,
  SwiperSettings,
  SwiperTitle,
  SwiperDiv,
  SwiperImgDiv,
  SwiperImg,
} from "./styles";

interface detailInfo {
  paintingId: number;
  titleKr: string;
  titleOrigin: string;
  paintedAt: string;
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

const RecommendationPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRecomData = async () => {
      try {
        const res = await getRecommendApi();
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRecomData();
  }, []);

  console.log(data);

  return (
    <RecommendContainer>
      <TitleContainer>
        <TitleP>Recommend List</TitleP>
        <TitleHr />
      </TitleContainer>
      <Swiper {...SwiperSettings}>
        {data.map((data: detailInfo) => (
          <SwiperSlide key={data.paintingId}>
            <SwiperDiv>
              <SwiperImgDiv>
                <SwiperImg src={data.imgSrc} referrerPolicy="no-referrer" />
              </SwiperImgDiv>
              <SwiperTitle>{data.titleOrigin}</SwiperTitle>
            </SwiperDiv>
          </SwiperSlide>
        ))}
      </Swiper>
    </RecommendContainer>
  );
};
export default RecommendationPage;
