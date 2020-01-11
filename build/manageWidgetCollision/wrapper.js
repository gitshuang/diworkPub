'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _popDialogComp = require('./popDialogComp');

var _popDialogComp2 = _interopRequireDefault(_popDialogComp);

var _backend = require('./backend');

var _backend2 = _interopRequireDefault(_backend);

var _reactDnd = require('react-dnd');

var _sider = require('./sider');

var _sider2 = _interopRequireDefault(_sider);

var _customDragLayer = require('./dragLayer/customDragLayer.js');

var _customDragLayer2 = _interopRequireDefault(_customDragLayer);

var _reactRedux = require('react-redux');

var _index = require('./core/index');

var _index2 = _interopRequireDefault(_index);

var _action = require('./core/action');

var _action2 = _interopRequireDefault(_action);

var _utils = require('../utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var returnDefaultState = _action2["default"].returnDefaultState,
    updateGroupList = _action2["default"].updateGroupList,
    emptySelectGroup = _action2["default"].emptySelectGroup,
    setEditState = _action2["default"].setEditState,
    moveGroup = _action2["default"].moveGroup;
var Wrapper = (_dec = (0, _reactRedux.connect)((0, _utils.mapStateToProps)('manageList', 'isEdit', {
  namespace: 'managewidget'
}), {
  returnDefaultState: returnDefaultState,
  updateGroupList: updateGroupList,
  emptySelectGroup: emptySelectGroup,
  setEditState: setEditState,
  moveGroup: moveGroup
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Wrapper, _Component);

  function Wrapper(props) {
    _classCallCheck(this, Wrapper);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.moveGroupDrag = function (id, afterId) {
      var moveGroup = _this.props.moveGroup;

      moveGroup({ id: id, afterId: afterId });
    };

    _this.batchDelectFn = function () {
      var batchDelect = _this.props.batchDelect;

      batchDelect();
      _this.popClose();
    };

    _this.openGroupTo = function () {
      var openBatchMove = _this.props.openBatchMove;

      openBatchMove();
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

    _this.save = function () {
      var _this$props = _this.props,
          manageList = _this$props.manageList,
          save = _this$props.save;

      if (_this.checkBtn) {
        _this.checkBtn.click();
      }
      save(manageList).then(function (_ref) {
        var error = _ref.error,
            payload = _ref.payload;

        if (error) {
          //requestError(payload);

        } else {
          _this.goBack();
        }
        _this.popCloseCancel();
      });
    };

    _this.cancel = function () {
      var setEditState = _this.props.setEditState;

      setEditState(false);
      _this.popCloseCancel();
      _this.goBack();
    };

    _this.goBack = function () {
      _this.configBack = true;
      var _this$props2 = _this.props,
          emptySelectGroup = _this$props2.emptySelectGroup,
          goBack = _this$props2.goBack;

      emptySelectGroup();
      //this.props.history.replace(this.goToLocation);
      if (goBack) {
        goBack();
        return;
      }
      _this.props.history.go(-1);
    };

    _this.popOpenCancel = function () {
      //const { isEdit } = this.props;
      var sta = _index2["default"].getState();
      var isEdit = sta.isEdit;

      if (isEdit) {
        _this.setState({
          showCancelModal: true
        });
      } else {
        _this.goBack();
      }
    };

    _this.popCloseCancel = function () {
      _this.setState({
        showCancelModal: false
      });
    };

    _this.state = {
      showModal: false,
      showCancelModal: false
    };
    _this.goToLocation = '';
    _this.configBack = false;
    return _this;
  }

  Wrapper.prototype.componentWillUnmount = function componentWillUnmount() {
    var returnDefaultState = this.props.returnDefaultState;

    returnDefaultState();
  };

  Wrapper.prototype.componentWillMount = function componentWillMount() {
    var getRef = this.props.getRef;

    if (getRef) {
      getRef(this);
    }
  };

  // 批量删除

  // 打开删除的弹窗

  // 关闭删除的弹窗


  Wrapper.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var history = this.props.history;

    if (history != undefined) {
      history.block(function (location) {
        //const { isEdit } = this.props;
        var sta = _index2["default"].getState();
        var isEdit = sta.isEdit;

        _this2.goToLocation = location.pathname;
        if (location.pathname !== _this2.props.match.path && isEdit && !_this2.configBack) {
          _this2.setState({
            showCancelModal: true
          });
        }
      });
    }
  };
  //  保存

  // 取消

  // 返回操作


  // 打开取消的弹窗

  // 关闭取消的弹窗


  Wrapper.prototype.render = function render() {
    var _props = this.props,
        languagesJSON = _props.languagesJSON,
        isEdit = _props.isEdit,
        isFooterDisplay = _props.isFooterDisplay,
        roleEdit = _props.roleEdit,
        acInputLocal = _props.acInputLocal,
        locale = _props.locale,
        roleEditMultiLang = _props.roleEditMultiLang;
    var _state = this.state,
        showModal = _state.showModal,
        showCancelModal = _state.showCancelModal;

    var popDialogProps = {
      save: this.save,
      showModal: showModal,
      showCancelModal: showCancelModal,
      popClose: this.popClose,
      batchDelectFn: this.batchDelectFn,
      cancel: this.cancel,
      popCloseCancel: this.popCloseCancel
    };
    var footerProps = {
      batchDelectFn: this.batchDelectFn,
      openGroupTo: this.openGroupTo,
      isEdit: isEdit,
      save: this.save,
      popOpenCancel: this.popOpenCancel

    };
    return _react2["default"].createElement(
      'div',
      null,
      _react2["default"].createElement(
        'div',
        { style: { display: 'flex', position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          } },
        _react2["default"].createElement(_sider2["default"], { languagesJSON: languagesJSON, menuList: this.props.menuList }),
        _react2["default"].createElement(_content2["default"], { languagesJSON: languagesJSON,
          groupList: this.props.groupList,
          moveGroupDrag: this.moveGroupDrag,
          roleEdit: roleEdit,
          roleEditMultiLang: roleEditMultiLang,
          locale: locale,
          acInputLocal: acInputLocal }),
        _react2["default"].createElement(_popDialogComp2["default"], _extends({}, popDialogProps, { languagesJSON: languagesJSON })),
        _react2["default"].createElement(_customDragLayer2["default"], null)
      ),
      isFooterDisplay ? _react2["default"].createElement(_footer2["default"], _extends({ languagesJSON: languagesJSON }, footerProps)) : null
    );
  };

  return Wrapper;
}(_react.Component), _class2.defaultProps = {
  isFooterDisplay: true
}, _temp)) || _class);
exports["default"] = (0, _reactDnd.DragDropContext)(_backend2["default"])(Wrapper);
module.exports = exports['default'];