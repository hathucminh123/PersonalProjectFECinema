import httpClient from "../../httpClient/httpClient";
import { apiLinks } from "../MainService";

interface Movie {
  data: { [key: string]: string | undefined };
}

export const PostMovie = async ({ data }: Movie) => {
  try {
    const res = await httpClient.post({
      url: apiLinks.Movies.PostMovie,
      data: data,
    });
    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Post Movie request failed:", error.message);
    } else {
      console.error("Unexpected error", error);
    }
    throw error;
  }
};