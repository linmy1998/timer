/*
 * @Author: linmingyu
 * @Date: 2022-07-07 10:39:46
 * @LastEditors: linmingyu
 * @LastEditTime: 2022-08-19 18:03:45
 * @Description: file content
 */

// 将分钟转为时分秒
export const formatSeconds = (value) => {
  let secondstr = '00', minutestr = '00', hourstr = '00'
  let secondTime = parseInt(value);// 秒
  let minuteTime = 0;// 分
  let hourTime = 0;// 小时
  if (secondTime > 60) {//如果秒数大于60，将秒数转换成整数
    //获取分钟，除以60取整数，得到整数分钟
    minuteTime = parseInt(secondTime / 60);
    //获取秒数，秒数取余，得到整数秒数
    secondTime = parseInt(secondTime % 60);
    //如果分钟大于60，将分钟转换成小时
    if (minuteTime > 60) {
      //获取小时，获取分钟除以60，得到整数小时
      hourTime = parseInt(minuteTime / 60);
      //获取小时后取余的分，获取分钟除以60取余的分
      minuteTime = parseInt(minuteTime % 60);
    }
  }
  return {
    second: format(secondTime),
    minute: format(minuteTime),
    hour: format(hourTime)
  }
}

// 对转化和的时间进行格式化补0
export const format = (value) => {
  return value?.toString().length <= 1 ? `0${value.toString()}` : value?.toString()
}