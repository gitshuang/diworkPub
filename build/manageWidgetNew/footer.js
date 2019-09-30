"use strict";var _dec,_class;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=require("react"),_react2=_interopRequireDefault(_react),_button=require("pub-comp/button");require("./style.css");var _style={management:"management__style___1VA_-",page_home:"page_home__style___1TGg1",um_content:"um_content__style___2jxWf",umBoxJustify:"umBoxJustify__style___38ezk",preserve:"preserve__style___18zdq",batchArea:"batchArea__style___2Kez5",saveArea:"saveArea__style___mmapj",um_footer:"um_footer__style___2zW7n",addBtn:"addBtn__style___dv2TN",addGroupBtn:"addGroupBtn__style___3pqek",manager_save_pop:"manager_save_pop__style___XqtTi"},_reactRedux=require("react-redux"),_u=require("@u"),_actions=require("store/root/manage/actions"),_actions2=_interopRequireDefault(_actions);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defaults(e,t){for(var r=Object.getOwnPropertyNames(t),a=0;a<r.length;a++){var n=r[a],o=Object.getOwnPropertyDescriptor(t,n);o&&o.configurable&&void 0===e[n]&&Object.defineProperty(e,n,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):_defaults(e,t))}function _objectDestructuringEmpty(e){if(null==e)throw new TypeError("Cannot destructure undefined")}_objectDestructuringEmpty(_actions2.default);var Footer=(_dec=(0,_reactRedux.connect)((0,_u.mapStateToProps)("selectList","isEdit","isSiderDisplay",{namespace:"manage"})))(_class=function(t){function r(e){return _classCallCheck(this,r),_possibleConstructorReturn(this,t.call(this,e))}return _inherits(r,t),r.prototype.render=function(){var e=this.props,t=(e.batchDelectFn,e.selectList,e.openGroupTo,e.isEdit),r=e.save,a=e.popOpenCancel,n=e.languagesJSON;return _react2.default.createElement("div",{className:_style.um_footer},_react2.default.createElement("div",{className:_style.umBoxJustify},_react2.default.createElement("div",{className:_style.saveArea+"  horizontalParent"},_react2.default.createElement(_button.ButtonU8cPrimary,{disabled:!t,onClick:r,className:"save"},n.save),_react2.default.createElement(_button.ButtonU8cDefault,{onClick:a,className:"cancel"},n.cancel))))},r}(_react.Component))||_class;exports.default=Footer,module.exports=exports.default;