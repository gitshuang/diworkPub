"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp,_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},_react=require("react"),_react2=_interopRequireDefault(_react),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_form=require("../bee/form"),_form2=_interopRequireDefault(_form),_formControl=require("../bee/form-control"),_formControl2=_interopRequireDefault(_formControl),_radio=require("../bee/radio"),_radio2=_interopRequireDefault(_radio),_select=require("../bee/select"),_select2=_interopRequireDefault(_select),_citySelect=require("../bee/city-select"),_citySelect2=_interopRequireDefault(_citySelect),_progress=require("../progress"),_progress2=_interopRequireDefault(_progress),_upload=require("./upload"),_upload2=_interopRequireDefault(_upload),_checkTenantStatus=require("./checkTenantStatus"),_button=require("./button"),_button2=_interopRequireDefault(_button);require("./style.css");var _style={enterForm:"enterForm__style___3rLaN",upload:"upload__style___1zxuY",country:"country__style___3E-Os",tel:"tel__style___2OXF9",code:"code__style___1L3cM",line:"line__style___1rbXZ",infoTitle:"infoTitle__style___15dG2",progressBar:"progressBar__style___kjcre",inputPhone:"inputPhone__style___1hlKj"};function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defaults(e,t){for(var a=Object.getOwnPropertyNames(t),l=0;l<a.length;l++){var n=a[l],r=Object.getOwnPropertyDescriptor(t,n);r&&r.configurable&&void 0===e[n]&&Object.defineProperty(e,n,r)}return e}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):_defaults(e,t))}var Option=_select2.default.Option,EnterContent=(_temp=_class=function(t){function a(e){_classCallCheck(this,a);var s=_possibleConstructorReturn(this,t.call(this,e));return s.onCityChange=function(e){s.setState({address:_extends({},e)})},s.onChangeUpload=function(e){s.setState({logo:e})},s.inputOnChange=function(e,t){s.setState(_defineProperty({},t,e))},s.clickFn=function(e){e.preventDefault(),s.props.form.validateFields(function(e,t){e?console.log("校验失败",t):s.checkForm(t)})},s.checkForm=function(e){var t=s.props,a=t.handleClickFn,l=t._from,n=s.state,r=n.tenantId,o=n.addressInput,u=n.logo,c=n.address;s.setState({disabled:!0});var i=c.province+"|"+c.city+"|"+c.area+"|"+o;e.tenantAddress=i,e.tenantId=r,e.tenantTel=e.countryCode+":"+e.tenantTel,e.logo=u,a(e,function(e){var t=e.error,a=e.payload;if(s.setState({disabled:!1}),!t&&"create"===l)return s.setState({startFlag:!0,tenantId:a.tenantId},function(){(0,_checkTenantStatus.check)(a.tenantId,s.loadingFunc,s.successFunc)}),!1;t||"update"!==l||(s.setState({startFlag:!0}),(0,_checkTenantStatus.check)(r,s.loadingFunc,s.successFunc))})},s.successLoading=function(){var e=s.props,t=e._from,a=e.switchSpace,l=s.state.tenantId;if("create"===t&&a)return a(l),!1;window.location.href="/?tenantId="+l+"&switch=true"},s.loadingCallBack=function(e,t){s.timer=setInterval(e,500),s.loadingFunc=e,s.successFunc=t},s.state={disabled:!1,startFlag:!1,tenantId:"",address:null,addressInput:"",tenantName:"",logo:"",tenantIndustry:"A",tenantSize:"A",tenantAddress:"",invitePermission:"",joinPermission:"",allowExit:"",subordinateType:"",isWaterMark:1,linkman:"",countryCode:"86",tenantTel:"",tenantEmail:"",charged:!0},s.loadingFunc=null,s.successFunc=null,s.timer=null,s.address={},s}return _inherits(a,t),a.prototype.componentDidMount=function(){var e=this.props,t=e.data,a=e.userInfo;if("create"===e._from)return this.setState({linkman:a.userName,tenantEmail:a.userEmail,tenantTel:a.userMobile,address:{province:"北京",city:"北京",area:"东城区"}}),!1;var l=t.tenantAddress;if(l){var n=l.split("|");t.address={province:n[0]||"北京",city:n[1]||"北京",area:n[2]||"东城区"},t.addressInput=n[n.length-1]}else t.address={province:"北京",city:"北京",area:"东城区"};t.linkman=t.linkman||a.userName,t.tenantEmail=t.tenantEmail||a.userEmail,t.tenantTel?-1<t.tenantTel.indexOf(":")?(t.countryCode=t.tenantTel.split(":")[0],t.tenantTel=t.tenantTel.split(":")[1]):(t.countryCode=t.tenantTel.substring(0,t.tenantTel.length-11),t.tenantTel=t.tenantTel.substring(t.tenantTel.length-11)):(t.countryCode="86",t.tenantTel=a.userMobile),this.setState(_extends({},t))},a.prototype.render=function(){var t=this,e=this.props,a=e.buttonText,l=e._from,n=e.loadingDesc,r=e.texts,o=this.props.form,u=o.getFieldProps,c=o.getFieldError,i=this,s=this.state,d=s.address,_=s.startFlag,f=s.addressInput,m=s.tenantName,p=s.logo,E=s.tenantIndustry,g=s.tenantSize,y=s.invitePermission,h=s.joinPermission,b=s.allowExit,v=s.subordinateType,T=s.isWaterMark,C=s.linkman,F=s.tenantTel,O=s.tenantEmail,k=s.countryCode,I=s.charged;return _react2.default.createElement(_form2.default,{submitCallBack:this.checkForm,showSubmit:!1,className:_style.enterForm},_react2.default.createElement(_form.FormItem,null,_react2.default.createElement("label",null,_react2.default.createElement("span",null,r.tenantNameLabel,_react2.default.createElement("font",{color:"red"}," * "))),_react2.default.createElement(_formControl2.default,_extends({name:"tenantName",value:m||"",onChange:function(e){t.inputOnChange(e,"tenantName")},placeholder:r.placeholder1},u("tenantName",{initialValue:m||"",validateTrigger:"onBlur",rules:[{required:!0,message:r.tenantNameError}]}))),_react2.default.createElement("span",{className:"error"},c("tenantName"))),_react2.default.createElement(_form.FormItem,null,_react2.default.createElement("label",null,_react2.default.createElement("span",null,r.logoLabel,"     ")),_react2.default.createElement("div",{className:_style.upload},_react2.default.createElement(_upload2.default,{name:"logo",logo:p||"",onChange:this.onChangeUpload,tip:"",logoError:r.logoError,logoError2:r.logoError2,uploadApplication:this.props.uploadApplication}))),_react2.default.createElement(_form.FormItem,null,_react2.default.createElement("label",null,_react2.default.createElement("span",null,r.tenantIndustryLabel,_react2.default.createElement("font",{color:"red"}," * "))),_react2.default.createElement(_select2.default,_extends({name:"tenantIndustry",style:{width:338,marginRight:6}},u("tenantIndustry",{initialValue:E||"A",rules:[{required:!0}]})),r.tenantIndustry.map(function(e){var t=e.label,a=e.value;return _react2.default.createElement(Option,{key:a,value:a},t)}))),_react2.default.createElement(_form.FormItem,null,_react2.default.createElement("label",null,_react2.default.createElement("span",null,r.tenantSizeLabel,_react2.default.createElement("font",{color:"red"}," * "))),_react2.default.createElement(_select2.default,_extends({style:{width:338,marginRight:6}},u("tenantSize",{initialValue:g||"A",rules:[{required:!0}]})),r.tenantSizeOption.map(function(e){var t=e.label,a=e.value;return _react2.default.createElement(Option,{key:""+a,value:a},t)}))),d?_react2.default.createElement(_form.FormItem,null,_react2.default.createElement("label",null,_react2.default.createElement("span",null,r.addressLabel,"  ")),_react2.default.createElement(_citySelect2.default,{name:"address",onChange:this.onCityChange,defaultValue:d})):null,_react2.default.createElement(_form.FormItem,null,_react2.default.createElement("label",null),_react2.default.createElement(_formControl2.default,{name:"addressInput",value:f||"",onChange:function(e){t.inputOnChange(e,"addressInput")},placeholder:r.placeholder1})),"create"===l||I?null:_react2.default.createElement(_form.FormItem,null,_react2.default.createElement("label",null,_react2.default.createElement("span",null,r.invitePermissionLabel,_react2.default.createElement("font",{color:"red"}," * "))),_react2.default.createElement(_select2.default,_extends({style:{width:338,marginRight:6}},u("invitePermission",{initialValue:y||"1",rules:[{required:!0}]})),_react2.default.createElement(Option,{value:"1"},r.invitePermissionO1),_react2.default.createElement(Option,{value:"2"},r.invitePermissionO2),_react2.default.createElement(Option,{value:"0"},r.invitePermissionO3))),"create"===l?null:_react2.default.createElement(_form.FormItem,null,_react2.default.createElement("label",null,_react2.default.createElement("span",null,r.joinPermissionLabel,_react2.default.createElement("font",{color:"red"}," * "))),_react2.default.createElement(_select2.default,_extends({style:{width:338,marginRight:6}},u("joinPermission",{initialValue:h||"1",rules:[{required:!0}]})),_react2.default.createElement(Option,{value:"0"},r.joinPermissionO1),_react2.default.createElement(Option,{value:"1"},r.joinPermissionO2))),"create"===l||I?null:_react2.default.createElement(_form.FormItem,null,_react2.default.createElement("label",null,_react2.default.createElement("span",null,r.allowExitLabel,_react2.default.createElement("font",{color:"red"}," * "))),_react2.default.createElement(_radio2.default.RadioGroup,_extends({name:"allowExit",selectedValue:b||"0"},u("allowExit",{initialValue:b||"0",onChange:function(e){i.setState({allowExit:e})},rules:[{required:!0}]})),_react2.default.createElement(_radio2.default,{value:"0"},r.radio1),_react2.default.createElement(_radio2.default,{value:"1"},r.radio2))),"create"===l?null:_react2.default.createElement(_form.FormItem,null,_react2.default.createElement("label",null,_react2.default.createElement("span",null,r.subordinateTypeLabel,_react2.default.createElement("font",{color:"red"}," * "))),_react2.default.createElement(_select2.default,_extends({style:{width:338,marginRight:6}},u("subordinateType",{initialValue:v||0,rules:[{required:!0}]})),_react2.default.createElement(Option,{value:0},r.subordinateTypeO1," "),_react2.default.createElement(Option,{value:1},r.subordinateTypeO2))),"create"===l?null:_react2.default.createElement(_form.FormItem,null,_react2.default.createElement("label",null,_react2.default.createElement("span",null,r.isWaterMarkLabel,_react2.default.createElement("font",{color:"red"},"  * "))),_react2.default.createElement(_radio2.default.RadioGroup,_extends({name:"isWaterMark",selectedValue:T},u("isWaterMark",{initialValue:T,onChange:function(e){i.setState({isWaterMark:e})},rules:[{required:!0}]})),_react2.default.createElement(_radio2.default,{value:0},r.radio1),_react2.default.createElement(_radio2.default,{value:1},r.radio2))),_react2.default.createElement("div",{className:_style.line}),_react2.default.createElement("div",{className:_style.infoTitle},r.infoTitle,"："),_react2.default.createElement(_form.FormItem,null,_react2.default.createElement("label",null,_react2.default.createElement("span",null,r.linkmanLabel,_react2.default.createElement("font",{color:"red"}," * "))),_react2.default.createElement(_formControl2.default,_extends({name:"linkman",value:C||"",placeholder:r.linkmanError,onChange:function(e){t.inputOnChange(e,"linkman")}},u("linkman",{validateTrigger:"onBlur",initialValue:C||"",rules:[{required:!0,message:r.linkmanError}]}))),_react2.default.createElement("span",{className:"error"},c("linkman"))),_react2.default.createElement(_form.FormItem,null,_react2.default.createElement("label",null,_react2.default.createElement("span",null,r.tenantEmailLabel,_react2.default.createElement("font",{color:"red"}," * "))),_react2.default.createElement(_formControl2.default,_extends({name:"tenantEmail",value:O||"",onChange:function(e){t.inputOnChange(e,"tenantEmail")},placeholder:r.tenantEmailPlace},u("tenantEmail",{validateTrigger:"onBlur",initialValue:O||"",rules:[{required:!0,type:"email",message:r.tenantEmailError}]}))),_react2.default.createElement("span",{className:"error"},c("tenantEmail"))),_react2.default.createElement(_form.FormItem,{className:_style.country},_react2.default.createElement("label",null,_react2.default.createElement("span",null,r.tenantTelLabel,_react2.default.createElement("font",{color:"red"}," * "))),_react2.default.createElement(_select2.default,_extends({style:{width:112}},u("countryCode",{onChange:function(e){i.setState({countryCode:e})},initialValue:k,rules:[{required:!0}]})),r.country.map(function(e){var t=e.countryCode,a=e.name;return _react2.default.createElement(Option,{value:t},a)})),_react2.default.createElement("div",{className:_style.tel},_react2.default.createElement("div",{className:_style.code},"+"+k),_react2.default.createElement(_formControl2.default,_extends({name:"tenantTel",type:"tel",value:F||"",onChange:function(e){t.inputOnChange(e,"tenantTel")},placeholder:r.tenantTelPlace},u("tenantTel",{validateTrigger:"onBlur",initialValue:F||"",rules:[{required:!0,message:r.tenantTelError}]})))),_react2.default.createElement("span",{className:"error"},c("tenantTel"))),_react2.default.createElement("div",{className:"clear",style:{clear:"both"}}),_?_react2.default.createElement("div",{className:_style.progressBar},_react2.default.createElement(_progress2.default,{loadingCallBack:this.loadingCallBack,successFunc:this.successLoading,startFlag:_,loadingDesc:n})):_react2.default.createElement(_button2.default,{onClick:this.clickFn,buttonText:a,disabled:this.state.disabled}))},a}(_react.Component),_class.propTypes={userInfo:_propTypes2.default.shape({userName:_propTypes2.default.string,userEmail:_propTypes2.default.string,userMobile:_propTypes2.default.string}),data:_propTypes2.default.shape({}),handleClickFn:_propTypes2.default.func,_from:_propTypes2.default.string,buttonText:_propTypes2.default.string,uploadApplication:_propTypes2.default.func,loadingDesc:_propTypes2.default.string},_class.defaultProps={userInfo:{},data:{},handleClickFn:function(){},_from:"",buttonText:"",uploadApplication:function(){},loadingDesc:""},_temp);exports.default=_form2.default.createForm()(EnterContent),module.exports=exports.default;