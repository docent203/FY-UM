import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

import { exhibitionListActions } from "../../store/exhibitionListSlice";
import { useHorizontalScroll } from "../utils/useSideScroll";

import {
  ImageContainer,
  ImageStyle,
  ImageTitleStyle,
} from "../../styles/listStyles";

const ExhibitionList = () => {
  const scrollRef = useHorizontalScroll();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state: RootState) => state.exhibitionList);

  useEffect(() => {
    dispatch(exhibitionListActions.getExhibitionListStart());
  }, []);

  const goDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  console.log("데이터는?", data);

  return (
    <div>
      <ImageContainer ref={scrollRef}>
        {data &&
          data.map((item: any) => (
            <ImageStyle key={item.id} onClick={() => goDetail(item.paintingId)}>
              {
                <img
                  src={item.imgSrc}
                  referrerPolicy="no-referrer"
                  alt="전시회 이미지"
                ></img>
              }
              <ImageTitleStyle>{item.titleOrigin}</ImageTitleStyle>
            </ImageStyle>
          ))}
      </ImageContainer>
    </div>
  );
};

export default ExhibitionList;
