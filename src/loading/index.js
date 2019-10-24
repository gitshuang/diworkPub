import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import U8cLoading from './u8c/loading';
// import { getContext } from '../utils';
// import DiworkLoading from './diwork/loading';
class LoadingInstance extends Component {
  constructor(props) {
    super(props);
  }
  create = (options) => {
    const div = document.createElement('div');
    div.id = "_loadingModal"
    document.body.appendChild(div);
    const loading = ReactDOM.render(<U8cLoading {...options} />, div);
    // if (options.productLine == 'u8c') {
    //   const loading = ReactDOM.render(<U8cLoading {...options} />, div);
    // } else {
    //   const loading = ReactDOM.render(<DiworkLoading {...options} />, div);
    // }

  }
  destory = () => {
    const div = document.getElementById('_loadingModal');
    if (!div) return false;
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  }

}

let _loading;
function createLoadingFunc(options) {
  let productLine = 'u8c';
  // if(Object.keys(getContext()).length ){
  //   productLine = getContext().productLine;
  //   _loading = new LoadingInstance({...options,productLine});
  //   _loading.create({...options,productLine});

  // }else if(window.jDiwork){
  //   jDiwork.getContext(data => {
  //     productLine =  data.productLine;
  //     _loading = new LoadingInstance({...options,productLine});
  //     _loading.create({...options,productLine});
  //   })

  // }else{
  //   productLine = "diwork";
  //   _loading = new LoadingInstance({...options,productLine});
  //   _loading.create(options);
  // }

  _loading = new LoadingInstance({ ...options, productLine });
  _loading.create({ ...options, productLine });


}
function destoryLoadingFunc() {
  _loading = new LoadingInstance();
  _loading.destory();
}

export {
  createLoadingFunc,
  destoryLoadingFunc
}