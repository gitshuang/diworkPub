'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeGlobalDialog = exports.openGlobalDialog = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _modal = require('../bee/modal');

var _modal2 = _interopRequireDefault(_modal);

var _utils = require('../utils');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button2 = require('../button');

require('./style.css');

var _style = {
  'btn': 'btn__style___20DQM',
  'closeBtn': 'closeBtn__style___2Ow_p',
  'pop_type': 'pop_type__style___7FzHT',
  'error': 'error__style___3lAfZ',
  'warning': 'warning__style___rOA-7',
  'danger': 'danger__style___2dz2P',
  'success': 'success__style___3B6OV'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PopDialog = (_temp2 = _class = function (_Component) {
  _inherits(PopDialog, _Component);

  function PopDialog() {
    var _temp, _this, _ret;

    _classCallCheck(this, PopDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.btnClick = function (evt, da) {
      var e = evt || window.event;
      window.event ? e.cancelBubble = true : e.stopPropagation();
      var _data = _this.props.data ? _this.props.data : _this;
      if (typeof da.fun === 'function') {
        da.fun(_data, e);
      } else {
        var close = _this.props.close;

        if (typeof close === 'function') {
          close();
        }
      }
    }, _this.getTypeIcon = function (type) {
      switch (type) {
        case 'error':
          return "error4";
        case 'warning':
          return "notice";
        case 'danger':
          return "help-information";
        case 'success':
          return "succeed";
      }
      return "";
    }, _this.getTypeClass = function (type) {
      switch (type) {
        case 'error':
          return _style.error;
        case 'warning':
          return _style.warning;
        case 'danger':
          return _style.danger;
        case 'success':
          return _style.success;
      }
      return "";
    }, _this.getButtonType = function (type, da, key) {
      var _className = da.className ? da.className : '';
      switch (type) {
        case 'error':
          return _react2["default"].createElement(
            _button2.ButtonDanger,
            { key: "danger_pop_btn" + key, onClick: function onClick(e) {
                _this.btnClick(e, da);
              }, className: _className + ' ' + _style.btn + ' danger', disabled: da.disable ? true : false },
            da.label
          );
        case 'warning':
          return _react2["default"].createElement(
            _button2.ButtonWarning,
            { key: "warning_pop_btn" + key,
              onClick: function onClick(e) {
                _this.btnClick(e, da);
              },
              className: _className + ' ' + _style.btn + ' warning',
              disabled: da.disable ? true : false },
            da.label
          );
        case 'danger':
          return _react2["default"].createElement(
            _button2.ButtonBrand,
            { key: "brand_pop_btn" + key,
              onClick: function onClick(e) {
                _this.btnClick(e, da);
              },
              className: _className + ' ' + _style.btn + ' brand',
              disabled: da.disable ? true : false },
            da.label
          );
        case 'defaultAlpha':
          return _react2["default"].createElement(
            _button2.ButtonDefaultAlpha,
            { key: "brand_pop_btn" + key,
              onClick: function onClick(e) {
                _this.btnClick(e, da);
              },
              className: _className + ' ' + _style.btn + ' defaultalpha',
              disabled: da.disable ? true : false },
            da.label
          );
        case 'u8c':
          return _react2["default"].createElement(
            _button2.ButtonU8c,
            { key: "u8c_pop_btn" + key,
              onClick: function onClick(e) {
                _this.btnClick(e, da);
              },
              className: _className + ' ' + _style.btn + ' ',
              disabled: da.disable ? true : false },
            da.label
          );
        case 'u8cPrimary':
          return _react2["default"].createElement(
            _button2.ButtonU8cPrimary,
            { key: "u8cPrimary_pop_btn" + key,
              onClick: function onClick(e) {
                _this.btnClick(e, da);
              },
              className: _className + ' ' + _style.btn + ' ',
              disabled: da.disable ? true : false },
            da.label
          );
        case 'u8cDefault':
          return _react2["default"].createElement(
            _button2.ButtonU8cDefault,
            { key: "u8cDefault_pop_btn" + key,
              onClick: function onClick(e) {
                _this.btnClick(e, da);
              },
              className: _className + ' ' + _style.btn + ' ',
              disabled: da.disable ? true : false },
            da.label
          );

      }
      return "";
    }, _this.getButtonList = function () {
      var _this$props = _this.props,
          btns = _this$props.btns,
          data = _this$props.data;

      var _btns = [];
      if (!btns || btns.length == 0) return _btns;
      btns.map(function (da, i) {
        var _button = null;
        if (da.type) {
          _button = _this.getButtonType(da.type, da, i);
        } else {
          _button = i === 0 ? _this.getButtonType("danger", da, i) : _this.getButtonType("defaultAlpha", da, i);
        }
        _btns.push(_button);
      });
      return _btns;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  //此方法类型，和窗口类型保持一致，且增加其他没有的类型，后续用到哪些可自动增加。


  PopDialog.prototype.render = function render() {
    var _props = this.props,
        type = _props.type,
        backdrop = _props.backdrop,
        id = _props.id;

    var _btns = this.getButtonList();

    // if(this.props.btns){
    //     let _data = this.props.data ? this.props.data : this;
    //     this.props.btns.map((da,i)=>{
    //         let _className = da.className ? da.className : null;
    //         let _defultAlphaButton = <ButtonDefaultAlpha key={"pop_btn"+i} onClick={ (e) => { this.btnClick(e,da) } } className={`${_className} ${btn} defaultalpha`} >{da.label}</ButtonDefaultAlpha>;
    //         let _button =  null;
    //         if(this.props.type == "delete"){
    //            _button = i===0?<ButtonWarning key={"pop_btn"+i} onClick={ (e) => { this.btnClick(e,da)} } className={`${_className} ${btn} warning`} >{da.label}</ButtonWarning>:_defultAlphaButton;
    //         }else{
    //            _button = i===0?<ButtonBrand key={"pop_btn"+i} onClick={ (e) => { this.btnClick(e,da) } } className={`${_className} ${btn} brand`} disabled={da.disable?true:false} >{da.label}</ButtonBrand>:_defultAlphaButton;
    //         }
    //         _btns.push(_button);
    //     })
    // }

    // this.props.backdrop?false:true
    return _react2["default"].createElement(
      _modal2["default"],
      { className: (_utils.IS_IE ? 'ie9_pop' : '') + ' ' + (this.props.className ? 'pop_dialog ' + this.props.className : "pop_dialog") + ' ' + _style.pop_type + ' ' + this.getTypeClass(this.props.type), backdrop: backdrop, show: this.props.show, onHide: this.props.close, animation: false },
      _react2["default"].createElement(
        _modal2["default"].Header,
        null,
        _react2["default"].createElement(
          _modal2["default"].Title,
          null,
          type ? _react2["default"].createElement(_icon2["default"], { type: this.getTypeIcon(type) }) : "",
          this.props.title,
          _react2["default"].createElement(
            'div',
            { className: _style.closeBtn + ' close' },
            _react2["default"].createElement(_icon2["default"], { type: 'error3', id: id + '_close', onClick: this.props.close })
          )
        )
      ),
      _react2["default"].createElement(
        _modal2["default"].Body,
        null,
        _react2["default"].createElement(
          'div',
          null,
          this.props.children ? this.props.children : this.props.msg ? this.props.msg : ''
        )
      ),
      _react2["default"].createElement(
        _modal2["default"].Footer,
        null,
        _btns
      )
    );
  };

  return PopDialog;
}(_react.Component), _class.propTypes = {
  title: _propTypes2["default"].string,
  show: _propTypes2["default"].bool,
  btns: _propTypes2["default"].array,
  close: _propTypes2["default"].any,
  data: _propTypes2["default"].any,
  type: _propTypes2["default"].string,
  backdrop: _propTypes2["default"].bool,
  id: _propTypes2["default"].string
}, _class.defaultProps = {
  backdrop: false
}, _temp2);

// const PopDialog = ({ ...props }) => {
//   // const { children ,disabled} = props;
//   return(<PopDialogComponent {...props} />)
// };

// class DialogComponent extends Component{
//   static defaultProps = {
//     title: '',
//     content: '',
//     btns: [],
//     show: true,
//     backdrop:true,
//   }
//   btnClickMaker(fn,disable) {
//     if(disable)return;
//     const { close } = this.props;
//     if (fn && typeof fn === 'function') {
//       return () => {
//         fn(close);
//       };
//     } else {
//       return close;
//     }
//   }
//   render(){
//     const {
//       title,
//       content,
//       show,
//       btns,
//       close,
//       backdrop,
//     } = this.props;
//     return(
//       <Modal className="pop_dialog" backdrop={backdrop} show={show}>
//         <Modal.Header>
//           <Modal.Title>{title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div>
//             {content}
//           </div>
//           <div className={closeBtn} onClick={close} >
//             <Icon type="error3" />
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           {
//             btns.map(({ type, label, fun ,disable}, i) => {
//               if (!label) {
//                 return null;
//               }
//               let BtnComponent = ButtonDefaultAlpha;
//               switch(type) {
//                 case 'brand':
//                   BtnComponent = ButtonBrand;
//                   break;
//                 case 'warning':
//                   BtnComponent = ButtonWarning;
//                   break;
//                 default:
//                   break;
//               }
//               return (
//                 <BtnComponent disabled={disable?true:false}
//                   key={i}
//                   className={btn}
//                   onClick={()=>{this.btnClickMaker(fun,_disable)}} >
//                   {label}
//                 </BtnComponent>
//               );
//             })
//           }
//         </Modal.Footer>
//       </Modal>
//     )
//   }
// }

var Dialog = function Dialog(options) {
  var _this2 = this;

  _classCallCheck(this, Dialog);

  this.close = function () {
    var props = _this2.props,
        onClose = _this2.props.onClose;

    if (typeof onClose === 'function' && !onClose()) {
      return;
    }
    props.show = false;
    var pro = new Promise(function (resolve) {
      _this2.render();
      setTimeout(function () {
        resolve();
      }, 1000);
    });
    pro.then(_this2.destroy.bind(_this2));
  };

  this.render = function () {
    var props = _this2.props,
        div = _this2.div;

    _reactDom2["default"].render(_react2["default"].createElement(
      PopDialog,
      _extends({}, props, { show: true }),
      _this2.props.content
    ), div);
    return _this2;
  };

  this.destroy = function () {
    var div = _this2.div;

    var unmountResult = _reactDom2["default"].unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  this.div = document.createElement('div');
  this.props = _extends({}, options, {
    close: options.close ? options.close.bind(this) : this.close.bind(this)
  });
  document.body.appendChild(this.div);
  this.render();
};

var globalDialogInstance = void 0;
var dialogIsOpen = false;
function makeGlobalDialogInstance(options) {
  globalDialogInstance = new Dialog(options);
  return globalDialogInstance;
}
function openGlobalDialog(options) {
  // if (dialogIsOpen) {
  //   return;
  // }
  // dialogIsOpen = true;
  var dialogFactory = makeGlobalDialogInstance.bind(null, options);
  if (globalDialogInstance) {
    globalDialogInstance.destroy();
  }
  var instance = dialogFactory();
  return instance;
}
function closeGlobalDialog() {
  if (globalDialogInstance) {
    globalDialogInstance.close();
  }
}
// window.dialog = dialog;
exports["default"] = PopDialog;
exports.openGlobalDialog = openGlobalDialog;
exports.closeGlobalDialog = closeGlobalDialog;