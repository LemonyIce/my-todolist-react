import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';

var data;
var storage = window.localStorage;
 let localdata =storage.getItem("data");
localdata = JSON.parse(localdata);//localdata
//  console.log(localdata);


let defdata = [
  {text: '天气不错哦!!!', complete: false ,id: 1},
  {text: '出去玩啊!!!', complete: true , id: 2},
 ]//default data



if(localdata){
  data = localdata
}else{
  data = defdata
}

//  console.log(data);
ReactDOM.render(
  <App data={data}/>,
  document.getElementById('root')
);
