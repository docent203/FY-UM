import axios from "axios";

const KakaoHandle = () => {
  let code = new URL(window.location.href).searchParams.get("code");
  const baseURL = process.env.REACT_APP_API_BASE_URL;

  axios
    .get(baseURL + `/api/members/oauth/token?code=${code}`)
    .then((res) => console.log("응답돌아옴 :", res))
    .catch((err) => console.log(err));
  return <div></div>;
};

export default KakaoHandle;
