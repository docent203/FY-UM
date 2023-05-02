import { customAxios } from "./customAxios";

interface DrawingQueryTypes {
  title: string;
  contents: string;
  img: string;
}

export const getDetailApi = async () =>
  await customAxios.get("paintings/detail/30");

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
