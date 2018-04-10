'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouterDom = require('react-router-dom');

var _reactDnd = require('react-dnd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style.css');

var _style = {
  'widgetItem': 'widgetItem__style___2cyTQ',
  'widgetFileItem': 'widgetFileItem__style___tICaL',
  'title': 'title__style___zm0G2',
  'title_right': 'title_right__style___UBFBm',
  'file_title_right': 'file_title_right__style___19Ee7',
  'widget_node': 'widget_node__style___ToqKk',
  'content': 'content__style___2LRlu',
  'context': 'context__style___3qrT9',
  'bottom': 'bottom__style___11bvF',
  'file_context': 'file_context__style___3J9Fp',
  'footer': 'footer__style___1aaeU',
  'editDele': 'editDele__style___2JgLz',
  'title_cont': 'title_cont__style___1Rfqr',
  'edit_cont': 'edit_cont__style___j4ID9',
  'edit_btn': 'edit_btn__style___1Gga9',
  'title_edit': 'title_edit__style___2H-6e',
  'clearfix': 'clearfix__style___3Dpug',
  'addModule': 'addModule__style___2YCGI',
  'widgetList': 'widgetList__style___3skJU',
  'pop_dialog_widge_list': 'pop_dialog_widge_list__style___3h0GN',
  'btn': 'btn__style___2hXhq'
};

var _widgetItem = require('./widgetItem');

var _widgetItem2 = _interopRequireDefault(_widgetItem);

var _checkbox = require('../../bee/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _formControl = require('../../bee/form-control');

var _formControl2 = _interopRequireDefault(_formControl);

var _button = require('../../bee/button');

var _button2 = _interopRequireDefault(_button);

var _pop = require('../../pop');

var _pop2 = _interopRequireDefault(_pop);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button3 = require('../../button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var type = 'item';
var itemSource = {
  beginDrag: function beginDrag(props) {
    return { id: props.id, parentId: props.parentId, type: props.preType || props.type };
  }
};

var itemTarget = {
  drop: function drop(props, monitor, component) {
    var ifIntoFile = props.moveLine;
    var draggedId = monitor.getItem().id;
    var previousParentId = monitor.getItem().parentId;
    var preType = monitor.getItem().type;
    var preFolderType = monitor.getItem().folderType;
    //添加大于1.5s的标记 判断是否拖入文件夹里面
    var timeFlag = ifIntoFile == 'center'; //||(new Date().getTime() - timestamp > 1500);
    if (draggedId !== props.id && preFolderType !== "folder" && preType !== 1) {
      props.moveItemDrag(draggedId, previousParentId, preType, props.id, props.data.parentId, props.data.type, ifIntoFile, timeFlag, props.data);
    }
    // return { moveLine: timeFlag }
  },

  // canDrop(props,monitor){
  //   const draggedId = monitor.getItem().id;
  //   const previousParentId = monitor.getItem().parentId;
  //   const preType = monitor.getItem().type;
  //   const preFolderType = monitor.getItem().folderType;
  //   return (draggedId !== props.id && preType!==2) 
  // },
  hover: function hover(props, monitor, component) {
    var clientOffset = monitor.getClientOffset();
    var componentRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect();
    var xGap = componentRect.left - clientOffset.x;
    var yGap = componentRect.top - clientOffset.y;
    var dirDistance = 176;
    var moveLine = 'none';
    if (Math.abs(xGap) < dirDistance) {
      if (Math.abs(xGap) < dirDistance / 3) {
        moveLine = 'left';
      } else if (Math.abs(xGap) < dirDistance / 3 * 2) {
        moveLine = 'center';
      } else {
        moveLine = 'right';
      }
    }
    if (new Date().getTime() % 10 == 0) {
      props.savePosition(props.id, moveLine);
    }
  }
};

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
    // offSet:monitor.getClientOffset(),
  };
}

function collectTaget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    getItemType: monitor.getItem(),
    offSet: monitor.getDifferenceFromInitialOffset(),
    offSet2: monitor.getClientOffset()
  };
}

