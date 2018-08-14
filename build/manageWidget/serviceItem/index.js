'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../../bee/button');

var _button2 = _interopRequireDefault(_button);

require('./style.css');

var _style2 = {
  'serviceItem': 'serviceItem__style___3Llr-',
  'serviceItemTitle': 'serviceItemTitle__style___10x4Z',
  'item_li_top': 'item_li_top__style___53Gz9',
  'item_footer': 'item_footer__style___vW_yX',
  'item_left': 'item_left__style___2JP8F',
  'item_right': 'item_right__style___3p4a3',
  'item_footer_app': 'item_footer_app__style___2OgVL',
  'icon': 'icon__style___1mQ05',
  'up_icon': 'up_icon__style___GFThe'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ServiceItem = function (_Component) {
  _inherits(ServiceItem, _Component);

  // 1，已存在，
  // 2，未添加，
  // 3，本次勾选
  // 点击 本次取消

  function ServiceItem(props) {
    _classCallCheck(this, ServiceItem);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.packUp = function () {};

    return _this;
  }

  ServiceItem.prototype.render = function render() {
    var _this2 = this;

    // const {serviceId, serviceName,selected} = this.props.data;
    var _props = this.props,
        _props$data = _props.data,
        serviceId = _props$data.serviceId,
        serviceName = _props$data.serviceName,
        selected = _props$data.selected,
        serviceType = _props$data.serviceType,
        serviceIcon = _props$data.serviceIcon,
        extend = _props$data.extend,
        service = _props$data.service,
        arrow = _props.arrow,
        languagesJSON = _props.languagesJSON;

    var btn = null;
    if (selected) {
      if (selected == "1") {
        //  btn = (<div >
        //     <span>已添加</span>
        //     <Icon title="已添加"  type="pin2" style={{color:"rgba(117,127,140,1)"}} />
        //  </div>);
        {
          serviceType == "2" ? btn = _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(
              'span',
              null,
              languagesJSON.added
            ),
            _react2["default"].createElement(_icon2["default"], { title: languagesJSON.added, type: 'pin2', style: { color: "rgba(117,127,140,1)" } })
          ) : btn = _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(_icon2["default"], { title: languagesJSON.added, type: 'pin2', style: { color: "rgba(117,127,140,1)" } }),
            _react2["default"].createElement(
              'span',
              null,
              languagesJSON.added
            )
          );
        };
      } else if (selected == "2") {
        btn = _react2["default"].createElement(
          'div',
          { onClick: function onClick() {
              _this2.props.onChange(_this2.props.data, "3");
            } },
          _react2["default"].createElement(_icon2["default"], { title: languagesJSON.notAdd, type: 'pin', style: { cursor: "pointer" } }),
          ' '
        );
      } else if (selected == "3") {
        btn = _react2["default"].createElement(
          'div',
          { onClick: function onClick() {
              _this2.props.onChange(_this2.props.data, "2");
            } },
          _react2["default"].createElement(_icon2["default"], { title: languagesJSON.add, type: 'pin2', style: { cursor: "pointer" } }),
          ' '
        );
      }
    } else {
      //如果没有selected，就显示2
      btn = _react2["default"].createElement(
        'div',
        { onClick: function onClick() {
            _this2.props.onChange(_this2.props.data, "3");
          } },
        _react2["default"].createElement(_icon2["default"], { title: languagesJSON.notAdd, type: 'pin', style: { cursor: "pointer" } }),
        ' '
      );
    }

    var upIcon = serviceType == "2" ? _react2["default"].createElement(_icon2["default"], { className: _style2.up_icon, type: extend ? "pull-down" : "upward", title: extend ? languagesJSON.extend : languagesJSON.unfold, onClick: function onClick() {
        _this2.props.packUp(_this2.props.data);
      } }) : null;
    var _style = serviceType == "2" ? null : extend ? { display: "none" } : null;
    var _app = service && service.length == 0 ? _style2.item_footer_app : "";
    return _react2["default"].createElement(
      'div',
      { className: serviceType == "2" ? _style2.serviceItemTitle : _style2.serviceItem, style: _extends({}, _style) },
      _react2["default"].createElement(
        'div',
        { className: _style2.item_li_top },
        _react2["default"].createElement('img', { className: _style2.icon, src: serviceIcon }),
        _react2["default"].createElement(
          'div',
          { className: _style2.item_right },
          serviceName
        )
      ),
      _react2["default"].createElement(
        'div',
        { className: _style2.item_footer + ' ' + _app },
        btn
      ),
      arrow ? upIcon : ''
    );
  };

  return ServiceItem;
}(_react.Component);

exports["default"] = ServiceItem;
module.exports = exports['default'];