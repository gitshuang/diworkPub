'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _state2 = require('./state');

require('./style.css');

var _style = {
  'enterForm': 'enterForm__style___3rLaN',
  'line': 'line__style___1rbXZ',
  'infoTitle': 'infoTitle__style___15dG2',
  'progressBar': 'progressBar__style___kjcre'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
// 公共UI组件

// diwork业务组件


var Option = _select2["default"].Option;

var EnterContent = function (_Component) {
  _inherits(EnterContent, _Component);

  function EnterContent(props) {
    _classCallCheck(this, EnterContent);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.onCityChange = function (obj) {
      _this.setState({
        address: _extends({}, obj)
      });
    };

    _this.onChangeUpload = function (url) {
      _this.setState({
        logo: url
      });
    };

    _this.setOptherData = function (obj) {
      var name = obj.name,
          value = obj.value;

      _this.setState(_defineProperty({}, name, value));
    };

    _this.allowExitChange = function (value) {
      _this.setState({
        allowExit: value
      });
    };

    _this.watermarkChange = function (value) {
      _this.setState({
        isWaterMark: value
      });
    };

    _this.inputOnChange = function (e, name) {
      _this.setState(_defineProperty({}, name, e));
    };

    _this.checkForm = function (flag, data) {
      var _this$props = _this.props,
          handleClickFn = _this$props.handleClickFn,
          _from = _this$props._from;
      var _this$state = _this.state,
          tenantId = _this$state.tenantId,
          address = _this$state.address,
          addressInput = _this$state.addressInput,
          allowExit = _this$state.allowExit,
          isWaterMark = _this$state.isWaterMark;


      if (flag) {
        _this.setState({
          disabled: true
        });
        // 这个form表单组件有点坑， 还得自己完善兼容性  radio的两个 
        // if (_from !== "create") {
        //   const AllowExit = data.find(da => da.name === 'allowExit');
        //   if (!AllowExit.value && AllowExit.value === '') {
        //     AllowExit.value = allowExit;
        //   }
        //   const Watermark = data.find(da => da.name === 'isWaterMark');
        //   if (!Watermark.value && Watermark.value === '') {
        //     Watermark.value = isWaterMark;
        //   }
        // }

        // 将地址 组合  真实上传的参数
        var TenantAddress = address.province + '|' + address.city + '|' + address.area + '|' + addressInput;
        data.push({ name: 'tenantAddress', value: TenantAddress });
        data.push({ name: 'tenantId', value: tenantId });
        var param = data.reduce(function (obj, _ref) {
          var value = _ref.value,
              name = _ref.name;

          if (name) {
            obj[name] = value;
          }
          return obj;
        }, {});

        handleClickFn(param, function (_ref2) {
          var error = _ref2.error,
              payload = _ref2.payload;

          // 只要是回调都将按钮的disabled 设定为false
          _this.setState({
            disabled: false
          });
          if (!error) {
            _this.setState({
              startFlag: true
            });
            // 当创建企业 
            if (_from === "create") {
              _this.setState({
                tenantId: payload.tenantId
              }, function () {
                (0, _checkTenantStatus.check)(payload.tenantId, _this.loadingFunc, _this.successFunc);
              });
              return false;
            }
            // 团队升级为企业   需要加载  并且检测 
            if (_from === "update") {
              (0, _checkTenantStatus.check)(tenantId, _this.loadingFunc, _this.successFunc);
              return false;
            }
          }
        });
      }
    };

    _this.successLoading = function () {
      var tenantId = _this.state.tenantId;

      window.location.href = '/?tenantId=' + tenantId + '&switch=true';
    };

    _this.loadingCallBack = function (loadingFunc, successFunc) {
      _this.timer = setInterval(loadingFunc, 500);
      _this.loadingFunc = loadingFunc;
      _this.successFunc = successFunc;
    };

    _this.state = {
      disabled: false, // 按钮是否可点击， true为不可点击  （todo现在反了）
      startFlag: false, // process 0～1 
      tenantId: '', // 租户ID
      address: {
        province: '北京',
        city: '北京',
        area: '东城区'
      }, // 企业地址 
      addressInput: '', // 企业地址 (60个字输入框)

      tenantName: '', // 企业名称
      logo: '', // logo
      tenantIndustry: '', // 选中的行业
      tenantSize: '', // 规模范围
      tenantAddress: '', // 企业地址 + 60个字输入框显示

      invitePermission: '', // 邀请规则              string类型
      joinPermission: '', // 申请权限              string
      allowExit: '', // 允许用户退出           string
      subordinateType: '', // 上下级显示             number类型
      isWaterMark: 1, // 通讯录是否显示水印      number类型

      linkman: '', // 姓名
      tenantTel: '', // 手机号
      tenantEmail: '' // 邮箱
    };

    // 所属行业
    _this.tenantIndustry = _state2.tenantIndustry;
    // 规模范围
    _this.tenantSizeOption = _state2.tenantSizeOption;

    // progressbar
    _this.loadingFunc = null;
    _this.successFunc = null;
    _this.timer = null;
    return _this;
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
        tenantTel: userInfo.userMobile
      });
      return false;
    }
    var tenantAddress = data.tenantAddress;
    // 将 地址综合 赋值到 address 和 address和 addressInput 上

    if (tenantAddress) {
      var Addres = tenantAddress.split('|');
      data.address = {
        province: Addres[0] || '',
        city: Addres[1] || '',
        area: Addres[2] || ''
      };
      data.addressInput = Addres[Addres.length - 1];
    }
    data.linkman = data.linkman || userInfo.userName;
    data.tenantEmail = data.tenantEmail || userInfo.userEmail;
    data.tenantTel = data.tenantTel || userInfo.userMobile;

    this.setState(_extends({}, data));
  };
  // 切换企业地址


  // 上传组件设置新的logo - url， 后期需要更改为方法传递到 


  // select 更改

  // 更改是否允许用户退出

  // 通讯录显示水印


  // 更改输入框的值


  // 这个方法是点击了提交按钮执行的，form组件封的有点疯


  EnterContent.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        buttonText = _props2.buttonText,
        _from = _props2._from,
        loadingDesc = _props2.loadingDesc;
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
        tenantEmail = _state.tenantEmail;


    return _react2["default"].createElement(
      _form2["default"],
      { submitCallBack: this.checkForm, showSubmit: false, className: _style.enterForm },
      _react2["default"].createElement(
        _form.FormItem,
        {
          showMast: false,
          labelName: _react2["default"].createElement(
            'span',
            null,
            '\u4F01\u4E1A\u540D\u79F0',
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          ),
          isRequire: true,
          valuePropsName: 'value',
          errorMessage: '\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0',
          method: 'blur',
          inline: true
        },
        _react2["default"].createElement(_formControl2["default"], { name: 'tenantName', value: tenantName || '', onChange: function onChange(e) {
            _this2.inputOnChange(e, 'tenantName');
          }, placeholder: '\u6700\u591A60\u4E2A\u5B57\u7B26' })
      ),
      _react2["default"].createElement(
        _form.FormItem,
        {
          showMast: false,
          labelName: _react2["default"].createElement(
            'span',
            null,
            '\u4F01\u4E1A\u5934\u50CF \xA0\xA0\xA0 '
          ),
          valuePropsName: 'value',
          method: 'change',
          inline: true
        },
        _react2["default"].createElement(_upload2["default"], {
          name: 'logo',
          logo: logo || '',
          onChange: this.onChangeUpload,
          tip: '',
          uploadApplication: this.props.uploadApplication
        })
      ),
      _react2["default"].createElement(
        _form.FormItem,
        {
          showMast: false,
          labelName: _react2["default"].createElement(
            'span',
            null,
            '\u6240\u5C5E\u884C\u4E1A',
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          ),
          isRequire: true,
          valuePropsName: 'value',
          errorMessage: '\u8BF7\u9009\u62E9\u6240\u5C5E\u884C\u4E1A',
          method: 'blur',
          inline: true
        },
        _react2["default"].createElement(
          _select2["default"],
          {
            name: 'tenantIndustry',
            defaultValue: 'A',
            value: tenantIndustry || 'A',
            style: { width: 338, marginRight: 6 },
            onChange: function onChange(e) {
              _this2.setOptherData({ name: 'tenantIndustry', value: e });
            }
          },
          this.tenantIndustry.map(function (_ref3) {
            var label = _ref3.label,
                value = _ref3.value;
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
        {
          showMast: false,
          labelName: _react2["default"].createElement(
            'span',
            null,
            '\u89C4\u6A21\u8303\u56F4',
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          ),
          isRequire: true,
          valuePropsName: 'value',
          errorMessage: '\u8BF7\u9009\u62E9\u89C4\u6A21\u8303\u56F4',
          method: 'blur',
          inline: true
        },
        _react2["default"].createElement(
          _select2["default"],
          {
            name: 'tenantSize',
            defaultValue: 'A',
            value: tenantSize || "A",
            style: { width: 338, marginRight: 6 },
            onChange: function onChange(e) {
              _this2.setOptherData({ name: 'tenantSize', value: e });
            }
          },
          this.tenantSizeOption.map(function (_ref4) {
            var label = _ref4.label,
                value = _ref4.value;
            return _react2["default"].createElement(
              Option,
              { key: '' + value, value: value },
              label
            );
          })
        )
      ),
      _react2["default"].createElement(
        _form.FormItem,
        {
          showMast: false,
          labelName: _react2["default"].createElement(
            'span',
            null,
            '\u4F01\u4E1A\u5730\u5740\xA0\xA0'
          ),
          isRequire: false,
          valuePropsName: 'value',
          errorMessage: '\u8BF7\u8F93\u5165\u4F01\u4E1A\u5730\u5740',
          method: 'blur',
          inline: true
        },
        _react2["default"].createElement(_citySelect2["default"], { name: 'address', onChange: this.onCityChange, defaultValue: address })
      ),
      _react2["default"].createElement(
        _form.FormItem,
        {
          showMast: false,
          isRequire: false,
          valuePropsName: 'value',
          errorMessage: '\u8BF7\u8F93\u5165\u4F01\u4E1A\u5730\u5740',
          method: 'blur',
          inline: true
        },
        _react2["default"].createElement(_formControl2["default"], {
          name: 'addressInput',
          value: addressInput || '',
          onChange: function onChange(e) {
            _this2.inputOnChange(e, 'addressInput');
          },
          placeholder: '\u6700\u591A60\u4E2A\u5B57\u7B26'
        })
      ),
      _from === "create" ? _react2["default"].createElement('div', null) : _react2["default"].createElement(
        _form.FormItem,
        {
          showMast: false,
          labelName: _react2["default"].createElement(
            'span',
            null,
            '\u9080\u8BF7\u89C4\u5219',
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          ),
          isRequire: false,
          valuePropsName: 'value',
          inline: true
        },
        _react2["default"].createElement(
          _select2["default"],
          {
            name: 'invitePermission',
            defaultValue: '1',
            value: invitePermission || '1',
            style: { width: 338, marginRight: 6 },
            onChange: function onChange(e) {
              _this2.setOptherData({ name: 'invitePermission', value: e });
            }
          },
          _react2["default"].createElement(
            Option,
            { value: '1' },
            '\u5168\u5458\u9080\u8BF7 '
          ),
          _react2["default"].createElement(
            Option,
            { value: '2' },
            '\u7981\u6B62\u9080\u8BF7'
          ),
          _react2["default"].createElement(
            Option,
            { value: '0' },
            '\u7BA1\u7406\u5458\u9080\u8BF7'
          )
        )
      ),
      _from === "create" ? _react2["default"].createElement('div', null) : _react2["default"].createElement(
        _form.FormItem,
        {
          showMast: false,
          labelName: _react2["default"].createElement(
            'span',
            null,
            '\u7533\u8BF7\u6743\u9650',
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          ),
          isRequire: false,
          valuePropsName: 'value',
          inline: true
        },
        _react2["default"].createElement(
          _select2["default"],
          {
            name: 'joinPermission',
            defaultValue: '1',
            value: joinPermission || '1',
            style: { width: 338, marginRight: 6 },
            onChange: function onChange(e) {
              _this2.setOptherData({ name: 'joinPermission', value: e });
            }
          },
          _react2["default"].createElement(
            Option,
            { value: '0' },
            '\u6240\u6709\u7528\u6237\u90FD\u53EF\u7533\u8BF7\u52A0\u5165 '
          ),
          _react2["default"].createElement(
            Option,
            { value: '1' },
            '\u7981\u6B62\u7528\u6237\u7533\u8BF7\u52A0\u5165'
          )
        )
      ),
      _from === "create" ? _react2["default"].createElement('div', null) : _react2["default"].createElement(
        _form.FormItem,
        {
          showMast: false,
          labelName: _react2["default"].createElement(
            'span',
            null,
            '\u5141\u8BB8\u7528\u6237\u9000\u51FA',
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          ),
          isRequire: false,
          inline: true
        },
        _react2["default"].createElement(
          _radio2["default"].RadioGroup,
          {
            name: 'allowExit',
            onChange: this.allowExitChange,
            selectedValue: allowExit || '0'
          },
          _react2["default"].createElement(
            _radio2["default"],
            { value: '0' },
            '\u7981\u6B62'
          ),
          _react2["default"].createElement(
            _radio2["default"],
            { value: '1' },
            '\u5141\u8BB8'
          )
        )
      ),
      _from === "create" ? _react2["default"].createElement('div', null) : _react2["default"].createElement(
        _form.FormItem,
        {
          showMast: false,
          labelName: _react2["default"].createElement(
            'span',
            null,
            '\u4E0A\u4E0B\u7EA7\u663E\u793A',
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          ),
          isRequire: false,
          valuePropsName: 'value',
          inline: true
        },
        _react2["default"].createElement(
          _select2["default"],
          {
            name: 'subordinateType',
            defaultValue: 0,
            value: subordinateType || 0,
            style: { width: 338, marginRight: 6 },
            onChange: function onChange(e) {
              _this2.setOptherData({ name: 'subordinateType', value: e });
            }
          },
          _react2["default"].createElement(
            Option,
            { value: 0 },
            '\u6839\u636E\u7EC4\u7EC7\u673A\u6784\u8D1F\u8D23\u4EBA\u663E\u793A\u4E0A\u4E0B\u7EA7 '
          ),
          _react2["default"].createElement(
            Option,
            { value: 1 },
            '\u6839\u636E\u5BFC\u5165\u7684\u4E0A\u4E0B\u7EA7\u5173\u7CFB\u663E\u793A\u4E0A\u4E0B\u7EA7'
          )
        )
      ),
      _from === "create" ? _react2["default"].createElement('div', null) : _react2["default"].createElement(
        _form.FormItem,
        {
          showMast: false,
          labelName: _react2["default"].createElement(
            'span',
            null,
            '\u901A\u8BAF\u5F55\u663E\u793A\u6C34\u5370',
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              ' \xA0*\xA0'
            )
          ),
          isRequire: false,
          inline: true
        },
        _react2["default"].createElement(
          _radio2["default"].RadioGroup,
          {
            name: 'isWaterMark',
            onChange: this.watermarkChange,
            selectedValue: isWaterMark
          },
          _react2["default"].createElement(
            _radio2["default"],
            { value: 0 },
            '\u7981\u6B62'
          ),
          _react2["default"].createElement(
            _radio2["default"],
            { value: 1 },
            '\u5141\u8BB8'
          )
        )
      ),
      _react2["default"].createElement('div', { className: _style.line }),
      _react2["default"].createElement(
        'div',
        { className: _style.infoTitle },
        '\u8054\u7CFB\u4EBA\u4FE1\u606F\uFF1A'
      ),
      _react2["default"].createElement(
        _form.FormItem,
        {
          showMast: false,
          labelName: _react2["default"].createElement(
            'span',
            null,
            '\u59D3\u540D',
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          ),
          isRequire: true, valuePropsName: 'value',
          errorMessage: '\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA\u59D3\u540D',
          method: 'blur',
          inline: true
        },
        _react2["default"].createElement(_formControl2["default"], {
          name: 'linkman',
          value: linkman || '',
          placeholder: '\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA\u59D3\u540D',
          onChange: function onChange(e) {
            _this2.inputOnChange(e, 'linkman');
          }
        })
      ),
      _react2["default"].createElement(
        _form.FormItem,
        {
          showMast: false,
          valuePropsName: 'value',
          labelName: _react2["default"].createElement(
            'span',
            null,
            '\u90AE\u7BB1',
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          ),
          isRequire: true,
          method: 'blur',
          htmlType: 'email',
          errorMessage: '\u90AE\u7BB1\u683C\u5F0F\u9519\u8BEF',
          inline: true
        },
        _react2["default"].createElement(_formControl2["default"], {
          name: 'tenantEmail',
          value: tenantEmail || '',
          onChange: function onChange(e) {
            _this2.inputOnChange(e, 'tenantEmail');
          },
          placeholder: '\u8BF7\u8F93\u5165\u90AE\u7BB1'
        })
      ),
      _react2["default"].createElement(
        _form.FormItem,
        {
          className: 'input_phone',
          showMast: false,
          valuePropsName: 'value',
          labelName: _react2["default"].createElement(
            'span',
            null,
            '\u624B\u673A\u53F7',
            _react2["default"].createElement(
              'font',
              { color: 'red' },
              '\xA0*\xA0'
            )
          ),
          isRequire: true, method: 'blur',
          htmlType: 'tel',
          errorMessage: '\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF',
          inline: true
        },
        _react2["default"].createElement(_formControl2["default"], {
          name: 'tenantTel',
          value: tenantTel || '',
          onChange: function onChange(e) {
            _this2.inputOnChange(e, 'tenantTel');
          },
          placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7'
        })
      ),
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
        isSubmit: true,
        buttonText: buttonText,
        disabled: this.state.disabled
      })
    );
  };

  return EnterContent;
}(_react.Component);

EnterContent.propTypes = {
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
};
EnterContent.defaultProps = {
  userInfo: {}, // 用户信息
  data: {}, // data ， 企业信息，新建为空
  handleClickFn: function handleClickFn() {}, // 按钮点击事件
  _from: '', // 来源，（新建，设置，升级）
  buttonText: '', // 按钮显示文字
  uploadApplication: function uploadApplication() {}, // 上传事件
  loadingDesc: '' // 滚动条 文字提示
};
exports["default"] = EnterContent;
module.exports = exports['default'];