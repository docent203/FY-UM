import { ArtListContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useHorizontalScroll } from "../utils/useSideScroll";
import { getArtListApi } from "../../store/api";

import {
  ImgtitleContainer,
  ImageContainer,
  ImageStyle,
  ImgSrcStyle,
  ImageTitleStyle,
  ListPageEnd,
} from "../../styles/listStyles";

import { DescriptionBtn, DescriptionP } from "../../pages/DetailPage/styles";

import SideBar from "./SideBar";

const ArtList = () => {
  const navigate = useNavigate();
  const [artListData, setArtListData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const pageEnd: any = useRef();
  const [info, setInfo] = useState(true);

  let currentUrl = window.location.pathname.split("/");
  const [prevPage, setPrevPage] = useState(0);

  useEffect(() => {
    setArtListData([]);
  }, []);
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const getArtListDatas = async (page: number) => {
    const artListQuery = {};
    const accessToken = localStorage.getItem("token");
    const artListUrl = window.location.pathname.includes("painter")
      ? "painters"
      : window.location.pathname.includes("art")
      ? "trends"
      : "themes";
    const urlType = currentUrl[3];
    const res = await getArtListApi({ artListUrl, urlType, page });

    console.log(res);
    const data = await res.data.content;
    if (data.length === 0) {
      if (page === 0) {
        setArtListData(data); // 검색결과가 없는 경우
      }
    } else {
      if (page > prevPage) {
        setArtListData((prev) => [...prev, ...data] as any);
        setPrevPage(page);
      } else {
        setArtListData(data);
      }
    }
    setLoading(true);
  };

  useEffect(() => {
    getArtListDatas(page);
  }, [page]);

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        {
          threshold: 0.01,
        }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  const goDetail = (id: number) => {
    alert("이동하게 하기" + id);
    navigate(`/detail/${id}`);
  };

  const scrollRef = useHorizontalScroll(window.innerWidth > 768);

  // window.onresize = () => {
  //   window.location.reload();
  // };

  const changeState = () => {
    setInfo(!info);
  };
  useEffect(() => {}, [info]);
  return (
    <ArtListContainer>
      <ImageContainer className="artlist" ref={scrollRef}>
        {/* <SideBar info={info} setInfo={setInfo}></SideBar> */}
        {artListData.map((item: any) => (
          <ImgtitleContainer className="artlist">
            <ImageStyle
              className="artlist"
              key={item.paintingId}
              onClick={() => goDetail(item.paintingId)}
            >
              <ImgSrcStyle
                className="artlist"
                src={item.imgSrc}
                referrerPolicy="no-referrer"
              />
            </ImageStyle>

            {item.titleOrigin === null ? (
              <ImageTitleStyle>{item.titleKr}</ImageTitleStyle>
            ) : (
              <ImageTitleStyle> {item.titleOrigin}</ImageTitleStyle>
            )}
            {/* <ImageTitleStyle> {item.titleKr}</ImageTitleStyle> */}
          </ImgtitleContainer>
        ))}
        <ListPageEnd ref={pageEnd}></ListPageEnd>
      </ImageContainer>
      <DescriptionBtn onClick={changeState}>
        <DescriptionP info={true}>Info.</DescriptionP>
      </DescriptionBtn>
    </ArtListContainer>
  );
};
export default ArtList;
