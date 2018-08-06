'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _menus = require('../../bee/menus');

var _menus2 = _interopRequireDefault(_menus);

var _dropdown = require('../../bee/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _pop = require('../../pop');

var _pop2 = _interopRequireDefault(_pop);

var _button = require('../../bee/button');

var _button2 = _interopRequireDefault(_button);

var _button3 = require('../../button');

var _utils = require('../../utils');

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = require('../../bee/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _message = require('../../bee/message');

var _message2 = _interopRequireDefault(_message);

var _manageWidgetList = require('../manageWidgetList');

var _manageWidgetList2 = _interopRequireDefault(_manageWidgetList);

require('./style.css');

var _style = {
  'widgetTitle': 'widgetTitle__style___5B_lc',
  'addBtn': 'addBtn__style___1pYRJ',
  'addGroupBtn': 'addGroupBtn__style___3RkOC',
  'titleInputArea': 'titleInputArea__style___3_qnw',
  'input': 'input__style___1eXYC',
  'newGroupName': 'newGroupName__style___gKFWe',
  'newGroupName_focus': 'newGroupName_focus__style___2OcOs',
  'newGroupName_blur': 'newGroupName_blur__style___1QJJD',
  'btn': 'btn__style___1NAHM',
  'icon': 'icon__style___3S22Q',
  'groupArea': 'groupArea__style___3NyCg',
  'selectedBackClass': 'selectedBackClass__style___QJZ17',
  'iconBox': 'iconBox__style___CwgKm',
  'widgetTitleInit': 'widgetTitleInit__style___3JKUO',
  'check_group': 'check_group__style___2btKQ'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function findItemById(manageList, id) {
  var dataItem = void 0;
  for (var i = 0; i < manageList.length; i++) {
    if (manageList[i].children) {
      dataItem = findItemById(manageList[i].children, id);
    }
    if (dataItem) {
      break;
    }
    if (manageList[i].widgetId && manageList[i].widgetId === id) {
      dataItem = manageList[i];
      break;
    }
  }
  return dataItem;
}
var type = 'item';

var itemSource = {
  beginDrag: function beginDrag(props, monitor) {
    return { id: props.id, type: props.type, parentId: props.parentId, folderType: props.folderType };
  }
};

var itemTarget = {
  drop: function drop(props, monitor) {
    var draggedId = monitor.getItem().id;
    var preParentId = monitor.getItem().parentId;
    var draggedType = monitor.getItem().type;
    var folderType = monitor.getItem().folderType;
    var afterParentId = props.data.parentId;

    if (draggedId !== props.id && draggedType === 1 && props.data.type === 1) {
      props.moveGroupDrag(draggedId, props.id);
    } else if ((draggedType === 2 || draggedType === 3) && props.data.type === 1) {
      !props.data.parentId && (afterParentId = props.data.widgetId);
      //因为冒泡 所以已经有的话 不需要执行move
      var dataItem = findItemById(props.data.children, draggedId);
      if (folderType === "folder" || typeof dataItem === "undefined" || dataItem && dataItem.widgetId !== draggedId) {
        //folderType==="folder" 从文件夹把元素往分组里拖拽
        props.moveItemDrag(draggedId, preParentId, draggedType, props.id, afterParentId, props.data.type);
      }
    }
  }
};

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function collectTaget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    getItemType: monitor.getItem()
  };
}

Array.prototype.distinct = function () {
  var arr = this,
      i,
      obj = {},
      result = [],
      len = arr.length;
  for (i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      result.push(arr[i]);
    }
  }
  return result;
};

