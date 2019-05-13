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

var _utils2 = require('../../utils');

require('./style.css');

var _style = {
    'add_item': 'add_item__style___1wNB1',
    'sider_container': 'sider_container__style___3roSv',
    'toggleBar': 'toggleBar__style___oEZHt',
    'menuListStyle': 'menuListStyle__style___2fz5L',
    'card': 'card__style___1NB_G',
    'cardLevelFour': 'cardLevelFour__style___3vnP-',
    'cardLevelThree': 'cardLevelThree__style___AmEQG',
    'list_item': 'list_item__style___1qQZB',
    'list_item_content': 'list_item_content__style___tGwAz',
    'unSelect': 'unSelect__style___mpC6s',
    'isAddColor': 'isAddColor__style___34XMn',
    'title_name': 'title_name__style___3lhWQ',
    'iconlocation': 'iconlocation__style___1_YkG',
    'triangle_bottom_right': 'triangle_bottom_right__style___2XDYr',
    'title': 'title__style___2w8h-',
    'selectServiceArea': 'selectServiceArea__style___1guLK'
};

var _action = require('../core/action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var updateManageList = _action2["default"].updateManageList,
    updateShadowCard = _action2["default"].updateShadowCard;


var noteSource = {
    beginDrag: function beginDrag(props, monitor, component) {

        var data = props.data;

        if (!data.checked) {
            //拖拽没被选择上的元素时，元素被push进checkedCardList
            props.checkedCardList.push(data);
            //component.clickSiderCard(true, data.parentId, data.menuItemId);
        }
        props.checkedCardList.forEach(function (element) {
            element.size = 1;
            element.type = 3;
            element.widgetId = element.service.serviceId;
            element.widgetName = element.service.serviceName;
            element.serviceCode = element.service.serviceCode;
            element.icon = element.service.serviceIcon;
            element.size = element.widgetTemplate ? element.widgetTemplate.size : 1;
            element.serviceType = element.widgetTemplate ? element.widgetTemplate.serviceType : 1;

            switch (element.size) {
                case 1:
                    element.height = 1;
                    element.width = 1;
                    break;
                case 2:
                    element.height = 1;
                    element.width = 2;
                    break;
                case 3:
                    element.height = 2;
                    element.width = 2;
                    break;
                default:
                    element.height = 1;
                    element.width = 1;
            }
        });
        var dragCard = {
            isShadow: true,
            width: 1,
            height: 1,
            widgetId: "shadowCardId"
        };
        props.updateShadowCard(dragCard);
        console.log(props.checkedCardList, 'checkedCardList=========checkedCardList');
        return { id: "shadowCardId", type: "cardList", cardList: props.checkedCardList //3代表widget，parentId=2暂时代表侧边栏

        };
    },
    endDrag: function endDrag(props, monitor, component) {
        var DraggedItem = monitor.getItem();
        var manageList = props.manageList,
            updateManageList = props.updateManageList;

        if (!monitor.didDrop()) {

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
        var manageList = props.manageList,
            data = props.data;

        if ((0, _utils.hasCardContainInGroups)(manageList, data.service.serviceCode)) {
            return false;
        }
        return true;
    }
};

var Card = (_dec = (0, _reactRedux.connect)((0, _utils2.mapStateToProps)('manageList', 'checkedCardList', {
    namespace: 'managewidget'
}), {
    updateManageList: updateManageList,
    updateShadowCard: updateShadowCard
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
                serviceCode = _this$props$data.service.serviceCode,
                parentId = _this$props$data.parentId,
                checked = _this$props$data.checked;

            _this.props.onChangeChecked(!checked, parentId, serviceCode);
        };

        return _this;
    }

    Card.prototype.componentDidMount = function componentDidMount() {
        this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {
            captureDraggingState: true
        });
    };

    Card.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        //优化：只有checked变化是才更新组件
        if (nextProps.data.checked !== this.props.data.checked) return true;
        var isContain = (0, _utils.hasCardContainInGroups)(this.props.manageList, this.props.data.service.serviceCode);
        var isNextContain = (0, _utils.hasCardContainInGroups)(nextProps.manageList, nextProps.data.service.serviceCode);
        if (isContain != isNextContain) {
            return true;
        }
        return false;
    };

    //改变SiderCard的选中状态


    Card.prototype.render = function render() {
        var _props = this.props,
            connectDragSource = _props.connectDragSource,
            manageList = _props.manageList;
        var _props$data = this.props.data,
            _props$data$service = _props$data.service,
            serviceName = _props$data$service.serviceName,
            serviceCode = _props$data$service.serviceCode,
            checked = _props$data.checked;

        var isContainInGroups = (0, _utils.hasCardContainInGroups)(manageList, serviceCode);
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
                    _react2["default"].createElement('i', {
                        className: checked ? "selected" : null,
                        style: { color: 'rgb(0, 122, 206)' }
                    })
                )
            )
        ));
    };

    return Card;
}(_react.Component)) || _class) || _class);
exports["default"] = Card;
module.exports = exports['default'];