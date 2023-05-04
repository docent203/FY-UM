import { getRecommendApi } from "../../store/api";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RecommendContainer, TitleContainer, TitleP, TitleHr } from "./styles";

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
      <Swiper>
        {data.map((item: itemInfo) => (
          <SwiperSlide key={item.paintingId}>
            <div>
              <img src={item.imgSrc} referrerPolicy="no-referrer" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </RecommendContainer>
  );
};
export default RecommendationPage;
