import { getRecommendApi } from "../../store/api";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  RecommendContainer,
  TitleContainer,
  TitleP,
  TitleHr,
  SwiperSettings,
  SwiperSlideContainer,
  SwiperDiv,
  SwiperImg,
} from "./styles";

interface itemInfo {
  paintingId: number;
  imgSrc: string;
}
const RecommendationPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRecomData = async () => {
      try {
        const res = await getRecommendApi();
        console.log(res);
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
        {data.map((item: itemInfo) => (
          <SwiperSlide key={item.paintingId}>
            <SwiperDiv>
              <SwiperImg src={item.imgSrc} referrerPolicy="no-referrer" />
            </SwiperDiv>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Swiper {...SwiperSettings}>
        {data.map((item: itemInfo) => (
          <SwiperSlide key={item.paintingId}>
            <SwiperDiv>
              <SwiperImgDiv>
                <SwiperImg src={item.imgSrc} referrerPolicy="no-referrer" />
              </SwiperImgDiv>
            </SwiperDiv>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </RecommendContainer>
  );
};
export default RecommendationPage;
