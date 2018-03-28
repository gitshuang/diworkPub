import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Loading from './loading';
class LoadingInstance extends Component{
  constructor(props){
    super(props);
    //this.flag = false;//页面是否有loading的div
  }
  create  = (options) =>{
     const div = document.createElement('div');
     div.id="_loadingModal"
     document.body.appendChild(div);
     const loading = ReactDOM.render(<Loading {...options}/>, div);
   
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