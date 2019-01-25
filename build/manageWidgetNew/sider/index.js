'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _dec, _class, _class2, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _u = require('@u');

var _actions = require('store/root/manage/actions');

var _actions2 = _interopRequireDefault(_actions);

var _actions3 = require('store/root/actions');

var _actions4 = _interopRequireDefault(_actions3);

require('./style.css');

var _style = {
    'add_item': 'add_item__style___33Wyp',
    'sider_container': 'sider_container__style___1L4Ic',
    'toggleBar': 'toggleBar__style___2EItX',
    'menuListStyle': 'menuListStyle__style___13ktw',
    'card': 'card__style___3NQiR',
    'cardLevelFour': 'cardLevelFour__style___XWUVD',
    'cardLevelThree': 'cardLevelThree__style___2vCJy',
    'list_item': 'list_item__style___15jnV',
    'list_item_content': 'list_item_content__style___3oXP9',
    'unSelect': 'unSelect__style___1lSvW',
    'isAddColor': 'isAddColor__style___xOtdw',
    'title_name': 'title_name__style___yIeE9',
    'iconlocation': 'iconlocation__style___28d9d',
    'triangle_bottom_right': 'triangle_bottom_right__style___2l_cC',
    'title': 'title__style___2S1uq',
    'selectServiceArea': 'selectServiceArea__style___3REIN'
};

var _reactTransitionGroup = require('react-transition-group');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _icon = require('pub-comp/icon');

var _icon2 = _interopRequireDefault(_icon);

var _utils = require('../utils');

var _cardList = require('./cardList');

