'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactRedux = require('react-redux');

var _utils = require('../utils');

var _u = require('@u');

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

var _actions = require('store/root/manage/actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var updateManageList = _actions2["default"].updateManageList;


var noteSource = {
    beginDrag: function beginDrag(props, monitor, component) {
        props.checkedCardList.forEach(function (element) {
            element.size = 1;
            element.type = 3;
            element.widgetId = element.service.serviceId;
            element.widgetName = element.service.serviceName;
            element.serviceCode = element.service.serviceCode;
            element.icon = element.service.serviceIcon;
            element.size = element.widgetTemplate.size;
            element.serviceType = element.widgetTemplate.serviceType;
        });

        var data = props.data;
        data.size = 1;
        data.type = 3;
        data.widgetId = data.service.serviceId;
        data.widgetName = data.service.serviceName;
        data.serviceCode = data.service.serviceCode;
        data.icon = data.service.serviceIcon;
        data.size = data.widgetTemplate.size;
        data.serviceType = data.widgetTemplate.serviceType;
        if (!data.checked) {
            //拖拽没被选择上的元素时，元素被push进checkedCardList
            props.checkedCardList.push(data);
            ///component.clickSiderCard(true, data.parentId, data.menuItemId);
        }

        return { id: "shadowCardId", type: "cardlist", parentId: 2, cardList: props.checkedCardList //3代表widget，parentId=2暂时代表侧边栏

        };
    },
    endDrag: function endDrag(props, monitor, component) {
        var DraggedItem = monitor.getItem();
        var manageList = props.manageList,
            updateManageList = props.updateManageList;

        if (!monitor.didDrop()) {
            //debugger

            manageList.forEach(function (item) {
                item.children.forEach(function (a, b) {
                    if (a.widgetId == DraggedItem.id) {
                        item.children.splice(b, 1);
                    }
                });
            });
            updateManageList(manageList);
        } else {
            console.log("正常拖拽"); //
        }
    },
    canDrag: function canDrag(props, monitor) {
        // debugger
        var manageList = props.manageList,
            data = props.data;


        if (props.hasBeenDragged || (0, _utils.hasCardContainInGroups)(manageList, data.service.serviceId)) {
            return false;
        }
        return true;
    }
};

var Card = (_dec = (0, _reactRedux.connect)((0, _u.mapStateToProps)('manageList', 'checkedCardList', {
    namespace: 'manage'
}), {
    updateManageList: updateManageList
}), _dec2 = (0, _reactDnd.DragSource)('item', noteSource, function (connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    };
}), _dec(_class = _dec2(_class = function (_Component) {
    _inherits(Card, _Component);

    function Card(props) {
        _classCallCheck(this, Card);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.clickSiderCard = function () {
            var _this$props$data = _this.props.data,
                menuItemId = _this$props$data.menuItemId,
                parentId = _this$props$data.parentId,
                checked = _this$props$data.checked;

            _this.props.onChangeChecked(!checked, parentId, menuItemId);
        };

        return _this;
    }

    Card.prototype.componentDidMount = function componentDidMount() {
        this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {
            captureDraggingState: true
        });
    };
    // shouldComponentUpdate(nextProps,nextState){//优化：只有checked变化是才更新组件
    //     if(nextProps.checked!==this.props.checked)return true;
    //     const isContain = hasCardContainInGroups(this.props.manageList, this.props.serviceId)
    //     const isNextContain = hasCardContainInGroups(nextProps.manageList, this.props.serviceId);


    //     if (isContain!=isNextContain) {
    // 		return true;
    //     }
    //     return false
    // }
    //改变SiderCard的选中状态

    Card.prototype.render = function render() {
        var _props = this.props,
            connectDragSource = _props.connectDragSource,
            manageList = _props.manageList;
        var _props$data = this.props.data,
            serviceId = _props$data.serviceId,
            serviceName = _props$data.service.serviceName,
            checked = _props$data.checked;

        var isContainInGroups = (0, _utils.hasCardContainInGroups)(manageList, serviceId);
        return connectDragSource(_react2["default"].createElement(
            'div',
            null,
            isContainInGroups ? _react2["default"].createElement(
                'div',
                { className: 'app_col' },
                _react2["default"].createElement(
                    'div',
                    { className: _style.list_item_content + ' ' + _style.title + ' ' + _style.isAddColor },
                    _react2["default"].createElement(
                        'span',
                        { className: _style.title_name },
                        serviceName
                    )
                )
            ) : _react2["default"].createElement(
                'div',
                { className: 'app_col', onClick: this.clickSiderCard },
                _react2["default"].createElement(
                    'div',
                    { className: _style.list_item_content + ' ' + _style.title + ' ' + (checked ? 'item-checked' : null) },
                    _react2["default"].createElement(
                        'span',
                        { className: _style.title_name, title: serviceName },
                        serviceName
                    ),
                    checked ? _react2["default"].createElement('i', {
                        className: 'selected',
                        style: { color: 'rgb(0, 122, 206)' }
                    }) : null
                )
            )
        ));
    };

    return Card;
}(_react.Component)) || _class) || _class);
exports["default"] = Card;
module.exports = exports['default'];