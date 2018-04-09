'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pop = require('../pop');

var _pop2 = _interopRequireDefault(_pop);

require('./style.css');

var _style = {
  'page_home': 'page_home__style___vsQOe',
  'um_content': 'um_content__style___3a8jv',
  'umBoxJustify': 'umBoxJustify__style___2tN2v',
  'preserve': 'preserve__style___1CXeY',
  'batchArea': 'batchArea__style___1mhxk',
  'saveArea': 'saveArea__style___20m3j',
  'um_footer': 'um_footer__style___3cr-t',
  'addBtn': 'addBtn__style___3zZN2',
  'addGroupBtn': 'addGroupBtn__style___3tnOQ',
  'manager_save_pop': 'manager_save_pop__style___2tUW_'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PopDialogComp = function (_Component) {
  _inherits(PopDialogComp, _Component);

  function PopDialogComp(props) {
    _classCallCheck(this, PopDialogComp);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  PopDialogComp.prototype.render = function render() {
    var pop_btn = [{ label: "确认", fun: this.props.batchDelectFn, className: "" }, { label: "取消", fun: this.props.popClose, className: "" }];
    var pop_btn2 = [{ label: "不保存", fun: this.props.cancel, type: "defaultAlpha" }, { label: "保存", fun: this.props.save, type: "warning" }, { label: "取消", fun: this.props.popCloseCancel, type: "defaultAlpha" }];
    return _react2["default"].createElement(
      'div',
      null,
      _react2["default"].createElement(
        _pop2["default"],
        { className: 'pop_dialog_delete', type: 'delete', show: this.props.showModal, close: this.props.popClose, btns: pop_btn },
        _react2["default"].createElement(
          'div',
          null,
          _react2["default"].createElement(
            'span',
            null,
            '\u60A8\u786E\u8BA4\u8981\u6279\u91CF\u5220\u9664\u5417?'
          )
        )
      ),
      _react2["default"].createElement(
        _pop2["default"],
        { className: _style.manager_save_pop, type: 'warning', show: this.props.showCancelModal, close: this.props.popCloseCancel, btns: pop_btn2, title: "是否保存最新修改？" },
        _react2["default"].createElement(
          'div',
          null,
          _react2["default"].createElement(
            'span',
            null,
            '\u70B9\u51FB\u4E0D\u4FDD\u5B58\uFF0C\u5219\u6700\u65B0\u4FEE\u6539\u5C06\u4E22\u5931'
          )
        )
      )
    );
  };

  return PopDialogComp;
}(_react.Component);

PopDialogComp.defaultProps = {};
exports["default"] = PopDialogComp;
module.exports = exports['default'];