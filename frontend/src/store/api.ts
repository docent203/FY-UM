import { customAxios } from "./customAxios";

export const getDetailApi = async (paintingId: string) =>
  await customAxios.get(`paintings/detail/${paintingId}`);
