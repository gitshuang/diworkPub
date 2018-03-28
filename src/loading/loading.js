import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import{loading_modal,loading_body,loading_icon,loading_content} from './style.css';

function Loading(){
    return (
      <div className={loading_modal} >
              <div className={loading_body}>
                  <div><Icon type="loading"  className={loading_icon}></Icon></div>
                  <div className={loading_content}>加载中...</div>
              </div>
      </div>
  )
}

export default Loading;