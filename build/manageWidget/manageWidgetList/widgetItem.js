'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDnd = require('react-dnd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = require('../../bee/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _pop = require('../../pop');

var _pop2 = _interopRequireDefault(_pop);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var widgetStyle = [
// 小
{
  width: 176
},
// 中
{
  width: 360
},
// 大
{
  width: 360,
  height: 360
}];

var type = 'item';
var timestamp;
var itemSource = {
  beginDrag: function beginDrag(props, monitor, component) {
    //let diffOffset = monitor.getDifferenceFromInitialOffset();
    // props.editTitle(props.id,props.data.widgetName);
    timestamp = new Date().getTime();
    window.timestamp = timestamp;
    return { id: props.id, parentId: props.parentId, type: props.preType || props.type, folderType: props.folderType, dragType: props.dragType, props: props };
  },
  endDrag: function endDrag(props, monitor, component) {
    return { offSetItem: monitor.getDifferenceFromInitialOffset() };
  }
};
var itemTarget = {
  //hover 悬浮调用 drop落在目标上时调用
  hover: function hover(props, monitor, component) {
    var size = props.data.size;

    var dirDistance = widgetStyle[size - 1].width;
    var draggedId = monitor.getItem().id;
    var previousParentId = monitor.getItem().parentId;
    var preType = monitor.getItem().type;
    var targetId = props.id;
    var timeFlag = new Date().getTime();
    if (draggedId !== props.id) {
      component.setState({
        drag: 'fadeInLeft'
      });
      //let diff = monitor.getDifferenceFromInitialOffset();
      if (timeFlag - timestamp < 100) {
        //console.log(timeFlag - timeFlag);
        //props.editTitle(props.id,props.data.widgetName);
      }
    }
    var clientOffset = monitor.getClientOffset();
    var componentRect = 0;
    if (component) {
      componentRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect();
    }
    // const componentRect = findDOMNode(component).getBoundingClientRect();
    var xGap = componentRect.left - clientOffset.x;
    var yGap = componentRect.top - clientOffset.y;
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
  },
  drop: function drop(props, monitor, component) {
    var ifIntoFile = props.moveLine;
    var draggedId = monitor.getItem().id;
    var previousParentId = monitor.getItem().parentId;
    var preType = monitor.getItem().type;
    var preFolderType = monitor.getItem().folderType;
    var dragType = monitor.getItem().dragType;

    if (draggedId !== props.id && preType !== 1 && (preFolderType !== "folder" && props.folderType !== "folder" || dragType === "dragInFolder" && props.dragType == "dragInFolder")) {
      var timeOut = ifIntoFile == 'center'; //||(new Date().getTime() - timestamp > 1500);
      if (timeOut && preType === 3 && props.data.type === 3 && preFolderType !== "folder") {
        //放上去停留大于2s创建文件夹
        props.addFolderDrag("", draggedId, previousParentId, preType, props.id, props.data.parentId, props.data.type, timeOut);
      } else {
        props.moveItemDrag(draggedId, previousParentId, preType, props.id, props.data.parentId, props.data.type, ifIntoFile);
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
    canDrop: monitor.canDrop(),
    offSet: monitor.getDifferenceFromInitialOffset(),
    getItemType: monitor.getItem()
  };
}

function getItemStyles() {
  return {
    pointerEvents: 'none',
    background: 'red'
  };
}

var WidgetItem = function (_Component) {
  _inherits(WidgetItem, _Component);

  function WidgetItem(props) {
    _classCallCheck(this, WidgetItem);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.popSave = function (data) {
      var _this$props = _this.props,
          deleteFolder = _this$props.deleteFolder,
          type = _this$props.type,
          currGroupIndex = _this$props.currGroupIndex,
          delectService = _this$props.delectService,
          parentId = _this$props.parentId;

      if (type === "pop") {
        delectService({ index: currGroupIndex, folder: parentId, widgetId: data.widgetId });
      } else {
        deleteFolder(data.widgetId);
      }
      _this.setState({
        showModal: false
      });
    };

    _this.popClose = function () {
      _this.setState({
        showModal: false
      });
    };

    _this.fileDele = function () {
      _this.setState({
        showModal: true
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
      var _this$props2 = _this.props,
          selectList = _this$props2.selectList,
          selectGroup = _this$props2.selectGroup,
          selectListActions = _this$props2.selectListActions,
          selectGroupActions = _this$props2.selectGroupActions,
          propsIndex = _this$props2.propsIndex,
          manageList = _this$props2.manageList;
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

    _this.popSave = _this.popSave.bind(_this);
    _this.popClose = _this.popClose.bind(_this);

    _this.state = {
      showModal: false,
      title: '',
      timer: 0,
      timeEnough: false,
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


  WidgetItem.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _props = this.props,
        canDrop = _props.canDrop,
        isDragging = _props.isDragging,
        isOver = _props.isOver,
        getItemType = _props.getItemType,
        dragType = _props.dragType;
    // if( nextProps.isOver == true ){
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
    /*
    */

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
        if (getItemType.type == 2 || getItemType.dragType == 'dragInFolder') {
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
      if (getItemType.dragType == 'dragInFolder' && !dragType) {
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

  WidgetItem.prototype.render = function render() {
    var _this2 = this;

    var pop_btn = [{ label: "确认", fun: this.popSave, className: "" }, { label: "取消", fun: this.popClose, className: "" }]; //设置操作按钮

    var _props$data = this.props.data,
        id = _props$data.widgetId,
        size = _props$data.size,
        widgetName = _props$data.widgetName;
    var _props2 = this.props,
        connectDragSource = _props2.connectDragSource,
        connectDropTarget = _props2.connectDropTarget,
        isDragging = _props2.isDragging,
        selectList = _props2.selectList,
        drag = _props2.drag;

    var opacity = isDragging ? 0 : 1;
    var checkType = selectList.indexOf(id) > -1 ? true : false;
    if (isDragging) {
      // return null
    }
    var _props3 = this.props,
        isOver = _props3.isOver,
        canDrop = _props3.canDrop,
        offSet = _props3.offSet;

    var styleOverLine = {},
        styleOver = {};

    if (isOver && canDrop) {
      if (this.state.timeEnough) {
        styleOver = {
          'opacity': '0.7',
          'boxShadow': '0 0 0 5px #ddd,0 0 0 8px rgba(0,205,195,1)',
          'transform': 'scale(1.01,1.01)',
          'borderRadius': '0'
        };
      }
      // if(offSet){
      //   var styleOverLine = {
      //     'transform': 'scale(1,1)',
      //     'boxShadow' :'5px 0 0 0 #ddd,8px 0 0 0 #fff',
      //   }
      //   if(offSet.x <0){
      //     var styleOverLine = {
      //       'transform': 'scale(1,1)',
      //       'boxShadow' :'-5px 0 0 0 #ddd,-8px 0 0 0 #fff',
      //     }
      //   }
      // if(offSet.x>0){
      //   var styleOverLine = {
      //     'transform': 'scale(1,1)',
      //     'boxShadow' :'5px 0 0 0 #ddd,8px 0 0 0 #fff',
      //   }
      // }
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
    var title = this.state.title;

    return connectDragSource(connectDropTarget(_react2["default"].createElement(
      'li',
      { title: title, className: _style.widgetItem + ' ' + _style.widget_node + ' animated ' + (isDragging ? 'zoomOut' : 'zoomIn') + ' ' + drag, style: _extends({}, widgetStyle[size - 1], opacity, styleOverLine, styleOver) },
      _react2["default"].createElement(
        'div',
        { className: title },
        _react2["default"].createElement(
          'div',
          { className: _style.title_right },
          widgetName
        )
      ),
      _react2["default"].createElement('div', { className: _style.widgetItemCont }),
      _react2["default"].createElement(
        'div',
        { className: _style.clearfix + ' ' + _style.footer },
        this.props.type == "pop" ? null : _react2["default"].createElement(_checkbox2["default"], { className: 'test', checked: checkType, onChange: this.onHandChange }),
        _react2["default"].createElement(
          'div',
          { className: _style.editDele + ' ' + _style.clearfix },
          _react2["default"].createElement(
            'div',
            { onClick: function onClick() {
                _this2.popSave(_this2.props.data);
              } },
            _react2["default"].createElement(_icon2["default"], { title: '\u5220\u9664\u670D\u52A1', type: 'dustbin' })
          )
        )
      ),
      _react2["default"].createElement(
        _pop2["default"],
        { className: 'pop_dialog_delete', show: this.state.showModal, type: 'delete', close: this.popClose, data: this.props.data, btns: pop_btn },
        _react2["default"].createElement(
          'div',
          { className: 'pop_cont' },
          _react2["default"].createElement(
            'span',
            null,
            '\u60A8\u786E\u8BA4\u8981\u5220\u9664\u6B64\u9879\u670D\u52A1?'
          )
        )
      )
    )));
  };

  return WidgetItem;
}(_react.Component);

WidgetItem.propTypes = {
  connectDragSource: _propTypes2["default"].func.isRequired,
  connectDropTarget: _propTypes2["default"].func.isRequired,
  // index: PropTypes.any.isRequired,
  isDragging: _propTypes2["default"].bool.isRequired
  // id: PropTypes.any.isRequired,
};
exports["default"] = (0, _reactDnd.DragSource)(type, itemSource, collectSource)((0, _reactDnd.DropTarget)(type, itemTarget, collectTaget)(WidgetItem));
module.exports = exports['default'];