var WidgeFileItem = function (_Component) {
  _inherits(WidgeFileItem, _Component);

  function WidgeFileItem(props) {
    _classCallCheck(this, WidgeFileItem);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.fileEdit = function (e) {
      e.stopPropagation();
      var _this$props = _this.props,
          setFolderEdit = _this$props.setFolderEdit,
          data = _this$props.data,
          setEditonlyId = _this$props.setEditonlyId;

      setFolderEdit(data.widgetId);
      setEditonlyId(data.widgetId);
      _this.setState({
        editShow: true
      });
    };

    _this.inputOnChange = function (e) {
      _this.setState({
        value: e
      });
    };

    _this.fileDele = function () {
      _this.setState({
        showModal: true
      });
    };

    _this.save = function (e) {
      //TODO 此处最好只处理一次即可。setState
      _this.setState({
        editShow: false
      });
      var data = {
        id: _this.props.data.widgetId,
        value: _this.state.value
      };
      var _this$props2 = _this.props,
          renameFolder = _this$props2.renameFolder,
          setEditonlyId = _this$props2.setEditonlyId;

      renameFolder(data);
      setEditonlyId("");
    };

    _this.close = function (e) {
      var _this$props3 = _this.props,
          cancelFolderEdit = _this$props3.cancelFolderEdit,
          setEditonlyId = _this$props3.setEditonlyId;

      cancelFolderEdit(_this.props.data.widgetId);
      _this.setState({
        value: _this.props.data.widgetName,
        editShow: false
      });
      setEditonlyId("");
    };

    _this.popSave = function (data) {
      // this.state.data
      var deleteFolder = _this.props.deleteFolder;

      deleteFolder(data.widgetId);
    };

    _this.popClose = function () {
      _this.setState({
        showModal: false
      });
    };

    _this.isContained = function (a, b) {
      if (!(a instanceof Array) || !(b instanceof Array)) return false;
      if (a.length < b.length) return false;
      var aStr = a.toString();
      for (var i = 0, len = b.length; i < len; i++) {
        if (aStr.indexOf(b[i]) == -1) return false;
      }
      return true;
    };

    _this.onHandChange = function (flag) {
      var _this$props4 = _this.props,
          selectList = _this$props4.selectList,
          selectGroup = _this$props4.selectGroup,
          selectListActions = _this$props4.selectListActions,
          selectGroupActions = _this$props4.selectGroupActions,
          propsIndex = _this$props4.propsIndex,
          manageList = _this$props4.manageList;
      var widgetId = _this.props.data.widgetId;

      var selectList2 = void 0;
      if (!flag) {
        selectList2 = selectList.filter(function (item, i) {
          return item !== widgetId;
        });
        var selectGroup2 = selectGroup.filter(function (item, i) {
          return propsIndex !== item;
        });
        selectGroupActions(selectGroup2);
      } else {
        selectList2 = [widgetId].concat(_toConsumableArray(selectList));
        // 判断当前分组下的子节点是否都在selectList中
        var newArr = manageList[propsIndex].children.map(function (item, index) {
          return item.widgetId;
        });
        if (_this.isContained(selectList2, newArr)) {
          selectGroup.push(propsIndex);
          selectGroupActions(selectGroup);
        }
      }
      selectListActions(selectList2);
    };

    _this.handleFocus = function () {
      var _this$props5 = _this.props,
          setDragInputState = _this$props5.setDragInputState,
          dragState = _this$props5.dragState;

      if (!dragState) return;
      setDragInputState(false);
    };

    _this.handleBlur = function () {
      var _this$props6 = _this.props,
          setDragInputState = _this$props6.setDragInputState,
          dragState = _this$props6.dragState;

      if (dragState) return;
      setDragInputState(true);
    };

    _this.popSave = _this.popSave.bind(_this);
    _this.popClose = _this.popClose.bind(_this);
    var ed = true;
    if (props.curEditFolderId) {
      ed = true;
    } else {
      ed = false;
    }

    _this.state = {
      value: props.data.widgetName,
      editShow: ed,
      showModal: false,
      timer: 0,
      timeEnough: false,
      position: {},
      moveLine: 'none'
    };
    return _this;
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   if( nextProps.isOver && this.props.moveLine === nextProps.moveLine){
  //     return false
  //   }
  //   return true
  // }

  WidgeFileItem.prototype.componentDidMount = function componentDidMount() {
    var position = (0, _reactDom.findDOMNode)(this).getBoundingClientRect();
    this.setState({
      position: {
        x: position.x,
        y: position.y
      }
    });
  };

  WidgeFileItem.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.curEditFolderId !== this.props.data.widgetId) {
      this.setState({
        editShow: false
      });
    }
    if (nextProps.isOver == true) {
      var position = (0, _reactDom.findDOMNode)(this).getBoundingClientRect();
      this.setState({
        position: {
          x: position.x,
          y: position.y
        }
      });
    }
    var _props = this.props,
        canDrop = _props.canDrop,
        isDragging = _props.isDragging,
        isOver = _props.isOver,
        getItemType = _props.getItemType;
    // if( nextProps.isOver == true && getItemType.type !== 2){
    //   var timer = setTimeout(()=>{
    //     this.setState({
    //       timeEnough:true,
    //     })
    //   },1500)
    //   this.setState({
    //     timer 
    //   })
    // }else{
    //   clearTimeout(this.state.timer);
    //   this.setState({
    //     timer: 0,
    //     timeEnough:false,
    //   })
    // }

    if (nextProps.isOver == true && nextProps.moveLine !== 'none') {
      if (nextProps.moveLine == 'left') {
        this.setState({
          moveLine: 'left',
          timeEnough: false
        });
      } else if (nextProps.moveLine == 'center') {
        this.setState({
          timeEnough: true
        });
        if (getItemType.type == 2 || getItemType.folderType == "folder") {
          this.setState({
            moveLine: 'none',
            timeEnough: false
          });
        }
      } else {
        this.setState({
          moveLine: 'right',
          timeEnough: false
        });
      }
      if (getItemType.dragType == 'dragInFolder') {
        this.setState({
          moveLine: 'none',
          timeEnough: false
        });
      }
      if (getItemType.type === 1) {
        this.setState({
          moveLine: 'none',
          timeEnough: false
        });
      }
    } else {
      this.setState({
        moveLine: 'none',
        timeEnough: false
      });
    }
  };
  //点击文件夹编辑按钮


  //输入框修改data数据源

  //输入框聚焦更改背景颜色

  // 输入框失焦


  WidgeFileItem.prototype.render = function render() {
    var _this2 = this;

    var da = this.props.data;
    var id = da.widgetId;
    var _props2 = this.props,
        selectList = _props2.selectList,
        dragState = _props2.dragState;

    var checkType = selectList.indexOf(id) > -1 ? true : false;
    var pop_btn = [{ label: "确认", fun: this.popSave, className: "" }, { label: "取消", fun: this.popClose, className: "" }]; //设置操作按钮

    var edit = _react2["default"].createElement(
      'div',
      { className: _style.edit_cont },
      _react2["default"].createElement(_formControl2["default"], { className: _style.form_control + ' input', value: this.state.value, onChange: this.inputOnChange, onFocus: this.handleFocus, onBlur: this.handleBlur }),
      _react2["default"].createElement(
        _button3.ButtonCheckSelected,
        { className: _style.btn, onClick: this.save },
        _react2["default"].createElement(_icon2["default"], { type: 'right' })
      ),
      _react2["default"].createElement(
        _button3.ButtonCheckClose,
        { className: _style.btn, onClick: this.close },
        _react2["default"].createElement(_icon2["default"], { type: 'cancel' })
      )
    );

    var btns = _react2["default"].createElement(
      'div',
      { className: _style.clearfix + ' ' + _style.footer },
      _react2["default"].createElement(
        'div',
        null,
        _react2["default"].createElement(_checkbox2["default"], { className: 'test', size: 'sm', checked: checkType, onChange: this.onHandChange })
      ),
      _react2["default"].createElement(
        'div',
        { className: _style.editDele + ' ' + _style.clearfix },
        _react2["default"].createElement(
          'div',
          { onClick: this.fileEdit },
          _react2["default"].createElement(_icon2["default"], { title: '\u91CD\u547D\u540D\u6587\u4EF6\u5939', type: 'record' })
        ),
        _react2["default"].createElement(
          'div',
          { onClick: function onClick() {
              _this2.popSave(da);
            } },
          _react2["default"].createElement(_icon2["default"], { title: '\u5220\u9664\u6587\u4EF6\u5939', type: 'dustbin' })
        )
      )
    );
    var _props3 = this.props,
        connectDragSource = _props3.connectDragSource,
        connectDropTarget = _props3.connectDropTarget,
        isDragging = _props3.isDragging,
        drag = _props3.drag,
        isOver = _props3.isOver,
        canDrop = _props3.canDrop,
        offSet = _props3.offSet,
        offSet2 = _props3.offSet2;
    var position = this.state.position;

    var opacity = isDragging ? 0 : 1;
    var styleOver = {},
        styleOverLine = {};
    if (isDragging) {}
    // return null

    // ${isDragging ? 'rollOut':'slideInRight'}
    if (isOver && canDrop) {
      if (this.state.timeEnough) {
        styleOver = {
          'opacity': '0.7',
          'boxShadow': '0 0 0 5px #ddd,0 0 0 8px rgba(0,205,195,1)',
          'transform': 'scale(1.01,1.01)'
        };
      }
      // if(offSet){
      //   if(offSet.x <0 ){
      //     var styleOverLine = {
      //       'transform': 'scale(1,1)',
      //       'boxShadow' :'-5px 0 0 0 #ddd,-8px 0 0 0 #fff',
      //     }
      //   }
      //   if(offSet.x >0 ){
      //     var styleOverLine = {
      //       'transform': 'scale(1,1)',
      //       'boxShadow' :'5px 0 0 0 #ddd,8px 0 0 0 #fff',
      //     }
      //   }
      // }
      if (this.state.moveLine !== 'none') {
        if (this.state.moveLine == 'left') {
          styleOverLine = {
            'transform': 'scale(1,1)',
            'boxShadow': '-3px 0 0 0 #ddd,-6px 0 0 0 rgba(0,205,195,1)',
            'borderRadius': '0'
          };
        }
        if (this.state.moveLine == 'right') {
          styleOverLine = {
            'transform': 'scale(1,1)',
            'boxShadow': '3px 0 0 0 #ddd,6px 0 0 0 rgba(0,205,195,1)',
            'borderRadius': '0'
          };
        }
      } else {
        styleOverLine = {
          'transform': 'scale(1,1)',
          'boxShadow': '0 0 0 0 #ddd,0 0 0 0 #ddd'
        };
      }
    }
    var folderBgSrc = this.props.folderBgSrc;

    var pngImport = { backgroundImage: 'url("' + folderBgSrc + '")', 'backgroundRepeat': 'no-repeat' };
    var _html = _react2["default"].createElement(
      'li',
      { name: 'file', className: _style.widgetItem + ' ' + _style.widgetFileItem + ' animated ' + (isDragging ? 'zoomOut' : 'zoomIn') + ' ' + drag + ' ', style: _extends({}, opacity, styleOverLine, styleOver, pngImport), onClick: this.props.onClick },
      _react2["default"].createElement(
        'div',
        { className: _style.title },
        _react2["default"].createElement(
          'div',
          { className: _style.title_right + ' ' + _style.file_title_right },
          ' ',
          da.widgetName,
          ' '
        )
      ),
      this.props.currEditonlyId == id ? edit : null,
      this.props.currEditonlyId == id ? null : btns,
      _react2["default"].createElement(
        _pop2["default"],
        { className: 'pop_dialog_delete', show: this.state.showModal, type: 'delete', close: this.popClose, data: da, btns: pop_btn },
        _react2["default"].createElement(
          'div',
          { className: 'pop_cont' },
          _react2["default"].createElement(
            'span',
            null,
            '\u60A8\u786E\u8BA4\u8981\u5220\u9664\u670D\u52A1[',
            this.props.data.widgetName,
            ']?'
          )
        )
      )
    );
    return dragState ? connectDragSource(connectDropTarget(_html)) : _html;
  };

  return WidgeFileItem;
}(_react.Component);

//export default WidgeFileItem;


exports["default"] = (0, _reactDnd.DragSource)(type, itemSource, collectSource)((0, _reactDnd.DropTarget)(type, itemTarget, collectTaget)(WidgeFileItem));
module.exports = exports['default'];