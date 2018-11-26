'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _manageGroup = require('./manageGroup');

var _manageGroup2 = _interopRequireDefault(_manageGroup);

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

// import judgedBackend from 'components/backend';
// import { DragDropContext } from 'react-dnd';

var Content = function (_Component) {
  _inherits(Content, _Component);

  function Content(props) {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  Content.prototype.renderContent = function renderContent() {
    var _this2 = this;

    var _props = this.props,
        manageList = _props.manageList,
        selectGroup = _props.selectGroup,
        selectList = _props.selectList,
        currEditonlyId = _props.currEditonlyId,
        dragState = _props.dragState,
        requestStart = _props.requestStart,
        requestSuccess = _props.requestSuccess,
        requestError = _props.requestError,
        addGroup = _props.addGroup,
        delectGroup = _props.delectGroup,
        renameGroup = _props.renameGroup,
        moveGroup = _props.moveGroup,
        moveTopGroup = _props.moveTopGroup,
        moveBottomGroup = _props.moveBottomGroup,
        addFolder = _props.addFolder,
        selectListActions = _props.selectListActions,
        selectGroupActions = _props.selectGroupActions,
        setEditonlyId = _props.setEditonlyId,
        setDragInputState = _props.setDragInputState,
        applicationsMap = _props.applicationsMap,
        allServicesByLabelGroup = _props.allServicesByLabelGroup,
        getAllServicesByLabelGroup = _props.getAllServicesByLabelGroup,
        setCurrentSelectWidgetMap = _props.setCurrentSelectWidgetMap,
        moveGroupDrag = _props.moveGroupDrag,
        moveItemDrag = _props.moveItemDrag,
        languagesJSON = _props.languagesJSON;

    var manageProps = {
      manageList: manageList,
      selectGroup: selectGroup,
      selectList: selectList,
      currEditonlyId: currEditonlyId,
      dragState: dragState,
      requestStart: requestStart,
      requestSuccess: requestSuccess,
      requestError: requestError,
      addGroup: addGroup,
      delectGroup: delectGroup,
      renameGroup: renameGroup,
      moveGroup: moveGroup,
      moveTopGroup: moveTopGroup,
      moveBottomGroup: moveBottomGroup,
      addFolder: addFolder,
      selectListActions: selectListActions,
      selectGroupActions: selectGroupActions,
      setEditonlyId: setEditonlyId,
      setDragInputState: setDragInputState
    };
    var _props2 = this.props,
        manageList = _props2.manageList,
        curEditFolderId = _props2.curEditFolderId,
        drag = _props2.drag,
        dragState = _props2.dragState,
        selectList = _props2.selectList,
        selectGroup = _props2.selectGroup,
        currEditonlyId = _props2.currEditonlyId,
        currGroupIndex = _props2.currGroupIndex,
        title = _props2.title,
        openFolder = _props2.openFolder,
        deleteFolder = _props2.deleteFolder,
        renameFolder = _props2.renameFolder,
        setFolderEdit = _props2.setFolderEdit,
        moveService = _props2.moveService,
        addFolder = _props2.addFolder,
        closeFolder = _props2.closeFolder,
        setCurrGroupIndex = _props2.setCurrGroupIndex,
        editTitle = _props2.editTitle,
        selectListActions = _props2.selectListActions,
        selectGroupActions = _props2.selectGroupActions,
        cancelFolderEdit = _props2.cancelFolderEdit,
        setEditonlyId = _props2.setEditonlyId,
        setDragInputState = _props2.setDragInputState,
        delectService = _props2.delectService,
        addDesk = _props2.addDesk,
        folderBgSrc = _props2.folderBgSrc;

    var widgetListProps = {
      manageList: manageList,
      curEditFolderId: curEditFolderId,
      drag: drag,
      dragState: dragState,
      selectList: selectList,
      selectGroup: selectGroup,
      currEditonlyId: currEditonlyId,
      currGroupIndex: currGroupIndex,
      title: title,
      openFolder: openFolder,
      deleteFolder: deleteFolder,
      renameFolder: renameFolder,
      setFolderEdit: setFolderEdit,
      moveService: moveService,
      addFolder: addFolder,
      closeFolder: closeFolder,
      setCurrGroupIndex: setCurrGroupIndex,
      editTitle: editTitle,
      selectListActions: selectListActions,
      selectGroupActions: selectGroupActions,
      cancelFolderEdit: cancelFolderEdit,
      setEditonlyId: setEditonlyId,
      setDragInputState: setDragInputState,
      delectService: delectService,
      folderBgSrc: folderBgSrc
    };
    var widgetSelectListProps = {
      applicationsMap: applicationsMap,
      manageList: manageList,
      allServicesByLabelGroup: allServicesByLabelGroup,
      getAllServicesByLabelGroup: getAllServicesByLabelGroup,
      setCurrentSelectWidgetMap: setCurrentSelectWidgetMap,
      deleteFolder: deleteFolder,
      addDesk: addDesk,
      requestSuccess: requestSuccess,
      requestError: requestError
    };
    var list = [];
    if (manageList.length == 0) {
      return _react2["default"].createElement(
        'div',
        { className: _style.addBtn },
        _react2["default"].createElement(
          _button.ButtonDefaultAlpha,
          { className: _style.addGroupBtn, onClick: function onClick() {
              addGroup({ index: 0 });
            } },
          _react2["default"].createElement(_icon2["default"], { type: 'add' }),
          '//\u6DFB\u52A0\u7EC4',
          languagesJSON.addGroup
        )
      );
    } else {
      manageList.map(function (item, index) {
        list.push(_react2["default"].createElement(_manageGroup2["default"], _extends({
          data: item,
          index: index,
          key: item.widgetId,
          id: item.widgetId,
          type: item.type,
          moveGroupDrag: _this2.props.moveGroupDrag,
          moveItemDrag: _this2.props.moveItemDrag,
          checkFun: _this2.checkFun
        }, manageProps, widgetListProps, widgetSelectListProps, {
          languagesJSON: languagesJSON
        })));
      });
    }
    return list;
  };

  Content.prototype.render = function render() {
    return _react2["default"].createElement(
      'div',
      { className: _style.um_content },
      this.renderContent()
    );
  };

  return Content;
}(_react.Component);

Content.defaultProps = {
  // manageList,
  // addGroup,
  // moveGroupDrag,
  // moveItemDrag,
  // checkFun,
};
exports["default"] = Content;
module.exports = exports['default'];