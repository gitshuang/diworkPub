'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = undefined;

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _cardListDragPreview = require('./cardListDragPreview');

var _cardListDragPreview2 = _interopRequireDefault(_cardListDragPreview);

require('./style.css');

var _style = {
	'desk_setting_layer': 'desk_setting_layer__style___1MXJ4'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

//拖拽的layer组件类
var CustomDragLayer = (_dec = (0, _reactDnd.DragLayer)(function (monitor) {
	return {
		item: monitor.getItem(),
		itemType: monitor.getItemType(),
		currentOffset: monitor.getSourceClientOffset(),
		clientOffset: monitor.getClientOffset(),
		isDragging: monitor.isDragging()
	};
}), _dec(_class = function (_Component) {
	_inherits(CustomDragLayer, _Component);

	function CustomDragLayer(props) {
		_classCallCheck(this, CustomDragLayer);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_this.getItemStyles = function () {
			var clientOffset = _this.props.clientOffset;


			if (!clientOffset) {
				return {
					display: 'none'
				};
			}
			var x = clientOffset.x,
			    y = clientOffset.y;

			var transform = 'translate(' + x + 'px, ' + y + 'px)';
			return {
				transform: transform,
				WebkitTransform: transform
			};
		};

		_this.state = {
			layerStyle: { display: 'none' }
		};

		return _this;
	}
	//如果是item类型，返回preview组件


	CustomDragLayer.prototype.renderItem = function renderItem(type, item) {
		switch (type) {
			case 'item':
				if (item.cardList) {
					return _react2["default"].createElement(_cardListDragPreview2["default"], { cardListLength: item.cardList.length });
				} else {
					return null;
				}

			default:
				return null;
		}
	};

	CustomDragLayer.prototype.componentWillUnmount = function componentWillUnmount() {
		cancelAnimationFrame(this.requestedFrame);
	};

	CustomDragLayer.prototype.getMyItemStyles = function getMyItemStyles() {
		requestAnimationFrame(this.getItemStyles);
	};

	CustomDragLayer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
		var thisProps = this.props || {},
		    thisState = this.state || {};
		if (this.props.item && this.props.item.type === 'cardList' && this.props.isDragging !== nextProps.isDragging) {
			return true;
		}
		if (this.props.item && this.props.item.type === 'cardList' && this.props.currentOffset !== nextProps.currentOffset) {
			//如果两次移动的直线距离大于1.5px
			if (nextProps.currentOffset && Math.pow(Math.pow(this.props.clientOffset.x - nextProps.clientOffset.x, 2) + Math.pow(this.props.clientOffset.y - nextProps.clientOffset.y, 2), 0.5) > 1.5) {
				return true;
			}
		}
		return false;
	};

	CustomDragLayer.prototype.render = function render() {
		var _props = this.props,
		    item = _props.item,
		    itemType = _props.itemType,
		    isDragging = _props.isDragging;

		if (!isDragging || item.type !== 'cardList') {
			return null;
		}
		//IE浏览器去掉拖拽预览
		if (navigator.userAgent.indexOf('MSIE') > -1 || navigator.userAgent.indexOf('Trident') > -1 || navigator.userAgent.indexOf('Edge') > -1) {
			return null;
		}

		return _react2["default"].createElement(
			'div',
			{ className: _style.desk_setting_layer },
			_react2["default"].createElement(
				'div',
				{ style: this.getItemStyles() },
				this.renderItem(itemType, item)
			)
		);
	};

	return CustomDragLayer;
}(_react.Component)) || _class);
exports["default"] = CustomDragLayer;
module.exports = exports['default'];