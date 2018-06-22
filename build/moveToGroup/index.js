'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../bee/button');

var _button2 = _interopRequireDefault(_button);

var _menus = require('../bee/menus');

var _menus2 = _interopRequireDefault(_menus);

var _utils = require('../utils');

require('./style.css');

var _style = {
  'container': 'container__style___2QKUW',
  'title': 'title__style___3suWk',
  'pd': 'pd__style___e-e2T',
  'borderBox': 'borderBox__style___6ccEy',
  'footer': 'footer__style___1e6dr',
  'saveBtn': 'saveBtn__style___i-5bZ',
  'selectedli': 'selectedli__style___NnZPl'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Item = _menus2["default"].Item;

var MoveToGroup = function (_Component) {
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

    _this.addGroup = function () {
      var data = _this.props.data;

      var nameArr = data.map(function (_ref) {
        var widgetName = _ref.widgetName;

        return widgetName;
      });
      var newGroupName = (0, _utils.avoidSameName)(nameArr, '分组');
      _this.setState({
        inAddGroup: true,
        newGroupName: newGroupName
      });
      setTimeout(function () {
        _this.refs.newGroupName.focus();
        _this.refs.newGroupName.select();
      }, 0);
    };

    _this.confirmAddGroup = function () {
      _this.props.onAddGroup(_this.state.newGroupName).then(function (_ref2) {
        var error = _ref2.error,
            payload = _ref2.payload;

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
      newGroupName: "分组", // 新分组名
      inAddGroup: false, // 是否是打开新的分组
      way: '', // 路径
      selectId: '' // 选中的id
    };
    return _this;
  }

  // 新分组名称的onchange


  //  点击每一行对应的操作
  MoveToGroup.prototype.handlerClick = function handlerClick(selectId) {
    var way = (0, _utils.findPath)(this.props.data, 'children', 'widgetId', selectId).map(function (_ref3) {
      var widgetName = _ref3.widgetName;
      return widgetName;
    }).join('/');
    this.setState({
      way: way,
      selectId: selectId,
      inAddGroup: false
    });
  };
  // 点击添加分组

  // 确认添加分组


  //   保存

  //  取消


  MoveToGroup.prototype.makeSelectInterface = function makeSelectInterface(data, selectId) {
    var _this2 = this;

    /*下拉菜单式*/
    var result = [];
    data.forEach(function (_ref4) {
      var widgetId = _ref4.widgetId,
          widgetName = _ref4.widgetName,
          children = _ref4.children,
          type = _ref4.type;

      var classname = widgetId == selectId ? _style.selectedli : "";
      if (children && children.length) {
        result.push(_react2["default"].createElement(
          _menus.SubMenu,
          {
            key: widgetId,
            title: _react2["default"].createElement(
              'span',
              {
                onClick: _this2.handlerClick.bind(_this2, widgetId),
                className: classname },
              widgetName
            ) },
          _this2.makeSelectInterface(children, selectId)
        ));
      } else {
        result.push(_react2["default"].createElement(
          Item,
          { key: widgetId, className: classname },
          _react2["default"].createElement(
            'span',
            {
              onClick: _this2.handlerClick.bind(_this2, widgetId) },
            widgetName
          )
        ));
      }
    });
    return result;
    /*默认展开式*/
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
        caller = _props.caller;


    var content = _react2["default"].createElement(
      'div',
      { className: _style.container },
      _react2["default"].createElement(
        'div',
        { className: _style.title },
        caller,
        '\u5230\uFF1A',
        way
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
            mode: 'inline' },
          this.makeSelectInterface(data, selectId)
        ),
        inAddGroup ? _react2["default"].createElement(
          'div',
          null,
          _react2["default"].createElement('input', { type: 'text', ref: 'newGroupName',
            value: newGroupName,
            onChange: this.setNewGroupName,
            autoFocus: 'autofocus'
          })
        ) : null
      ),
      _react2["default"].createElement(
        'div',
        { className: _style.footer + ' um-box-justify' },
        onAddGroup ? _react2["default"].createElement(
          'div',
          null,
          _react2["default"].createElement(
            _button2["default"],
            { onClick: this.addGroup, disabled: inAddGroup ? true : false },
            '\u6DFB\u52A0\u5206\u7EC4'
          )
        ) : null,
        _react2["default"].createElement(
          'div',
          null,
          onSave ? _react2["default"].createElement(
            _button2["default"],
            {
              colors: 'danger',
              disabled: !way && !inAddGroup,
              className: _style.saveBtn,
              onClick: this.save },
            '\u786E\u5B9A'
          ) : null,
          onCancel ? _react2["default"].createElement(
            _button2["default"],
            {
              onClick: this.cancel },
            '\u53D6\u6D88'
          ) : null
        )
      )
    );
    {/*if (inAddGroup) {
       content = (
         <div className= {`${pd} ${container}`}>
           <div className={borderBox}>
             <input type="text" value={newGroupName} onChange={ this.setNewGroupName }/>
           </div>
           <div className={footer + " um-box-justify"}>
             <Button colors="danger" disabled={!newGroupName} onClick={ this.confirmAddGroup }>添加新分组</Button>
             <Button onClick={ this.cancelAddGroup }>取消</Button>
           </div>
         </div>
       );
      }else{
       }*/}
    return content;
  };

  return MoveToGroup;
}(_react.Component);

exports["default"] = MoveToGroup;
module.exports = exports['default'];