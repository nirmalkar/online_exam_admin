import axios from "axios";
import { URL, JWT_TOKEN } from "../constant/index";

export function postData(path, postData) {
  if (localStorage.getItem(JWT_TOKEN)) {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem(JWT_TOKEN),
      },
    };
    const url = `${URL}/${path}`;
    return axios.post(url, postData, config);
  } else {
    const url = `${URL}/${path}`;
    return axios.post(url, postData);
  }
}
