import React, {Component} from 'react';
import PropTypes from 'prop-types';
import types from './iconfont/iconfont.css';
import sizes from './index.css';

const propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};
const defaultProps = {
  className: '',
  type: '',
  size: 'md'
};

function Icon(props) {
  let {type, className, size, ...ret} = props;
  return (
    <i
      className={`iconfont ${types[`icon-${type}`]} ${sizes[size]} ${className}`}
      {...ret}
    />
  )
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
