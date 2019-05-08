'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style.css');

var _style = {
  'loading_modal': 'loading_modal__style___1FL1Z',
  'loading_body': 'loading_body__style___2ay4M',
  'loading_icon': 'loading_icon__style___1W9Qd',
  'rotating': 'rotating__style___3xMSX',
  'loading_content': 'loading_content__style___1yh3T'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Loading(props) {
  var text = props.text;

  return _react2["default"].createElement(
    'div',
    { className: _style.loading_modal },
    _react2["default"].createElement(
      'div',
      { className: _style.loading_body },
      _react2["default"].createElement(
        'div',
        null,
        _react2["default"].createElement(_icon2["default"], { type: 'loading', size: 'nosize', className: _style.loading_icon })
      ),
      _react2["default"].createElement(
        'div',
        { className: _style.loading_content },
        text || '加载中...'
      )
    )
  );
}

exports["default"] = Loading;
module.exports = exports['default'];