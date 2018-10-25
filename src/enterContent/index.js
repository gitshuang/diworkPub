import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 公共UI组件
import Form, { FormItem } from '../bee/form';
import FormControl from '../bee/form-control';
import Radio from '../bee/radio';
import Select from '../bee/select';
import CitySelect from '../bee/city-select';
import Progress from '../progress';
// diwork业务组件
import Upload from './upload';
import { check } from './checkTenantStatus';
import SubmitBtn from './button';
// import { tenantIndustry, tenantSizeOption } from './state';
import { enterForm, line, infoTitle, progressBar } from './style.css';

const { Option } = Select;

class EnterContent extends Component {
  static propTypes = {
    userInfo: PropTypes.shape({
      userName: PropTypes.string,
      userEmail: PropTypes.string,
      userMobile: PropTypes.string,
    }),
    data: PropTypes.shape({}),
    handleClickFn: PropTypes.func,
    _from: PropTypes.string,
    buttonText: PropTypes.string,
    uploadApplication: PropTypes.func,
    loadingDesc: PropTypes.string,
  };
  static defaultProps = {
    userInfo: {},                 // 用户信息
    data: {},                     // data ， 企业信息，新建为空
    handleClickFn: () => { },     // 按钮点击事件
    _from: '',                     // 来源，（新建，设置，升级）
    buttonText: '',               // 按钮显示文字
    uploadApplication: () => { },          // 上传事件
    loadingDesc: '',              // 滚动条 文字提示
  };
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,                // 按钮是否可点击， true为不可点击  （todo现在反了）
      startFlag: false,                // process 0～1 
      tenantId: '',                   // 租户ID
      address: {
        province: '北京',
        city: '北京',
        area: '东城区',
      },                              // 企业地址 
      addressInput: '',               // 企业地址 (60个字输入框)

      tenantName: '',                 // 企业名称
      logo: '',                       // logo
      tenantIndustry: '',             // 选中的行业
      tenantSize: '',                 // 规模范围
      tenantAddress: '',              // 企业地址 + 60个字输入框显示

      invitePermission: '',           // 邀请规则              string类型
      joinPermission: '',             // 申请权限              string
      allowExit: '',                  // 允许用户退出           string
      subordinateType: '',            // 上下级显示             number类型
      isWaterMark: 1,                 // 通讯录是否显示水印      number类型

