import { getRecommendApi } from "../../store/api";
import { useState, useEffect } from "react";
import { RecommendContainer, TitleContainer, TitleP, TitleHr } from "./styles";

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
    </RecommendContainer>
  );
};
export default RecommendationPage;
