import {
  BackgroundContainer,
  BackgroundImgStyle,
  LoginContainer,
  LoginTitleFontStyle,
  HrStyle,
  KakaoBtn,
} from "./styles";

const LoginPage = () => {
  return (
    <BackgroundContainer>
      <BackgroundImgStyle />
      <LoginContainer>
        <LoginTitleFontStyle>LOGIN</LoginTitleFontStyle>
        <HrStyle />
        <KakaoBtn />
      </LoginContainer>
    </BackgroundContainer>
  );
};
export default LoginPage;
