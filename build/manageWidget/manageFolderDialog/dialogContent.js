'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _button = require('../../bee/button');

var _button2 = _interopRequireDefault(_button);

var _widgetItem = require('../manageWidgetList/widgetItem');

var _widgetItem2 = _interopRequireDefault(_widgetItem);

require('./style.css');

var _style = {
  'content': 'content__style___23Jeg'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var type = 'item';

var itemTarget = {
  //hover 悬浮调用 drop落在目标上时调用
  hover: function hover(props, monitor, component) {
    props.closeFolderDrag();
  },
  drop: function drop(props, monitor) {}
};

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function collectTaget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

var DialogContent = function (_Component) {
  _inherits(DialogContent, _Component);

  function DialogContent(props) {
    _classCallCheck(this, DialogContent);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.moveItemDrag = function (id, preParentId, preType, afterId, parentId, afterType) {
      var data = { id: id, preParentId: preParentId, preType: preType, afterId: afterId, parentId: parentId, afterType: afterType };
      var moveService = _this.props.moveService;

      moveService(data);
    };

    _this.closeFolderDrag = function () {
      var closeFolder = _this.props.closeFolder;

      closeFolder();
    };

    _this.popClose = function () {
      _this.setState({
        folderModalDisplay: false
      });
      var closeFolder = _this.props.closeFolder;

      closeFolder();
    };

    _this.moveItemDrag = _this.moveItemDrag.bind(_this);
    return _this;
  }

  DialogContent.prototype.render = function render() {
    var _props = this.props,
        _props$curDisplayFold = _props.curDisplayFolder,
        title = _props$curDisplayFold.widgetName,
        children = _props$curDisplayFold.children,
        closeFolder = _props.closeFolder,
        folderModalDisplay = _props.folderModalDisplay,
        list = _props.list;
    var _props2 = this.props,
        connectDragSource = _props2.connectDragSource,
        connectDropTarget = _props2.connectDropTarget,
        isDragging = _props2.isDragging;

    var opacity = isDragging ? 0 : 1;

    return connectDropTarget(_react2["default"].createElement('div', { className: folderModalDisplay ? "u-modal-backdrop fade in folderDialog" : "out", onClick: this.popClose }));
  };

  return DialogContent;
}(_react.Component);

exports["default"] = (0, _reactDnd.DropTarget)(type, itemTarget, collectTaget)(DialogContent);
module.exports = exports['default'];