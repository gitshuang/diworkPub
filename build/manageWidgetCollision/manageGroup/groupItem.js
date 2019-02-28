'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menus = require('../../bee/menus');

var _menus2 = _interopRequireDefault(_menus);

var _message = require('../../bee/message');

var _message2 = _interopRequireDefault(_message);

var _icon = require('pub-comp/icon');

var _icon2 = _interopRequireDefault(_icon);

var _dropdown = require('../../bee/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var GroupItem = function (_Component) {
  _inherits(GroupItem, _Component);

  function GroupItem() {
    var _temp, _this, _ret;

    _classCallCheck(this, GroupItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.openRenameGroupFn = function (id) {
      var setEditonlyId = _this.props.setEditonlyId;

      setEditonlyId(id);
      setTimeout(function () {
        _this.refs.groupName.focus();
        _this.refs.groupName.select();
      }, 0);
      _this.setState({
        inFoucs: false
      });
    }, _this.renameGroupCancel = function (index) {
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
    }, _this.renameGroupFn = function (index) {
      var _this$props2 = _this.props,
          renameGroup = _this$props2.renameGroup,
          manageList = _this$props2.manageList,
          languagesJSON = _this$props2.languagesJSON;

      var name = _this.state.groupName;
      if (name == manageList[index].widgetName) {
        _this.renameGroupCancel(index);
        return false;
      }
      var widgetNameArr = manageList.map(function (item, index) {
        return item.widgetName;
      });
      if (widgetNameArr.includes(name)) {
        _message2["default"].create({
          content: languagesJSON.group_name_exists,
          duration: 1.5,
          position: 'topLeft',
          color: "warning",
          style: { height: 'auto' }
        });
        return false;
      }
      renameGroup({
        index: index,
        name: name
      });
      _this.renameGroupCancel(index);
    }, _this.clearInput = function () {
      _this.setState({
        groupName: ""
      });
    }, _this.editGroupName = function (e) {
      var _groupName = e.target.value;
      // _groupName = getStrLenSubstr(_groupName,11,21,true)
      _this.setState({
        groupName: _groupName
      });
    }, _this.handleFocus = function () {
      _this.setState({
        inFoucs: true
      });
      var _this$props3 = _this.props,
          setDragInputState = _this$props3.setDragInputState,
          dragState = _this$props3.dragState;

      if (!dragState) return;
      setDragInputState(false);
    }, _this.handleBlur = function () {
      _this.setState({
        inFoucs: false
      });
      var _this$props4 = _this.props,
          setDragInputState = _this$props4.setDragInputState,
          dragState = _this$props4.dragState;

      if (dragState) return;
      setDragInputState(true);
    }, _this.selectFn = function (e, index) {
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
    }, _this.popOpen = function () {
      _this.setState({
        showModal: true
      });
    }, _this.popClose = function () {
      _this.setState({
        showModal: false
      });
    }, _this.moveTopFn = function (index) {
      var moveTopGroup = _this.props.moveTopGroup;

      moveTopGroup(index);
    }, _this.moveBottomFn = function (index) {
      var moveBottomGroup = _this.props.moveBottomGroup;

      moveBottomGroup(index);
    }, _this.delectGroupFn = function (index) {
      var delectGroup = _this.props.delectGroup;

      delectGroup(index);
    }, _this.onDropSelect = function (index) {
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
    }, _this.renderDrop = function (index) {
      var _this$props6 = _this.props,
          manageList = _this$props6.manageList,
          languagesJSON = _this$props6.languagesJSON;

      var menu = _react2["default"].createElement(
        _menus2["default"],
        { onClick: _this.onDropSelect(index) },
        index !== manageList.length - 1 ? _react2["default"].createElement(
          _menus.Item,
          { key: '1' },
          languagesJSON.move_down
        ) : null,
        index ? _react2["default"].createElement(
          _menus.Item,
          { key: '2' },
          languagesJSON.move_up
        ) : null,
        _react2["default"].createElement(
          _menus.Item,
          { key: '3' },
          languagesJSON["delete"]
        )
      );

      return _react2["default"].createElement(
        _dropdown2["default"],
        {
          trigger: ['click'],
          overlay: menu,
          animation: 'slide-up' },
        _react2["default"].createElement(
          'div',
          null,
          _react2["default"].createElement(_icon2["default"], { title: languagesJSON.more, type: 'more' })
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
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
  GroupItem.prototype.addGroupFn = function addGroupFn(index) {
    var addGroup = this.props.addGroup;

    addGroup({ index: index });
  };
  // menu组件 方法


  return GroupItem;
}(_react.Component);

exports["default"] = GroupItem;
module.exports = exports['default'];