'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = undefined;

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _compact = require('../compact');

var _utils = require('../utils');

var utilService = _interopRequireWildcard(_utils);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('./style.css');

var _style = {
	'widgetItem': 'widgetItem__style___1InaF',
	'widgetItemCanDrop': 'widgetItemCanDrop__style___3D2YA',
	'widgetItemShadow': 'widgetItemShadow__style___1fetS',
	'widgetFileItem': 'widgetFileItem__style___2EYOr',
	'title': 'title__style___24Hwf',
	'title_right': 'title_right__style___1645k',
	'file_title_right': 'file_title_right__style___2_0yz',
	'widget_node': 'widget_node__style___3mWSU',
	'content': 'content__style___QftMG',
	'context': 'context__style___11_pf',
	'bottom': 'bottom__style___1YEPX',
	'file_context': 'file_context__style___sTwEy',
	'footer': 'footer__style___2Y0P1',
	'editDele': 'editDele__style___13rAL',
	'title_cont': 'title_cont__style___3RYgE',
	'edit_cont': 'edit_cont__style___U_kh1',
	'edit_btn': 'edit_btn__style___3ABj3',
	'title_edit': 'title_edit__style___3wutj',
	'clearfix': 'clearfix__style___wj1v6',
	'addModule': 'addModule__style___1kKN8',
	'widgetList': 'widgetList__style___1cFH1',
	'pop_dialog_widge_list': 'pop_dialog_widge_list__style___3iaRQ',
	'btn': 'btn__style___1b2HT',
	'card_shadow': 'card_shadow__style___2bWkR',
	'card': 'card__style___3csG6',
	'card_mid': 'card_mid__style___k51V0',
	'card_footer': 'card_footer__style___2NEpw',
	'card_delete': 'card_delete__style___3XhJv'
};

var _icon = require('pub-comp/icon');

var _icon2 = _interopRequireDefault(_icon);

var _reactRedux = require('react-redux');

var _util = require('../core/util');

