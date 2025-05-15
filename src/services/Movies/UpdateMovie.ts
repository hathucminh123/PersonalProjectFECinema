import httpClient from "../../httpClient/httpClient";
import { apiLinks } from "../MainService";

interface Movie {
  data: { [key: string]: string | number | number[]|undefined |null};
  id: number;
}

export const PutMovie = async ({ data, id }: Movie) => {
  try {
    const response = await httpClient.put({
      url: `${apiLinks.Movies.UpdateMovie}/${id}`,
      data: data,
      params: { id },
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Put Movie request failed:", error.message);
    } else {
      console.error("Unexpected error", error);
    }
    throw error;
  }
};