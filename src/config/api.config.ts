export const APP_URL = `${process.env.APP_URL}/api`;

export const getSearchJokesURL = (searchTerm: string) =>
  `/search?query=${searchTerm}`;
