'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

var _style = {
  'content': 'content__style___3zVXI'
};

var _pop = require('../../pop');

var _pop2 = _interopRequireDefault(_pop);

var _button = require('../../bee/button');

var _button2 = _interopRequireDefault(_button);

var _widgetItem = require('../manageWidgetList/widgetItem');

var _widgetItem2 = _interopRequireDefault(_widgetItem);

var _dialogContent = require('./dialogContent');

var _dialogContent2 = _interopRequireDefault(_dialogContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ManageFolderDialog = function (_Component) {
  _inherits(ManageFolderDialog, _Component);

  function ManageFolderDialog(props) {
    _classCallCheck(this, ManageFolderDialog);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.moveItemDrag = function (id, preParentId, preType, afterId, parentId, afterType, ifIntoFile) {
      var data = { id: id, preParentId: preParentId, preType: preType, afterId: afterId, parentId: parentId, afterType: afterType, ifIntoFile: ifIntoFile };
      var moveService = _this.props.moveService;

      moveService(data);
    };

    _this.closeFolderDrag = function () {
      var closeFolder = _this.props.closeFolder;

      closeFolder();
    };

    _this.savePosition = function (id, moveLine) {
      _this.setState({
        checkId: id,
        moveLine: moveLine
      });
    };

    _this.moveLine = function (id, moveLinePara) {
      if (id == _this.state.checkId) {
        return moveLinePara;
      } else {
        return 'none';
      }
    };

    _this.moveItemDrag = _this.moveItemDrag.bind(_this);
    _this.state = {
      moveLine: 'none',
      checkId: ''
    };
    return _this;
  }

  ManageFolderDialog.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        manageList = _props.manageList,
        curEditFolderId = _props.curEditFolderId,
        selectList = _props.selectList,
        selectGroup = _props.selectGroup,
        currGroupIndex = _props.currGroupIndex,
        drag = _props.drag,
        deleteFolder = _props.deleteFolder,
        renameFolder = _props.renameFolder,
        setFolderEdit = _props.setFolderEdit,
        selectListActions = _props.selectListActions,
        selectGroupActions = _props.selectGroupActions,
        addFolder = _props.addFolder,
        delectService = _props.delectService;

    var widgetItemProps = {
      manageList: manageList,
      curEditFolderId: curEditFolderId,
      selectList: selectList,
      selectGroup: selectGroup,
      currGroupIndex: currGroupIndex,
      drag: drag,
      deleteFolder: deleteFolder,
      renameFolder: renameFolder,
      setFolderEdit: setFolderEdit,
      selectListActions: selectListActions, selectGroupActions: selectGroupActions,
      addFolder: addFolder,
      delectService: delectService
    };
    var _props2 = this.props,
        _props2$curDisplayFol = _props2.curDisplayFolder,
        title = _props2$curDisplayFol.widgetName,
        children = _props2$curDisplayFol.children,
        closeFolder = _props2.closeFolder,
        folderModalDisplay = _props2.folderModalDisplay;

    var list = children && children.map(function (child, i) {
      var type = child.type,
          parentId = child.parentId,
          id = child.widgetId;

      var props = {
        key: 'widget-' + id + '-' + i,
        data: child,
        id: id,
        parentId: parentId,
        index: id,
        preType: type,
        moveItemDrag: _this2.moveItemDrag,
        savePosition: _this2.savePosition,
        moveLine: _this2.moveLine(id, _this2.state.moveLine)
      };
      return _react2["default"].createElement(_widgetItem2["default"], _extends({}, props, {
        folderType: 'folder', type: 'pop', dragType: 'dragInFolder',
        closeFolderDrag: _this2.closeFolderDrag
      }, widgetItemProps));
    });
    var isDragging = this.props.isDragging;
    var _props3 = this.props,
        curDisplayFolder = _props3.curDisplayFolder,
        moveService = _props3.moveService;

    var opacity = isDragging ? 0 : 1;

    return _react2["default"].createElement(
      'div',
      { className: 'manageDialogFolder' },
      _react2["default"].createElement(_dialogContent2["default"], {
        folderModalDisplay: folderModalDisplay,
        closeFolderDrag: this.closeFolderDrag,
        closeFolder: closeFolder,
        moveService: moveService,
        curDisplayFolder: curDisplayFolder
      }),
      _react2["default"].createElement(
        _pop2["default"],
        {
          className: 'manageDialogFolder',
          show: folderModalDisplay,
          title: title,
          close: closeFolder },
        _react2["default"].createElement(
          'div',
          { className: _style.content },
          list
        )
      )
    );
  };

  return ManageFolderDialog;
}(_react.Component);

exports["default"] = ManageFolderDialog;
module.exports = exports['default'];