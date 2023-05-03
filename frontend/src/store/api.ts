import { customAxios } from "./customAxios";

interface DrawingQueryTypes {
  title: string;
  contents: string;
  img: string;
}

// 상세정보 api
export const getDetailApi = async (paintingId: string) =>
  await customAxios.get(`paintings/detail/${paintingId}`);

// 찜하기 api
export const fullBookmarkApi = async (paintingId: string) => {
  await customAxios.post(`wishlist/${paintingId}`);
};

// 찜하기 취소 api
export const emptyBookmarkApi = async (paintingId: string) => {
  await customAxios.delete(`wishlist/${paintingId}`);
};
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
