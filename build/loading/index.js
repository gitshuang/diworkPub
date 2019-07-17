'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destoryLoadingFunc = exports.createLoadingFunc = undefined;

var _utils = require('../utils');

var _loading3 = require('./diwork/loading');

var _loading4 = _interopRequireDefault(_loading3);

var _loading5 = require('./u8c/loading');

var _loading6 = _interopRequireDefault(_loading5);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

// let Loading;
// if(productLine=='u8c'){
//    Loading = require('./u8c/loading')
// }else{
//    Loading = require('./diwork/loading')
// }

var LoadingInstance = function (_Component) {
  _inherits(LoadingInstance, _Component);

  function LoadingInstance(props) {
    _classCallCheck(this, LoadingInstance);

    //this.flag = false;//页面是否有loading的div
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.create = function (options) {
      var div = document.createElement('div');
      div.id = "_loadingModal";
      document.body.appendChild(div);
      if (_this.productLine == 'u8c') {
        var loading = _reactDom2["default"].render(_react2["default"].createElement(_loading6["default"], options), div);
      } else {
        var _loading2 = _reactDom2["default"].render(_react2["default"].createElement(_loading4["default"], options), div);
      }
    };

    _this.destory = function () {
      var div = document.getElementById('_loadingModal');
      if (!div) return false;
      _reactDom2["default"].unmountComponentAtNode(div);
      document.body.removeChild(div);
    };

    _this.productLine = '';
    // if(Object.keys(getContext()).length ){
    //   this.productLine = getContext().productLine
    // }else if(window.jDiwork){
    //   jDiwork.getContext(data => {
    //     this.productLine =  data.productLine
    //   })
    // }else{
    //   this.productLine = "diwork";
    // }
    if (window.top.diworkContext) {
      _this.productLine = window.top.diworkContext().productLine;
    } else {
      _this.productLine = "diwork";
    }
    return _this;
  }

  return LoadingInstance;
}(_react.Component);

var _loading = void 0;
function createLoadingFunc(options) {
  _loading = new LoadingInstance(options);
  _loading.create(options);
}
function destoryLoadingFunc() {
  _loading = new LoadingInstance();
  _loading.destory();
}

exports.createLoadingFunc = createLoadingFunc;
exports.destoryLoadingFunc = destoryLoadingFunc;