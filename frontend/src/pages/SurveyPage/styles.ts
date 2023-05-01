import styled from "styled-components";
import { black, white } from "../../styles/colors";

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${black};
  position: relative;
`;

export const SurveyContainer = styled.div`
  position: absolute;
  top: 18vh;
  left: 5vw;
  width: 80vw;
  height: 70vh;
  background-color: ${black};
`;

export const SurveyTitle = styled.p`
  color: ${white};
  font-size: 2vw;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 150% 150%;
  gap: 2vw;
  width: 50%;
  height: 20%;
`;

export const ArtworkImg = styled.img`
  width: 16vw;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 2vh;
  filter: brightness(50%);

  &:hover {
    filter: brightness(100%);
  }
`;
