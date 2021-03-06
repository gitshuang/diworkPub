'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menus = require('../../bee/menus');

var _menus2 = _interopRequireDefault(_menus);

require('./style.css');

var _style = {
    'add_item': 'add_item__style___3ExNW',
    'sider_container': 'sider_container__style___6IhSA',
    'toggleBar': 'toggleBar__style___1Cm_T',
    'menuListStyle': 'menuListStyle__style___2tmSr',
    'card': 'card__style___TJQQb',
    'cardLevelFour': 'cardLevelFour__style___23gwO',
    'cardLevelThree': 'cardLevelThree__style___28iBy',
    'list_item': 'list_item__style___3ZqK5',
    'list_item_content': 'list_item_content__style___GW5Jo',
    'unSelect': 'unSelect__style___2CSzr',
    'isAddColor': 'isAddColor__style___3etrI',
    'title_name': 'title_name__style___16JSy',
    'iconlocation': 'iconlocation__style___3f7Tv',
    'triangle_bottom_right': 'triangle_bottom_right__style___361U-',
    'title': 'title__style___QeZnm',
    'selectServiceArea': 'selectServiceArea__style___1lpsL'
};

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _reactRedux = require('react-redux');

var _utils = require('../../utils');

var _action = require('../core/action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var SubMenu = _menus2["default"].SubMenu;
var updateCheckedCardList = _action2["default"].updateCheckedCardList;
var MenuList = (_dec = (0, _reactRedux.connect)((0, _utils.mapStateToProps)('checkedCardList', {
    namespace: 'managewidget'
}), {
    updateCheckedCardList: updateCheckedCardList
}), _dec(_class = (0, _reactOnclickoutside2["default"])(_class = function (_React$Component) {
    _inherits(MenuList, _React$Component);

    function MenuList() {
        var _temp, _this, _ret;

        _classCallCheck(this, MenuList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (e) {
            _this.props.showServiceAndChangeInput(e.keyPath);
            _this.props.updateCheckedCardList([]);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    MenuList.prototype.handleClickOutside = function handleClickOutside(evt) {
        var _props = this.props,
            showServiceAndChangeInput = _props.showServiceAndChangeInput,
            isMenuListShow = _props.isMenuListShow;

        if (evt.target.className == 'inputMask') return;
        if (isMenuListShow) {
            showServiceAndChangeInput();
        }
    };

    MenuList.prototype.render = function render() {
        var _props2 = this.props,
            menuList = _props2.menuList,
            isMenuListShow = _props2.isMenuListShow;

        return _react2["default"].createElement(
            _menus2["default"],
            { defaultOpenKeys: ["0"], className: _style.menuListStyle, onClick: this.handleClick, style: { display: isMenuListShow ? "block" : "none" } },
            menuList.map(function (item, index) {
                return _react2["default"].createElement(
                    _menus2["default"].Item,
                    { key: item.menuBarCode },
                    '  ',
                    item.menuBarName
                );
            })
        );
    };

    return MenuList;
}(_react2["default"].Component)) || _class) || _class);
exports["default"] = MenuList;
module.exports = exports['default'];