'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('pub-comp/icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style.css');

var _style = {
  'widgetItem': 'widgetItem__style___3m4Rg',
  'widgetFileItem': 'widgetFileItem__style___28Ur-',
  'title': 'title__style___3W7Xx',
  'title_right': 'title_right__style___1rgbQ',
  'file_title_right': 'file_title_right__style___3SM6P',
  'widget_node': 'widget_node__style___28n9h',
  'content': 'content__style___2S3AY',
  'context': 'context__style___1rxUc',
  'bottom': 'bottom__style___Tgxw-',
  'file_context': 'file_context__style___3Be-x',
  'footer': 'footer__style___2CZC2',
  'editDele': 'editDele__style___2sJk7',
  'title_cont': 'title_cont__style___3jQC-',
  'edit_cont': 'edit_cont__style___2-vsC',
  'edit_btn': 'edit_btn__style___3FMJi',
  'title_edit': 'title_edit__style___2gZwc',
  'clearfix': 'clearfix__style___33fmq',
  'addModule': 'addModule__style___2DYhQ',
  'widgetList': 'widgetList__style___2Qmz0',
  'pop_dialog_widge_list': 'pop_dialog_widge_list__style___3Zflc',
  'btn': 'btn__style___wXdcO'
};

var _widgetItem = require('./widgetItem');

var _widgetItem2 = _interopRequireDefault(_widgetItem);

var _pop = require('pub-comp/pop');

var _pop2 = _interopRequireDefault(_pop);

var _manageSelectWidgetList = require('../manageSelectWidgetList');

var _manageSelectWidgetList2 = _interopRequireDefault(_manageSelectWidgetList);

var _reactRedux = require('react-redux');

var _u = require('@u');

var _actions = require('store/root/manage/actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var moveService = _actions2["default"].moveService,
    setCurrGroupIndex = _actions2["default"].setCurrGroupIndex,
    editTitle = _actions2["default"].editTitle,
    selectListActions = _actions2["default"].selectListActions,
    selectGroupActions = _actions2["default"].selectGroupActions,
    setEditonlyId = _actions2["default"].setEditonlyId,
    setDragInputState = _actions2["default"].setDragInputState,
    delectService = _actions2["default"].delectService,
    updateShadowCard = _actions2["default"].updateShadowCard;
var WidgetList = (_dec = (0, _reactRedux.connect)((0, _u.mapStateToProps)("manageList", "drag", "dragState", "selectList", "selectGroup", "currEditonlyId", "currGroupIndex", "title", {
  namespace: 'manage'
}), {
  moveService: moveService,
  setCurrGroupIndex: setCurrGroupIndex,
  editTitle: editTitle,
  selectListActions: selectListActions,
  selectGroupActions: selectGroupActions,
  setEditonlyId: setEditonlyId,
  setDragInputState: setDragInputState,
  delectService: delectService,
  updateShadowCard: updateShadowCard
}), _dec(_class = function (_Component) {
  _inherits(WidgetList, _Component);

  //TUDO 数据中的 size ： sm 、lg、xg （小[标准]、中、大）

  // static propTypes = {
  //     widgeList: PropTypes.array.isRequired,
  // }
  function WidgetList(props) {
    _classCallCheck(this, WidgetList);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

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

    _this.moveItemDrag = function (id, preParentId, preType, afterId, parentId, afterType, monitor) {
      var data = { id: id, preParentId: preParentId, preType: preType, afterId: afterId, parentId: parentId, afterType: afterType, monitor: monitor };
      var moveService = _this.props.moveService;

      moveService(data);
    };

    _this.editTitle = function (id, name) {
      var data = { id: id, name: name };
      var editTitle = _this.props.editTitle;

      editTitle(data);
    };

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

  WidgetList.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        manageList = _props.manageList,
        selectList = _props.selectList,
        selectGroup = _props.selectGroup,
        title = _props.title,
        selectListActions = _props.selectListActions,
        selectGroupActions = _props.selectGroupActions,
        delectService = _props.delectService,
        applicationsMap = _props.applicationsMap,
        allServicesByLabelGroup = _props.allServicesByLabelGroup,
        getAllServicesByLabelGroup = _props.getAllServicesByLabelGroup,
        setCurrentSelectWidgetMap = _props.setCurrentSelectWidgetMap,
        addDesk = _props.addDesk,
        requestSuccess = _props.requestSuccess,
        requestError = _props.requestError,
        currGroupIndex = _props.currGroupIndex,
        languagesJSON = _props.languagesJSON,
        updateShadowCard = _props.updateShadowCard;

    var widgetItemProps = {
      manageList: manageList,
      selectList: selectList,
      selectGroup: selectGroup,
      currGroupIndex: currGroupIndex,
      title: title,
      selectListActions: selectListActions, selectGroupActions: selectGroupActions,
      delectService: delectService,
      updateShadowCard: updateShadowCard
    };

    var selectWidgetListProps = {
      applicationsMap: applicationsMap,
      manageList: manageList,
      allServicesByLabelGroup: allServicesByLabelGroup,
      getAllServicesByLabelGroup: getAllServicesByLabelGroup,
      setCurrentSelectWidgetMap: setCurrentSelectWidgetMap,
      addDesk: addDesk,
      requestSuccess: requestSuccess,
      requestError: requestError
    };
    var _props2 = this.props,
        data = _props2.data,
        index = _props2.index;


    var list = data.map(function (item, i) {
      var type = item.type,
          parentId = item.parentId,
          id = item.widgetId;

      return _react2["default"].createElement(_widgetItem2["default"], _extends({
        ref: id,
        key: 'widget-' + id + '-' + i,
        data: item,
        id: id,
        drag: item.drag,
        parentId: parentId,
        index: i,
        propsIndex: index,
        type: type,
        savePosition: _this2.savePosition,
        moveLine: _this2.moveLine(id, _this2.state.moveLine),
        moveItemDrag: _this2.moveItemDrag,
        editTitle: _this2.editTitle
      }, widgetItemProps, {
        languagesJSON: languagesJSON
      }));
    });

    var _da = {};

    return _react2["default"].createElement(
      'ul',
      { className: _style.widgetList + ' ' + _style.clearfix },
      list,
      _react2["default"].createElement(
        _pop2["default"],
        { className: _style.pop_dialog_widge_list, type: 'info', title: languagesJSON.addQuick_to_home, close: this.popClose, backdrop: false, show: this.state.showModal, data: _da },
        _react2["default"].createElement(_manageSelectWidgetList2["default"], _extends({ close: this.popClose, parentId: this.props.parentId
        }, selectWidgetListProps, {
          languagesJSON: languagesJSON
        }))
      )
    );
  };

  return WidgetList;
}(_react.Component)) || _class);
exports["default"] = WidgetList;
module.exports = exports['default'];