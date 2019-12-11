'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _dec, _class, _class2, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _action = require('../core/action');

var _action2 = _interopRequireDefault(_action);

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

var _reactTransitionGroup = require('react-transition-group');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _cardList = require('./cardList');

var _cardList2 = _interopRequireDefault(_cardList);

var _reactRedux = require('react-redux');

var _utils = require('../../utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var changeSiderState = _action2["default"].changeSiderState,
    getAllMenuList = _action2["default"].getAllMenuList,
    updateCheckedCardList = _action2["default"].updateCheckedCardList;
var MySider = (_dec = (0, _reactRedux.connect)((0, _utils.mapStateToProps)('isSiderDisplay', 'manageList', 'allMenuList', 'checkedCardList', {
    namespace: 'managewidget'
}), {
    getAllMenuList: getAllMenuList,
    changeSiderState: changeSiderState,
    updateCheckedCardList: updateCheckedCardList
}), _dec(_class = (_temp = _class2 = function (_Component) {
    _inherits(MySider, _Component);

    function MySider(props) {
        _classCallCheck(this, MySider);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
            menuList: [],
            inputValue: '',
            isMenuListShow: false,
            cardsList: [],
            keyPath: [],
            searchValue: ''
        };
        return _this;
    }

    MySider.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        var _props = this.props,
            manageList = _props.manageList,
            menuList = _props.menuList;

        this.setState({
            menuList: menuList
        }, function () {
            if (menuList.length) {
                _this2.showServiceAndChangeInput();
            }
        });
    };

    MySider.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {};

    MySider.prototype.render = function render() {
        var _React$createElement2,
            _this3 = this;

        var _state = this.state,
            inputValue = _state.inputValue,
            searchValue = _state.searchValue,
            ifSearchState = _state.ifSearchState,
            isMenuListShow = _state.isMenuListShow;
        var _props2 = this.props,
            isSiderDisplay = _props2.isSiderDisplay,
            changeSiderState = _props2.changeSiderState,
            languagesJSON = _props2.languagesJSON;

        return _react2["default"].createElement(
            _reactTransitionGroup.TransitionGroup,
            { component: 'div', className: _style.sider_container },
            _react2["default"].createElement(
                _reactTransitionGroup.CSSTransitionGroup,
                {
                    transitionName: {
                        enter: 'animated',
                        enterActive: 'fadeInLeft',
                        leave: 'animated',
                        leaveActive: 'fadeOutLeft'
                    },
                    transitionEnterTimeout: 1300,
                    transitionLeaveTimeout: 1300 },
                isSiderDisplay ? _react2["default"].createElement(
                    'div',
                    null,
                    _react2["default"].createElement(
                        'div',
                        { className: 'sider-container-fixed' },
                        _react2["default"].createElement(
                            'div',
                            { style: { position: 'absolute', width: 320, zIndex: 99999, backgroundColor: '#fff' } },
                            _react2["default"].createElement(
                                'div',
                                { className: _style.add_item },
                                _react2["default"].createElement(
                                    'span',
                                    null,
                                    _react2["default"].createElement(_icon2["default"], { type: 'notice' }),
                                    languagesJSON.notice
                                )
                            ),
                            ifSearchState ? _react2["default"].createElement(
                                'div',
                                { className: _style.selectServiceArea },
                                _react2["default"].createElement(_icon2["default"], { type: 'search', onClick: this.switchFetchFn, className: 'frontSearchIcon' }),
                                _react2["default"].createElement('input', _defineProperty({ className: _style.selectService,
                                    onKeyUp: this.searchService,
                                    key: 'clickSearch',
                                    placeholder: '\u8F93\u5165\u670D\u52A1\u540D\u79F0'
                                }, 'className', 'searchInput')),
                                _react2["default"].createElement(
                                    'span',
                                    { onClick: this.switchFetchFn, className: 'option' },
                                    '\u53D6\u6D88'
                                )
                            ) : _react2["default"].createElement(
                                'div',
                                { className: _style.selectServiceArea },
                                _react2["default"].createElement('input', (_React$createElement2 = { className: _style.selectService
                                    // onFocus={() => { this.setState({ isMenuListShow: true }) }}
                                    , value: inputValue,
                                    key: 'menuSearch'
                                    // onBlur={() => { this.setState({ isMenuListShow: false }) }}
                                }, _defineProperty(_React$createElement2, 'className', 'menuInput'), _defineProperty(_React$createElement2, 'disabled', 'disabled'), _React$createElement2)),
                                _react2["default"].createElement('div', { className: 'inputMask', onClick: function onClick() {
                                        _this3.setState({ isMenuListShow: !isMenuListShow });
                                    } }),
                                _react2["default"].createElement(_icon2["default"], { type: isMenuListShow ? "upward" : "pull-down", className: 'arrow' }),
                                _react2["default"].createElement(_icon2["default"], { type: 'search', onClick: this.switchFetchFn, className: 'option' })
                            )
                        ),
                        this.renderMenu(),
                        _react2["default"].createElement(
                            'div',
                            { className: 'serviceArea', ref: function ref(_ref) {
                                    return _this3.serviceArea = _ref;
                                } },
                            this.renderService()
                        )
                    )
                ) : _react2["default"].createElement(
                    'div',
                    { style: { width: 20 } },
                    _react2["default"].createElement(
                        'i',
                        { className: _style.add_item + ' ' + _style.toggleBar,
                            style: { position: "fixed" },
                            onClick: changeSiderState },
                        ">"
                    )
                )
            )
        );
    };

    return MySider;
}(_react.Component), _initialiseProps = function _initialiseProps() {
    var _this4 = this;

    this.renderMenu = function () {
        var _state2 = _this4.state,
            menuList = _state2.menuList,
            isMenuListShow = _state2.isMenuListShow;

        var props = {
            isMenuListShow: isMenuListShow,
            menuList: menuList,
            showServiceAndChangeInput: _this4.showServiceAndChangeInput
        };
        return _react2["default"].createElement(_menuList2["default"], props);
    };

    this.showServiceAndChangeInput = function () {
        var keyPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this4.state.keyPath;

        // 通过keyPath，获得一二级
        var inputValue = '';
        var cardsList = [];
        var menuList = _this4.state.menuList;

        if (!menuList.length) return;
        if (keyPath.length) {
            _this4.state.menuList.forEach(function (item) {
                if (item.menuBarCode == keyPath[0]) {
                    inputValue = item.menuBarName; //+ '/';
                    cardsList = item.menuItems;
                    // item.menuItems.forEach((a) => {
                    //     if (a.menuItemId == keyPath[0]) {
                    //         inputValue += a.menuItemName;
                    //         cardsList = a.children;
                    //         return
                    //     }
                    // })
                }
            });
        }

        if (!keyPath.length) {
            cardsList = menuList[0].menuItems; //.children
            inputValue = '' + menuList[0].menuBarName; ///${menuList[0].menuItems[0].menuItemName
        }

        _this4.setState({
            cardsList: cardsList,
            inputValue: inputValue,
            isMenuListShow: false,
            keyPath: keyPath,
            canShowEmptyDom: false
        });
    };

    this.renderService = function () {
        var checkedCardList = _this4.props.checkedCardList;
        var _state3 = _this4.state,
            cardsList = _state3.cardsList,
            canShowEmptyDom = _state3.canShowEmptyDom,
            ifSearchState = _state3.ifSearchState;

        var dom = '';
        dom = cardsList.map(function (a, b) {
            if (ifSearchState) {
                var isContainInCheckCardList = checkedCardList.some(function (item) {
                    return item.serviceCode == a.serviceCode;
                });
                a.checked = isContainInCheckCardList;
                return _react2["default"].createElement(
                    'div',
                    { key: a.menuItemId + '-' + b, className: 'result_app_list_3' },
                    _react2["default"].createElement(_card2["default"], { data: JSON.parse(JSON.stringify(a)), key: a.menuItemId + '-' + b, index: b,
                        onChangeChecked: _this4.onChangeChecked
                    }),
                    _react2["default"].createElement('hr', null)
                );
            }

            return _react2["default"].createElement(_cardList2["default"], {
                key: a.menuItemId,
                list: a.children,
                listName: a.menuItemName,
                checkedCardList: checkedCardList,
                onChangeChecked: _this4.onChangeChecked });
        });
        if (!dom.length && canShowEmptyDom) {
            dom = _react2["default"].createElement(
                'div',
                { className: 'emptyDom' },
                '\u6682\u65E0\u7ED3\u679C'
            );
        }
        return dom;
    };

    this.onChangeChecked = function (checked, parentId, serviceCode) {
        var cardsList = _this4.state.cardsList;
        //const newCardsList = JSON.parse(JSON.stringify(cardsList))

        var _props3 = _this4.props,
            checkedCardList = _props3.checkedCardList,
            updateCheckedCardList = _props3.updateCheckedCardList;

        var newCheckedCardList = JSON.parse(JSON.stringify(checkedCardList));
        if (checked) {
            //如果是选中，push checkedCardList
            cardsList.forEach(function (item) {
                if (item.serviceCode == serviceCode && !item.children.length) {
                    newCheckedCardList.push(item);
                }

                if (item.children.length) {
                    item.children.forEach(function (a) {
                        if (a.serviceCode == serviceCode) {
                            newCheckedCardList.push(a);
                        }
                    });
                }
            });
        }
        if (!checked) {
            //如果是解除选中状态，改变cardList状态，从 checkedCardList中删除
            cardsList.forEach(function (item) {
                if (item.serviceCode == serviceCode && !item.children.length) {
                    //item.checked = checked;
                    newCheckedCardList = newCheckedCardList.filter(function (item) {
                        return item.serviceCode !== serviceCode;
                    });
                }

                if (item.children.length) {
                    item.children.forEach(function (a) {
                        if (a.serviceCode == serviceCode) {
                            // a.checked = checked;
                            newCheckedCardList = newCheckedCardList.filter(function (item) {
                                return item.serviceCode !== serviceCode;
                            });
                        }
                    });
                }
            });
        }
        _this4.setState({
            cardsList: cardsList
        });
        updateCheckedCardList(newCheckedCardList);
    };

    this.searchService = function (e) {
        //根据cardsList变化来render
        if (e.keyCode == 13) {
            var value = e.target.value;
            var cardsList = [];
            _this4.state.menuList.forEach(function (a, b) {
                a.menuItems.forEach(function (c, d) {
                    c.children.forEach(function (e, f) {
                        if (e.children.length == 0 && e.service.serviceName && e.service.serviceName.indexOf(value) != -1) {
                            cardsList.push(e);
                        } else if (e.children.length != 0) {
                            e.children.forEach(function (g, h) {
                                if (g.service.serviceName && g.service.serviceName.indexOf(value) != -1) {
                                    cardsList.push(g);
                                }
                            });
                        }
                    });
                });
            });
            //如果有重复的,给手动搜索到的cardList去重,给下拉展示的cardList不去重,给checkedCardList去重
            var deduplicatedList = [];
            cardsList.forEach(function (item, index) {
                var isContain = deduplicatedList.some(function (d) {
                    return d.serviceCode == item.serviceCode;
                });
                if (!isContain) {
                    deduplicatedList.push(item);
                }
            });

            _this4.setState({ cardsList: deduplicatedList, canShowEmptyDom: true });
        }
    };

    this.switchFetchFn = function () {
        _this4.setState({
            ifSearchState: !_this4.state.ifSearchState,
            cardsList: []
        }, function () {
            if (_this4.state.ifSearchState) {//如果切换到search,就清空 ccardList
                //debugger

            } else {
                //如果切换到menu ，就取menu的第一级
                _this4.showServiceAndChangeInput();
            }
        });
    };
}, _temp)) || _class);
exports["default"] = MySider;
module.exports = exports['default'];