'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style.css');

var _style = {
  'loading_modal': 'loading_modal__style___1tmHR',
  'loading_body': 'loading_body__style___3lbLh',
  'loading_icon': 'loading_icon__style___2Tef7',
  'rotating': 'rotating__style___1_mgM',
  'loading_content': 'loading_content__style___8ZsY8'
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