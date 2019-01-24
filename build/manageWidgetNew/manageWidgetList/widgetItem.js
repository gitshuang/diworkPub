'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _dec2, _dec3, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _widgetItemFather = require('./widgetItemFather');

var _widgetItemFather2 = _interopRequireDefault(_widgetItemFather);

var _reactDnd = require('react-dnd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('pub-comp/icon');

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = require('../../bee/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _widgetStyle = require('./widgetStyle');

var _reactRedux = require('react-redux');

var _u = require('@u');

var _actions = require('store/root/manage/actions');

var _actions2 = _interopRequireDefault(_actions);

var _reactDom = require('react-dom');

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var moveSideCards = _actions2["default"].moveSideCards,
    dropSideCards = _actions2["default"].dropSideCards;


var itemSource = {
	beginDrag: function beginDrag(props, monitor, component) {

		props.manageList.forEach(function (item) {
			item.children.forEach(function (a, b) {});
		});

		return { id: props.id, parentId: props.parentId, type: props.type, props: props, index: props.index };
	},
	isDragging: function isDragging(props, monitor) {
		return monitor.getItem().id === props.id;
	}
};
var itemTarget = {
	hover: function hover(props, monitor, component) {
		var draggedId = monitor.getItem().id;
		var preType = monitor.getItem().type;
		if (draggedId !== props.id && preType !== 1) {
			//如果被拖拽元素与被hover元素的id不一致，交换位置

			var previousParentId = monitor.getItem().parentId;

			var draggedSize = preType == "cardlist" ? 1 : monitor.getItem().props.data.size;
			var hoveredSize = props.data.size;
			var hoverIndex = props.index;
			var dragIndex = preType == "cardlist" ? 0 : monitor.getItem().props.index;
			var hoverBoundingRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect();
			var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			var hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
			var clientOffset = monitor.getClientOffset();
			var hoverClientY = clientOffset.y - hoverBoundingRect.top;
			var hoverClientX = clientOffset.x - hoverBoundingRect.left;

			if (draggedSize < hoveredSize) {

				if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
					return;
				}
				// Dragging upwards
				if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
					return;
				}
			}

			if (preType == "cardlist") {

				var cardList = monitor.getItem().cardList;
				var siderCardPops = {
					id: draggedId,
					preParentId: previousParentId,
					afterId: props.id,
					parentId: props.data.parentId,
					afterType: props.data.type,
					monitor: monitor,
					cardList: cardList
				};
				props.moveSideCards(siderCardPops);

				//当前拖拽的id   hover的id,hover的parentID,hover的项的type
			} else {
				props.moveItemDrag(draggedId, previousParentId, preType, props.id, props.data.parentId, props.data.type, monitor);
				monitor.getItem().index = props.index;
			}
		}
	},
	drop: function drop(props, monitor) {
		var dragSource = monitor.getItem();
		if (dragSource.type == "cardlist") {
			var draggedId = monitor.getItem().id;
			var previousParentId = monitor.getItem().parentId;
			var preType = monitor.getItem().type;
			var cardList = monitor.getItem().cardList;

			var siderCardPops = {
				id: draggedId,
				preParentId: previousParentId,
				afterId: props.id,
				parentId: props.data.parentId,
				afterType: props.data.type,
				monitor: monitor,
				cardList: cardList
			};
			props.dropSideCards(siderCardPops);
		}
	}
};
var WidgetItem = (_dec = (0, _reactRedux.connect)((0, _u.mapStateToProps)('manageList', 'shadowCard', {
	namespace: 'manage'
}), {
	moveSideCards: moveSideCards,
	dropSideCards: dropSideCards
}), _dec2 = (0, _reactDnd.DropTarget)("item", itemTarget, function (connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	};
}), _dec3 = (0, _reactDnd.DragSource)("item", itemSource, function (connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
}), _dec(_class = _dec2(_class = _dec3(_class = (_temp = _class2 = function (_WidgetItemFather) {
	_inherits(WidgetItem, _WidgetItemFather);

	function WidgetItem(props) {
		_classCallCheck(this, WidgetItem);

		var _this = _possibleConstructorReturn(this, _WidgetItemFather.call(this, props));

		_this.state = {
			title: ''
		};
		return _this;
	}

	WidgetItem.prototype.render = function render() {
		var _this2 = this;

		var languagesJSON = this.props.languagesJSON;
		var _props$data = this.props.data,
		    id = _props$data.widgetId,
		    size = _props$data.size,
		    widgetName = _props$data.widgetName;
		var _props = this.props,
		    connectDragSource = _props.connectDragSource,
		    connectDropTarget = _props.connectDropTarget,
		    isDragging = _props.isDragging,
		    selectList = _props.selectList,
		    index = _props.index,
		    isOver = _props.isOver; //connectDropTarget,

		var checkType = selectList.indexOf(id) > -1 ? true : false;
		var dragStyle = isDragging ? {
			opacity: 0.5,
			backgroundColor: 'rgba(255,255,255,1)',
			color: "blue"
		} : {};
		var title = this.state.title;

		return connectDragSource(connectDropTarget(_react2["default"].createElement(
			'li',
			{ title: title, className: _style.widgetItem + ' ' + _style.widget_node + '  ',
				style: _extends({}, _widgetStyle.widgetStyle[size - 1], dragStyle) },
			_react2["default"].createElement(
				'div',
				{ className: title },
				isDragging ? null : _react2["default"].createElement(
					'div',
					{ className: _style.title_right },
					widgetName + ' '
				)
			),
			_react2["default"].createElement('div', { className: _style.widgetItemCont }),
			isDragging ? null : _react2["default"].createElement(
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
						_react2["default"].createElement(_icon2["default"], { title: languagesJSON.deleteService, type: 'dustbin' })
					)
				)
			)
		)));
	};

	return WidgetItem;
}(_widgetItemFather2["default"]), _class2.propTypes = {
	connectDragSource: _propTypes2["default"].func.isRequired,
	connectDropTarget: _propTypes2["default"].func.isRequired,
	isDragging: _propTypes2["default"].bool.isRequired
}, _class2.defaultProps = {
	isDragging: false
}, _temp)) || _class) || _class) || _class);
exports["default"] = WidgetItem;
module.exports = exports['default'];