"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _class,_temp,_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},_react=require("react"),_react2=_interopRequireDefault(_react),_manageFolderDialog=require("./manageFolderDialog"),_manageFolderDialog2=_interopRequireDefault(_manageFolderDialog);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defaults(e,t){for(var r=Object.getOwnPropertyNames(t),o=0;o<r.length;o++){var l=r[o],a=Object.getOwnPropertyDescriptor(t,l);a&&a.configurable&&void 0===e[l]&&Object.defineProperty(e,l,a)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):_defaults(e,t))}var FolderDialog=(_temp=_class=function(t){function r(e){return _classCallCheck(this,r),_possibleConstructorReturn(this,t.call(this,e))}return _inherits(r,t),r.prototype.render=function(){var e=this.props,t=e.curDisplayFolder,r=e.folderModalDisplay,o=e.closeFolder,l=e.moveService,a=e.manageList,n=e.curEditFolderId,s=e.selectList,i=e.selectGroup,c=e.currGroupIndex,u=e.drag,d=e.deleteFolder,p=e.renameFolder,f=e.setFolderEdit,_=e.selectListActions,g=e.selectGroupActions,m=e.addFolder,y=e.delectService,F=e.languagesJSON,b={curDisplayFolder:t,folderModalDisplay:r,closeFolder:o,moveService:l},v={manageList:a,curEditFolderId:n,selectList:s,selectGroup:i,currGroupIndex:c,drag:u,deleteFolder:d,renameFolder:p,setFolderEdit:f,selectListActions:_,selectGroupActions:g,addFolder:m,delectService:y};return _react2.default.createElement("div",{className:"manageDialog"},_react2.default.createElement(_manageFolderDialog2.default,_extends({},b,v,{languagesJSON:F})))},r}(_react.Component),_class.defaultProps={},_temp);exports.default=FolderDialog,module.exports=exports.default;