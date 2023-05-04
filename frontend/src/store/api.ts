import { customAxios, djangoAxios } from "./customAxios";

interface DrawingQueryTypes {
  title: string;
  contents: string;
  img: string;
}

// 상세정보 api
export const getDetailApi = async (paintingId: string) => {
  try {
    const response = await customAxios.get(`paintings/detail/${paintingId}`);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
};

// 찜하기 api
export const fullBookmarkApi = async (paintingId: string) => {
  await customAxios.post(`wishlist/${paintingId}`);
};

// 찜하기 취소 api
export const emptyBookmarkApi = async (paintingId: string) => {
  await customAxios.delete(`wishlist/${paintingId}`);
};

// survey 결과 전송
export const surveySubmitApi = async (choosed: number[]) =>
  await djangoAxios.post("/recom/", {
    choosed: choosed,
  });

// 추천 결과 받아오기
export const getRecommendApi = async () =>
  await customAxios.get("recommends/recommends");

// 그림 저장 api
export const createDrawingApi = async ({
  title,
  contents,
  img,
}: DrawingQueryTypes) =>
  await customAxios.post("mypaintings/save", {
    title: title,
    description: contents,
    base64: img,
  });
