'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('../button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var SubmitBtn = function (_Component) {
  _inherits(SubmitBtn, _Component);

  function SubmitBtn() {
    var _temp, _this, _ret;

    _classCallCheck(this, SubmitBtn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.click = function (e) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SubmitBtn.prototype.render = function render() {
    var buttonText = this.props.buttonText;

    return _react2["default"].createElement(
      'div',
      { className: 'u-form-submit' },
      this.props.disabled ? _react2["default"].createElement(
        _button.ButtonBrand,
        { disabled: true },
        buttonText || '保存'
      ) : _react2["default"].createElement(
        _button.ButtonBrand,
        { onClick: this.click },
        buttonText || '保存'
      )
    );
  };

  return SubmitBtn;
}(_react.Component);

SubmitBtn.propTypes = {
  onClick: _propTypes2["default"].func,
  disabled: _propTypes2["default"].bool,
  buttonText: _propTypes2["default"].string
};
SubmitBtn.defaultProps = {
  onClick: function onClick() {},
  disabled: false,
  buttonText: ''
};
exports["default"] = SubmitBtn;
module.exports = exports['default'];