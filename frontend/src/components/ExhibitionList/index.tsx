import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

import { exhibitionListActions } from "../../store/exhibitionListSlice";
import { useHorizontalScroll } from "../utils/useSideScroll";
import Btn from "../common/Btn";
import Form from "../common/form";
import useModal from "../utils/useModal";

import {
  ImageContainer,
  ImageStyle,
  ImageTitleStyle,
} from "../../styles/listStyles";

import {
  FixedContainer,
  UploadBtn,
  GoExhibitionBtn,
  ArrowStyle,
} from "./styles";

const ExhibitionList = () => {
  const scrollRef = useHorizontalScroll(window.innerWidth > 768);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openModal } = useModal();
  const { data } = useSelector((state: RootState) => state.exhibitionList);

  useEffect(() => {
    dispatch(exhibitionListActions.getExhibitionListStart());
  }, []);

  // 상세 페이지로 이동
  const goDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  // 전시회 입장 페이지로 이동
  const goExhibition = () => {
    navigate("/exhibition");
  };

  // 사진 업로드 모달 열기
  const openUpload = () => {
    console.log("모달 열렸냐구");
    openModal({
      type: "upload",
      title: "작품 업로드하기",
      content: <Form type="exhibitionList" />,
    });
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
              <ImageTitleStyle>{item.title}</ImageTitleStyle>
            </ImageStyle>
          ))}
      </ImageContainer>
      <FixedContainer>
        <UploadBtn onClick={(openUpload)}>
          <Btn type="transparent" text="Upload" language="en" />
        </UploadBtn>
        <GoExhibitionBtn onClick={goExhibition}>
          Go Exhibition
          <ArrowStyle />
        </GoExhibitionBtn>
      </FixedContainer>
    </div>
  );
};

export default ExhibitionList;
