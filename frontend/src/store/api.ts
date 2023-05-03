import { customAxios } from "./customAxios";

export const getDetailApi = async (paintingId: string) =>
  await customAxios.get(`paintings/detail/${paintingId}`);

export const fullBookmarkApi = async (paintingId: string) => {
  await customAxios.post(`wishlist/${paintingId}`);
};

export const emptyBookmarkApi = async (paintingId: string) => {
  await customAxios.delete(`wishlist/${paintingId}`);
};
