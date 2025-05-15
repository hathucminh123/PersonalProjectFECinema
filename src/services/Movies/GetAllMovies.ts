import httpClient from "../../httpClient/httpClient";
import { apiLinks } from "../MainService";

interface Movie {
  _id: string;
  title: string;
  description: string;
  duration: number;
  director: string;
  actors: string[];
  releaseDate: string;
  endDate: string;
  trailerUrl: string;
  posterUrl: string;
  createdAt: string;
}

interface Signal {
  signal: AbortSignal;
}

export const GetMoviesService = async ({ signal }: Signal): Promise<{ movies: Movie[] }> => {
  try {
    const response = await httpClient.get({
      url: apiLinks.Movies.GetAll,
      signal,
    });

    return {
      movies: response.data.data as Movie[],
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Movie request failed:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
