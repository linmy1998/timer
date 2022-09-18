/*
 * @Author: linmingyu
 * @Date: 2022-09-18 21:24:29
 * @LastEditors: linmingyu
 * @LastEditTime: 2022-09-18 21:25:20
 * @Description: file content
 */
import { request } from "../server/request";
export function getMeetingA() {
  return request({
    url: "/log"
  });
}