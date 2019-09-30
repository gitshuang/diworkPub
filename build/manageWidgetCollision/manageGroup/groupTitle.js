'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('../../bee/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _message = require('../../bee/message');

var _message2 = _interopRequireDefault(_message);

var _reactRedux = require('react-redux');

var _menus = require('../../bee/menus');

var _menus2 = _interopRequireDefault(_menus);

var _dropdown = require('../../bee/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _button = require('../../button');

var _utils = require('../../utils');

var _action = require('../core/action');

var _action2 = _interopRequireDefault(_action);

var _languages = require('yutils/languages');

var _languages2 = _interopRequireDefault(_languages);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style.css');

var _style = {
  'widgetTitle': 'widgetTitle__style___2j5oO',
  'addBtn': 'addBtn__style___3czkk',
  'addGroupBtn': 'addGroupBtn__style___1l9Lk',
  'titleInputArea': 'titleInputArea__style___Xn32m',
  'input': 'input__style___1SqZ1',
  'newGroupName': 'newGroupName__style___3zjlf',
  'newGroupName_focus': 'newGroupName_focus__style___c_o_p',
  'newGroupName_blur': 'newGroupName_blur__style___3ih13',
  'btn': 'btn__style___1XekA',
  'icon': 'icon__style___1FLUN',
  'groupArea': 'groupArea__style___1r1pI',
  'selectedBackClass': 'selectedBackClass__style___X9npf',
  'iconBox': 'iconBox__style___3dgJC',
  'widgetTitleInit': 'widgetTitleInit__style___1uhzz',
  'check_group': 'check_group__style___Dyz8n',
  'noChildStyle': 'noChildStyle__style___1LGRc'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var addGroup = _action2["default"].addGroup,
    updateGroupList = _action2["default"].updateGroupList,
    selectGroupActions = _action2["default"].selectGroupActions,
    selectListActions = _action2["default"].selectListActions,
    delectGroup = _action2["default"].delectGroup,
    setEditonlyId = _action2["default"].setEditonlyId,
    setDragInputState = _action2["default"].setDragInputState,
    renameGroup = _action2["default"].renameGroup,
    moveBottomGroup = _action2["default"].moveBottomGroup,
    moveTopGroup = _action2["default"].moveTopGroup;
var GroupTitle = (_dec = (0, _reactRedux.connect)((0, _utils.mapStateToProps)("manageList", "layout", "selectGroup", "currEditonlyId", "selectList", {
  namespace: 'managewidget'
}), {
  addGroup: addGroup,
  updateGroupList: updateGroupList,
  selectGroupActions: selectGroupActions,
  selectListActions: selectListActions,
  delectGroup: delectGroup,
  setEditonlyId: setEditonlyId,
  setDragInputState: setDragInputState,
  renameGroup: renameGroup,
  moveBottomGroup: moveBottomGroup,
  moveTopGroup: moveTopGroup
}), _dec(_class = function (_React$Component) {
  _inherits(GroupTitle, _React$Component);

  function GroupTitle(props) {
    _classCallCheck(this, GroupTitle);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

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
        _message2["default"].create({
          content: _languages2["default"].group_name_exists,
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
    };

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
          _languages2["default"].move_down
        ) : null,
        index ? _react2["default"].createElement(
          _menus.Item,
          { key: '2' },
          _languages2["default"].move_up
        ) : null,
        _react2["default"].createElement(
          _menus.Item,
          { key: '3' },
          _languages2["default"]["delete"]
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
          _react2["default"].createElement(_icon2["default"], { title: _languages2["default"].more, type: 'more' })
        )
      );
    };

    _this.renderTitle = function () {
      var _this$props6 = _this.props,
          _this$props6$data = _this$props6.data,
          widgetId = _this$props6$data.widgetId,
          widgetName = _this$props6$data.widgetName,
          children = _this$props6$data.children,
          currEditonlyId = _this$props6.currEditonlyId,
          groupID = _this$props6.groupID,
          index = _this$props6.index,
          selectGroup = _this$props6.selectGroup;
      var _this$state = _this.state,
          inFoucs = _this$state.inFoucs,
          groupName = _this$state.groupName;

      var checkType = selectGroup.indexOf(index) > -1 ? true : false;
      var groupTitle = void 0;
      if (currEditonlyId == groupID) {
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
              onChange: _this.editGroupName,
              onFocus: _this.handleFocus,
              onBlur: _this.handleBlur
              // placeholder="分组名称,最多4个字符"
              , placeholder: _languages2["default"].groupName_max_words_four,
              ref: 'groupName' })
          ),
          _react2["default"].createElement(
            _button.ButtonCheckSelected,
            { id: widgetId + '_btn', className: _style.btn, onClick: function onClick() {
                _this.renameGroupFn(index);
              } },
            _react2["default"].createElement(_icon2["default"], { type: 'right' })
          ),
          _react2["default"].createElement(
            _button.ButtonCheckClose,
            { className: _style.btn, onClick: function onClick() {
                _this.renameGroupCancel(index);
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
                  _this.selectFn(e, index);
                } },
              widgetName
            ),
            _languages2["default"].noDataGroup && children.length === 0 ? _react2["default"].createElement(
              'span',
              { className: _style.noChildStyle },
              _react2["default"].createElement(_icon2["default"], { type: 'notice' }),
              _languages2["default"].noDataGroup
            ) : null
          ),
          _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(
              'div',
              { className: _style.iconBox },
              _react2["default"].createElement(_icon2["default"], { title: _languages2["default"].rename_group, type: 'record', onClick: function onClick() {
                  _this.openRenameGroupFn(groupID);
                } })
            ),
            _this.renderDrop(index)
          )
        );
      }
      return groupTitle;
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

  GroupTitle.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
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

  // 点击取消编辑分组按钮

  // 点击按钮执行 action   重新构造

  // 打开编辑分组形态

  //点击清空输入框

  // 输入框的更改


  //输入框聚焦更改背景颜色

  //输入框失焦

  // 选择框  选择

  // 上移分组

  // 下移分组

  // 删除群组

  // menu组件 方法


  GroupTitle.prototype.render = function render() {
    return _react2["default"].createElement(
      'div',
      null,
      this.renderTitle()
    );
  };

  return GroupTitle;
}(_react2["default"].Component)) || _class);
exports["default"] = GroupTitle;
module.exports = exports['default'];