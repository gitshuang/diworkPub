'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('pub-comp/button');

var _icon = require('pub-comp/icon');

var _icon2 = _interopRequireDefault(_icon);

var _manageGroup = require('./manageGroup');

var _manageGroup2 = _interopRequireDefault(_manageGroup);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactRedux = require('react-redux');

var _u = require('@u');

var _actions = require('store/root/manage/actions');

var _actions2 = _interopRequireDefault(_actions);

var _collision = require('./collision');

var _compact = require('./compact');

var _utils = require('./utils');

var utilService = _interopRequireWildcard(_utils);

require('./style.css');

var _style = {
  'page_home': 'page_home__style___Ztech',
  'um_content': 'um_content__style___2T_uL',
  'umBoxJustify': 'umBoxJustify__style___3lRFq',
  'preserve': 'preserve__style___1Yuxj',
  'batchArea': 'batchArea__style___1G2AQ',
  'saveArea': 'saveArea__style___3NZF9',
  'um_footer': 'um_footer__style___2-cQ0',
  'addBtn': 'addBtn__style___S3Plr',
  'addGroupBtn': 'addGroupBtn__style___3cIa3',
  'manager_save_pop': 'manager_save_pop__style___2Tz9H'
};

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var updateShadowCard = _actions2["default"].updateShadowCard,
    addGroup = _actions2["default"].addGroup,
    updateGroupList = _actions2["default"].updateGroupList,
    updateLayout = _actions2["default"].updateLayout;
