'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class, _temp;

/*  style */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('../bee/button');

var _button2 = _interopRequireDefault(_button);

var _menus = require('../bee/menus');

var _menus2 = _interopRequireDefault(_menus);

var _u = require('@u');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button3 = require('../button');

require('../iconfont.js');

require('./style.css');

var _style = {
  'container': 'container__style___3CvgR',
  'title': 'title__style___YVWvc',
  'close': 'close__style___PWIUk',
  'borderBox': 'borderBox__style___1q8V0',
  'u-menu-inline': 'u-menu-inline__style___1KbeC',
  'u-menu-selected': 'u-menu-selected__style___2rj0p',
  'footer': 'footer__style___33izj',
  'selectedli': 'selectedli__style___6ub3B',
  'saveBtn': 'saveBtn__style___2n4e3',
  'icon': 'icon__style___1HXQR'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Item = _menus2["default"].Item;
var MoveToGroup = (_temp = _class = function (_Component) {
  _inherits(MoveToGroup, _Component);

  function MoveToGroup(props) {
    _classCallCheck(this, MoveToGroup);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.setNewGroupName = function (e) {
      var env = e || window.event;
      _this.setState({
        newGroupName: env.target.value,
        way: env.target.value
      });
    };

    _this.handlerClick = function (selectId) {
      var way = (0, _u.findPath)(_this.props.data, 'children', 'widgetId', selectId).map(function (_ref) {
        var widgetName = _ref.widgetName;
        return widgetName;
      }).join('/');
      _this.setState({
        way: way,
        selectId: selectId,
        inAddGroup: false
      });
    };

    _this.addGroup = function () {
      var _this$props = _this.props,
          data = _this$props.data,
          languagesJSON = _this$props.languagesJSON;

      var nameArr = data.map(function (_ref2) {
        var widgetName = _ref2.widgetName;
        return widgetName;
      });
      var newGroupName = (0, _u.avoidSameName)(nameArr, languagesJSON.group);
      _this.setState({
        inAddGroup: true,
        newGroupName: newGroupName
      });
      setTimeout(function () {
        _this.newGroupName.focus();
        _this.newGroupName.select();
      }, 0);
    };

    _this.confirmAddGroup = function () {
      _this.props.onAddGroup(_this.state.newGroupName).then(function (_ref3) {
        var error = _ref3.error,
            payload = _ref3.payload;

        if (!error) {
          _this.props.onSave(payload.widgetId);
          _this.setState({
            inAddGroup: false
          });
        }
      });
    };

    _this.save = function () {
      var _this$state = _this.state,
          selectId = _this$state.selectId,
          inAddGroup = _this$state.inAddGroup;

      if (inAddGroup) {
        _this.confirmAddGroup();
      } else {
        _this.props.onSave(selectId);
      }
    };

    _this.cancel = function () {
      _this.props.onCancel();
    };

    _this.state = {
      // 新分组名
      newGroupName: '分组',
      // 是否是打开新的分组
      inAddGroup: false,
      // 路径
      way: '',
      // 选中的id
      selectId: ''
    };
    return _this;
  }

  // 新分组名称的onchange

  //  点击每一行对应的操作

  // 点击添加分组

  // 确认添加分组


  //   保存

  //  取消


  MoveToGroup.prototype.makeSelectInterface = function makeSelectInterface(data, selectId) {
    var _this2 = this;

    // 下拉菜单式*/
    var result = [];
    data.forEach(function (_ref4) {
      var widgetId = _ref4.widgetId,
          widgetName = _ref4.widgetName,
          children = _ref4.children;

      var classname = widgetId === selectId ? _style.selectedli : '';
      if (children && children.length) {
        result.push(_react2["default"].createElement(
          _menus.SubMenu,
          {
            key: widgetId,
            classname: classname,
            title: _react2["default"].createElement(
              'span',
              { onClick: function onClick() {
                  _this2.handlerClick(widgetId);
                },
                onKeyDown: function onKeyDown() {
                  _this2.handlerClick(widgetId);
                },
                role: 'presentation',
                style: { display: "block" },
                className: classname
              },
              widgetName
            )
          },
          _this2.makeSelectInterface(children, selectId)
        ));
      } else {
        var pushOb = _react2["default"].createElement(
          Item,
          { key: widgetId, className: classname },
          _react2["default"].createElement(_icon2["default"], { font: 'wenjianjia' }),
          _react2["default"].createElement(
            'span',
            {
              style: { display: "block" },
              onClick: function onClick() {
                _this2.handlerClick(widgetId);
              },
              onKeyDown: function onKeyDown() {
                _this2.handlerClick(widgetId);
              },
              role: 'presentation'
            },
            widgetName
          )
        );
        result.push(pushOb);
      }
    });
    return result;
    /* 默认展开式 */
    // if (data.length) {
    //   return (
    //     <ul>
    //       {
    //         data.map(({ widgetId, widgetName, children, type }) => {
    //           const classname = widgetId == selectId ? selectedli : "";
    //           return (
    //             <li key={widgetId}>
    //               <p
    //                 onClick={this.handlerClick.bind(this, widgetId)}
    //                 className={ classname }>
    //                 { widgetName }
    //               </p>
    //               {
    //                 children ?
    //                   this.makeSelectInterface(children, selectId) :
    //                   null
    //               }
    //             </li>
    //           );
    //         })
    //       }
    //     </ul>
    //   );
    // } else {
    //   return null;
    // }
  };

  MoveToGroup.prototype.render = function render() {
    var _this3 = this;

    var _state = this.state,
        inAddGroup = _state.inAddGroup,
        newGroupName = _state.newGroupName,
        way = _state.way,
        selectId = _state.selectId;
    var _props = this.props,
        data = _props.data,
        onSave = _props.onSave,
        onCancel = _props.onCancel,
        onAddGroup = _props.onAddGroup,
        caller = _props.caller,
        languagesJSON = _props.languagesJSON;


    var content = _react2["default"].createElement(
      'div',
      { className: _style.container },
      _react2["default"].createElement(
        'div',
        { className: _style.title },
        caller,
        languagesJSON.to,
        '\uFF1A',
        way,
        _react2["default"].createElement(_icon2["default"], { className: _style.close, type: 'error3', onClick: this.cancel })
      ),
      _react2["default"].createElement(
        'div',
        { className: _style.borderBox },
        _react2["default"].createElement(
          _menus2["default"],
          {
            onClick: this.handleClick,
            style: { width: '100%' },
            onOpenChange: this.onOpenChange,
            mode: 'inline'
          },
          this.makeSelectInterface(data, selectId)
        ),
        inAddGroup ? _react2["default"].createElement(
          'div',
          null,
          _react2["default"].createElement('input', {
            type: 'text',
            ref: function ref(c) {
              _this3.newGroupName = c;
            },
            value: newGroupName,
            onChange: this.setNewGroupName,
            maxLength: '4'
          })
        ) : null
      ),
      _react2["default"].createElement(
        'div',
        { className: _style.footer + ' um-box-justify', style: { overflow: 'hidden' } },
        onAddGroup ? _react2["default"].createElement(
          'div',
          null,
          _react2["default"].createElement(
            _button2["default"],
            { style: { "float": 'left',
                position: 'relative',
                paddingLeft: 16,
                maxWidth: 103,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              },
              onClick: this.addGroup, disabled: inAddGroup },
            _react2["default"].createElement(
              'svg',
              { className: _style.icon, 'aria-hidden': 'true' },
              _react2["default"].createElement('use', { xlinkHref: '#icon-xinzeng' })
            ),
            languagesJSON.addGroup
          )
        ) : null,
        _react2["default"].createElement(
          'div',
          { style: { "float": 'right' } },
          onCancel ? _react2["default"].createElement(
            _button3.ButtonU8cDefault,
            {
              onClick: this.cancel
            },
            languagesJSON.cancel
          ) : null,
          onSave ? _react2["default"].createElement(
            _button3.ButtonU8cPrimary
            //colors="danger"
            ,
            { disabled: !way && !inAddGroup,
              className: _style.saveBtn,
              onClick: this.save
            },
            languagesJSON.confirm
          ) : null
        )
      )
    );
    return content;
  };

  return MoveToGroup;
}(_react.Component), _class.propTypes = {
  data: _propTypes2["default"].arrayOf(_propTypes2["default"].object),
  onAddGroup: _propTypes2["default"].func,
  onSave: _propTypes2["default"].func,
  onCancel: _propTypes2["default"].func,
  caller: _propTypes2["default"].string
}, _class.defaultProps = {
  data: [],
  onAddGroup: function onAddGroup() {},
  onSave: function onSave() {},
  onCancel: function onCancel() {},
  caller: ''
}, _temp);
exports["default"] = MoveToGroup;
module.exports = exports['default'];