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
    'loading_modal': 'loading_modal__style___1hpun',
    'loading_body': 'loading_body__style___3gRno',
    'loading_icon': 'loading_icon__style___30rw_',
    'loading_content': 'loading_content__style___bM_-v'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Loading() {
    return _react2["default"].createElement(
        'div',
        { className: _style.loading_modal },
        _react2["default"].createElement(
            'div',
            { className: _style.loading_body },
            _react2["default"].createElement(
                'div',
                null,
                _react2["default"].createElement(_icon2["default"], { type: 'loading', className: _style.loading_icon })
            ),
            _react2["default"].createElement(
                'div',
                { className: _style.loading_content },
                '\u52A0\u8F7D\u4E2D...'
            )
        )
    );
}

exports["default"] = Loading;
module.exports = exports['default'];