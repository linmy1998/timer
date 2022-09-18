/*
 * @Author: linmingyu
 * @Date: 2022-08-19 12:08:37
 * @LastEditors: linmingyu
 * @LastEditTime: 2022-09-18 21:27:16
 * @Description: file content
 */
import React, { Fragment, useState, useEffect } from "react";
import { Button } from 'antd';
import styles from './index.module.scss'
import Dialog from "./components/Dialog";
import { formatSeconds } from '../utils/utils'
import { getMeetingA } from './service'


export default function Timer(props) {

  const [isModalVisible, setModalVisible] = useState(false)//控制弹窗

  const [count, setCount] = useState(0)//总分钟数*60
  const [frequency, setFrequency] = useState(1)//频率

  const [timeData, setTimeData] = useState({//存放时分秒
    second: '00',
    minute: '00',
    hour: '00'
  })
  const [flag, setFlag] = useState(false)//控制继续/暂停
  const [timer, setTimer] = useState(null)//存放定时器，暂停时将定时器清楚

  useEffect(() => {

    init()
  
    setTimeData(formatSeconds(count))
    if (!flag || count == 0) {
      clearTimeout(timer)
    } else {
      timingOperation(parseInt(frequency))
    }
  }, [count, frequency, flag])

  const init=async()=>{
    const param=await getMeetingA()
    console.log(param);
  }

  // 开始/继续
  const start = () => {
    setFlag(true)
    timingOperation(parseInt(frequency))
  }

  // 暂停
  const stop = () => {
    setFlag(false)
  }

  // 打开配置弹窗
  const configure = () => {
    setModalVisible(true)
    setFlag(false)
  }

  // 关闭弹窗
  const onCancel = () => {
    setModalVisible(false)
  }

  // 经过配置表单，将表单的数据返回给父组件进行逻辑处理
  const handleSumbit = (value) => {
    let newFrequency = value?.frequency
    if (!newFrequency || newFrequency.length == 0) {
      newFrequency = 1
    }
    setCount(parseInt(value?.minute) * 60)
    setFrequency(parseInt(newFrequency))
    setFlag(false)
    onCancel()
  }

  // 通过useEffect对count进行监听
  const timingOperation = (delay) => {
    if (count == 0) return
    let timer = null
    let newdelay = count > 10 ? delay : 1
    timer = setTimeout(() => {
      console.log(count);
      setCount(count - newdelay)
    }, newdelay * 1000)
    setTimer(timer)
  }

  const getFile = (e) => {
    console.log(e);
  }

  // const click_btn=async()=>{
  //   const a=await window.showDirectoryPicker()
  //   console.log(a);
  // }

  // const click_btn=()=>{
  //   const {dialog}=require('electron')
  // }

  return (
    <Fragment>
      <div>
        <div className={styles.button_group}>
          <Button onClick={configure}>配置</Button>
          <Button onClick={start}>开始</Button>
          <Button onClick={stop}>暂停</Button>
        </div>
        {/* <div>
          <h1>倒计时器</h1>
          <input id='file' type="file" onChange={(e) => { getFile(e) }} webkitdirectory='true' />
          <button onClick={() => { click_btn() }}>点击</button>
        </div> */}
        <div className={styles.container}>
          <div>{timeData?.hour}</div>
          <div>{timeData?.minute}</div>
          <div >{timeData?.second}</div>
        </div>
      </div>
      <Dialog
        isModalVisible={isModalVisible}
        handleCancel={onCancel}
        handleSumbit={handleSumbit}
      />
    </Fragment>
  )
}