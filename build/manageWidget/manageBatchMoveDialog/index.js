'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = require('react-transition-group');

var _utils = require('../../utils');

var _moveToGroup = require('../../moveToGroup');

var _moveToGroup2 = _interopRequireDefault(_moveToGroup);

require('./style.css');

var _style = {
  'pin': 'pin__style___1J8c8'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ManageBatchMoveDialog = function (_Component) {
  _inherits(ManageBatchMoveDialog, _Component);

  function ManageBatchMoveDialog(props) {
    _classCallCheck(this, ManageBatchMoveDialog);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.confirmFn = function (selectId) {
      var _this$props = _this.props,
          batchMove = _this$props.batchMove,
          manageList = _this$props.manageList;

      var index = manageList.findIndex(function (_ref) {
        var widgetId = _ref.widgetId;
        return widgetId === selectId;
      });
      if (index !== -1) {
        batchMove(index);
      }
      _this.cancelFn();
    };

    _this.cancelFn = function () {
      var closeBatchMove = _this.props.closeBatchMove;

      closeBatchMove();
    };

    _this.addNewGroup = function (widgetName) {
      var _this$props2 = _this.props,
          addGroup = _this$props2.addGroup,
          manageList = _this$props2.manageList;

      return Promise.resolve().then(function () {
        var widgetId = (0, _utils.guid)();
        var index = manageList.length;
        addGroup({ index: index, widgetId: widgetId, widgetName: widgetName });
        return {
          error: false,
          payload: {
            widgetId: widgetId
          }
        };
      });
    };

    return _this;
  }

  ManageBatchMoveDialog.prototype.render = function render() {
    var _props = this.props,
        batchMoveModalDisplay = _props.batchMoveModalDisplay,
        moveData = _props.moveData;

    var content = batchMoveModalDisplay ? _react2["default"].createElement(
      'div',
      { className: _style.pin + " um-css3-center" },
      _react2["default"].createElement(_moveToGroup2["default"], {
        data: moveData,
        onSave: this.confirmFn,
        onCancel: this.cancelFn,
        onAddGroup: this.addNewGroup,
        caller: "移动"
      })
    ) : null;
    return _react2["default"].createElement(
      _reactTransitionGroup.TransitionGroup,
      null,
      _react2["default"].createElement(
        _reactTransitionGroup.CSSTransitionGroup,
        {
          transitionName: {
            enter: 'animated',
            enterActive: 'fadeIn',
            leave: 'animated',
            leaveActive: 'fadeOut'
          },
          transitionEnterTimeout: 300,
          transitionLeaveTimeout: 300 },
        content
      )
    );
  };

  return ManageBatchMoveDialog;
}(_react.Component);

exports["default"] = ManageBatchMoveDialog;
module.exports = exports['default'];