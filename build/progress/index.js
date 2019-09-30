"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react),_beeProgressBar=require("bee-progress-bar"),_beeProgressBar2=_interopRequireDefault(_beeProgressBar);require("bee-progress-bar/build/ProgressBar.css");var _icon=require("../icon"),_icon2=_interopRequireDefault(_icon);require("./style.css");var _style={progress_wrap:"progress_wrap__style___3jdj3",progress_loading:"progress_loading__style___2VLp_",progress_load_icon:"progress_load_icon__style___2FrmF",opacityShow:"opacityShow__style___1_rJb",opacityHidden:"opacityHidden__style___2kVQY",loading_desc:"loading_desc__style___ODeVU"};function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defaults(e,t){for(var r=Object.getOwnPropertyNames(t),o=0;o<r.length;o++){var s=r[o],a=Object.getOwnPropertyDescriptor(t,s);a&&a.configurable&&void 0===e[s]&&Object.defineProperty(e,s,a)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):_defaults(e,t))}var Progress=function(r){function o(e){_classCallCheck(this,o);var t=_possibleConstructorReturn(this,r.call(this,e));return t.componentDidMount=function(){t.props.startFlag&&t.goToLoading()},t.componentWillReceiveProps=function(e){e.startFlag&&t.goToLoading()},t.goToLoading=function(){var e=Math.floor(10*Math.random()+1);t.state.processValue<90&&t.setState({processValue:t.state.processValue+e}),t.props.loadingCallBack(t.loadingFunc,t.successFunc)},t.loadingFunc=function(){var e=Math.floor(10*Math.random()+1);t.state.processValue<90&&t.setState({processValue:t.state.processValue+e})},t.successFunc=function(){var e=t.props.successFunc;t.setState({processValue:100}),_beeProgressBar2.default.done(),"function"==typeof e?e():setTimeout(function(){window.location.href="/?tenantId="+tenantId+"&switch=true"},600)},t.state={processValue:0},t}return _inherits(o,r),o.prototype.render=function(){var e=this.props.loadingDesc,t=this.state.processValue;return _react2.default.createElement("div",{className:_style.progress_wrap},_react2.default.createElement(_beeProgressBar2.default,{className:_style.progress_loading,striped:!1,now:t,label:t+"%"}),_react2.default.createElement(_icon2.default,{className:_style.progress_load_icon,type:"loading"}),_react2.default.createElement("span",{className:_style.loading_desc},e||"正在配置信息…"))},o}(_react.Component);exports.default=Progress,module.exports=exports.default;