      linkman: '',                    // 姓名
      tenantTel: '',                  // 手机号
      tenantEmail: '',                // 邮箱
    };

    // 所属行业
    //this.tenantIndustry = this.props.texts.tenantIndustry;
    // 规模范围
    //this.tenantSizeOption = this.props.texts.tenantSizeOption;

    // progressbar
    this.loadingFunc = null;
    this.successFunc = null;
    this.timer = null;
  }

  componentDidMount() {
    const { data, userInfo, _from } = this.props;
    // 如果来自创建 ， 只做将userInfo信息灌入到组件中显示
    if (_from === "create") {
      this.setState({
        linkman: userInfo.userName,
        tenantEmail: userInfo.userEmail,
        tenantTel: userInfo.userMobile,
      });
      return false;
    }
    const { tenantAddress } = data;
    // 将 地址综合 赋值到 address 和 address和 addressInput 上
    if (tenantAddress) {
      const Addres = tenantAddress.split('|');
      data.address = {
        province: Addres[0] || '',
        city: Addres[1] || '',
        area: Addres[2] || '',
      };
      data.addressInput = Addres[Addres.length - 1]
    }
    data.linkman = data.linkman || userInfo.userName;
    data.tenantEmail = data.tenantEmail || userInfo.userEmail;
    data.tenantTel = data.tenantTel || userInfo.userMobile;

    this.setState({
      ...data,
    });
  }
  // 切换企业地址
  onCityChange = (obj) => {
    this.setState({
      address: {
        ...obj,
      },
    });
  }

  // 上传组件设置新的logo - url， 后期需要更改为方法传递到 
  onChangeUpload = (url) => {
    this.setState({
      logo: url,
    });
  }

  // select 更改
  setOptherData = (obj) => {
    const { name, value } = obj;
    this.setState({
      [name]: value,
    });
  }
  // 更改是否允许用户退出
  allowExitChange = (value) => {
    this.setState({
      allowExit: value,
    });
  }
  // 通讯录显示水印
  watermarkChange = (value) => {
    this.setState({
      isWaterMark: value,
    });
  }

  // 更改输入框的值
  inputOnChange = (e, name) => {
    this.setState({
      [name]: e,
    });
  }

  // 这个方法是点击了提交按钮执行的，form组件封的有点疯
  checkForm = (flag, data) => {
    const { handleClickFn, _from } = this.props;
    const {
      tenantId,
      address,
      addressInput,
      allowExit,
      isWaterMark
    } = this.state;

    if (flag) {
      this.setState({
        disabled: true,
      });
      // 这个form表单组件有点坑， 还得自己完善兼容性  radio的两个 
      if (_from !== "create") {
        const AllowExit = data.find(da => da.name === 'allowExit');
        if (AllowExit && AllowExit.value === '') {
          AllowExit.value = allowExit;
        }
        const Watermark = data.find(da => da.name === 'isWaterMark');
        if (Watermark && Watermark.value === '') {
          Watermark.value = isWaterMark;
        }
      }

      // 将地址 组合  真实上传的参数
      const TenantAddress = `${address.province}|${address.city}|${address.area}|${addressInput}`;
      data.push({ name: 'tenantAddress', value: TenantAddress });
      data.push({ name: 'tenantId', value: tenantId });
      const param = data.reduce((obj, { value, name }) => {
        if (name) {
          obj[name] = value;
        }
        return obj;
      }, {});

      handleClickFn(param, ({ error, payload }) => {
        // 只要是回调都将按钮的disabled 设定为false
        this.setState({
          disabled: false,
        });
        // 创建
        if (!error && _from === "create") {
          this.setState({
            startFlag: true,
            tenantId: payload.tenantId,
          }, () => {
            check(payload.tenantId, this.loadingFunc, this.successFunc);
          });
          return false;
        }
        // 升级
        if (!error && _from === "update") {
          this.setState({
            startFlag: true,
          });
          check(tenantId, this.loadingFunc, this.successFunc);
        }
      });
    }
  }

  successLoading = () => {
    const { tenantId } = this.state;
    window.location.href = `/?tenantId=${tenantId}&switch=true`;
  }

  loadingCallBack = (loadingFunc, successFunc) => {
    this.timer = setInterval(loadingFunc, 500);
    this.loadingFunc = loadingFunc;
    this.successFunc = successFunc;
  }

  render() {
    const { buttonText, _from, loadingDesc, texts } = this.props;
    const {
      address,
      startFlag,
      addressInput,

      tenantName,                 // 企业名称
      logo,                       // logo
      tenantIndustry,             // 选中的行业
      tenantSize,                 // 规模范围
      invitePermission,           // 邀请规则              string类型
      joinPermission,             // 申请权限              string
      allowExit,                  // 允许用户退出           string
      subordinateType,            // 上下级显示             number类型
      isWaterMark,                 // 通讯录是否显示水印      number类型

      linkman,                    // 姓名
      tenantTel,                  // 手机号
      tenantEmail,                // 邮箱
    } = this.state;

    return (
      <Form submitCallBack={this.checkForm} showSubmit={false} className={enterForm}>

        <FormItem
          showMast={false}
          labelName={<span>{texts.tenantNameLabel}<font color="red">&nbsp;*&nbsp;</font></span>}
          isRequire
          valuePropsName="value"
          errorMessage={texts.tenantNameError}
          method="blur"
          inline
        >
          <FormControl 
            name="tenantName" 
            value={tenantName || ''} 
            onChange={(e) => { this.inputOnChange(e, 'tenantName'); }} 
            placeholder={texts.placeholder1} 
          />
        </FormItem>

        <FormItem
          showMast={false}
          labelName={<span>{texts.logoLabel} &nbsp;&nbsp;&nbsp; </span>}
          valuePropsName="value"
          method="change"
          inline
        >
          <Upload
            name="logo"
            logo={logo || ''}
            onChange={this.onChangeUpload}
            tip=""
            logoError={texts.logoError}
            logoError2={texts.logoError2}
            uploadApplication={this.props.uploadApplication}
          />
        </FormItem>

        <FormItem
          showMast={false}
          labelName={<span>{texts.tenantIndustryLabel}<font color="red">&nbsp;*&nbsp;</font></span>}
          isRequire
          valuePropsName="value"
          errorMessage={texts.tenantIndustryError}
          method="blur"
          inline
        >
          <Select
            name="tenantIndustry"
            defaultValue="A"
            value={tenantIndustry || 'A'}
            style={{ width: 338, marginRight: 6 }}
            onChange={(e) => { this.setOptherData({ name: 'tenantIndustry', value: e }); }}
          >
            {
              texts.tenantIndustry.map(({ label, value }) =>
                <Option key={value} value={value}>{label}</Option>)
            }
          </Select>
        </FormItem>

        <FormItem
          showMast={false}
          labelName={<span>{texts.tenantSizeLabel}<font color="red">&nbsp;*&nbsp;</font></span>}
          isRequire
          valuePropsName="value"
          errorMessage={texts.tenantSizeError}
          method="blur"
          inline
        >
          <Select
            name="tenantSize"
            defaultValue="A"
            value={tenantSize || "A"}
            style={{ width: 338, marginRight: 6 }}
            onChange={(e) => { this.setOptherData({ name: 'tenantSize', value: e }); }}
          >
            {
              texts.tenantSizeOption.map(({ label, value }) =>
                <Option key={`${value}`} value={value}>{label}</Option>)
            }
          </Select>
        </FormItem>

        <FormItem
          showMast={false}
          labelName={<span>{texts.addressLabel}&nbsp;&nbsp;</span>}
          isRequire={false}
          valuePropsName="value"
          errorMessage={texts.addressError}
          method="blur"
          inline
        >
          <CitySelect name="address" onChange={this.onCityChange} defaultValue={address} />
        </FormItem>

        <FormItem
          showMast={false}
          isRequire={false}
          valuePropsName="value"
          errorMessage={texts.addressError}
          method="blur"
          inline
        >
          <FormControl
            name="addressInput"
            value={addressInput || ''}
            onChange={(e) => { this.inputOnChange(e, 'addressInput'); }}
            placeholder={texts.placeholder1}
          />
        </FormItem>

        {_from === "create" ? <div></div> :
          <FormItem
            showMast={false}
            labelName={<span>{texts.invitePermissionLabel}<font color="red">&nbsp;*&nbsp;</font></span>}
            isRequire={false}
            valuePropsName="value"
            inline
          >
            <Select
              name="invitePermission"
              defaultValue="1"
              value={invitePermission || '1'}
              style={{ width: 338, marginRight: 6 }}
              onChange={(e) => { this.setOptherData({ name: 'invitePermission', value: e }); }}
            >
              <Option value="1">{texts.invitePermissionO1}</Option>
              <Option value="2">{texts.invitePermissionO2}</Option>
              <Option value="0">{texts.invitePermissionO3}</Option>
            </Select>
          </FormItem>
        }
        {_from === "create" ? <div></div> :
          <FormItem
            showMast={false}
            labelName={<span>{texts.joinPermissionLabel}<font color="red">&nbsp;*&nbsp;</font></span>}
            isRequire={false}
            valuePropsName="value"
            inline
          >
            <Select
              name="joinPermission"
              defaultValue="1"
              value={joinPermission || '1'}
              style={{ width: 338, marginRight: 6 }}
              onChange={(e) => { this.setOptherData({ name: 'joinPermission', value: e }); }}
            >
              <Option value="0">{texts.joinPermissionO1}</Option>
              <Option value="1">{texts.joinPermissionO2}</Option>
            </Select>
          </FormItem>
        }
        {_from === "create" ? <div></div> :
          <FormItem
            showMast={false}
            labelName={<span>{texts.allowExitLabel}<font color="red">&nbsp;*&nbsp;</font></span>}
            isRequire={false}
            inline
          >
            <Radio.RadioGroup
              name="allowExit"
              onChange={this.allowExitChange}
              selectedValue={allowExit || '0'}
            >
              <Radio value="0" >{texts.radio1}</Radio>
              <Radio value="1" >{texts.radio2}</Radio>
            </Radio.RadioGroup>
          </FormItem>
        }
        {_from === "create" ? <div></div> :
          <FormItem
            showMast={false}
            labelName={<span>{texts.subordinateTypeLabel}<font color="red">&nbsp;*&nbsp;</font></span>}
            isRequire={false}
            valuePropsName="value"
            inline
          >
            <Select
              name="subordinateType"
              defaultValue={0}
              value={subordinateType || 0}
              style={{ width: 338, marginRight: 6 }}
              onChange={(e) => { this.setOptherData({ name: 'subordinateType', value: e }); }}
            >
              <Option value={0}>{texts.subordinateTypeO1} </Option>
              <Option value={1}>{texts.subordinateTypeO2}</Option>
            </Select>
          </FormItem>
        }
        {_from === "create" ? <div></div> :
          <FormItem
            showMast={false}
            labelName={<span>{texts.isWaterMarkLabel}<font color="red"> &nbsp;*&nbsp;</font></span>}
            isRequire={false}
            inline
          >
            <Radio.RadioGroup
              name="isWaterMark"
              onChange={this.watermarkChange}
              selectedValue={isWaterMark}
            >
              <Radio value={0} >{texts.radio1}</Radio>
              <Radio value={1} >{texts.radio2}</Radio>
            </Radio.RadioGroup>
          </FormItem>
        }

        <div className={line}></div>
        <div className={infoTitle}>{texts.infoTitle}：</div>

        <FormItem
          showMast={false}
          labelName={<span>{texts.linkmanLabel}<font color="red">&nbsp;*&nbsp;</font></span>}
          isRequire valuePropsName="value"
          errorMessage={texts.linkmanError}
          method="blur"
          inline
        >
          <FormControl
            name="linkman"
            value={linkman || ''}
            placeholder={texts.linkmanError}
            onChange={(e) => { this.inputOnChange(e, 'linkman'); }}
          />
        </FormItem>

        <FormItem
          showMast={false}
          valuePropsName="value"
          labelName={<span>{texts.tenantEmailLabel}<font color="red">&nbsp;*&nbsp;</font></span>}
          isRequire
          method="blur"
          htmlType="email"
          errorMessage={texts.tenantEmailError}
          inline
        >
          <FormControl
            name="tenantEmail"
            value={tenantEmail || ''}
            onChange={(e) => { this.inputOnChange(e, 'tenantEmail'); }}
            placeholder={texts.tenantEmailPlace}
          />
        </FormItem>

        <FormItem
          className="input_phone"
          showMast={false}
          valuePropsName="value"
          labelName={<span>{texts.tenantTelLabel}<font color="red">&nbsp;*&nbsp;</font></span>}
          isRequire method="blur"
          htmlType="tel"
          errorMessage={texts.tenantTelError}
          inline
        >
          <FormControl
            name="tenantTel"
            value={tenantTel || ''}
            onChange={(e) => { this.inputOnChange(e, 'tenantTel'); }}
            placeholder={texts.tenantTelPlace}
          />
        </FormItem>

        {
          startFlag ?
            <div className={progressBar}>
              <Progress
                loadingCallBack={this.loadingCallBack}
                successFunc={this.successLoading}
                startFlag={startFlag}
                loadingDesc={loadingDesc}
              />
            </div>
            : <SubmitBtn
              isSubmit
              buttonText={buttonText}
              disabled={this.state.disabled}
            />
        }
      </Form >
    );
  }
}

export default EnterContent;
