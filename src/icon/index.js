import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sizes from './index.css';
import types from './style.css';//icomonn字体库
import fonts from './font/iconfont.css';// iconfont字体

const propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  font: PropTypes.string,
};
const defaultProps = {
  className: '',
  type: '',
  size: 'md',
  font: '',
};

function Icon(props) {
  let { type, className, size, font, ...ret } = props;
  const sizeClassName = sizes[size] || '';
  const typeClassName = font ? fonts[`icon-${font}`] : types[`icon-${type}`] || '';
  return (
    <i
      className={`iconfont ${font ? 'u8ciconfont' : 'diworkiconfont'} 
      ${typeClassName} ${sizeClassName} ${className}`}
      {...ret}
      ref={(node) => {
        if (node) {
          if(font){
            node.style.setProperty('font-family', 'font_family_u8c', 'important');
          }else{
            node.style.setProperty('font-family', 'icomoon', 'important');
          }
        }
      }}
    />
  )
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
