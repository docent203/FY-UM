import {
  NotFoundContainer,
  ContentContainer,
  ContentImg,
  Content,
} from "./styles";

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <ContentContainer>
        <ContentImg />
        <Content>
          Sorry, <br /> page <br /> not found
        </Content>
      </ContentContainer>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
