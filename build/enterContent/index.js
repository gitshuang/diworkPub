'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;
// 公共UI组件

// diwork业务组件


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _form = require('../bee/form');

var _form2 = _interopRequireDefault(_form);

var _formControl = require('../bee/form-control');

var _formControl2 = _interopRequireDefault(_formControl);

var _radio = require('../bee/radio');

var _radio2 = _interopRequireDefault(_radio);

var _select = require('../bee/select');

var _select2 = _interopRequireDefault(_select);

var _citySelect = require('../bee/city-select');

var _citySelect2 = _interopRequireDefault(_citySelect);

var _progress = require('../progress');

var _progress2 = _interopRequireDefault(_progress);

var _upload = require('./upload');

var _upload2 = _interopRequireDefault(_upload);

var _checkTenantStatus = require('./checkTenantStatus');

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

require('./style.css');

var _style = {
  'enterForm': 'enterForm__style___3rLaN',
  'upload': 'upload__style___1zxuY',
  'country': 'country__style___3E-Os',
  'tel': 'tel__style___2OXF9',
  'code': 'code__style___1L3cM',
  'line': 'line__style___1rbXZ',
  'infoTitle': 'infoTitle__style___15dG2',
  'progressBar': 'progressBar__style___kjcre',
  'inputPhone': 'inputPhone__style___1hlKj'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Option = _select2["default"].Option;
var EnterContent = (_temp = _class = function (_Component) {
  _inherits(EnterContent, _Component);

  function EnterContent(props) {
    _classCallCheck(this, EnterContent);

    var _this2 = _possibleConstructorReturn(this, _Component.call(this, props));

    _this2.onCityChange = function (obj) {
      // if(obj.area == this.state.address.area) return;
      _this2.setState({
        address: _extends({}, obj)
      });
      // this.address = obj;
    };

    _this2.onChangeUpload = function (url) {
      _this2.setState({
        logo: url
      });
    };

    _this2.inputOnChange = function (e, name) {
      _this2.setState(_defineProperty({}, name, e));
    };

    _this2.clickFn = function (e) {
      e.preventDefault();

      _this2.props.form.validateFields(function (err, values) {
        if (err) {
          console.log('校验失败', values);
        } else {
          _this2.checkForm(values);
        }
      });
    };

    _this2.checkForm = function (data) {
      var _this2$props = _this2.props,
          handleClickFn = _this2$props.handleClickFn,
          _from = _this2$props._from;
      var _this2$state = _this2.state,
          tenantId = _this2$state.tenantId,
          addressInput = _this2$state.addressInput,
          logo = _this2$state.logo,
          address = _this2$state.address;
      // const address = this.address.area !== this.state.address.area ? this.address : this.state.address;

      _this2.setState({
        disabled: true
        // address
      });
      // 将地址 组合  真实上传的参数
      var TenantAddress = address.province + '|' + address.city + '|' + address.area + '|' + addressInput;
      data.tenantAddress = TenantAddress;
      data.tenantId = tenantId;
      data.tenantTel = '' + data.countryCode + data.tenantTel;
      data.logo = logo;
      handleClickFn(data, function (_ref) {
        var error = _ref.error,
            payload = _ref.payload;

        // 只要是回调都将按钮的disabled 设定为false
        _this2.setState({
          disabled: false
        });
        // 创建
        if (!error && _from === "create") {
          _this2.setState({
            startFlag: true,
            tenantId: payload.tenantId
          }, function () {
            (0, _checkTenantStatus.check)(payload.tenantId, _this2.loadingFunc, _this2.successFunc);
          });
          return false;
        }
        // 升级
        if (!error && _from === "update") {
          _this2.setState({
            startFlag: true
          });
          (0, _checkTenantStatus.check)(tenantId, _this2.loadingFunc, _this2.successFunc);
        }
      });
    };

    _this2.successLoading = function () {
      var _this2$props2 = _this2.props,
          _from = _this2$props2._from,
          switchSpace = _this2$props2.switchSpace;
      var tenantId = _this2.state.tenantId;

      if (_from === "create") {
        switchSpace(tenantId);
        return false;
      }
      window.location.href = '/?tenantId=' + tenantId + '&switch=true';
    };

    _this2.loadingCallBack = function (loadingFunc, successFunc) {
      _this2.timer = setInterval(loadingFunc, 500);
      _this2.loadingFunc = loadingFunc;
      _this2.successFunc = successFunc;
    };

    _this2.state = {
      disabled: false, // 按钮是否可点击， true为不可点击 
      startFlag: false, // process 0～1 
      tenantId: '', // 租户ID
      address: null, // 企业地址 
      addressInput: '', // 企业地址 (60个字输入框)

      tenantName: '', // 企业名称
      logo: '', // logo
      tenantIndustry: 'A', // 选中的行业
      tenantSize: 'A', // 规模范围
      tenantAddress: '', // 企业地址 + 60个字输入框显示

      invitePermission: '', // 邀请规则              string类型
      joinPermission: '', // 申请权限              string
      allowExit: '', // 允许用户退出           string
      subordinateType: '', // 上下级显示             number类型
      isWaterMark: 1, // 通讯录是否显示水印      number类型

      linkman: '', // 姓名
      countryCode: '86', // 国家代号
      tenantTel: '', // 手机号
      tenantEmail: '', // 邮箱
      charged: true // new -  企业是否为付费
    };

    // progressbar
    _this2.loadingFunc = null;
    _this2.successFunc = null;
    _this2.timer = null;
    _this2.address = {};
    return _this2;
  }

  EnterContent.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        data = _props.data,
        userInfo = _props.userInfo,
        _from = _props._from;
    // 如果来自创建 ， 只做将userInfo信息灌入到组件中显示

    if (_from === "create") {
      this.setState({
        linkman: userInfo.userName,
        tenantEmail: userInfo.userEmail,
        tenantTel: userInfo.userMobile,
        address: {
          province: '北京',
          city: '北京',
          area: '东城区'
        }
      });
      return false;
    }
    var tenantAddress = data.tenantAddress;
    // 将 地址综合 赋值到 address 和 address和 addressInput 上

    if (tenantAddress) {
      var Addres = tenantAddress.split('|');
      data.address = {
        province: Addres[0] || '北京',
        city: Addres[1] || '北京',
        area: Addres[2] || '东城区'
      };
      data.addressInput = Addres[Addres.length - 1];
    } else {
      data.address = {
        province: '北京',
        city: '北京',
        area: '东城区'
      };
    }
    data.linkman = data.linkman || userInfo.userName;
    data.tenantEmail = data.tenantEmail || userInfo.userEmail;
    data.countryCode = data.tenantTel ? data.tenantTel.substring(0, data.tenantTel.length - 11) : '86';
    data.tenantTel = data.tenantTel ? data.tenantTel.substring(data.tenantTel.length - 11) : userInfo.userMobile;
    this.setState(_extends({}, data));
  };
  // 切换企业地址


  // 上传组件设置新的logo - url， 后期需要更改为方法传递到 


  // 更改输入框的值


  // 这个方法是点击了提交按钮执行的，form组件封的有点疯


  EnterContent.prototype.render = function render() {
    var _this3 = this;

    var _props2 = this.props,
        buttonText = _props2.buttonText,
        _from = _props2._from,
        loadingDesc = _props2.loadingDesc,
        texts = _props2.texts;
    var _props$form = this.props.form,
        getFieldProps = _props$form.getFieldProps,
        getFieldError = _props$form.getFieldError;

    var _this = this;
    var _state = this.state,
        address = _state.address,
        startFlag = _state.startFlag,
        addressInput = _state.addressInput,
        tenantName = _state.tenantName,
        logo = _state.logo,
        tenantIndustry = _state.tenantIndustry,
        tenantSize = _state.tenantSize,
        invitePermission = _state.invitePermission,
        joinPermission = _state.joinPermission,
        allowExit = _state.allowExit,
        subordinateType = _state.subordinateType,
        isWaterMark = _state.isWaterMark,
        linkman = _state.linkman,
        tenantTel = _state.tenantTel,
        tenantEmail = _state.tenantEmail,
        countryCode = _state.countryCode,
        charged = _state.charged;


    return _react2["default"].createElement(
      _form2["default"],
      { submitCallBack: this.checkForm, showSubmit: false, className: _style.enterForm },
      _react2["default"].createElement(
        _form.FormItem,
        null,
        _react2["default"].createElement(
          'label',
          null,
          _react2["default"].createElement(
            'span',
            null,
            texts.tenantNameLabel,
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          )
        ),
        _react2["default"].createElement(_formControl2["default"], _extends({
          name: 'tenantName',
          value: tenantName || '',
          onChange: function onChange(e) {
            _this3.inputOnChange(e, 'tenantName');
          },
          placeholder: texts.placeholder1
        }, getFieldProps('tenantName', {
          initialValue: tenantName || '',
          validateTrigger: 'onBlur',
          rules: [{ required: true, message: texts.tenantNameError }]
        }))),
        _react2["default"].createElement(
          'span',
          { className: 'error' },
          getFieldError('tenantName')
        )
      ),
      _react2["default"].createElement(
        _form.FormItem,
        null,
        _react2["default"].createElement(
          'label',
          null,
          _react2["default"].createElement(
            'span',
            null,
            texts.logoLabel,
            ' \xA0\xA0\xA0 '
          )
        ),
        _react2["default"].createElement(
          'div',
          { className: _style.upload },
          _react2["default"].createElement(_upload2["default"], {
            name: 'logo',
            logo: logo || '',
            onChange: this.onChangeUpload,
            tip: '',
            logoError: texts.logoError,
            logoError2: texts.logoError2,
            uploadApplication: this.props.uploadApplication
          })
        )
      ),
      _react2["default"].createElement(
        _form.FormItem,
        null,
        _react2["default"].createElement(
          'label',
          null,
          _react2["default"].createElement(
            'span',
            null,
            texts.tenantIndustryLabel,
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          )
        ),
        _react2["default"].createElement(
          _select2["default"],
          _extends({
            name: 'tenantIndustry',
            style: { width: 338, marginRight: 6 }
          }, getFieldProps('tenantIndustry', {
            initialValue: tenantIndustry || 'A',
            rules: [{ required: true }]
          })),
          texts.tenantIndustry.map(function (_ref2) {
            var label = _ref2.label,
                value = _ref2.value;
            return _react2["default"].createElement(
              Option,
              { key: value, value: value },
              label
            );
          })
        )
      ),
      _react2["default"].createElement(
        _form.FormItem,
        null,
        _react2["default"].createElement(
          'label',
          null,
          _react2["default"].createElement(
            'span',
            null,
            texts.tenantSizeLabel,
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          )
        ),
        _react2["default"].createElement(
          _select2["default"],
          _extends({
            style: { width: 338, marginRight: 6 }
          }, getFieldProps('tenantSize', {
            initialValue: tenantSize || 'A',
            rules: [{ required: true }]
          })),
          texts.tenantSizeOption.map(function (_ref3) {
            var label = _ref3.label,
                value = _ref3.value;
            return _react2["default"].createElement(
              Option,
              { key: '' + value, value: value },
              label
            );
          })
        )
      ),
      address ? _react2["default"].createElement(
        _form.FormItem,
        null,
        _react2["default"].createElement(
          'label',
          null,
          _react2["default"].createElement(
            'span',
            null,
            texts.addressLabel,
            '\xA0\xA0'
          )
        ),
        _react2["default"].createElement(_citySelect2["default"], {
          name: 'address',
          onChange: this.onCityChange,
          defaultValue: address
          // value={address}
        })
      ) : null,
      _react2["default"].createElement(
        _form.FormItem,
        null,
        _react2["default"].createElement('label', null),
        _react2["default"].createElement(_formControl2["default"], {
          name: 'addressInput',
          value: addressInput || '',
          onChange: function onChange(e) {
            _this3.inputOnChange(e, 'addressInput');
          },
          placeholder: texts.placeholder1
        })
      ),
      _from === "create" || !charged ? null : _react2["default"].createElement(
        _form.FormItem,
        null,
        _react2["default"].createElement(
          'label',
          null,
          _react2["default"].createElement(
            'span',
            null,
            texts.invitePermissionLabel,
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          )
        ),
        _react2["default"].createElement(
          _select2["default"],
          _extends({
            style: { width: 338, marginRight: 6 }
          }, getFieldProps('invitePermission', {
            initialValue: invitePermission || '1',
            rules: [{ required: true }]
          })),
          _react2["default"].createElement(
            Option,
            { value: '1' },
            texts.invitePermissionO1
          ),
          _react2["default"].createElement(
            Option,
            { value: '2' },
            texts.invitePermissionO2
          ),
          _react2["default"].createElement(
            Option,
            { value: '0' },
            texts.invitePermissionO3
          )
        )
      ),
      _from === "create" ? null : _react2["default"].createElement(
        _form.FormItem,
        null,
        _react2["default"].createElement(
          'label',
          null,
          _react2["default"].createElement(
            'span',
            null,
            texts.joinPermissionLabel,
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          )
        ),
        _react2["default"].createElement(
          _select2["default"],
          _extends({
            style: { width: 338, marginRight: 6 }
          }, getFieldProps('joinPermission', {
            initialValue: joinPermission || '1',
            rules: [{ required: true }]
          })),
          _react2["default"].createElement(
            Option,
            { value: '0' },
            texts.joinPermissionO1
          ),
          _react2["default"].createElement(
            Option,
            { value: '1' },
            texts.joinPermissionO2
          )
        )
      ),
      _from === "create" || !charged ? null : _react2["default"].createElement(
        _form.FormItem,
        null,
        _react2["default"].createElement(
          'label',
          null,
          _react2["default"].createElement(
            'span',
            null,
            texts.allowExitLabel,
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          )
        ),
        _react2["default"].createElement(
          _radio2["default"].RadioGroup,
          _extends({
            name: 'allowExit',
            selectedValue: allowExit || '0'
          }, getFieldProps('allowExit', {
            initialValue: allowExit || '0',
            onChange: function onChange(value) {
              _this.setState({ allowExit: value });
            },

            rules: [{ required: true }]
          })),
          _react2["default"].createElement(
            _radio2["default"],
            { value: '0' },
            texts.radio1
          ),
          _react2["default"].createElement(
            _radio2["default"],
            { value: '1' },
            texts.radio2
          )
        )
      ),
      _from === "create" ? null : _react2["default"].createElement(
        _form.FormItem,
        null,
        _react2["default"].createElement(
          'label',
          null,
          _react2["default"].createElement(
            'span',
            null,
            texts.subordinateTypeLabel,
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          )
        ),
        _react2["default"].createElement(
          _select2["default"],
          _extends({
            style: { width: 338, marginRight: 6 }
          }, getFieldProps('subordinateType', {
            initialValue: subordinateType || 0,
            rules: [{ required: true }]
          })),
          _react2["default"].createElement(
            Option,
            { value: 0 },
            texts.subordinateTypeO1,
            ' '
          ),
          _react2["default"].createElement(
            Option,
            { value: 1 },
            texts.subordinateTypeO2
          )
        )
      ),
      _from === "create" ? null : _react2["default"].createElement(
        _form.FormItem,
        null,
        _react2["default"].createElement(
          'label',
          null,
          _react2["default"].createElement(
            'span',
            null,
            texts.isWaterMarkLabel,
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              ' \xA0*\xA0'
            )
          )
        ),
        _react2["default"].createElement(
          _radio2["default"].RadioGroup,
          _extends({
            name: 'isWaterMark',
            selectedValue: isWaterMark
          }, getFieldProps('isWaterMark', {
            initialValue: isWaterMark,
            onChange: function onChange(value) {
              _this.setState({ isWaterMark: value });
            },

            rules: [{ required: true }]
          })),
          _react2["default"].createElement(
            _radio2["default"],
            { value: 0 },
            texts.radio1
          ),
          _react2["default"].createElement(
            _radio2["default"],
            { value: 1 },
            texts.radio2
          )
        )
      ),
      _react2["default"].createElement('div', { className: _style.line }),
      _react2["default"].createElement(
        'div',
        { className: _style.infoTitle },
        texts.infoTitle,
        '\uFF1A'
      ),
      _react2["default"].createElement(
        _form.FormItem,
        null,
        _react2["default"].createElement(
          'label',
          null,
          _react2["default"].createElement(
            'span',
            null,
            texts.linkmanLabel,
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          )
        ),
        _react2["default"].createElement(_formControl2["default"], _extends({
          name: 'linkman',
          value: linkman || '',
          placeholder: texts.linkmanError,
          onChange: function onChange(e) {
            _this3.inputOnChange(e, 'linkman');
          }
        }, getFieldProps('linkman', {
          validateTrigger: 'onBlur',
          initialValue: linkman || '',
          rules: [{ required: true, message: texts.linkmanError }]
        }))),
        _react2["default"].createElement(
          'span',
          { className: 'error' },
          getFieldError('linkman')
        )
      ),
      _react2["default"].createElement(
        _form.FormItem,
        null,
        _react2["default"].createElement(
          'label',
          null,
          _react2["default"].createElement(
            'span',
            null,
            texts.tenantEmailLabel,
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          )
        ),
        _react2["default"].createElement(_formControl2["default"], _extends({
          name: 'tenantEmail',
          value: tenantEmail || '',
          onChange: function onChange(e) {
            _this3.inputOnChange(e, 'tenantEmail');
          },
          placeholder: texts.tenantEmailPlace
        }, getFieldProps('tenantEmail', {
          validateTrigger: 'onBlur',
          initialValue: tenantEmail || '',
          rules: [{ required: true, type: 'email', message: texts.tenantEmailError }]
        }))),
        _react2["default"].createElement(
          'span',
          { className: 'error' },
          getFieldError('tenantEmail')
        )
      ),
      _react2["default"].createElement(
        _form.FormItem,
        { className: _style.country },
        _react2["default"].createElement(
          'label',
          null,
          _react2["default"].createElement(
            'span',
            null,
            texts.tenantTelLabel,
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          )
        ),
        _react2["default"].createElement(
          _select2["default"],
          _extends({
            style: { width: 112 }
          }, getFieldProps('countryCode', {
            initialValue: countryCode,
            rules: [{ required: true }]
          })),
          texts.country.map(function (_ref4) {
            var countryCode = _ref4.countryCode,
                name = _ref4.name;
            return _react2["default"].createElement(
              Option,
              { value: countryCode },
              name
            );
          })
        ),
        _react2["default"].createElement(
          'div',
          { className: _style.tel },
          _react2["default"].createElement(
            'div',
            { className: _style.code },
            '+' + countryCode
          ),
          _react2["default"].createElement(_formControl2["default"], _extends({
            name: 'tenantTel',
            type: 'tel',
            value: tenantTel || '',
            onChange: function onChange(e) {
              _this3.inputOnChange(e, 'tenantTel');
            },
            placeholder: texts.tenantTelPlace
          }, getFieldProps('tenantTel', {
            validateTrigger: 'onBlur',
            initialValue: tenantTel || '',
            rules: [{ required: true, message: texts.tenantTelError }]
          })))
        ),
        _react2["default"].createElement(
          'span',
          { className: 'error' },
          getFieldError('tenantTel')
        )
      ),
      _react2["default"].createElement('div', { className: 'clear', style: { clear: "both" } }),
      startFlag ? _react2["default"].createElement(
        'div',
        { className: _style.progressBar },
        _react2["default"].createElement(_progress2["default"], {
          loadingCallBack: this.loadingCallBack,
          successFunc: this.successLoading,
          startFlag: startFlag,
          loadingDesc: loadingDesc
        })
      ) : _react2["default"].createElement(_button2["default"], {
        onClick: this.clickFn,
        buttonText: buttonText,
        disabled: this.state.disabled
      })
    );
  };

  return EnterContent;
}(_react.Component), _class.propTypes = {
  userInfo: _propTypes2["default"].shape({
    userName: _propTypes2["default"].string,
    userEmail: _propTypes2["default"].string,
    userMobile: _propTypes2["default"].string
  }),
  data: _propTypes2["default"].shape({}),
  handleClickFn: _propTypes2["default"].func,
  _from: _propTypes2["default"].string,
  buttonText: _propTypes2["default"].string,
  uploadApplication: _propTypes2["default"].func,
  loadingDesc: _propTypes2["default"].string
}, _class.defaultProps = {
  userInfo: {}, // 用户信息
  data: {}, // data ， 企业信息，新建为空
  handleClickFn: function handleClickFn() {}, // 按钮点击事件
  _from: '', // 来源，（新建，设置，升级）
  buttonText: '', // 按钮显示文字
  uploadApplication: function uploadApplication() {}, // 上传事件
  loadingDesc: '' // 滚动条 文字提示
}, _temp);
exports["default"] = _form2["default"].createForm()(EnterContent);
module.exports = exports['default'];