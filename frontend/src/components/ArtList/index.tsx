import { ArtListContainer, ImageContainer, ImageStyle, Temp } from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useRef, EventHandler } from "react";
import { useHorizontalScroll } from "../utils/useSideScroll";
import { ListPageEnd } from "../List/styles";

const ArtList = () => {
  const navigate = useNavigate();
  const [artListData, setArtListData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const pageEnd: any = useRef();

  let currentUrl = window.location.pathname.split("/");
  const [prevPage, setPrevPage] = useState(0); //1로 하는게 맞는가?0으로 하는게 맞는가?

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

    const res: any = await axios.get(
      process.env.REACT_APP_API_BASE_URL +
        `/paintings/${artListUrl}/${currentUrl[3]}/?page=${page + 1}`,
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );
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
          threshold: 1,
        }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading]);
  const goDetail = (id: number) => {
    alert("이동하게 하기" + id);
    navigate(`/detail/${id}`);
  };
  const scrollRef = useHorizontalScroll();

  return (
    <ArtListContainer>
      <ImageContainer ref={scrollRef}>
        {artListData.map((item: any) => (
          <ImageStyle
            key={item.paintingId}
            onClick={() => goDetail(item.paintingId)}
          >
            {item.imgSrc ? (
              <img src={item.imgSrc} referrerPolicy="no-referrer"></img>
            ) : (
              <div></div>
            )}
          </ImageStyle>
        ))}
        <ListPageEnd ref={pageEnd}></ListPageEnd>
      </ImageContainer>
    </ArtListContainer>
  );
};
export default ArtList;
