'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.openMess = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('pub-comp/icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../bee/button');

var _button2 = _interopRequireDefault(_button);

var _notification2 = require('../bee/notification');

var _notification3 = _interopRequireDefault(_notification2);

require('./index.css');

var _index = {
  'notification_mess': 'notification_mess__index___1pev5',
  'notification_cont': 'notification_cont__index___15Vwo',
  '_close': '_close__index___3a-O5',
  '_title': '_title__index___1MUHP',
  '_tip': '_tip__index___1iNjQ',
  'title_cont': 'title_cont__index___2YW9p',
  'warning_cont': 'warning_cont__index___nmpZZ',
  'success_cont': 'success_cont__index___o7G-M',
  'info_cont': 'info_cont__index___2pga9',
  'error_cont': 'error_cont__index___2HtBx'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var NotificationMess = function (_Component) {
  _inherits(NotificationMess, _Component);

  // static propTypes = {
  //   notice: PropTypes.string,
  //   close: PropTypes.fun,
  //   open:PropTypes.fun,
  //   title:PropTypes.string,
  //   type:PropTypes.string,
  //   className:""
  // }

  function NotificationMess(props) {
    _classCallCheck(this, NotificationMess);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.getTypeNotifica = function () {
      var type = _this.props.type;

      switch (type) {
        case "warning":
          return _index.warning_cont;
        case "success":
          return _index.success_cont;
        case "info":
          return _index.info_cont;
        case "error":
          return _index.error_cont;
      }
    };

    _this.getTypeIcon = function () {
      var type = _this.props.type;

      switch (type) {
        case "warning":
          return "notice";
        case "success":
          return "succeed";
        case "info":
          return "help-information";
        case "error":
          return "error4";
      }
    };

    _this.open = function (options) {
      var _this$props = _this.props,
          title = _this$props.title,
          content = _this$props.content,
          duration = _this$props.duration,
          closable = _this$props.closable;

      var key = Date.now();
      var _closable = typeof closable === 'undefined' ? false : closable;
      _this.notification.notice({
        content: _react2["default"].createElement(
          'div',
          { className: '' + _index.page },
          _react2["default"].createElement(
            'div',
            { className: _index._title },
            _react2["default"].createElement(_icon2["default"], { className: _index._tip, type: _this.getTypeIcon() }),
            _react2["default"].createElement(
              'span',
              { className: _index.title_cont },
              title
            ),
            _closable ? _react2["default"].createElement(_icon2["default"], { type: 'error3', className: _index._close, onClick: _this.close(_this, key) }) : null
          ),
          content ? _react2["default"].createElement(
            'div',
            { className: _index.notification_cont },
            content
          ) : null
        ),
        key: key,
        duration: typeof duration === 'undefined' ? null : duration,
        closable: _closable
      });
    };

    _this.close = function () {};

    _this.notification = _notification3["default"].newInstance({
      position: 'topMiddle',
      className: _this.getTypeNotifica() + " " + _index.notification_mess
    });
    return _this;
  }

  return NotificationMess;
}(_react.Component);

var _notification = void 0;
function openMess(options) {
  _notification = null; //防止notification一个页面只能打开一种，其他被覆盖
  if (!_notification) {
    _notification = new NotificationMess(options);
  }
  _notification.open(options);
}

exports["default"] = NotificationMess;
exports.openMess = openMess;
exports.close = close;

/**
组件使用方式
import NotificationMess,{openMess} from 'components/notification';
type 类型[warning,success,info,error]
openMess({
  title:"234",
  type:"error",
  content:"你所提交的信息已经审核失败，可以进入个人信箱查看原因， 如有疑问，请联系客服人员。"
});
**/