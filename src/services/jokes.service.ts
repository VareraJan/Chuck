import { axiosApp } from "@/api/interceptor";
import { getSearchJokesURL } from "@/config/api.config";
import { IResponseSearchJokes } from "@/shared/types/types";

export const JokesService = {
  async searchJokes(string: string) {
    const { data } = await axiosApp.get<IResponseSearchJokes>(
      getSearchJokesURL(string)
    );

    return data;
  },
};
