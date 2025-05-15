import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const baseUrl = "http://localhost:3001/api";

export const apiLinks = {
  Auth: {
    // Loginwithgoogle: `${baseUrl}/Auth/signin-google`,
    login: `${baseUrl}/user/sign-in`,
    register: `${baseUrl}/Auth/sign-up`,
  },

  Movies: {
    GetAll: `${baseUrl}/Movies/GetAll`,
    GetById: `${baseUrl}/Movies/GetDetail`,
    PostMovie: `${baseUrl}/Movies/create`,
    UpdateMovie: `${baseUrl}/Movies/update`,
    DeleteMovie: `${baseUrl}/Movies/delete`,
  },
};
