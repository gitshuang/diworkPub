import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../icon';
import {
  loading_modal,
  loading_body, loading_icon, loading_content,
} from './style.css';

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
        <div className="ant-spin-text" >加载中...</div>
      </div>
    
    </div>
  )
}

export default Loading;
