'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _dec2, _dec3, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _groupItem = require('./groupItem');

var _groupItem2 = _interopRequireDefault(_groupItem);

var _reactDnd = require('react-dnd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pop = require('pub-comp/pop');

var _pop2 = _interopRequireDefault(_pop);

var _button = require('pub-comp/button');

var _u = require('@u');

var _icon = require('pub-comp/icon');

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = require('../../bee/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _reactRedux = require('react-redux');

var _actions = require('store/root/manage/actions');

var _actions2 = _interopRequireDefault(_actions);

var _manageWidgetItem = require('../manageWidgetItem');

var _manageWidgetItem2 = _interopRequireDefault(_manageWidgetItem);

var _utils = require('../utils');

var utilService = _interopRequireWildcard(_utils);

var _reactDom = require('react-dom');

var _groupTitle = require('./groupTitle.js');

var _groupTitle2 = _interopRequireDefault(_groupTitle);

require('./style.css');

var _style = {
  'widgetTitle': 'widgetTitle__style___1G4sk',
  'addBtn': 'addBtn__style___2PSoL',
  'addGroupBtn': 'addGroupBtn__style___32Owe',
  'titleInputArea': 'titleInputArea__style___3dmOD',
  'input': 'input__style___2fWlF',
  'newGroupName': 'newGroupName__style___3_zD8',
  'newGroupName_focus': 'newGroupName_focus__style___18_2w',
  'newGroupName_blur': 'newGroupName_blur__style___2u9zP',
  'btn': 'btn__style___2-N4_',
  'icon': 'icon__style___ySdY1',
  'groupArea': 'groupArea__style___2cmoz',
  'selectedBackClass': 'selectedBackClass__style___1JCfe',
  'iconBox': 'iconBox__style___1Kdc4',
  'widgetTitleInit': 'widgetTitleInit__style___mFFAr',
  'check_group': 'check_group__style___qQUeU',
  'noChildStyle': 'noChildStyle__style___2fdfk'
};

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var dropSideCards = _actions2["default"].dropSideCards,
    dropSideCardsInGroup = _actions2["default"].dropSideCardsInGroup;


var itemSource = {
  beginDrag: function beginDrag(props) {
    return { id: props.id, type: props.type, parentId: props.parentId, index: props.index };
  }
};

var itemTarget = {
  hover: function hover(props, monitor, component) {
    var dragItem = monitor.getItem();

    if (dragItem.type === 1) {
      //1是group
      //组hover到组
      var dragIndex = monitor.getItem().index;
      var hoverIndex = props.index;

      if (dragIndex === hoverIndex) {
        return;
      }

      var hoverBoundingRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect();

      var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      var clientOffset = monitor.getClientOffset();

      var hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      props.moveGroupItem(dragIndex, hoverIndex);

      monitor.getItem().index = hoverIndex;
    } else if (dragItem.type === 3 || dragItem.type === "cardList") {
      //3 是widget
      //卡片到组
      var hoverItem = props;

      var _monitor$getClientOff = monitor.getClientOffset(),
          x = _monitor$getClientOff.x,
          y = _monitor$getClientOff.y;

      var groupItemBoundingRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect();
      var groupItemX = groupItemBoundingRect.left;
      var groupItemY = groupItemBoundingRect.top;

      props.moveCardInGroupItem(dragItem, hoverItem, x - groupItemX, y - groupItemY);
    }
  },
  drop: function drop(props, monitor, component) {
    var dragItem = monitor.getItem();
    var dropItem = props;
    if (dragItem.type === 1) {
      //释放的分组对象
      props.moveGroupDrag(dragItem.id, props.id);
    } else if (dragItem.type === 3) {
      //释放的分组内的卡片
      props.onCardDropInGroupItem(dragItem, dropItem);
    } else if (dragItem.type === 'cardList') {
      //释放的Sider区域的卡片
      props.onCardListDropInGroupItem(dragItem, dropItem);
    }
  }
};

var ManageGroup = (_dec = (0, _reactRedux.connect)((0, _u.mapStateToProps)('manageList', 'layout', 'defaultLayout', {
  namespace: 'manage'
}), {
  dropSideCards: dropSideCards,
  dropSideCardsInGroup: dropSideCardsInGroup
}), _dec2 = (0, _reactDnd.DragSource)("item", itemSource, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}), _dec3 = (0, _reactDnd.DropTarget)("item", itemTarget, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    getItemType: monitor.getItem()
  };
}), _dec(_class = _dec2(_class = _dec3(_class = (_temp = _class2 = function (_GroupItem) {
  _inherits(ManageGroup, _GroupItem);

  function ManageGroup(props) {
    _classCallCheck(this, ManageGroup);

    var _this = _possibleConstructorReturn(this, _GroupItem.call(this, props));

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
        manageList = _props.manageList,
        languagesJSON = _props.languagesJSON;


    if (isNew) {
      setTimeout(function () {

        var nameArr = manageList.map(function (_ref) {
          var widgetName = _ref.widgetName;

          return widgetName;
        });
        var newGroupName = (0, _u.avoidSameName)(nameArr, languagesJSON.group);
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

  ManageGroup.prototype.componentDidMount = function componentDidMount() {
    var clientWidth = void 0;
    var containerDom = document.querySelector('#widget-container');
    if (containerDom) {
      clientWidth = containerDom.clientWidth;
    }
    if (this.props.layout.containerWidth !== clientWidth) {
      this.props.handleLoad();
      // console.log('handle');
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

  //创建卡片


  ManageGroup.prototype.createCards = function createCards(cards, groupID, index) {
    var itemDoms = [];
    _.forEach(cards, function (c, i) {
      itemDoms.push(_react2["default"].createElement(_manageWidgetItem2["default"], {
        id: c.widgetId,
        groupID: groupID,
        groupIndex: index,
        index: i,
        type: c.type,
        gridx: c.gridx,
        gridy: c.gridy,
        width: c.width,
        height: c.height,
        haspower: c.haspower,
        isShadow: c.isShadow,
        isChecked: c.isChecked,
        key: groupID + '_' + c.widgetId,
        name: c.widgetName
      }));
    });
    return itemDoms;
  };

  ManageGroup.prototype.render = function render() {
    var _this3 = this;

    var _props3 = this.props,
        manageList = _props3.manageList,
        dragState = _props3.dragState,
        selectGroup = _props3.selectGroup,
        currEditonlyId = _props3.currEditonlyId,
        languagesJSON = _props3.languagesJSON;
    var _props4 = this.props,
        _props4$data = _props4.data,
        widgetId = _props4$data.widgetId,
        widgetName = _props4$data.widgetName,
        children = _props4$data.children,
        index = _props4.index,
        connectDragSource = _props4.connectDragSource,
        connectDropTarget = _props4.connectDropTarget,
        isDragging = _props4.isDragging,
        cards = _props4.cards,
        id = _props4.id,
        layout = _props4.layout,
        defaultLayout = _props4.defaultLayout;
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
            onBlur: this.handleBlur
            // placeholder="分组名称,最多4个字符"
            , placeholder: languagesJSON.groupName_max_words_four,
            ref: 'groupName' })
        ),
        _react2["default"].createElement(
          _button.ButtonCheckSelected,
          { id: widgetId + '_btn', className: _style.btn, onClick: function onClick() {
              _this3.renameGroupFn(index);
            } },
          _react2["default"].createElement(_icon2["default"], { type: 'right' })
        ),
        _react2["default"].createElement(
          _button.ButtonCheckClose,
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
          ),
          languagesJSON.noDataGroup && children.length === 0 ? _react2["default"].createElement(
            'span',
            { className: _style.noChildStyle },
            _react2["default"].createElement(_icon2["default"], { type: 'notice' }),
            languagesJSON.noDataGroup
          ) : null
        ),
        _react2["default"].createElement(
          'div',
          null,
          _react2["default"].createElement(
            'div',
            { className: _style.iconBox },
            _react2["default"].createElement(_icon2["default"], { title: languagesJSON.rename_group, type: 'record', onClick: function onClick() {
                _this3.openRenameGroupFn(widgetId);
              } }),
            _react2["default"].createElement(_icon2["default"], { title: languagesJSON["delete"], type: 'dustbin', onClick: function onClick() {
                _this3.delectGroupFn(index);
              } }),
            index ? _react2["default"].createElement(_icon2["default"], { title: languagesJSON.move_up, type: 'move-upward', onClick: function onClick() {
                _this3.moveTopFn(index);
              } }) : _react2["default"].createElement(_icon2["default"], { title: languagesJSON.move_up, type: 'move-upward', className: 'disabled', onClick: function onClick() {
                return false;
              } }),
            index !== manageList.length - 1 ? _react2["default"].createElement(_icon2["default"], { title: languagesJSON.move_down, type: 'move-down', onClick: function onClick() {
                _this3.moveBottomFn(index);
              } }) : _react2["default"].createElement(_icon2["default"], { title: languagesJSON.move_down, type: 'move-down', className: 'disabled', onClick: function onClick() {
                return false;
              } })
          )
        )
      );
    }

    var pop_btn = [{
      label: '' + languagesJSON.confirm,
      fun: this.delectGroupFn,
      className: ""
    }, {
      label: '' + languagesJSON.cancel,
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
    var containerHeight = utilService.getContainerMaxHeight(cards, layout.rowHeight, layout.margin);
    var _html = _react2["default"].createElement(
      'div',
      { className: _style.groupArea + ' animated zoomIn', style: _extends({}, overStyle) },
      _react2["default"].createElement(
        'section',
        { style: _extends({}, opacity), className: inFoucs ? _style.selectedBackClass : "" },
        groupTitle,
        _react2["default"].createElement(
          'div',
          { id: 'widget-container', style: {
              height: containerHeight > defaultLayout.containerHeight ? containerHeight : defaultLayout.containerHeight
            }
          },
          this.createCards(cards, id, index)
        )
      ),
      _react2["default"].createElement(
        'div',
        { className: _style.addBtn },
        _react2["default"].createElement(
          _button.ButtonDefaultWhite,
          { className: _style.addGroupBtn, onClick: this.addGroupFn.bind(this, index) },
          _react2["default"].createElement(_icon2["default"], { type: 'add' }),
          languagesJSON.addGroup
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
            languagesJSON.confirm_del_this_item
          )
        )
      )
    );
    return dragState ? connectDragSource(connectDropTarget(_html)) : _html;
  };

  return ManageGroup;
}(_groupItem2["default"]), _class2.propTypes = {
  connectDragSource: _propTypes2["default"].func.isRequired,
  connectDropTarget: _propTypes2["default"].func.isRequired,
  index: _propTypes2["default"].number.isRequired,
  isDragging: _propTypes2["default"].bool.isRequired,
  id: _propTypes2["default"].any.isRequired
}, _temp)) || _class) || _class) || _class);
exports["default"] = ManageGroup;
module.exports = exports['default'];