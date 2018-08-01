'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactDnd = require('react-dnd');

var _update = require('react/lib/update');

var _update2 = _interopRequireDefault(_update);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../../bee/button');

var _button2 = _interopRequireDefault(_button);

require('./style.css');

var _style = {
  'widgetItem': 'widgetItem__style___2ViXT',
  'widgetFileItem': 'widgetFileItem__style___1T2a3',
  'title': 'title__style___1B_fu',
  'title_right': 'title_right__style___cw30g',
  'file_title_right': 'file_title_right__style___DiqgP',
  'widget_node': 'widget_node__style___JwigN',
  'content': 'content__style___3kmtj',
  'context': 'context__style___1VApU',
  'bottom': 'bottom__style___cYT9M',
  'file_context': 'file_context__style___3u6-0',
  'footer': 'footer__style____qenv',
  'editDele': 'editDele__style___3CkUL',
  'title_cont': 'title_cont__style___1I2Gh',
  'edit_cont': 'edit_cont__style___10taX',
  'edit_btn': 'edit_btn__style___fCdEY',
  'title_edit': 'title_edit__style___3Z4Sp',
  'clearfix': 'clearfix__style___2IchN',
  'addModule': 'addModule__style___2ewoD',
  'widgetList': 'widgetList__style___hB67m',
  'pop_dialog_widge_list': 'pop_dialog_widge_list__style___13RcY',
  'btn': 'btn__style___2_s_F'
};

var _widgetItem = require('./widgetItem');

var _widgetItem2 = _interopRequireDefault(_widgetItem);

var _widgeFileItem = require('./widgeFileItem');

var _widgeFileItem2 = _interopRequireDefault(_widgeFileItem);

var _pop = require('../../pop');

var _pop2 = _interopRequireDefault(_pop);

var _manageSelectWidgetList = require('../manageSelectWidgetList');

