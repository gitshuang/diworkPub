import React from 'react';
import { loading_modal, } from './style.css';

function Loading(props) {
  const { text } = props;
  return (
    <div className={loading_modal} >
      <div className="ant-spin ant-spin-lg ant-spin-spinning ant-spin-show-text portal-spin" >
        <span className="ant-spin-dot" >
          <i ></i>
          <i ></i>
          <i ></i>
          <i ></i>
        </span>
        <div className="ant-spin-text" >{text || '加载中...'}</div>
      </div>
    </div>
  )
}

export default Loading;
