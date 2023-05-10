import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { likedListApi } from "../../store/api";
import { useHorizontalScroll } from "../utils/useSideScroll";

import {
  ImageContainer,
  ImgtitleContainer,
  ImageStyle,
  ImgSrcStyle,
  ImageTitleStyle,
} from "../../styles/listStyles";

import { InvisibleBox } from "./styles";

const LikedList = () => {
  const scrollRef = useHorizontalScroll(window.innerWidth > 768);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getLikedData = async () => {
      try {
        const res = await likedListApi();
        setData(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getLikedData();
  }, []);

  console.log("데이터?", data)
  console.log("데이터 길이는?", data.length);

  const goDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <ImageContainer className="etc" ref={scrollRef}>
        {data &&
          data.map((item: any) => (
            <ImgtitleContainer className="artlist">
              <ImageStyle
                className="artlist"
                key={item.paintingId}
                onClick={() => goDetail(item.paintingId)}
              >
                {
                  <ImgSrcStyle
                    className="artlist"
                    src={item.imgSrc}
                    referrerPolicy="no-referrer"
                    alt="찜 이미지"
                  />
                }
              </ImageStyle>
              <ImageTitleStyle>{item.title}</ImageTitleStyle>
            </ImgtitleContainer>
          ))}
      </ImageContainer>
    </>
  );
};

export default LikedList;
