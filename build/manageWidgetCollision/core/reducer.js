"use strict";var _handleActions;Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},_reduxActions=require("redux-actions"),_action=require("./action"),_action2=_interopRequireDefault(_action),_util=require("./util");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var updateShadowCard=_action2.default.updateShadowCard,updateLayout=_action2.default.updateLayout,updateGroupList=_action2.default.updateGroupList,setManageList=_action2.default.setManageList,getManageList=_action2.default.getManageList,addDesk=_action2.default.addDesk,batchDelect=_action2.default.batchDelect,batchMove=_action2.default.batchMove,selectGroupActions=_action2.default.selectGroupActions,selectListActions=_action2.default.selectListActions,addGroup=_action2.default.addGroup,delectGroup=_action2.default.delectGroup,renameGroup=_action2.default.renameGroup,stickGroup=_action2.default.stickGroup,moveTopGroup=_action2.default.moveTopGroup,moveBottomGroup=_action2.default.moveBottomGroup,splitFolder=_action2.default.splitFolder,addService=_action2.default.addService,getAllServicesByLabelGroup=_action2.default.getAllServicesByLabelGroup,setCurrentSelectWidgetMap=_action2.default.setCurrentSelectWidgetMap,openBatchMove=_action2.default.openBatchMove,closeBatchMove=_action2.default.closeBatchMove,setEditState=_action2.default.setEditState,setCurrGroupIndex=_action2.default.setCurrGroupIndex,editTitle=_action2.default.editTitle,setEditonlyId=_action2.default.setEditonlyId,returnDefaultState=_action2.default.returnDefaultState,setDragInputState=_action2.default.setDragInputState,emptySelectGroup=_action2.default.emptySelectGroup,changeSiderState=_action2.default.changeSiderState,getAllMenuList=_action2.default.getAllMenuList,moveSideCards=_action2.default.moveSideCards,dropSideCards=_action2.default.dropSideCards,updateManageList=_action2.default.updateManageList,dropSideCardsInGroup=_action2.default.dropSideCardsInGroup,updateCheckedCardList=_action2.default.updateCheckedCardList,defaultState={manageList:[],isEdit:!1,isFocus:!1,batchMoveModalDisplay:!1,selectList:[],selectGroup:[],currGroupIndex:0,currentSelectWidgetMap:{},title:"",currEditonlyId:"",applicationsMap:{},allServicesByLabelGroup:{},dragState:!0,shadowCard:{},isSiderDisplay:!0,layout:{containerWidth:1200,containerHeight:200,calWidth:175,rowHeight:175,col:6,margin:[10,10],containerPadding:[0,0]},currentHoveredTargetId:"",defaultLayout:{containerWidth:1200,containerHeight:200,calWidth:175,rowHeight:175,col:6,margin:[10,10],containerPadding:[0,0]},checkedCardList:[]},findTreeById=function e(t,a){for(var n=void 0,r=0,i=t.length;r<i;r+=1){var d=t[r],o=d.id,c=d.children;if(c&&c.length&&(n=e(c,a)),n)break;if(o===a){n=d;break}}return n};function swapItems(e,t,a){return e[t]=e.splice(a,1,e[t])[0],e}var defaultGroup={widgetName:"",type:1,children:[],isNew:!0},data=void 0;function findById(e,t){for(var a=0;a<e.length;a++){if(e[a].widgetId&&e[a].widgetId===t){data=e[a];break}e[a].children&&findById(e[a].children,t)}return data}function setDefaultSelected(e,t){e.forEach(function(e){e&&3===e.type?t[e.serviceId]&&(t[e.serviceId].selected="1"):e.children&&0!=e.children&&setDefaultSelected(e.children,t)})}var reducer=(0,_reduxActions.handleActions)((_defineProperty(_handleActions={},updateCheckedCardList,function(e,t){var a=t.payload;return _extends({},e,{checkedCardList:a})}),_defineProperty(_handleActions,changeSiderState,function(e){return _extends({},e,{isSiderDisplay:!e.isSiderDisplay})}),_defineProperty(_handleActions,updateShadowCard,function(e,t){var a=t.payload;return _extends({},e,{shadowCard:a})}),_defineProperty(_handleActions,updateLayout,function(e,t){var a=t.payload;return _extends({},e,{layout:a})}),_defineProperty(_handleActions,updateGroupList,function(e,t){var a=t.payload;return"[object Object]"==Object.prototype.toString.call(a)&&a.isEdit&&(e.isEdit=a.isEdit,a=a.manageList),_extends({},e,{manageList:a,checkedCardList:[],isEdit:e.isEdit})}),_defineProperty(_handleActions,setManageList,function(e,t){t.payload,t.error;return _extends({},e,{selectWidgetItem:!0})}),_defineProperty(_handleActions,setDragInputState,function(e,t){var a=t.payload;return _extends({},e,{dragState:a})}),_defineProperty(_handleActions,getManageList,function(e,t){var a=t.payload;if(t.error)return e;var n=a.workList;return n.forEach(function(n){n.children.forEach(function(e,a){if(2===e.type){var t=e.children;n.children.splice(a,1),t.forEach(function(e,t){e.parentId=n.widgetId,n.children.splice(a+t,0,e)})}})}),_extends({},e,{manageList:[].concat(_toConsumableArray(n)),currEditonlyId:""})}),_defineProperty(_handleActions,addDesk,function(e,t){var a=t.payload,n=a.dataList,r=a.parentId;n.forEach(function(e){e.parentId=r,e.type=3,e.size=1,e.widgetId=e.serviceId,e.widgetName=e.serviceName,e.serviceCode=e.serviceCode,e.icon=e.serviceIcon,e.size=e.widgetTemplate.size,e.serviceType=e.widgetTemplate.serviceType}),e.manageList.forEach(function(e,t){e.widgetId==r&&(e.children=[].concat(_toConsumableArray(e.children),_toConsumableArray(n)))});var i=JSON.parse(JSON.stringify(e.manageList));return _extends({},e,{manageList:i,isEdit:!0})}),_defineProperty(_handleActions,getAllServicesByLabelGroup,function(e,t){var a=t.payload;if(t.error)return e;var n={};return a.applications.forEach(function(e,t){(n[e.applicationId]=e).service.forEach(function(e,t){n[e.serviceId]=e})}),setDefaultSelected(e.manageList,n),_extends({},e,{applicationsMap:n,allServicesByLabelGroup:a})}),_defineProperty(_handleActions,setCurrentSelectWidgetMap,function(e,t){t.payload,t.error;return _extends({},e)}),_defineProperty(_handleActions,batchDelect,function(e,t){t.payload;var a=e.manageList,i=e.selectList;return a.forEach(function(e){for(var t=e.children,a=0,n=!0,r=t.length;a<r;n&&a++)i.forEach(function(e){n=!t[a]||t[a].widgetId!==e||(t.splice(a,1),!1)})}),a=JSON.parse(JSON.stringify(a)),_extends({},e,{manageList:a,selectList:[],selectGroup:[],isEdit:!0,currEditonlyId:""})}),_defineProperty(_handleActions,batchMove,function(e,t){var a=t.payload,n=e.manageList,i=e.selectList,d=[];return n.forEach(function(e){for(var t=e.children,a=0,n=!0,r=t.length;a<r;n&&a++)i.forEach(function(e){n=!t[a]||t[a].widgetId!==e||(d.push(t[a]),t.splice(a,1),!1)})}),d.forEach(function(e){n[a].children.push(e)}),n=JSON.parse(JSON.stringify(n)),_extends({},e,{manageList:n,selectList:[],selectGroup:[],isEdit:!0,currEditonlyId:""})}),_defineProperty(_handleActions,selectGroupActions,function(e,t){var a=t.payload;return _extends({},e,{selectGroup:[].concat(_toConsumableArray(a)),currEditonlyId:""})}),_defineProperty(_handleActions,selectListActions,function(e,t){var a=t.payload;return _extends({},e,{selectList:a,currEditonlyId:""})}),_defineProperty(_handleActions,addGroup,function(e,t){var a=t.payload,n=a.index,r=a.widgetId,i=a.widgetName,d=void 0===i?"":i,o=e.manageList,c=_extends({},defaultGroup,{widgetId:r||(0,_util.guid)(),widgetName:d,children:[]});return o.splice(n+1,0,c),_extends({},e,{manageList:[].concat(_toConsumableArray(o)),selectGroup:[],selectList:[],isEdit:!0,currEditonlyId:c.widgetId})}),_defineProperty(_handleActions,delectGroup,function(a,e){var n=e.payload,t=a.manageList,r=t.filter(function(e,t){return n!==t});return t[n].children.forEach(function(e,t){delete a.currentSelectWidgetMap[e.widgetId]}),_extends({},a,{manageList:r,selectGroup:[],selectList:[],isEdit:!0,currEditonlyId:"",currentSelectWidgetMap:a.currentSelectWidgetMap})}),_defineProperty(_handleActions,setCurrGroupIndex,function(e,t){var a=t.payload;return _extends({},e,{currGroupIndex:a})}),_defineProperty(_handleActions,renameGroup,function(e,t){var a=t.payload,n=a.name,r=a.index,i=a.id,d=a.dontChangeCurrEditonlyId,o=e.manageList,c=void 0,l=void 0;return void 0!==i?c=o.find(function(e){return e.widgetId===i}):void 0!==r&&(c=o[r]),l=d?e.currEditonlyId:"",c.widgetName=n,c.isNew=!1,_extends({},e,{manageList:o,isEdit:!0,currEditonlyId:l})}),_defineProperty(_handleActions,stickGroup,function(e,t){var a=t.payload,n=e.manageList,r=n[a],i=n.filter(function(e,t){return a!==t});return i.unshift(r),_extends({},e,{manageList:i,isEdit:!0,currEditonlyId:""})}),_defineProperty(_handleActions,moveTopGroup,function(e,t){var a=t.payload,n=swapItems(e.manageList,a,a-1);return _extends({},e,{manageList:[].concat(_toConsumableArray(n)),selectGroup:[],selectList:[],isEdit:!0,currEditonlyId:""})}),_defineProperty(_handleActions,moveBottomGroup,function(e,t){var a=t.payload,n=swapItems(e.manageList,a,a+1);return _extends({},e,{manageList:[].concat(_toConsumableArray(n)),selectGroup:[],selectList:[],isEdit:!0,currEditonlyId:""})}),_defineProperty(_handleActions,splitFolder,function(e,t){var a=t.payload;return _extends({},e,{manageList:a,currEditonlyId:""})}),_defineProperty(_handleActions,addService,function(e,t){var a=t.payload,n=a.index,r=a.service,i=e.manageList,d=i[n];return d.children=d.children.concat(r),i.splice(n,1,_extends({},d)),_extends({},e,{isEdit:!0,manageList:[].concat(_toConsumableArray(i)),currEditonlyId:""})}),_defineProperty(_handleActions,editTitle,function(e,t){var a=t.payload,n=(a.id,a.name),r=e.manageList;return _extends({},e,{title:n,drag:"zoomIn",manageList:[].concat(_toConsumableArray(r)),currEditonlyId:""})}),_defineProperty(_handleActions,openBatchMove,function(e){return _extends({},e,{batchMoveModalDisplay:!0,currEditonlyId:""})}),_defineProperty(_handleActions,closeBatchMove,function(e){return _extends({},e,{batchMoveModalDisplay:!1,currEditonlyId:""})}),_defineProperty(_handleActions,setEditState,function(e,t){var a=t.payload;return _extends({},e,{isEdit:a,currEditonlyId:""})}),_defineProperty(_handleActions,setEditonlyId,function(e,t){var a=t.payload;return _extends({},e,{currEditonlyId:a})}),_defineProperty(_handleActions,returnDefaultState,function(e){return{curEditFolderId:"",manageList:[],isEdit:!1,isFocus:!1,folderModalDisplay:!1,batchMoveModalDisplay:!1,selectList:[],selectGroup:[],currGroupIndex:0,currentSelectWidgetMap:{},title:"",currEditonlyId:"",applicationsMap:{},allServicesByLabelGroup:{},dragState:!0,isSiderDisplay:!0,shadowCard:{size:1,type:3,widgetId:"shadowCardId",widgetName:"item"},ifDifferentSizeExchanged:!1,checkedCardList:[],layout:{containerWidth:1200,containerHeight:200,calWidth:175,rowHeight:175,col:6,margin:[10,10],containerPadding:[0,0]},defaultLayout:{containerWidth:1200,containerHeight:200,calWidth:175,rowHeight:175,col:6,margin:[10,10],containerPadding:[0,0]}}}),_defineProperty(_handleActions,emptySelectGroup,function(e){return _extends({},e,{selectGroup:[]})}),_handleActions),defaultState);exports.default=reducer,module.exports=exports.default;