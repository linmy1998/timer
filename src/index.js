/*
 * @Author: linmingyu
 * @Date: 2022-08-19 12:01:46
 * @LastEditors: linmingyu
 * @LastEditTime: 2022-08-19 12:13:17
 * @Description: file content
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Timer from './Timer'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
