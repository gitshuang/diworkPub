'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _manageBatchMoveDialog = require('./manageBatchMoveDialog');

var _manageBatchMoveDialog2 = _interopRequireDefault(_manageBatchMoveDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var BatchMove = (_temp = _class = function (_Component) {
  _inherits(BatchMove, _Component);

  function BatchMove(props) {
    _classCallCheck(this, BatchMove);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  BatchMove.prototype.render = function render() {
    var _props = this.props,
        batchMoveModalDisplay = _props.batchMoveModalDisplay,
        manageList = _props.manageList,
        moveData = _props.moveData,
        closeBatchMove = _props.closeBatchMove,
        batchMove = _props.batchMove,
        addGroup = _props.addGroup,
        languagesJSON = _props.languagesJSON;

    var batchMoveDialogProps = {
      batchMoveModalDisplay: batchMoveModalDisplay,
      manageList: manageList,
      moveData: moveData,
      closeBatchMove: closeBatchMove,
      batchMove: batchMove,
      addGroup: addGroup
    };
    return _react2["default"].createElement(_manageBatchMoveDialog2["default"], _extends({}, batchMoveDialogProps, {
      languagesJSON: languagesJSON
    }));
  };

  return BatchMove;
}(_react.Component), _class.defaultProps = {}, _temp);
exports["default"] = BatchMove;
module.exports = exports['default'];