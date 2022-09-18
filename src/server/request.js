/*
 * @Author: linmingyu
 * @Date: 2022-09-18 21:23:35
 * @LastEditors: linmingyu
 * @LastEditTime: 2022-09-18 21:24:12
 * @Description: file content
 */
import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://127.0.0.1:8888"
    // timeout:'5000'
  });
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );
  return instance(config);
}