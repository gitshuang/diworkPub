'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _background_card = require('assets/image/background_card.png');

var _background_card2 = _interopRequireDefault(_background_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

//拖拽预览组件类
var CardListDragPreview = function (_Component) {
	_inherits(CardListDragPreview, _Component);

	function CardListDragPreview(props) {
		_classCallCheck(this, CardListDragPreview);

		return _possibleConstructorReturn(this, _Component.call(this, props));
	}
	//当拖拽的siderCard的数量变化时，重新渲染


	CardListDragPreview.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
		var thisProps = this.props || {},
		    thisState = this.state || {};
		if (this.props.cardListLength !== nextProps.cardListLength) {
			return true;
		}
		return false;
	};

	CardListDragPreview.prototype.render = function render() {
		var cardListLength = this.props.cardListLength;

		var divDom = _react2["default"].createElement(
			'div',
			{
				className: 'layer-card'
			},
			_react2["default"].createElement(
				'span',
				{ className: 'layer-card-span' },
				'\uFF0B',
				cardListLength
			),
			_react2["default"].createElement('img', {
				src: _background_card2["default"],
				alt: 'logo'
			})
		);

		return _react2["default"].createElement(
			'div',
			{ className: 'desk_setting_layer_card_list' },
			divDom
		);
	};

	return CardListDragPreview;
}(_react.Component);

exports["default"] = CardListDragPreview;
module.exports = exports['default'];