'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon2 = require('../../icon');

var _icon3 = _interopRequireDefault(_icon2);

require('./style.css');

var _style = {
  'upload_page': 'upload_page__style___zYQWv',
  'uploadImg': 'uploadImg__style___BN5PM',
  'appImg': 'appImg__style___45bj3',
  'appValidate': 'appValidate__style___1Ukr7',
  'edit': 'edit__style___1G3e-',
  'titlp_lab': 'titlp_lab__style___39ui_',
  'form_btnFile': 'form_btnFile__style___TCnEm',
  'ie9_form': 'ie9_form__style___IpeSX',
  'hidden_form': 'hidden_form__style___3RZCb',
  'icon': 'icon__style___2YinQ'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var UploadPage = function (_Component) {
  _inherits(UploadPage, _Component);

  function UploadPage(props) {
    _classCallCheck(this, UploadPage);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.uploadImage = function () {
      _this.refs.file.click();
    };

    _this.imgChange = function (e) {
      if (e.target.value.trim().length === 0) {
        _this.setState({
          imgWarning: "请上传图片"
        });
      }
      var val = e.target.value && e.target.value.substr(e.target.value.lastIndexOf("."));
      if (val && !val.match(/.jpg|.gif|.png|.bmp|.svg/i)) {
        _this.setState({
          imgWarning: "必须是一个图片"
        });
        return false;
      } else {
        _this.setState({
          imgWarning: false
        });
      }
      //todu 
      if (navigator.userAgent.indexOf("MSIE 9.0") > 0) {
        var formVal = document.getElementById('upload-form');
        formVal.submit();
        window.attachEvent ? document.getElementById('frameUpload').attachEvent('onload', _this.handleOnLoad) : document.getElementById('frameUpload').addEventListener('load', _this.handleOnLoad);
        return true; //后面的不再执行了  
      }

      var obj = _this.refs.file.files[0];
      var imgUrl = window.URL.createObjectURL(obj);
      var from = new FormData();
      from.append('file', obj);
      _this.props.uploadApplication(from).then(function (_ref) {
        var url = _ref.url;

        _this.setState({
          applicationIcon: url
        });
        if (typeof _this.props.onChange === 'function') {
          _this.props.onChange(url);
        }
      }, function (e) {
        console.log(e);
      });
    };

    _this.handleOnLoad = function () {
      var frame = document.getElementById('frameUpload');
      var resp = {};
      var content = frame.contentWindow ? frame.contentWindow.document.body : frame.contentDocument.document.body;
      if (!content) throw new Error('Your browser does not support async upload');
      resp.responseText = content.innerHTML || 'null innerHTML';
      resp.json = JSON.parse(resp.responseText) || eval('(' + resp.responseText + ')');
      var dataBack = resp.json || resp.responseText;
      if (dataBack) {
        _this.props.onChange(dataBack.data.url);
        _this.setState({
          applicationIcon: dataBack.data.url
        });
      }
    };

    _this.getIe9Html = function () {
      var _this$state = _this.state,
          applicationIcon = _this$state.applicationIcon,
          imgWarning = _this$state.imgWarning;

      var _icon = applicationIcon != '' ? 'ie9_cont' : 'ie9_form_cont';
      if (navigator.userAgent.indexOf("MSIE 9.0") > 0) {
        return _react2["default"].createElement(
          'div',
          { className: _style.ie9_form + ' ' + _icon },
          _react2["default"].createElement(
            'div',
            { className: '' + _style.hidden_form },
            _react2["default"].createElement(
              'form',
              { id: 'upload-form', name: 'myform', action: '/manager/file/upload/oss/workbench-image-path-applicationIcon', method: 'post',
                target: 'frameUpload', acceptCharset: 'utf-8', encType: 'multipart/form-data' },
              _react2["default"].createElement('input', { id: 'btn_file', className: _style.form_btnFile, type: 'file', name: 'file', accept: 'image/x-png,image/gif,image/jpeg,image/bmp', onChange: function onChange(e) {
                  return _this.imgChange(e);
                } })
            ),
            _react2["default"].createElement('iframe', { id: 'frameUpload', name: 'frameUpload', style: { 'width': 0, 'height': 0, 'opacity': 0 } })
          ),
          _react2["default"].createElement(_icon3["default"], { type: 'copyreader', className: _style.icon })
        );
      } else {
        return _react2["default"].createElement(
          'div',
          null,
          _react2["default"].createElement('input', { type: 'file', ref: 'file', accept: 'image/x-png,image/gif,image/jpeg,image/bmp', onChange: _this.imgChange, style: { display: "none" } }),
          _react2["default"].createElement(
            'div',
            { className: _style.edit, onClick: _this.uploadImage },
            _react2["default"].createElement(_icon3["default"], { type: 'copyreader' })
          )
        );
      }
    };

    _this.state = {
      applicationIcon: "",
      imgWarning: false
    };
    return _this;
  }

  UploadPage.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.logo != this.state.applicationIcon) {
      this.setState({
        applicationIcon: nextProps.logo
      });
    }
  };

  UploadPage.prototype.render = function render() {
    var _state = this.state,
        applicationIcon = _state.applicationIcon,
        imgWarning = _state.imgWarning;

    return _react2["default"].createElement(
      'div',
      { className: _style.upload_page },
      applicationIcon == "" ? _react2["default"].createElement('div', { className: _style.appImg + ' imgsrc' }) : _react2["default"].createElement('img', { id: 'imgSrc', src: applicationIcon, className: _style.appImg + ' imgsrc' }),
      imgWarning ? _react2["default"].createElement(
        'div',
        { className: _style.appValidate },
        imgWarning
      ) : null,
      this.getIe9Html(),
      this.props.tip ? _react2["default"].createElement(
        'span',
        { className: _style.titlp_lab },
        this.props.tip
      ) : ''
    );
  };

  return UploadPage;
}(_react.Component);

exports["default"] = UploadPage;
module.exports = exports['default'];