var _cardList2 = _interopRequireDefault(_cardList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var changeSiderState = _actions2["default"].changeSiderState,
    getAllMenuList = _actions2["default"].getAllMenuList,
    updateCheckedCardList = _actions2["default"].updateCheckedCardList;
var requestStart = _actions4["default"].requestStart,
    requestSuccess = _actions4["default"].requestSuccess,
    requestError = _actions4["default"].requestError;
var MySider = (_dec = (0, _reactRedux.connect)((0, _u.mapStateToProps)('isSiderDisplay', 'manageList', 'allMenuList', 'checkedCardList', {
    namespace: 'manage'
}), {
    getAllMenuList: getAllMenuList,
    requestStart: requestStart,
    requestSuccess: requestSuccess,
    requestError: requestError,
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
            getAllMenuList = _props.getAllMenuList,
            requestStart = _props.requestStart,
            requestError = _props.requestError,
            requestSuccess = _props.requestSuccess,
            manageList = _props.manageList;

        requestStart();
        getAllMenuList().then(function (_ref) {
            var error = _ref.error,
                payload = _ref.payload;

            if (error) {
                requestError(payload);
                return;
            }

            payload.forEach(function (a) {
                //第一级
                a.menuItems.forEach(function (b) {
                    //第二级
                    b.children.forEach(function (c) {
                        //第三极
                        if (c.children.length) {
                            c.children.forEach(function (d) {
                                if ((0, _utils.hasCardContainInGroups)(manageList, d.serviceId)) d.hasBeenDragged = true;
                            });
                        } else {
                            if ((0, _utils.hasCardContainInGroups)(manageList, c.serviceId)) c.hasBeenDragged = true;
                        }
                    });
                });
            });
            _this2.setState({
                menuList: payload
            }, function () {
                _this2.showServiceAndChangeInput();
            });
            requestSuccess();
        });

        this.setHeight();
        window.addEventListener('resize', this.setHeight);
    };

    MySider.prototype.componentDidUpdate = function componentDidUpdate() {
        //解决隐藏后重新显示
        this.setHeight();
    };

    MySider.prototype.componentWillUnmount = function componentWillUnmount() {
        window.removeEventListener('resize', this.setHeight);
    };

    MySider.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
        console.log(props, 'propsprops===============');
    };

    MySider.prototype.render = function render() {
        var _this3 = this;

        var _state = this.state,
            inputValue = _state.inputValue,
            searchValue = _state.searchValue,
            ifSearchState = _state.ifSearchState;
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
                            _react2["default"].createElement('input', { className: _style.selectService,
                                onKeyUp: this.searchService,
                                key: 'clickSearch'
                            }),
                            _react2["default"].createElement(
                                'span',
                                { onClick: this.switchFetchFn, className: 'option' },
                                '\u53D6\u6D88'
                            )
                        ) : _react2["default"].createElement(
                            'div',
                            { className: _style.selectServiceArea },
                            _react2["default"].createElement('input', { className: _style.selectService,
                                onFocus: function onFocus() {
                                    _this3.setState({ isMenuListShow: true });
                                },
                                value: inputValue,
                                key: 'menuSearch'
                                // onBlur={() => { this.setState({ isMenuListShow: false }) }}
                            }),
                            _react2["default"].createElement(_icon2["default"], { type: 'search', onClick: this.switchFetchFn, className: 'option' })
                        ),
                        this.renderMenu(),
                        _react2["default"].createElement(
                            'div',
                            { className: 'serviceArea', ref: function ref(_ref2) {
                                    return _this3.serviceArea = _ref2;
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

    this.setHeight = function () {
        if (_this4.serviceArea) {
            _this4.serviceArea.style.height = (document.documentElement || document.body).clientHeight - 180 + "px";
        }
    };

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

        if (keyPath.length) {
            _this4.state.menuList.forEach(function (item) {
                if (item.menuBarId == keyPath[1]) {
                    inputValue += item.menuBarName + '/';
                    item.menuItems.forEach(function (a) {
                        if (a.menuItemId == keyPath[0]) {
                            inputValue += a.menuItemName;
                            cardsList = a.children;
                            return;
                        }
                    });
                }
            });
        }

        if (!keyPath.length) {
            cardsList = _this4.state.menuList[0].menuItems[0].children;
            inputValue = _this4.state.menuList[0].menuBarName + '/' + _this4.state.menuList[0].menuItems[0].menuItemName;
        }

        _this4.setState({
            cardsList: cardsList,
            inputValue: inputValue,
            isMenuListShow: false,
            keyPath: keyPath
        });
    };

    this.renderService = function () {
        var checkedCardList = _this4.props.checkedCardList;

        var dom = '';
        dom = _this4.state.cardsList.map(function (a, b) {
            if (a.children && a.children.length == 0) {
                var isContainInCheckCardList = checkedCardList.some(function (item) {
                    return item.serviceId == a.serviceId;
                });
                a.checked = isContainInCheckCardList;
                return _react2["default"].createElement(
                    'div',
                    { key: a.menuItemId, className: 'result_app_list_3' },
                    _react2["default"].createElement(_card2["default"], { data: a, key: a.menuItemIdb, index: b,
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
        return dom;
    };

    this.onChangeChecked = function (checked, parentId, menuItemId) {
        var cardsList = _this4.state.cardsList;
        //const newCardsList = JSON.parse(JSON.stringify(cardsList))

        var _props3 = _this4.props,
            checkedCardList = _props3.checkedCardList,
            updateCheckedCardList = _props3.updateCheckedCardList;

        var newCheckedCardList = JSON.parse(JSON.stringify(checkedCardList));
        if (checked) {
            //如果是选中，push checkedCardList
            cardsList.forEach(function (item) {
                if (item.menuItemId == menuItemId && !item.children.length) {
                    //item.checked = checked;
                    newCheckedCardList.push(item);
                }

                if (item.children.length) {
                    item.children.forEach(function (a) {
                        if (a.menuItemId == menuItemId) {
                            //a.checked = checked;
                            newCheckedCardList.push(a);
                        }
                    });
                }
            });
        }
        if (!checked) {
            //如果是解除选中状态，改变cardList状态，从 checkedCardList中删除
            cardsList.forEach(function (item) {
                if (item.menuItemId == menuItemId && !item.children.length) {
                    //item.checked = checked;
                    newCheckedCardList = newCheckedCardList.filter(function (item) {
                        return item.menuItemId !== menuItemId;
                    });
                }

                if (item.children.length) {
                    item.children.forEach(function (a) {
                        if (a.menuItemId == menuItemId) {
                            // a.checked = checked;
                            newCheckedCardList = newCheckedCardList.filter(function (item) {
                                return item.menuItemId !== menuItemId;
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
                        if (e.children.length == 0 && e.menuItemName.indexOf(value) != -1) {
                            cardsList.push(e);
                        } else if (e.children.length != 0) {
                            e.children.forEach(function (g, h) {
                                if (g.menuItemName.indexOf(value) != -1) {
                                    cardsList.push(g);
                                }
                            });
                        }
                    });
                });
            });
            _this4.setState({ cardsList: cardsList });
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