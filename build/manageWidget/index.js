'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _folderDialog = require('./folderDialog');

var _folderDialog2 = _interopRequireDefault(_folderDialog);

var _batchMove = require('./batchMove');

var _batchMove2 = _interopRequireDefault(_batchMove);

var _popDialogComp = require('./popDialogComp');

var _popDialogComp2 = _interopRequireDefault(_popDialogComp);

var _backend = require('./backend');

var _backend2 = _interopRequireDefault(_backend);

var _reactDnd = require('react-dnd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var CreateManageModule = function (_Component) {
  _inherits(CreateManageModule, _Component);

  function CreateManageModule(props) {
    _classCallCheck(this, CreateManageModule);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  CreateManageModule.prototype.render = function render() {
    var _props = this.props,
        selectGroup = _props.selectGroup,
        currEditonlyId = _props.currEditonlyId,
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
        manageList = _props.manageList,
        curEditFolderId = _props.curEditFolderId,
        drag = _props.drag,
        dragState = _props.dragState,
        selectList = _props.selectList,
        currGroupIndex = _props.currGroupIndex,
        title = _props.title,
        openFolder = _props.openFolder,
        deleteFolder = _props.deleteFolder,
        renameFolder = _props.renameFolder,
        setFolderEdit = _props.setFolderEdit,
        moveService = _props.moveService,
        closeFolder = _props.closeFolder,
        setCurrGroupIndex = _props.setCurrGroupIndex,
        editTitle = _props.editTitle,
        cancelFolderEdit = _props.cancelFolderEdit,
        delectService = _props.delectService,
        batchDelectFn = _props.batchDelectFn,
        openGroupTo = _props.openGroupTo,
        isEdit = _props.isEdit,
        save = _props.save,
        popOpenCancel = _props.popOpenCancel,
        curDisplayFolder = _props.curDisplayFolder,
        folderModalDisplay = _props.folderModalDisplay,
        batchMoveModalDisplay = _props.batchMoveModalDisplay,
        moveData = _props.moveData,
        closeBatchMove = _props.closeBatchMove,
        batchMove = _props.batchMove,
        showModal = _props.showModal,
        showCancelModal = _props.showCancelModal,
        popClose = _props.popClose,
        cancel = _props.cancel,
        popCloseCancel = _props.popCloseCancel,
        applicationsMap = _props.applicationsMap,
        allServicesByLabelGroup = _props.allServicesByLabelGroup,
        getAllServicesByLabelGroup = _props.getAllServicesByLabelGroup,
        setCurrentSelectWidgetMap = _props.setCurrentSelectWidgetMap,
        addDesk = _props.addDesk,
        moveGroupDrag = _props.moveGroupDrag,
        moveItemDrag = _props.moveItemDrag,
        folderBgSrc = _props.folderBgSrc;

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
      setDragInputState: setDragInputState,
      moveGroupDrag: moveGroupDrag,
      moveItemDrag: moveItemDrag
    };
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
    var footerProps = {
      batchDelectFn: batchDelectFn,
      selectList: selectList,
      openGroupTo: openGroupTo,
      isEdit: isEdit,
      save: save,
      popOpenCancel: popOpenCancel
    };
    var folderDialogProps = {
      curDisplayFolder: curDisplayFolder,
      folderModalDisplay: folderModalDisplay,
      closeFolder: closeFolder,
      moveService: moveService
    };
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
    var batchMoveRedux = {
      batchMoveModalDisplay: batchMoveModalDisplay,
      manageList: manageList,
      moveData: moveData,
      closeBatchMove: closeBatchMove,
      batchMove: batchMove,
      addGroup: addGroup
    };
    var popDialogOuter = {
      showModal: showModal,
      showCancelModal: showCancelModal,
      popClose: popClose,
      batchDelectFn: batchDelectFn,
      cancel: cancel,
      save: save,
      popCloseCancel: popCloseCancel
    };
    return _react2["default"].createElement(
      'div',
      null,
      _react2["default"].createElement(_content2["default"], _extends({}, manageProps, widgetListProps, widgetSelectListProps)),
      _react2["default"].createElement(_footer2["default"], footerProps),
      _react2["default"].createElement(_folderDialog2["default"], _extends({}, folderDialogProps, widgetItemProps)),
      _react2["default"].createElement(_batchMove2["default"], batchMoveRedux),
      _react2["default"].createElement(_popDialogComp2["default"], popDialogOuter)
    );
  };

  return CreateManageModule;
}(_react.Component);

exports["default"] = (0, _reactDnd.DragDropContext)(_backend2["default"])(CreateManageModule);
module.exports = exports['default'];