var _manageSelectWidgetList2 = _interopRequireDefault(_manageSelectWidgetList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var WidgetList = function (_Component) {
  _inherits(WidgetList, _Component);

  //TUDO 数据中的 size ： sm 、lg、xg （小[标准]、中、大）

  // static propTypes = {
  //     widgeList: PropTypes.array.isRequired,
  // }
  function WidgetList(props) {
    _classCallCheck(this, WidgetList);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.addFolderFn = function (data) {
      var addFolder = _this.props.addFolder;

      var index = { groupIndex: data };
      addFolder(index);
    };

    _this.openSelectWidget = function () {
      _this.setState({
        showModal: true
      });
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

    _this.moveItemDrag = function (id, preParentId, preType, afterId, parentId, afterType, ifIntoFile, timeFlag, dataFolder) {
      var data = { id: id, preParentId: preParentId, preType: preType, afterId: afterId, parentId: parentId, afterType: afterType, ifIntoFile: ifIntoFile, timeFlag: timeFlag, dataFolder: dataFolder };
      var _this$props = _this.props,
          moveService = _this$props.moveService,
          openFolder = _this$props.openFolder;

      moveService(data);
      preType === 3 && afterType === 2 && timeFlag && dataFolder && openFolder(dataFolder);
    };

    _this.addFolderDrag = function (groupIndex, id, preParentId, preType, afterId, parentId, afterType) {
      var data = { groupIndex: groupIndex, id: id, preParentId: preParentId, preType: preType, afterId: afterId, parentId: parentId, afterType: afterType };
      var addFolder = _this.props.addFolder;

      addFolder(data);
    };

    _this.editTitle = function (id, name) {
      var data = { id: id, name: name };
      var editTitle = _this.props.editTitle;

      editTitle(data);
    };

    _this.widgeOnclick = function (e, da) {
      var _this$props2 = _this.props,
          index = _this$props2.index,
          setCurrGroupIndex = _this$props2.setCurrGroupIndex;

      setCurrGroupIndex(index);
      if (e.target.getAttribute("name") == "file") {
        _this.props.openFolder(da);
      }
    };

    _this.popSave = function (data) {};

    _this.popClose = function () {
      _this.setState({
        showModal: false
      });
    };

    _this.state = {
      showModal: false,
      moveLine: 'none',
      checkId: ''
    };
    return _this;
  }

  // 添加文件夹


  WidgetList.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        manageList = _props.manageList,
        curEditFolderId = _props.curEditFolderId,
        selectList = _props.selectList,
        selectGroup = _props.selectGroup,
        currEditonlyId = _props.currEditonlyId,
        title = _props.title,
        drag = _props.drag,
        dragState = _props.dragState,
        deleteFolder = _props.deleteFolder,
        renameFolder = _props.renameFolder,
        setFolderEdit = _props.setFolderEdit,
        selectListActions = _props.selectListActions,
        selectGroupActions = _props.selectGroupActions,
        cancelFolderEdit = _props.cancelFolderEdit,
        openFolder = _props.openFolder,
        setEditonlyId = _props.setEditonlyId,
        setDragInputState = _props.setDragInputState,
        addFolder = _props.addFolder,
        delectService = _props.delectService,
        applicationsMap = _props.applicationsMap,
        allServicesByLabelGroup = _props.allServicesByLabelGroup,
        getAllServicesByLabelGroup = _props.getAllServicesByLabelGroup,
        setCurrentSelectWidgetMap = _props.setCurrentSelectWidgetMap,
        addDesk = _props.addDesk,
        requestSuccess = _props.requestSuccess,
        requestError = _props.requestError,
        currGroupIndex = _props.currGroupIndex,
        folderBgSrc = _props.folderBgSrc;

    var widgetItemProps = {
      manageList: manageList,
      curEditFolderId: curEditFolderId,
      selectList: selectList,
      selectGroup: selectGroup,
      currGroupIndex: currGroupIndex,
      title: title,
      drag: drag,
      deleteFolder: deleteFolder,
      renameFolder: renameFolder,
      setFolderEdit: setFolderEdit,
      selectListActions: selectListActions, selectGroupActions: selectGroupActions,
      addFolder: addFolder,
      delectService: delectService
    };
    var widgetFileProps = {
      manageList: manageList,
      curEditFolderId: curEditFolderId,
      selectList: selectList,
      selectGroup: selectGroup,
      currEditonlyId: currEditonlyId,
      drag: drag,
      dragState: dragState,
      deleteFolder: deleteFolder,
      renameFolder: renameFolder,
      setFolderEdit: setFolderEdit, selectListActions: selectListActions, selectGroupActions: selectGroupActions,
      cancelFolderEdit: cancelFolderEdit,
      openFolder: openFolder,
      setEditonlyId: setEditonlyId,
      setDragInputState: setDragInputState,
      folderBgSrc: folderBgSrc
    };
    var selectWidgetListProps = {
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
    var _props2 = this.props,
        data = _props2.data,
        index = _props2.index;
    // const pop_btn = [
    //   {label:"确认",fun:this.popSave,className:""},
    //   {label:"取消",fun:this.popClose,className:""}
    // ]   //设置操作按钮

    // const { data } = this.props;

    var list = data.map(function (item, i) {
      var type = item.type,
          parentId = item.parentId,
          id = item.widgetId,
          name = item.widgetName;

      switch (type) {
        case 2:
          return _react2["default"].createElement(_widgeFileItem2["default"], _extends({
            key: 'widget-file-' + id + '-' + i,
            data: item,
            id: id,
            parentId: parentId,
            index: id,
            drag: drag,
            propsIndex: index,
            type: type,
            savePosition: _this2.savePosition,
            moveLine: _this2.moveLine(id, _this2.state.moveLine),
            moveItemDrag: _this2.moveItemDrag,
            editTitle: _this2.editTitle,
            onClick: function onClick(e) {
              _this2.widgeOnclick(e, item);
            }
          }, widgetFileProps));
        default:
          return _react2["default"].createElement(_widgetItem2["default"], _extends({
            ref: id,
            drag: drag,
            key: 'widget-' + id + '-' + i,
            data: item,
            id: id,
            parentId: parentId,
            index: id,
            propsIndex: index,
            type: type,
            savePosition: _this2.savePosition,
            moveLine: _this2.moveLine(id, _this2.state.moveLine),
            moveItemDrag: _this2.moveItemDrag,
            editTitle: _this2.editTitle,
            addFolderDrag: _this2.addFolderDrag
          }, widgetItemProps));
      }
    });

    var _da = {};
    // let _parentId = "";
    // if(this.props.data.length != 0){
    //   _parentId = this.props.data[0].parentId;
    //   console.log("this.props.data[0].parentId ---- " + this.props.data[0].parentId );
    // }

    return _react2["default"].createElement(
      'ul',
      { className: _style.widgetList + ' ' + _style.clearfix },
      list,
      _react2["default"].createElement(
        'div',
        { className: _style.addModule, onClick: this.openSelectWidget },
        _react2["default"].createElement(_icon2["default"], { title: '\u6DFB\u52A0\u5FEB\u6377\u65B9\u5F0F\u81F3\u9996\u9875', type: 'add' })
      ),
      _react2["default"].createElement(
        _pop2["default"],
        { className: _style.pop_dialog_widge_list, type: 'info', title: '\u6DFB\u52A0\u5FEB\u6377\u65B9\u5F0F\u81F3\u9996\u9875', close: this.popClose, backdrop: false, show: this.state.showModal, data: _da },
        _react2["default"].createElement(_manageSelectWidgetList2["default"], _extends({ close: this.popClose, parentId: this.props.parentId
        }, selectWidgetListProps))
      )
    );
  };

  return WidgetList;
}(_react.Component);

exports["default"] = WidgetList;
module.exports = exports['default'];