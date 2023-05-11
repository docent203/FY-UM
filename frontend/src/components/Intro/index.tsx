import { IntroDiv, TextDiv, LogoText, IntroText, MobileText } from "./styles";
const Intro = () => {
  return (
    <>
      <IntroDiv
        src={process.env.PUBLIC_URL + "/videos/intro.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />
      <TextDiv>
        <LogoText>FY:UM</LogoText>
        <br></br>
        <IntroText>Online Three-Dimensional Exhibition</IntroText>
      </TextDiv>
      <MobileText> &gt;&gt; &nbsp;Enter</MobileText>
    </>
  );
};
export default Intro;
