'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pop = require('../pop');

var _pop2 = _interopRequireDefault(_pop);

require('./style.css');

var _style = {
  'page_home': 'page_home__style___1oRdX',
  'um_content': 'um_content__style___2jNLr',
  'umBoxJustify': 'umBoxJustify__style___3WS8n',
  'preserve': 'preserve__style___3iHsh',
  'batchArea': 'batchArea__style___YigYP',
  'saveArea': 'saveArea__style___3cmhi',
  'um_footer': 'um_footer__style___1jTTP',
  'addBtn': 'addBtn__style___1qo0W',
  'addGroupBtn': 'addGroupBtn__style___1zW0a',
  'manager_save_pop': 'manager_save_pop__style___3ojTq'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PopDialogComp = (_temp = _class = function (_Component) {
  _inherits(PopDialogComp, _Component);

  function PopDialogComp(props) {
    _classCallCheck(this, PopDialogComp);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  PopDialogComp.prototype.render = function render() {
    var languagesJSON = this.props.languagesJSON;

    var pop_btn = [{ label: languagesJSON.confirm, fun: this.props.batchDelectFn, className: "" }, { label: languagesJSON.cancel, fun: this.props.popClose, className: "" }];
    var pop_btn2 = [{ label: languagesJSON.notSave, fun: this.props.cancel, type: "defaultAlpha" }, { label: languagesJSON.save, fun: this.props.save, type: "danger" }, { label: languagesJSON.cancel, fun: this.props.popCloseCancel, type: "defaultAlpha" }];
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
            languagesJSON.confirm_to_delete_batch
          )
        )
      ),
      _react2["default"].createElement(
        _pop2["default"],
        { className: _style.manager_save_pop, type: 'warning', show: this.props.showCancelModal, close: this.props.popCloseCancel, btns: pop_btn2, title: languagesJSON.save_latest_or_not },
        _react2["default"].createElement(
          'div',
          null,
          _react2["default"].createElement(
            'span',
            null,
            languagesJSON.notSave_to_lose_new_modify
          )
        )
      )
    );
  };

  return PopDialogComp;
}(_react.Component), _class.defaultProps = {}, _temp);
exports["default"] = PopDialogComp;
module.exports = exports['default'];