'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var CardsList = function (_React$Component) {
    _inherits(CardsList, _React$Component);

    function CardsList(props) {
        _classCallCheck(this, CardsList);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleClick = function () {
            _this.setState({
                isShow: !_this.state.isShow
            });
        };

        _this.state = {
            isShow: true
        };
        return _this;
    }

    CardsList.prototype.componentDidMount = function componentDidMount() {

        var height = this.listDom.offsetHeight;
        this.setState({
            height: height
        });
    };

    CardsList.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            list = _props.list,
            listName = _props.listName,
            onChangeChecked = _props.onChangeChecked,
            checkedCardList = _props.checkedCardList;
        var _state = this.state,
            isShow = _state.isShow,
            height = _state.height;

        var display = isShow ? 'flex' : 'none';
        var showStyle = isShow ? {
            height: height
        } : {
            height: 0
        };
        list.forEach(function (element) {
            var isContainInCheckCardList = checkedCardList.some(function (a) {
                return a.serviceId == element.serviceId;
            });

            element.checked = isContainInCheckCardList;
        });
        return _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(
                'div',
                { className: 'serviceTitle' },
                _react2["default"].createElement(
                    'span',
                    null,
                    listName
                ),
                _react2["default"].createElement('i', { className: (0, _classnames2["default"])({ down: isShow }), onClick: this.handleClick })
            ),
            _react2["default"].createElement(
                'div',
                { className: 'result_app_list_4', style: _extends({}, showStyle, { transition: "height .5s" }), ref: function ref(_ref) {
                        return _this2.listDom = _ref;
                    } },
                list.map(function (item, c) {

                    return _react2["default"].createElement(_card2["default"], { data: item, key: item.menuItemId, index: c,
                        onChangeChecked: onChangeChecked,
                        checkedCardList: checkedCardList
                    }); //{item.menuItemName}
                })
            ),
            _react2["default"].createElement('hr', null)
        );
    };

    return CardsList;
}(_react2["default"].Component);

exports["default"] = CardsList;
module.exports = exports['default'];