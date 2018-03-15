'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./iconfont/iconfont.css');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  type: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  style: _propTypes2["default"].object
};
var defaultProps = {
  className: '',
  type: '',
  size: 'md'
};

function Icon(props) {
  var type = props.type,
      className = props.className,
      size = props.size,
      ret = _objectWithoutProperties(props, ['type', 'className', 'size']);

  return _react2["default"].createElement('i', _extends({
    className: 'iconfont icon-' + type + ' um-icon-' + size + ' ' + className
  }, ret));
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

exports["default"] = Icon;
module.exports = exports['default'];