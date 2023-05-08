import styled from "styled-components";
import { black, white } from "../../styles/colors";
import { Swiper, SwiperSlide } from "swiper/react";

export const RecommendContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  background-color: ${black};
  overflow-x: hidden;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;
  width: 30vw;
`;

export const TitleP = styled.p`
  color: ${white};
  font-size: 2.5vw;
  font-family: "Kim jung chul Myungjo";
  font-weight: 700;
  margin: 0;
`;

export const TitleHr = styled.hr`
  width: 70%;
  margin-top: 0;
`;

export const SwiperSettings = {
  spaceBetween: 15,
  scrollbar: {
    draggable: true,
  },
  // loop: true,
  slidesPerView: 4,
};

export const SwiperSlideContainer = styled(SwiperSlide)`
  flex: 0 0 auto;
`;

export const SwiperDiv = styled.div`
  width: 20vw;
  height: 75vh;
`;

export const SwiperImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  filter: drop-shadow(5px 3px 3px #424242);
`;
