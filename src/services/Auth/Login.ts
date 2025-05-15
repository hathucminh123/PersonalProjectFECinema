import httpClient from "../../httpClient/httpClient";
import { apiLinks } from "../MainService";

interface Data {
  Data: { [key: string]: string|undefined };
}

export const LoginUser = async ({ Data }: Data) => {
  try {
    const response = await httpClient.post({
      url: apiLinks.Auth.login,
      data: Data,
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Login User request failed:", error.message);
    } else {
      console.error("Unexpected error", error);
    }
    throw error;
  }
};