var ManageGroup = function (_Component) {
  _inherits(ManageGroup, _Component);

  function ManageGroup(props) {
    _classCallCheck(this, ManageGroup);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.openRenameGroupFn = function (id) {
      var setEditonlyId = _this.props.setEditonlyId;

      setEditonlyId(id);
      setTimeout(function () {
        _this.refs.groupName.focus();
        _this.refs.groupName.select();
      }, 0);
      _this.setState({
        inFoucs: false
      });
    };

    _this.renameGroupCancel = function (index) {
      var _this$props = _this.props,
          renameGroup = _this$props.renameGroup,
          setEditonlyId = _this$props.setEditonlyId;
      var groupName = _this.props.data.widgetName;

      var stateGroupName = _this.state.groupName;
      _this.setState({
        groupName: groupName ? groupName : stateGroupName
      });
      setEditonlyId("");
      if (!groupName) {
        renameGroup({
          index: index,
          name: stateGroupName
        });
      }
      _this.setState({
        inFoucs: false
      });
    };

    _this.renameGroupFn = function (index) {
      var _this$props2 = _this.props,
          renameGroup = _this$props2.renameGroup,
          manageList = _this$props2.manageList;

      var name = _this.state.groupName;
      if (name == manageList[index].widgetName) {
        _this.renameGroupCancel(index);
        return false;
      }
      var widgetNameArr = manageList.map(function (item, index) {
        return item.widgetName;
      });
      if (widgetNameArr.includes(name)) {
        _message2["default"].create({ content: '分组名称已存在!', duration: 1.5, position: 'topLeft', color: "warning", style: { height: 'auto' } });
        return false;
      }
      renameGroup({
        index: index,
        name: name
      });
      _this.renameGroupCancel(index);
    };

    _this.clearInput = function () {
      _this.setState({
        groupName: ""
      });
    };

    _this.editGroupName = function (e) {
      var _groupName = e.target.value;
      // _groupName = getStrLenSubstr(_groupName,11,21,true)
      _this.setState({
        groupName: _groupName
      });
    };

    _this.handleFocus = function () {
      _this.setState({
        inFoucs: true
      });
      var _this$props3 = _this.props,
          setDragInputState = _this$props3.setDragInputState,
          dragState = _this$props3.dragState;

      if (!dragState) return;
      setDragInputState(false);
    };

    _this.handleBlur = function () {
      _this.setState({
        inFoucs: false
      });
      var _this$props4 = _this.props,
          setDragInputState = _this$props4.setDragInputState,
          dragState = _this$props4.dragState;

      if (dragState) return;
      setDragInputState(true);
    };

    _this.selectFn = function (e, index) {
      var _this$props5 = _this.props,
          selectListActions = _this$props5.selectListActions,
          manageList = _this$props5.manageList,
          selectList = _this$props5.selectList,
          selectGroup = _this$props5.selectGroup,
          selectGroupActions = _this$props5.selectGroupActions;
      //const checkFlag = e.target.checked;
      // 换成checkbox插件

      var checkFlag = e;
      var aa = manageList[index].children.map(function (item, index) {
        return item.widgetId;
      });
      if (checkFlag) {
        selectGroup.push(index);
        selectGroupActions(selectGroup);
        if (!!window.ActiveXObject || "ActiveXObject" in window) {
          //ie?
          selectList = Array.from(selectList.concat(aa).distinct());
        } else {
          selectList = Array.from(new Set(selectList.concat(aa)));
        }
      } else {
        selectList = selectList.filter(function (v) {
          return !aa.includes(v);
        });
        var selectGroup2 = selectGroup.filter(function (item, i) {
          return index !== item;
        });
        selectGroupActions(selectGroup2);
      }
      selectListActions(selectList);
    };

    _this.popOpen = function () {
      _this.setState({
        showModal: true
      });
    };

    _this.popClose = function () {
      _this.setState({
        showModal: false
      });
    };

    _this.moveTopFn = function (index) {
      var moveTopGroup = _this.props.moveTopGroup;

      moveTopGroup(index);
    };

    _this.moveBottomFn = function (index) {
      var moveBottomGroup = _this.props.moveBottomGroup;

      moveBottomGroup(index);
    };

    _this.delectGroupFn = function (index) {
      var delectGroup = _this.props.delectGroup;

      delectGroup(index);
    };

    _this.onDropSelect = function (index) {
      return function (_ref) {
        var key = _ref.key;

        switch (key) {
          case '1':
            _this.moveBottomFn(index);
            break;
          case '2':
            _this.moveTopFn(index);
            break;
          default:
            _this.delectGroupFn(index);
            break;
        }
      };
    };

    _this.renderDrop = function (index) {
      var manageList = _this.props.manageList;

      var menu = _react2["default"].createElement(
        _menus2["default"],
        { onClick: _this.onDropSelect(index) },
        index !== manageList.length - 1 ? _react2["default"].createElement(
          _menus.Item,
          { key: '1' },
          '\u4E0B\u79FB'
        ) : null,
        index ? _react2["default"].createElement(
          _menus.Item,
          { key: '2' },
          '\u4E0A\u79FB'
        ) : null,
        _react2["default"].createElement(
          _menus.Item,
          { key: '3' },
          '\u5220\u9664'
        )
      );

      // btnSelectedFun=()=>{
      //    this.btn_selected.onClick()
      // }

      return _react2["default"].createElement(
        _dropdown2["default"],
        {
          trigger: ['click'],
          overlay: menu,
          animation: 'slide-up' },
        _react2["default"].createElement(
          'div',
          null,
          _react2["default"].createElement(_icon2["default"], { title: '\u66F4\u591A', type: 'more' })
        )
      );
    };

    _this.state = {
      groupName: "",
      inFoucs: false,
      showModal: false,
      selectGroup: [],
      selectList: []
    };
    return _this;
  }

  ManageGroup.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        _props$data = _props.data,
        widgetName = _props$data.widgetName,
        isNew = _props$data.isNew,
        manageList = _props.manageList;


    if (isNew) {
      setTimeout(function () {

        var nameArr = manageList.map(function (_ref2) {
          var widgetName = _ref2.widgetName;

          return widgetName;
        });
        var newGroupName = (0, _utils.avoidSameName)(nameArr, '分组');
        _this2.setState({
          groupName: newGroupName
        });
        _this2.refs.groupName.focus();
        _this2.refs.groupName.select();

        var _props2 = _this2.props,
            checkFun = _props2.checkFun,
            currEditonlyId = _props2.currEditonlyId;

        checkFun(currEditonlyId + "_btn");
      }, 0);
    } else {
      this.setState({
        groupName: widgetName
      });
    }
  };

  ManageGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.currEditonlyId !== nextProps.currEditonlyId && this.props.data.isNew) {
      this.props.renameGroup({
        id: this.props.data.widgetId,
        name: this.state.groupName == "" ? this.props.data.widgetName : this.state.groupName,
        dontChangeCurrEditonlyId: true
      });
      this.setState({
        inFoucs: false
      });
    }
  };
  // 添加文件夹


  ManageGroup.prototype.addFolderFn = function addFolderFn(groupIndex) {
    var addFolder = this.props.addFolder;

    addFolder({ groupIndex: groupIndex });
  };
  // 打开编辑分组形态

  // 点击取消编辑分组按钮

  // 点击按钮执行 action   重新构造

  //点击清空输入框

  // 输入框的更改

  //输入框聚焦更改背景颜色

  //输入框失焦


  // 选择框  选择

  // 上移分组

  // 下移分组

  // 删除群组


  // 添加新分组
  ManageGroup.prototype.addGroupFn = function addGroupFn(index) {
    var addGroup = this.props.addGroup;

    addGroup({ index: index });
  };
  // menu组件 方法


  ManageGroup.prototype.render = function render() {
    var _this3 = this;

    var _props3 = this.props,
        manageList = _props3.manageList,
        curEditFolderId = _props3.curEditFolderId,
        drag = _props3.drag,
        dragState = _props3.dragState,
        selectList = _props3.selectList,
        selectGroup = _props3.selectGroup,
        currEditonlyId = _props3.currEditonlyId,
        currGroupIndex = _props3.currGroupIndex,
        title = _props3.title,
        openFolder = _props3.openFolder,
        deleteFolder = _props3.deleteFolder,
        renameFolder = _props3.renameFolder,
        setFolderEdit = _props3.setFolderEdit,
        moveService = _props3.moveService,
        addFolder = _props3.addFolder,
        closeFolder = _props3.closeFolder,
        setCurrGroupIndex = _props3.setCurrGroupIndex,
        editTitle = _props3.editTitle,
        selectListActions = _props3.selectListActions,
        selectGroupActions = _props3.selectGroupActions,
        cancelFolderEdit = _props3.cancelFolderEdit,
        setEditonlyId = _props3.setEditonlyId,
        setDragInputState = _props3.setDragInputState,
        applicationsMap = _props3.applicationsMap,
        allServicesByLabelGroup = _props3.allServicesByLabelGroup,
        getAllServicesByLabelGroup = _props3.getAllServicesByLabelGroup,
        setCurrentSelectWidgetMap = _props3.setCurrentSelectWidgetMap,
        addDesk = _props3.addDesk,
        requestSuccess = _props3.requestSuccess,
        requestError = _props3.requestError,
        delectService = _props3.delectService,
        folderBgSrc = _props3.folderBgSrc;

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
    var _props4 = this.props,
        _props4$data = _props4.data,
        widgetId = _props4$data.widgetId,
        widgetName = _props4$data.widgetName,
        children = _props4$data.children,
        index = _props4.index,
        connectDragSource = _props4.connectDragSource,
        connectDropTarget = _props4.connectDropTarget,
        isDragging = _props4.isDragging;
    var _state = this.state,
        inFoucs = _state.inFoucs,
        groupName = _state.groupName,
        showModal = _state.showModal;

    var checkType = selectGroup.indexOf(index) > -1 ? true : false;
    var opacity = isDragging ? 0 : 1;
    var groupTitle = void 0;
    if (currEditonlyId == widgetId) {
      groupTitle = _react2["default"].createElement(
        'div',
        { className: _style.widgetTitle },
        _react2["default"].createElement(
          'div',
          { className: _style.titleInputArea },
          _react2["default"].createElement('input', {
            className: (inFoucs ? _style.newGroupName_focus : _style.newGroupName_blur) + ' ' + _style.newGroupName + ' input',
            value: groupName,
            maxLength: '4',
            autoFocus: 'autofocus',
            onChange: this.editGroupName,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            placeholder: '\u5206\u7EC4\u540D\u79F0,\u6700\u591A4\u4E2A\u5B57\u7B26',
            ref: 'groupName' })
        ),
        _react2["default"].createElement(
          _button3.ButtonCheckSelected,
          { id: widgetId + '_btn', className: _style.btn, onClick: function onClick() {
              _this3.renameGroupFn(index);
            } },
          _react2["default"].createElement(_icon2["default"], { type: 'right' })
        ),
        _react2["default"].createElement(
          _button3.ButtonCheckClose,
          { className: _style.btn, onClick: function onClick() {
              _this3.renameGroupCancel(index);
            } },
          _react2["default"].createElement(_icon2["default"], { type: 'cancel' })
        )
      );
    } else {
      groupTitle =
      // um-box-justify
      _react2["default"].createElement(
        'div',
        { className: _style.widgetTitle + ' ' + _style.widgetTitleInit + ' ' },
        _react2["default"].createElement(
          'div',
          { className: _style.check_group },
          _react2["default"].createElement(
            _checkbox2["default"],
            { checked: checkType, onChange: function onChange(e) {
                _this3.selectFn(e, index);
              } },
            widgetName
          )
        ),
        _react2["default"].createElement(
          'div',
          null,
          _react2["default"].createElement(
            'div',
            { className: _style.iconBox },
            _react2["default"].createElement(_icon2["default"], { title: '\u91CD\u547D\u540D\u5206\u7EC4', type: 'record', onClick: function onClick() {
                _this3.openRenameGroupFn(widgetId);
              } })
          ),
          _react2["default"].createElement(
            'div',
            { className: _style.iconBox },
            _react2["default"].createElement(_icon2["default"], { title: '\u6DFB\u52A0\u6587\u4EF6\u5939', type: 'add-files', onClick: this.addFolderFn.bind(this, index) })
          ),
          this.renderDrop(index)
        )
      );
    }

    var pop_btn = [{
      label: "确认",
      fun: this.delectGroupFn,
      className: ""
    }, {
      label: "取消",
      fun: this.popClose,
      className: ""
    }];

    if (isDragging) {
      //return null
    }

    var _props5 = this.props,
        isOver = _props5.isOver,
        getItemType = _props5.getItemType;

    var overStyle = {};
    if (isOver && getItemType.type === 1) {
      overStyle = {
        'transform': 'scale(1,1)',
        'boxShadow': '0 0 0 3px #ddd,0 0 0 6px rgba(0,205,195,1)',
        'borderRadius': '0'
      };
    }
    var _html = _react2["default"].createElement(
      'div',
      { className: _style.groupArea + ' animated zoomIn', style: _extends({}, overStyle) },
      _react2["default"].createElement(
        'section',
        { style: _extends({}, opacity), className: inFoucs ? _style.selectedBackClass : "" },
        groupTitle,
        _react2["default"].createElement(
          'div',
          null,
          _react2["default"].createElement(_manageWidgetList2["default"], _extends({ index: index, data: children, parentId: this.props.data.widgetId
          }, widgetListProps, widgetSelectListProps))
        )
      ),
      _react2["default"].createElement(
        'div',
        { className: _style.addBtn },
        _react2["default"].createElement(
          _button3.ButtonDefaultWhite,
          { className: _style.addGroupBtn, onClick: this.addGroupFn.bind(this, index) },
          _react2["default"].createElement(_icon2["default"], { type: 'add' }),
          '\u6DFB\u52A0\u5206\u7EC4'
        )
      ),
      _react2["default"].createElement(
        _pop2["default"],
        { className: 'pop_dialog_delete', show: showModal, type: 'delete', close: this.popClose, btns: pop_btn, data: { index: index } },
        _react2["default"].createElement(
          'div',
          { className: 'pop_cont' },
          _react2["default"].createElement(
            'span',
            null,
            '\u60A8\u786E\u8BA4\u8981\u5220\u9664\u6B64\u9879?'
          )
        )
      )
    );
    return dragState ? connectDragSource(connectDropTarget(_html)) : _html;
  };

  return ManageGroup;
}(_react.Component);

ManageGroup.propTypes = {
  connectDragSource: _propTypes2["default"].func.isRequired,
  connectDropTarget: _propTypes2["default"].func.isRequired,
  index: _propTypes2["default"].number.isRequired,
  isDragging: _propTypes2["default"].bool.isRequired,
  id: _propTypes2["default"].any.isRequired
};
exports["default"] = (0, _reactDnd.DragSource)(type, itemSource, collectSource)((0, _reactDnd.DropTarget)(type, itemTarget, collectTaget)(ManageGroup));
module.exports = exports['default'];