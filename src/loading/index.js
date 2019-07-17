import {getContext} from '../utils';
import DiworkLoading from './diwork/loading';
import U8cLoading from './u8c/loading';



// let Loading;
// if(productLine=='u8c'){
//    Loading = require('./u8c/loading')
// }else{
//    Loading = require('./diwork/loading')
// }

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class LoadingInstance extends Component{
  constructor(props){
    super(props);
    //this.flag = false;//页面是否有loading的div
    this.productLine = '';
    if(Object.keys(getContext()).length ){
      this.productLine = getContext().productLine
    }else if(window.jDiwork){
      jDiwork.getContext(data => {
        this.productLine =  data.productLine
      })
    }else{
      this.productLine = "diwork";
    }
    // if(window.top.diworkContext){
    //   this.productLine = window.top.diworkContext().productLine
    // }else{
    //   this.productLine = "diwork";
    // }
  }
  create  = (options) =>{
     const div = document.createElement('div');
     div.id="_loadingModal"
     document.body.appendChild(div);
     if(this.productLine=='u8c'){
     const loading = ReactDOM.render(<U8cLoading {...options}/>, div);
     }else{
     const loading = ReactDOM.render(<DiworkLoading {...options}/>, div);
     }
   
  }
  destory = () =>{
    const div = document.getElementById('_loadingModal');
    if(!div) return false;
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  }

}

let _loading;
function createLoadingFunc(options){
  _loading = new LoadingInstance(options);
  _loading.create(options);
}
function destoryLoadingFunc(){
  _loading = new LoadingInstance();
  _loading.destory();
}

export {
  createLoadingFunc,
  destoryLoadingFunc
}