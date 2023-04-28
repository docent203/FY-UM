import styled from "styled-components";
import { black, white } from "../../styles/colors";

export const BackgroundContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${black};

  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

export const GridItems = styled.div`
  height: 100%;
  grid-column: 2 / span 8;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  color: white;
  font-weight: 700;
  font-size: 54px;
  line-height: 83px;
`;

export const Underline = styled.div`
  border: 1.5px solid ${white};
  width: 18vw;
  margin-top: -12px;
`;
