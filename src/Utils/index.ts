import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3013" });

export default api;

export const getShoes = (paramsStr: string) => {
  const url = paramsStr ? `/shoes${paramsStr}` : "/shoes";
  return api.get(url).then((res) => res.data);
};

export const getShoe = (id: string) => {
  return api.get(`/shoes/${id}`).then((res) => res.data);
};