var _action = require('../core/action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var updateShadowCard = _action2["default"].updateShadowCard,
    updateGroupList = _action2["default"].updateGroupList;


var noteSource = {
	//开始拖拽，设置isShadow属性，shadowCard对象，更新groups
	beginDrag: function beginDrag(props, monitor, component) {
		var dragCard = utilService.getCardByGroupIDAndCardID(props.manageList, props.groupID, props.id);
		dragCard.isShadow = true;
		props.updateShadowCard(dragCard);
		return { id: props.id, type: props.type };
	},

	//结束拖拽，设置isShadow属性，shadowCard对象，更新groups
	endDrag: function endDrag(props, monitor, component) {
		//判断是否正常走了drop事件
		if (!monitor.didDrop()) {
			var manageList = props.manageList;

			manageList = _lodash2["default"].cloneDeep(manageList);
			utilService.setPropertyValueForCards(manageList, 'isShadow', false);
			props.updateShadowCard({});
			props.updateGroupList(manageList);
		}
	}
};

//卡片组件类
var Item = (_dec = (0, _reactRedux.connect)((0, _util.mapStateToProps)("manageList", "shadowCard", "layout", {
	namespace: 'managewidget'
}), {
	updateShadowCard: updateShadowCard,
	updateGroupList: updateGroupList
}), _dec2 = (0, _reactDnd.DragSource)('item', noteSource, function (connect) {
	return {
		connectDragSource: connect.dragSource()
	};
}), _dec(_class = _dec2(_class = function (_Component) {
	_inherits(Item, _Component);

	function Item(props) {
		_classCallCheck(this, Item);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_this.deleteCard = function () {
			var _this$props = _this.props,
			    manageList = _this$props.manageList,
			    groupIndex = _this$props.groupIndex;

			manageList = _lodash2["default"].cloneDeep(manageList);
			utilService.removeCardByGroupIndexAndCardID(manageList, groupIndex, _this.props.id);

			var compactedLayout = (0, _compact.compactLayoutHorizontal)(manageList[groupIndex].children, _this.props.layout.col);
			manageList[groupIndex].children = compactedLayout;
			_this.props.updateGroupList({ manageList: manageList, isEdit: true });
		};

		_this.onCheckboxChange = function (flag) {
			var _this$props2 = _this.props,
			    manageList = _this$props2.manageList,
			    groupIndex = _this$props2.groupIndex,
			    index = _this$props2.index;

			manageList = _lodash2["default"].cloneDeep(manageList);
			manageList[groupIndex].children[index].isChecked = flag;
			_this.props.updateGroupList(manageList);
		};

		return _this;
	}
	//依靠前后props中shadowCard状态（前为空对象，后为有对象）来判断是否为beginDrag状态，来阻止dom刷新


	Item.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
		var thisProps = this.props || {},
		    thisState = this.state || {};
		if (this.props.isChecked !== nextProps.isChecked) {
			return true;
		}
		//全等判断值为false，使用isEqual判断
		if (!_lodash2["default"].isEqual(this.props.layout, nextProps.layout)) {
			return true;
		}
		if (this.props.gridx !== nextProps.gridx || this.props.gridy !== nextProps.gridy) {
			return true;
		}
		if (this.props.isShadow !== nextProps.isShadow) {
			return true;
		}

		return false;
	};
	//删除卡片

	//选中卡片


	Item.prototype.render = function render() {
		var _props = this.props,
		    connectDragSource = _props.connectDragSource,
		    name = _props.name,
		    gridx = _props.gridx,
		    gridy = _props.gridy,
		    width = _props.width,
		    height = _props.height,
		    isShadow = _props.isShadow,
		    isChecked = _props.isChecked,
		    haspower = _props.haspower;
		var _props$layout = this.props.layout,
		    margin = _props$layout.margin,
		    rowHeight = _props$layout.rowHeight,
		    calWidth = _props$layout.calWidth;

		var _utilService$calGridI = utilService.calGridItemPosition(gridx, gridy, margin, rowHeight, calWidth),
		    x = _utilService$calGridI.x,
		    y = _utilService$calGridI.y;

		var _utilService$calWHtoP = utilService.calWHtoPx(width, height, margin, rowHeight, calWidth),
		    wPx = _utilService$calWHtoP.wPx,
		    hPx = _utilService$calWHtoP.hPx;

		var cardDom = void 0;
		//是否为拖拽中的阴影卡片
		if (isShadow) {
			cardDom = _react2["default"].createElement(
				'div',
				{
					className: _style.card_shadow,
					style: {
						width: wPx,
						height: hPx,
						transform: 'translate(' + x + 'px, ' + y + 'px)'
					}
				},
				_react2["default"].createElement(
					'div',
					{ className: 'cardTitle' },
					name
				),
				_react2["default"].createElement(
					'div',
					{ className: _style.card_footer },
					_react2["default"].createElement(_icon2["default"], { type: 'dustbin', className: 'card-delete', onClick: this.deleteCard })
				)
			);
		} else {
			var opacity = haspower === false ? 0.6 : 1;
			cardDom = _react2["default"].createElement(
				'div',
				{
					className: _style.card,
					style: {
						width: wPx,
						height: hPx,
						opacity: opacity,
						transform: 'translate(' + x + 'px, ' + y + 'px)'
					}
				},
				_react2["default"].createElement(
					'div',
					{ className: 'cardTitle' },
					name
				),
				_react2["default"].createElement('div', { className: _style.card_mid }),
				_react2["default"].createElement(
					'div',
					{ className: (_utils.IS_IE ? "ie11" : '') + ' ' + _style.card_footer },
					_react2["default"].createElement(_icon2["default"], { type: 'dustbin', className: 'card-delete', onClick: this.deleteCard })
				)
			);
		}
		return connectDragSource(cardDom);
	};

	return Item;
}(_react.Component)) || _class) || _class);
exports["default"] = Item;
module.exports = exports['default'];