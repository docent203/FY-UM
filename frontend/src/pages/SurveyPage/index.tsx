import {
  BackgroundContainer,
  SurveyContainer,
  SurveyTitle,
  GridContainer,
  ArtworkImg,
} from "./styles";
import art_1 from "../../assets/images/survey/1.jpg";
import art_2 from "../../assets/images/survey/2.jpg";
import art_3 from "../../assets/images/survey/3.jpg";
import art_20 from "../../assets/images/survey/20.jpg";
import art_53 from "../../assets/images/survey/53.jpg";
import art_54 from "../../assets/images/survey/54.jpg";
import art_147 from "../../assets/images/survey/147.jpg";
import art_174 from "../../assets/images/survey/174.jpg";
import art_225 from "../../assets/images/survey/225.jpg";
import art_238 from "../../assets/images/survey/238.jpg";

const SurveyPage = () => {
  return (
    <BackgroundContainer>
      <SurveyContainer>
        <SurveyTitle>
          choose 2 artworks to find out your preferences
        </SurveyTitle>
        <GridContainer>
          <ArtworkImg src={art_1} />
          <ArtworkImg src={art_2} />
          <ArtworkImg src={art_3} />
          <ArtworkImg src={art_20} />
          <ArtworkImg src={art_53} />
          <ArtworkImg src={art_54} />
          <ArtworkImg src={art_147} />
          <ArtworkImg src={art_174} />
          <ArtworkImg src={art_225} />
          <ArtworkImg src={art_238} />
        </GridContainer>
      </SurveyContainer>
    </BackgroundContainer>
  );
};

export default SurveyPage;
