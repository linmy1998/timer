/*
 * @Author: linmingyu
 * @Date: 2022-08-19 12:01:46
 * @LastEditors: linmingyu
 * @LastEditTime: 2022-08-19 14:27:53
 * @Description: file content
 */
import { render, screen } from '@testing-library/react';
import App from './App';
@import 'antd/dist/antd.css';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
