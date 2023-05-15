import { ArtListContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useHorizontalScroll } from "../utils/useSideScroll";
import { getArtListApi } from "../../store/api";
import { InvisibleBox } from "../../styles/listStyles";
import "react-lazy-load-image-component/src/effects/blur.css";

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
import { useDispatch, useSelector } from "react-redux";
import { sideBarActions } from "../../store/sideBarSlice";
import { RootState } from "../../store";

const ArtList = () => {
  const navigate = useNavigate();
  const [artListData, setArtListData] = useState([]);
  const [nameK, setNameK] = useState("");
  const [nameE, setNameE] = useState("");
  const [infoState, setInfoState] = useState("");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const pageEnd: any = useRef();
  const [onOff, setOnOff] = useState(true);
  const dispatch = useDispatch();

  let currentUrl = window.location.pathname.split("/");
  const [prevPage, setPrevPage] = useState(0);

  useEffect(() => {
    setArtListData([]);
  }, []);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const artListUrl = window.location.pathname.includes("painter")
    ? "painters"
    : window.location.pathname.includes("trend")
    ? "trends"
    : "themes";

  const getArtListDatas = async (page: number) => {
    const artListQuery = {};
    const accessToken = localStorage.getItem("token");
    const urlType = currentUrl[3];
    const res = await getArtListApi({ artListUrl, urlType, page });

    const data = await res.data;
    if (artListUrl === "painters") {
      setNameK(data.painterKr);
      setNameE(data.painterOrigin);
    } else {
      setNameK(data.trendKr);
      setNameE(data.trendOrigin);
    }
    setInfoState(data.description);

    if (data.content.length === 0) {
      if (page === 0) {
        setArtListData(data.content); // 검색결과가 없는 경우
      }
    } else {
      if (page > prevPage) {
        setArtListData((prev) => [...prev, ...data.content] as any);
        setPrevPage(page);
      } else {
        setArtListData(data.content);
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
    navigate(`/detail/${id}`);
  };

  const scrollRef = useHorizontalScroll(window.innerWidth > 768);

  const changeState = () => {
    setOnOff(!onOff);
    dispatch(sideBarActions.closeSideBar());
  };

  const { isOpen, nameKr, nameEn, info } = useSelector((state: RootState) => ({
    isOpen: state.sideBar.isOpen,
    nameKr: state.sideBar.nameKr,
    nameEn: state.sideBar.nameEn,
    info: state.sideBar.info,
  }));

  useEffect(() => {
    setOnOff(isOpen);
  }, []);

  useEffect(() => {
    if (nameK !== "")
      dispatch(
        sideBarActions.successSideBar([
          { nameKr: nameK, nameEn: nameE, info: infoState },
        ])
      );
  }, [[nameK, nameE, infoState]]);

  return (
    <>
      {artListUrl === "themes" ? (
        <></>
      ) : onOff === true ? (
        <SideBar onOff={onOff} setOnOff={setOnOff}></SideBar>
      ) : (
        <></>
      )}
      <ArtListContainer>
        <ImageContainer className="artlist" ref={scrollRef}>
          {artListData.map((item: any) => (
            <ImgtitleContainer key={item.paintingId} className="artlist">
              <ImageStyle
                className="artlist"
                onClick={() => goDetail(item.paintingId)}
              >
                <ImgSrcStyle
                  className="artlist"
                  src={item.imgSrc}
                  referrerPolicy="no-referrer"
                  effect="blur"
                />
              </ImageStyle>
              {item.titleOrigin === null ? (
                <ImageTitleStyle title={"artList"}>
                  {item.titleKr}
                </ImageTitleStyle>
              ) : (
                <ImageTitleStyle title={"artList"}>
                  {item.titleOrigin}
                </ImageTitleStyle>
              )}
            </ImgtitleContainer>
          ))}
          {artListData.length < 4 && <InvisibleBox />}
          <ListPageEnd ref={pageEnd}></ListPageEnd>
        </ImageContainer>
        {artListUrl === "themes" ? (
          <></>
        ) : (
          <DescriptionBtn onClick={changeState}>
            <DescriptionP info={true}>Info.</DescriptionP>
          </DescriptionBtn>
        )}
      </ArtListContainer>
    </>
  );
};
export default ArtList;
