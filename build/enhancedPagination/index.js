'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pagination = require('../bee/pagination');

var _pagination2 = _interopRequireDefault(_pagination);

require('./style.css');

var _style = {
  'enhanced_pagination': 'enhanced_pagination__style___3adls',
  'u_float_pagination': 'u_float_pagination__style___1w2E-',
  'data_per_select': 'data_per_select__style___3LK_h',
  'data_select': 'data_select__style___3IIDe',
  'page_jump': 'page_jump__style___2UQbq',
  'page_jump_value': 'page_jump_value__style___2gtGd'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
//新增的三个
//onDataNumSelect func 下拉选择每页展示的数据数的时候
//dataNumSelect  array ，下拉的数据选择有哪些
//dataNumSelectActive number，默认选中的每页展示的数据数
// 函数接受一个组件参数……


var EnhancedPagination = function EnhancedPagination(WrappedComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props));

      _this.onKeyup = function (e) {
        e.keyCode === 13 && _this.setPageJump(e);
      };

      _this.setPageJump = function (e) {
        var value = e.target.value;
        if (value < 1 && value !== '' || value > _this.props.items || value == 0 && value !== '') {
          return false;
        } else {
          //注意这里要将下拉的数据还原
          _this.setState({ activePage: value }, function () {
            if (value !== '') this.props.onSelect(value * 1);
          });
        }
      };

      _this.dataNumSelect = function (e) {
        var id = e.target.value;
        var dataNumValue = _this.props.dataNumSelect[id].value;
        _this.setState({
          dataNum: id
        });
        if (_this.props.onDataNumSelect) {
          _this.props.onDataNumSelect(id, dataNumValue);
        }
      };

      _this.state = {
        activePage: _this.props.activePage, //当前的页码
        dataNum: '1' //dataNumSelect的id 对应的时10条/页
      };
      return _this;
    }

    _class.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.state.activePage !== nextProps.activePage) {
        this.setState({
          activePage: nextProps.activePage
        });
      }
    };

    _class.prototype.render = function render() {
      var _this2 = this;

      var newProps = {
        maxButtons: 5,
        boundaryLinks: true
      };

      var _props = this.props,
          onDataNumSelect = _props.onDataNumSelect,
          dataNumSelect = _props.dataNumSelect,
          dataNum = _props.dataNum,
          enhancedPaginationText = _props.enhancedPaginationText,
          className = _props.className,
          restProps = _objectWithoutProperties(_props, ['onDataNumSelect', 'dataNumSelect', 'dataNum', 'enhancedPaginationText', 'className']);

      return _react2["default"].createElement(
        'div',
        { className: _style.enhanced_pagination + ' ' + className },
        _react2["default"].createElement(WrappedComponent, _extends({}, newProps, restProps, { className: _style.u_float_pagination })),
        _react2["default"].createElement(
          'div',
          { className: _style.data_per_select },
          _react2["default"].createElement(
            'select',
            { name: 'data-select', id: '', className: _style.data_select, value: dataNum === undefined ? this.state.dataNum : dataNum, onChange: function onChange(e) {
                return _this2.dataNumSelect(e);
              } },
            dataNumSelect.length > 0 && dataNumSelect.map(function (item, i) {
              return _react2["default"].createElement(
                'option',
                { key: i, value: item.id },
                item.name
              );
            })
          )
        ),
        _react2["default"].createElement(
          'div',
          { className: _style.page_jump },
          enhancedPaginationText.jump,
          _react2["default"].createElement('input', { className: _style.page_jump_value, type: 'number', value: this.state.activePage, onKeyDown: function onKeyDown(e) {
              return _this2.onKeyup(e);
            }, onChange: function onChange(e) {
              return _this2.setPageJump(e);
            } }),
          enhancedPaginationText.jumpPage
        )
      );
    };

    return _class;
  }(_react.Component), _class.defaultProps = {
    first: true,
    last: true,
    prev: true,
    next: true,
    boundaryLinks: true,
    size: 'sm',
    gap: true,
    maxButtons: 7,
    dataNumSelect: [{ id: 0, name: '5条/页', value: 5 }, { id: 1, name: '10条/页', value: 10 }, { id: 2, name: '15条/页', value: 15 }, { id: 3, name: '20条/页', value: 20 }],
    items: 0,
    activePage: 1,
    dataNum: undefined,
    enhancedPaginationText: { //因为多语
      jump: '跳至',
      jumpPage: '页'
    }
  }, _temp;
};

exports["default"] = EnhancedPagination(_pagination2["default"]);
module.exports = exports['default'];