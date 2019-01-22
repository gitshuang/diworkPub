'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var WidgetItemFather = function (_Component) {
	_inherits(WidgetItemFather, _Component);

	function WidgetItemFather(props) {
		_classCallCheck(this, WidgetItemFather);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_this.popSave = function (data) {
			var delectService = _this.props.delectService;

			delectService(data.widgetId);
			_this.setState({
				showModal: false
			});
		};

		_this.popClose = function () {
			_this.setState({
				showModal: false
			});
		};

		_this.isContained = function (a, b) {
			if (!(a instanceof Array) || !(b instanceof Array)) return false;
			if (a.length < b.length) return false;
			var aStr = a.toString();
			for (var i = 0, len = b.length; i < len; i++) {
				if (aStr.indexOf(b[i]) == -1) return false;
			}
			return true;
		};

		_this.onHandChange = function (flag) {
			var _this$props = _this.props,
			    selectList = _this$props.selectList,
			    selectGroup = _this$props.selectGroup,
			    selectListActions = _this$props.selectListActions,
			    selectGroupActions = _this$props.selectGroupActions,
			    propsIndex = _this$props.propsIndex,
			    manageList = _this$props.manageList;
			var widgetId = _this.props.data.widgetId;

			var selectList2 = void 0;
			if (!flag) {
				selectList2 = selectList.filter(function (item, i) {
					return item !== widgetId;
				});
				var selectGroup2 = selectGroup.filter(function (item, i) {
					return propsIndex !== item;
				});
				selectGroupActions(selectGroup2);
			} else {
				selectList2 = [widgetId].concat(_toConsumableArray(selectList));
				// 判断当前分组下的子节点是否都在selectList中
				var newArr = manageList[propsIndex].children.map(function (item, index) {
					return item.widgetId;
				});
				console.log(_this.isContained(selectList2, newArr));
				if (_this.isContained(selectList2, newArr)) {
					selectGroup.push(propsIndex);
					selectGroupActions(selectGroup);
				}
			}
			selectListActions(selectList2);
		};

		return _this;
	}

	return WidgetItemFather;
}(_react.Component);

exports["default"] = WidgetItemFather;
module.exports = exports['default'];