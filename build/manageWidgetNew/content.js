'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('pub-comp/button');

var _icon = require('pub-comp/icon');

var _icon2 = _interopRequireDefault(_icon);

var _manageGroup = require('./manageGroup');

var _manageGroup2 = _interopRequireDefault(_manageGroup);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _batchMove = require('./batchMove');

var _batchMove2 = _interopRequireDefault(_batchMove);

var _popDialogComp = require('./popDialogComp');

var _popDialogComp2 = _interopRequireDefault(_popDialogComp);

require('./style.css');

var _style = {
  'management': 'management__style___1VA_-',
  'page_home': 'page_home__style___1TGg1',
  'um_content': 'um_content__style___2jxWf',
  'umBoxJustify': 'umBoxJustify__style___38ezk',
  'preserve': 'preserve__style___18zdq',
  'batchArea': 'batchArea__style___2Kez5',
  'saveArea': 'saveArea__style___mmapj',
  'um_footer': 'um_footer__style___2zW7n',
  'addBtn': 'addBtn__style___dv2TN',
  'addGroupBtn': 'addGroupBtn__style___3pqek',
  'manager_save_pop': 'manager_save_pop__style___XqtTi'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Content = (_temp = _class = function (_Component) {
  _inherits(Content, _Component);

  function Content(props) {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  Content.prototype.renderContent = function renderContent() {
    var _this2 = this;

    var _props = this.props,
        manageList = _props.manageList,
        selectGroup = _props.selectGroup,
        selectList = _props.selectList,
        currEditonlyId = _props.currEditonlyId,
        dragState = _props.dragState,
        requestStart = _props.requestStart,
        requestSuccess = _props.requestSuccess,
        requestError = _props.requestError,
        addGroup = _props.addGroup,
        delectGroup = _props.delectGroup,
        renameGroup = _props.renameGroup,
        moveGroup = _props.moveGroup,
        moveTopGroup = _props.moveTopGroup,
        moveBottomGroup = _props.moveBottomGroup,
        selectListActions = _props.selectListActions,
        selectGroupActions = _props.selectGroupActions,
        setEditonlyId = _props.setEditonlyId,
        setDragInputState = _props.setDragInputState,
        applicationsMap = _props.applicationsMap,
        allServicesByLabelGroup = _props.allServicesByLabelGroup,
        getAllServicesByLabelGroup = _props.getAllServicesByLabelGroup,
        setCurrentSelectWidgetMap = _props.setCurrentSelectWidgetMap,
        moveGroupDrag = _props.moveGroupDrag,
        moveItemDrag = _props.moveItemDrag,
        languagesJSON = _props.languagesJSON,
        updateShadowCard = _props.updateShadowCard;

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
      selectListActions: selectListActions,
      selectGroupActions: selectGroupActions,
      setEditonlyId: setEditonlyId,
      setDragInputState: setDragInputState,
      updateShadowCard: updateShadowCard
    };
    var _props2 = this.props,
        manageList = _props2.manageList,
        drag = _props2.drag,
        dragState = _props2.dragState,
        selectList = _props2.selectList,
        selectGroup = _props2.selectGroup,
        currEditonlyId = _props2.currEditonlyId,
        currGroupIndex = _props2.currGroupIndex,
        title = _props2.title,
        moveService = _props2.moveService,
        setCurrGroupIndex = _props2.setCurrGroupIndex,
        editTitle = _props2.editTitle,
        selectListActions = _props2.selectListActions,
        selectGroupActions = _props2.selectGroupActions,
        setEditonlyId = _props2.setEditonlyId,
        setDragInputState = _props2.setDragInputState,
        delectService = _props2.delectService,
        addDesk = _props2.addDesk;

    var widgetListProps = {
      manageList: manageList,
      drag: drag,
      dragState: dragState,
      selectList: selectList,
      selectGroup: selectGroup,
      currEditonlyId: currEditonlyId,
      currGroupIndex: currGroupIndex,
      title: title,
      moveService: moveService,
      setCurrGroupIndex: setCurrGroupIndex,
      editTitle: editTitle,
      selectListActions: selectListActions,
      selectGroupActions: selectGroupActions,
      setEditonlyId: setEditonlyId,
      setDragInputState: setDragInputState,
      delectService: delectService
    };
    var widgetSelectListProps = {
      applicationsMap: applicationsMap,
      manageList: manageList,
      allServicesByLabelGroup: allServicesByLabelGroup,
      getAllServicesByLabelGroup: getAllServicesByLabelGroup,
      setCurrentSelectWidgetMap: setCurrentSelectWidgetMap,
      addDesk: addDesk,
      requestSuccess: requestSuccess,
      requestError: requestError
    };
    var list = [];
    if (manageList.length == 0) {
      return _react2["default"].createElement(
        'div',
        { className: _style.addBtn },
        _react2["default"].createElement(
          _button.ButtonDefaultAlpha,
          { className: _style.addGroupBtn, onClick: function onClick() {
              addGroup({ index: 0 });
            } },
          _react2["default"].createElement(_icon2["default"], { type: 'add' }),
          '//\u6DFB\u52A0\u7EC4',
          languagesJSON.addGroup
        )
      );
    } else {
      manageList.map(function (item, index) {
        list.push(_react2["default"].createElement(_manageGroup2["default"], _extends({
          data: item,
          index: index,
          key: item.widgetId,
          id: item.widgetId,
          type: item.type,
          moveGroupDrag: moveGroupDrag,
          moveItemDrag: moveItemDrag,
          checkFun: _this2.checkFun
        }, manageProps, widgetListProps, widgetSelectListProps, {
          languagesJSON: languagesJSON
        })));
      });
    }
    return list;
  };

  Content.prototype.render = function render() {
    var _props3 = this.props,
        addGroup = _props3.addGroup,
        manageList = _props3.manageList,
        batchDelectFn = _props3.batchDelectFn,
        openGroupTo = _props3.openGroupTo,
        save = _props3.save,
        popOpenCancel = _props3.popOpenCancel,
        batchMoveModalDisplay = _props3.batchMoveModalDisplay,
        moveData = _props3.moveData,
        closeBatchMove = _props3.closeBatchMove,
        batchMove = _props3.batchMove,
        showModal = _props3.showModal,
        showCancelModal = _props3.showCancelModal,
        popClose = _props3.popClose,
        cancel = _props3.cancel,
        popCloseCancel = _props3.popCloseCancel,
        languagesJSON = _props3.languagesJSON,
        isFooterDisplay = _props3.isFooterDisplay;


    var footerProps = {
      batchDelectFn: batchDelectFn,
      openGroupTo: openGroupTo,
      save: save,
      popOpenCancel: popOpenCancel
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
      { className: _style.um_content },
      this.renderContent(),
      isFooterDisplay ? _react2["default"].createElement(_footer2["default"], _extends({}, footerProps, { languagesJSON: languagesJSON })) : null,
      _react2["default"].createElement(_batchMove2["default"], _extends({}, batchMoveRedux, { languagesJSON: languagesJSON })),
      _react2["default"].createElement(_popDialogComp2["default"], _extends({}, popDialogOuter, { languagesJSON: languagesJSON }))
    );
  };

  return Content;
}(_react.Component), _class.defaultProps = {
  isFooterDisplay: true
}, _temp);
exports["default"] = Content;
module.exports = exports['default'];