var Content = (_dec = (0, _reactRedux.connect)((0, _u.mapStateToProps)("manageList", "shadowCard", "layout", "defaultLayout", {
  namespace: 'manage'
}), {
  updateShadowCard: updateShadowCard,
  addGroup: addGroup,
  updateGroupList: updateGroupList,
  updateLayout: updateLayout
}), _dec(_class = function (_Component) {
  _inherits(Content, _Component);

  function Content(props) {
    _classCallCheck(this, Content);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.moveGroupItem = function (dragIndex, hoverIndex) {
      var manageList = _this.props.manageList;

      manageList = _lodash2["default"].cloneDeep(manageList);
      var dragCard = manageList[dragIndex];
      manageList.splice(dragIndex, 1);
      manageList.splice(hoverIndex, 0, dragCard);
      _this.props.updateGroupList(manageList);
    };

    _this.moveCardInGroupItem = function (dragItem, hoverItem, x, y) {

      var axis = 'gridx';
      var manageList = _this.props.manageList;
      var shadowCard = _this.props.shadowCard;
      var _this$props$layout = _this.props.layout,
          margin = _this$props$layout.margin,
          containerWidth = _this$props$layout.containerWidth,
          col = _this$props$layout.col,
          rowHeight = _this$props$layout.rowHeight;
      //计算当前所在的网格坐标

      var _utilService$calGridX = utilService.calGridXY(x, y, shadowCard.width, margin, containerWidth, col, rowHeight),
          gridX = _utilService$calGridX.gridX,
          gridY = _utilService$calGridX.gridY;

      if (gridX === shadowCard.gridx && gridY === shadowCard.gridy) {
        return;
      }

      var groupIndex = hoverItem.index;
      //先判断组内是否存在相同的卡片
      var widgetId = shadowCard.widgetId;
      var isContain = utilService.checkCardContainInGroup(manageList[groupIndex], widgetId);

      if (isContain) {
        return;
      }
      //删除阴影的卡片
      _lodash2["default"].forEach(manageList, function (g, index) {
        _lodash2["default"].remove(g.children, function (a) {
          return a.isShadow === true;
        });
      });
      shadowCard = _extends({}, shadowCard, { gridx: gridX, gridy: gridY });
      //添加阴影的卡片
      manageList[groupIndex].children.push(shadowCard);
      //获得当前分组内最新的layout布局

      var newlayout = (0, _collision.layoutCheck)(manageList[groupIndex].children, shadowCard, shadowCard.widgetId, shadowCard.widgetId, axis);

      //压缩当前分组内的layout布局
      var compactedLayout = void 0;
      if (axis === 'gridx') {
        compactedLayout = (0, _compact.compactLayoutHorizontal)(newlayout, _this.props.layout.col, widgetId);
      } else if (axis === 'gridy') {
        compactedLayout = (0, _compact.compactLayout)(newlayout, shadowCard);
      }
      //更新group对象
      manageList[groupIndex].children = compactedLayout;
      _this.props.updateShadowCard(shadowCard);
      _this.props.updateGroupList(manageList);
    };

    _this.handleLoad = function () {
      var fn = function fn() {
        var clientWidth = void 0;
        var containerDom = document.querySelector('#widget-container');
        if (containerDom) {
          clientWidth = containerDom.clientWidth;
        } else {
          var firstAddButton = document.querySelector('#first-add');
          if (firstAddButton) {
            clientWidth = firstAddButton.clientWidth - 10;
          } else {
            return;
          }
        }
        var defaultCalWidth = _this.props.defaultLayout.calWidth;
        var _this$props$layout2 = _this.props.layout,
            containerPadding = _this$props$layout2.containerPadding,
            margin = _this$props$layout2.margin;

        var layout = _lodash2["default"].cloneDeep(_this.props.layout);
        var windowWidth = window.innerWidth - 60 * 2;
        var col = utilService.calColCount(defaultCalWidth, windowWidth, containerPadding, margin);
        var calWidth = utilService.calColWidth(clientWidth, col, containerPadding, margin);

        var manageList = _this.props.manageList;

        manageList = _lodash2["default"].cloneDeep(manageList);
        _lodash2["default"].forEach(manageList, function (g) {
          var compactedLayout = (0, _compact.compactLayoutHorizontal)(g.children, col);
          g.children = compactedLayout;
        });

        layout.calWidth = layout.rowHeight = calWidth;
        layout.col = col;
        layout.containerWidth = clientWidth;
        _this.props.updateGroupList(manageList);
        _this.props.updateLayout(layout);
      };
      utilService.DeferFn(fn);
    };

    _this.onCardDropInGroupItem = function (dragItem, dropItem) {
      var manageList = _this.props.manageList;

      manageList = _lodash2["default"].cloneDeep(manageList);
      //将所有分组内的阴影卡片设为非阴影  
      utilService.setPropertyValueForCards(manageList, 'isShadow', false);
      //目标组内重新横向压缩布局
      _lodash2["default"].forEach(manageList, function (g, targetGroupIndex) {
        var compactedLayout = (0, _compact.compactLayoutHorizontal)(manageList[targetGroupIndex].children, _this.props.layout.col);
        manageList[targetGroupIndex].children = compactedLayout;
      });

      _this.props.updateGroupList({ manageList: manageList, isEdit: true });
      _this.props.updateShadowCard({});
    };

    _this.onCardListDropInGroupItem = function (dragItem, dropItem) {
      var _this$props = _this.props,
          manageList = _this$props.manageList,
          layout = _this$props.layout,
          shadowCard = _this$props.shadowCard;

      manageList = _lodash2["default"].cloneDeep(manageList);
      var targetGroupIndex = dropItem.index;
      var cardList = dragItem.cardList;
      //拖拽卡片和目标组内卡片合并、去重
      cardList.forEach(function (item) {
        item.gridx = shadowCard.gridx;
        item.gridy = shadowCard.gridy;
      });

      //删除阴影的卡片
      _lodash2["default"].forEach(manageList, function (g, index) {
        _lodash2["default"].remove(g.children, function (a) {
          return a.isShadow === true;
        });
      });
      manageList[targetGroupIndex].children = _lodash2["default"].concat(manageList[targetGroupIndex].children, cardList);
      manageList[targetGroupIndex].children = _lodash2["default"].uniqBy(manageList[targetGroupIndex].children, 'widgetId');
      //目标组内重新横向压缩布局
      //todo: 数组偶然的几率出现重排
      manageList.splice();
      var compactedLayout = (0, _compact.compactLayoutHorizontal)(manageList[targetGroupIndex].children, layout.col);

      manageList[targetGroupIndex].children = compactedLayout;
      _this.props.updateGroupList({ manageList: manageList, isEdit: true });
    };

    return _this;
  }
  /**
  	 * 移动组的顺序
  	 * @param {Number} dragIndex 拖拽的组对象的index值
  	 * @param {Number} hoverIndex 拖拽中鼠标悬浮的组对象的index值
  	**/

  /**
  	 * 拖拽中卡片在组上移动
  	 * @param {Object} dragItem 拖拽中的对象
  	 * @param {Object} hoverItem 拖拽中鼠标悬浮的对象
  	 * @param {Number} x 当前元素所在的网页的x轴位置，单位为px
  	 * @param {Number} y 当前元素所在的网页的y轴位置，单位为px
  	**/

  //当页面加载完成，获得卡片容器宽度

  /**
  * 释放卡片到分组
  * @param {Object} dragItem 拖拽的卡片对象
  * @param {Object} dropItem 释放的目标组对象
  **/


  /**
  * 释放sider区中选中的所有卡片CardList到分组中
  * @param {Object} dragItem 拖拽sider区中选中的所有卡片
  * @param {Object} dropItem 释放的目标组对象
  **/


  Content.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.handleLoad);
  };
  //组件渲染完毕时，添加resize事件


  Content.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.handleLoad);
    //初始化时默认执行新增分组的方法
    // setTimeout(() => {
    // 	if (this.props.groups.length === 0) {
    // 		this.addFirstGroupItem();
    // 		document.getElementsByClassName('ant-input')[1].select();//初始化选中input
    // 	}
    // },1500);
  };

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
        languagesJSON = _props.languagesJSON;

    var manageProps = {
      manageList: manageList,
      selectGroup: selectGroup,
      selectList: selectList,
      currEditonlyId: currEditonlyId,
      dragState: dragState,
      requestStart: requestStart,
      requestSuccess: requestSuccess,
      requestError: requestError,
      delectGroup: delectGroup,
      renameGroup: renameGroup,
      moveGroup: moveGroup,
      moveTopGroup: moveTopGroup,
      moveBottomGroup: moveBottomGroup,
      selectListActions: selectListActions,
      selectGroupActions: selectGroupActions,
      setEditonlyId: setEditonlyId,
      setDragInputState: setDragInputState
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
        { className: _style.addBtn, id: 'first-add' },
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
          cards: item.children,
          index: index,
          key: item.widgetId,
          id: item.widgetId,
          type: item.type,
          moveGroupDrag: moveGroupDrag,
          moveItemDrag: moveItemDrag,
          checkFun: _this2.checkFun
        }, manageProps, widgetListProps, widgetSelectListProps, {
          languagesJSON: languagesJSON,
          moveCardInGroupItem: _this2.moveCardInGroupItem,
          handleLoad: _this2.handleLoad,
          onCardDropInGroupItem: _this2.onCardDropInGroupItem,
          onCardListDropInGroupItem: _this2.onCardListDropInGroupItem,
          moveGroupItem: _this2.moveGroupItem //移动分组
        })));
      });
    }
    return list;
  };

  Content.prototype.render = function render() {
    return _react2["default"].createElement(
      'div',
      { className: _style.um_content },
      this.renderContent()
    );
  };

  return Content;
}(_react.Component)) || _class);
exports["default"] = Content;
module.exports = exports['default'];