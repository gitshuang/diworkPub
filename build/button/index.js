'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonU8cDefault = exports.ButtonU8cPrimary = exports.ButtonU8c = exports.Button = exports.ButtonSearchIcon = exports.ButtonDefaultWhite = exports.ButtonCheckSelected = exports.ButtonCheckClose = exports.ButtonWarning = exports.ButtonDefaultLine = exports.ButtonDefaultAlpha = exports.ButtonDefault = exports.ButtonBrand = exports.ButtonDanger = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../bee/button');

var _button2 = _interopRequireDefault(_button);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

require('./style.css');

var _style = {
  'btn': 'btn__style___37bsb',
  'u8c_primary': 'u8c_primary__style___RFibc',
  'u8c_default': 'u8c_default__style___1nNbC',
  'u8c': 'u8c__style___2_wts',
  'brand_btn': 'brand_btn__style___2q2wL',
  'default_btn': 'default_btn__style___ID6yW',
  'default_line_btn': 'default_line_btn__style___bm6bw',
  'default_alpha_btn': 'default_alpha_btn__style___LfXeC',
  'default_white_btn': 'default_white_btn__style___3sPDO',
  'check_selected_btn': 'check_selected_btn__style___4yC4T',
  'disabled_check_selected_btn': 'disabled_check_selected_btn__style___9vvvC',
  'check_close_btn': 'check_close_btn__style___IV5Sb',
  'disabled_check_close_btn': 'disabled_check_close_btn__style___2iKOo',
  'danger_btn': 'danger_btn__style___3JHoK',
  'disabled_danger_btn': 'disabled_danger_btn__style___3mBiP',
  'warning_btn': 'warning_btn__style___3xJGo',
  'search_icon_btn': 'search_icon_btn__style___2ev0I'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var buttonMaker = function buttonMaker(btnType) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    _class.prototype.render = function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          _onClick = _props.onClick;

      return _react2["default"].createElement(_button2["default"], _extends({}, this.props, {
        className: _style.btn + ' ' + btnType + ' ' + className,
        onClick: function onClick(e) {
          _onClick(e, _this2);
        }
      }));
    };

    return _class;
  }(_react.Component), _class.defaultProps = {
    className: '',
    onClick: _utils2["default"]
  }, _temp;
};

//品牌色
var ButtonBrand = buttonMaker(_style.brand_btn);
//通用按钮
var ButtonDefault = buttonMaker(_style.default_btn);
//带边框
var ButtonDefaultLine = buttonMaker(_style.default_line_btn);
//默认背景透明
var ButtonDefaultAlpha = buttonMaker(_style.default_alpha_btn);
//默认背景透明
var ButtonCheckSelected = buttonMaker(_style.check_selected_btn);
//默认背景透明
var ButtonCheckClose = buttonMaker(_style.check_close_btn);
//默认白色背景带边框
var ButtonDefaultWhite = buttonMaker(_style.default_white_btn);
//危险
var ButtonDanger = buttonMaker(_style.danger_btn);
//警告
var ButtonWarning = buttonMaker(_style.warning_btn);
//搜索的button
var ButtonSearchIcon = buttonMaker(_style.search_icon_btn);
// u8c button
var ButtonU8c = buttonMaker(_style.u8c);
var ButtonU8cPrimary = buttonMaker(_style.u8c_primary);
var ButtonU8cDefault = buttonMaker(_style.u8c_default);
exports["default"] = ButtonDefault;
exports.ButtonDanger = ButtonDanger;
exports.ButtonBrand = ButtonBrand;
exports.ButtonDefault = ButtonDefault;
exports.ButtonDefaultAlpha = ButtonDefaultAlpha;
exports.ButtonDefaultLine = ButtonDefaultLine;
exports.ButtonWarning = ButtonWarning;
exports.ButtonCheckClose = ButtonCheckClose;
exports.ButtonCheckSelected = ButtonCheckSelected;
exports.ButtonDefaultWhite = ButtonDefaultWhite;
exports.ButtonSearchIcon = ButtonSearchIcon;
exports.Button = _button2["default"];
exports.ButtonU8c = ButtonU8c;
exports.ButtonU8cPrimary = ButtonU8cPrimary;
exports.ButtonU8cDefault = ButtonU8cDefault;

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