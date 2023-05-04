import { customAxios } from "./customAxios";

interface DrawingQueryTypes {
  title: string;
  contents: string;
  img: string;
}

interface ListQueryTypes {
  listUrl: string;
  page: number;
}

interface ArtListQueryTypes {
  artListUrl: string;
  urlType: string;
  page: number;
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

// list 페이지 api
export const getListApi = async ({ listUrl, page }: ListQueryTypes) =>
  await customAxios.get(`/paintings/${listUrl}/?page=${page + 1}`);

// artList 페이지 api
export const getArtListApi = async ({
  artListUrl,
  urlType,
  page,
}: ArtListQueryTypes) =>
  await customAxios.get(
    `/paintings/${artListUrl}/${urlType}/?page=${page + 1}`
  );
