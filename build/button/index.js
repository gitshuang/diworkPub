'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ButtonDefaultWhite = exports.ButtonCheckSelected = exports.ButtonCheckClose = exports.ButtonWarning = exports.ButtonDefaultLine = exports.ButtonDefaultAlpha = exports.ButtonBrand = exports.ButtonDanger = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../bee/button');

var _button2 = _interopRequireDefault(_button);

require('./style.css');

var _style = {
    'btn': 'style__btn___37bsb',
    'brand_btn': 'style__brand_btn___2q2wL',
    'default_btn': 'style__default_btn___ID6yW',
    'default_line_btn': 'style__default_line_btn___bm6bw',
    'default_alpha_btn': 'style__default_alpha_btn___LfXeC',
    'default_white_btn': 'style__default_white_btn___3sPDO',
    'check_selected_btn': 'style__check_selected_btn___4yC4T',
    'disabled_check_selected_btn': 'style__disabled_check_selected_btn___9vvvC',
    'check_close_btn': 'style__check_close_btn___IV5Sb',
    'disabled_check_close_btn': 'style__disabled_check_close_btn___2iKOo',
    'danger_btn': 'style__danger_btn___3JHoK',
    'disabled_danger_btn': 'style__disabled_danger_btn___3mBiP',
    'warning_btn': 'style__warning_btn___3xJGo'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

//品牌色
var ButtonBrand = function ButtonBrand(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    var children = props.children,
        disabled = props.disabled,
        className = props.className;

    return _react2["default"].createElement(
        _button2["default"],
        { className: _style.btn + ' ' + _style.brand_btn + ' ' + (className ? className : ''), disabled: disabled, onClick: function onClick(e) {
                props.onClick.apply(props, [e].concat(_toConsumableArray(props)));
            } },
        children
    );
};

//通用按钮
var ButtonDefault = function ButtonDefault(_ref2) {
    var props = _objectWithoutProperties(_ref2, []);

    var children = props.children,
        disabled = props.disabled;

    return _react2["default"].createElement(
        _button2["default"],
        { className: _style.btn + ' ' + _style.default_btn, disabled: disabled, onClick: function onClick(e) {
                props.onClick.apply(props, [e].concat(_toConsumableArray(props)));
            } },
        children
    );
};

//带边框
var ButtonDefaultLine = function ButtonDefaultLine(_ref3) {
    var props = _objectWithoutProperties(_ref3, []);

    var children = props.children,
        disabled = props.disabled;

    return _react2["default"].createElement(
        _button2["default"],
        { className: _style.btn + ' ' + _style.default_line_btn, type: 'button', disabled: disabled, onClick: function onClick(e) {
                props.onClick.apply(props, [e].concat(_toConsumableArray(props)));
            } },
        children
    );
};

//默认背景透明
var ButtonDefaultAlpha = function ButtonDefaultAlpha(_ref4) {
    var props = _objectWithoutProperties(_ref4, []);

    var children = props.children,
        disabled = props.disabled;

    return _react2["default"].createElement(
        _button2["default"],
        { className: _style.btn + ' ' + _style.default_alpha_btn, disabled: disabled, onClick: function onClick(e) {
                props.onClick.apply(props, [e].concat(_toConsumableArray(props)));
            } },
        children
    );
};

//默认背景透明
var ButtonCheckSelected = function ButtonCheckSelected(_ref5) {
    var props = _objectWithoutProperties(_ref5, []);

    var children = props.children,
        disabled = props.disabled,
        id = props.id;

    var attribute = id ? { id: id } : {};
    return _react2["default"].createElement(
        _button2["default"],
        _extends({}, attribute, { className: _style.btn + ' ' + _style.check_selected_btn, disabled: disabled, onClick: function onClick(e) {
                props.onClick.apply(props, [e].concat(_toConsumableArray(props)));
            } }),
        children
    );
};
//默认背景透明
var ButtonCheckClose = function ButtonCheckClose(_ref6) {
    var props = _objectWithoutProperties(_ref6, []);

    var children = props.children,
        disabled = props.disabled;

    return _react2["default"].createElement(
        _button2["default"],
        { className: _style.btn + ' ' + _style.check_close_btn, disabled: disabled, onClick: function onClick(e) {
                props.onClick.apply(props, [e].concat(_toConsumableArray(props)));
            } },
        children
    );
};

//默认白色背景带边框
var ButtonDefaultWhite = function ButtonDefaultWhite(_ref7) {
    var props = _objectWithoutProperties(_ref7, []);

    var children = props.children,
        disabled = props.disabled;

    return _react2["default"].createElement(
        _button2["default"],
        { className: _style.btn + ' ' + _style.default_white_btn, disabled: disabled, onClick: function onClick(e) {
                props.onClick.apply(props, [e].concat(_toConsumableArray(props)));
            } },
        children
    );
};

//危险
var ButtonDanger = function ButtonDanger(_ref8) {
    var props = _objectWithoutProperties(_ref8, []);

    var children = props.children,
        disabled = props.disabled;

    return _react2["default"].createElement(
        _button2["default"],
        { className: _style.btn + ' ' + _style.danger_btn, disabled: disabled, onClick: function onClick(e) {
                props.onClick.apply(props, [e].concat(_toConsumableArray(props)));
            } },
        children
    );
};

//警告
var ButtonWarning = function ButtonWarning(_ref9) {
    var props = _objectWithoutProperties(_ref9, []);

    var children = props.children,
        disabled = props.disabled;

    return _react2["default"].createElement(
        _button2["default"],
        { className: _style.btn + ' ' + _style.warning_btn, disabled: disabled, onClick: function onClick(e) {
                props.onClick.apply(props, [e].concat(_toConsumableArray(props)));
            } },
        children
    );
};

exports["default"] = ButtonDefault;
exports.ButtonDanger = ButtonDanger;
exports.ButtonBrand = ButtonBrand;
exports.ButtonDefaultAlpha = ButtonDefaultAlpha;
exports.ButtonDefaultLine = ButtonDefaultLine;
exports.ButtonWarning = ButtonWarning;
exports.ButtonCheckClose = ButtonCheckClose;
exports.ButtonCheckSelected = ButtonCheckSelected;
exports.ButtonDefaultWhite = ButtonDefaultWhite;

/**
参数

type: PropTypes.string, 后续拓展，暂无
label: PropTypes.string, 显示文字
onClick:PropTypes.fun,   按钮回调事件
data:PropTypes.object   回调事件回带数据Object格式

<div style={{width:"500px",height:"600px",padding:"10px"}}>
<ButtonBrand />  品牌色
<ButtonDefault />  通用按钮
<ButtonDefaultLine /> 通用按钮带边框
<ButtonDefaultAlpha /> 通用按钮无背景
<ButtonWarning />   告警
<ButtonDanger />  危险

</div>
**/