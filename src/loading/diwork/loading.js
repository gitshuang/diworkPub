import React from 'react';
import Icon from '../../icon';
import { loading_modal, loading_body, loading_icon, loading_content, } from './style.css';

function Loading(props) {
  const { text } = props;
  return (
    <div className={loading_modal} >
      <div className={loading_body}>
        <div><Icon type="loading" size={'nosize'} className={loading_icon}></Icon></div>
        <div className={loading_content}>{text || '加载中...'}</div>
      </div>
    </div>
  )
}

export default Loading;
