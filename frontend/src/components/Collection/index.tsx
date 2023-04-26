import {
  CollectionContainer,
  PainterContainer,
  ArtTrendContainer,
  ThemeContainer,
  ImageText,
  PainterText,
  ArtTrendText,
  ThemeText,
  PainterNoBackContainer,
  ArtTrendNoBackContainer,
  ThemeNoBackContainer,
} from "./styles";

const Collection = () => {
  return (
    <CollectionContainer>
      <PainterContainer>
        <PainterText>
          <ImageText>Painter.</ImageText>
        </PainterText>
        <PainterNoBackContainer></PainterNoBackContainer>
      </PainterContainer>
      <ArtTrendContainer>
        <ArtTrendNoBackContainer></ArtTrendNoBackContainer>
        <ArtTrendText>
          <ImageText>Art Trend.</ImageText>
        </ArtTrendText>
      </ArtTrendContainer>
      <ThemeContainer>
        <ThemeText>
          <ImageText>Theme.</ImageText>
        </ThemeText>
        <ThemeNoBackContainer></ThemeNoBackContainer>
      </ThemeContainer>
    </CollectionContainer>
  );
};
export default Collection;
