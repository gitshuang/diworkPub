'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style.css');

var _style = {
  'upload_page': 'upload_page__style___3QZds',
  'uploadImg': 'uploadImg__style___3TvPm',
  'appImg': 'appImg__style___34-l0',
  'appValidate': 'appValidate__style___8SLYM',
  'edit': 'edit__style___1zXjF',
  'titlp_lab': 'titlp_lab__style___2Z3IF',
  'form_btnFile': 'form_btnFile__style___1RFX7',
  'ie9_form': 'ie9_form__style___23fPC',
  'hidden_form': 'hidden_form__style___39F9z',
  'icon': 'icon__style___tdjiQ'
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
      var _this$props = _this.props,
          logoError = _this$props.logoError,
          logoError2 = _this$props.logoError2;

      if (e.target.value.trim().length === 0) {
        _this.setState({
          imgWarning: logoError
        });
      }
      var val = e.target.value && e.target.value.substr(e.target.value.lastIndexOf("."));
      if (val && !val.match(/.jpg|.gif|.png|.bmp|.svg/i)) {
        _this.setState({
          imgWarning: logoError2
        });
        return false;
      } else {
        _this.setState({
          imgWarning: false
        });
      }

      var obj = _this.refs.file.files[0];
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
      _react2["default"].createElement(
        'div',
        null,
        _react2["default"].createElement('input', { type: 'file', ref: 'file', accept: 'image/x-png,image/gif,image/jpeg,image/bmp', onChange: this.imgChange, style: { display: "none" } }),
        _react2["default"].createElement(
          'div',
          { className: _style.edit, onClick: this.uploadImage },
          _react2["default"].createElement(_icon2["default"], { type: 'copyreader' })
        )
      ),
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