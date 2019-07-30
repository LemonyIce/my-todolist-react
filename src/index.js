import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


let data = [
  {text: '天气不错哦!!!', complete: false},
  {text: '出去玩啊!!!', complete: true},
 ]
ReactDOM.render(
  <App data={data}/>,
  document.getElementById('root')
);
