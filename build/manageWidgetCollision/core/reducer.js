'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('redux-actions');

var _update = require('react/lib/update');

var _update2 = _interopRequireDefault(_update);

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var updateShadowCard = _action2["default"].updateShadowCard,
    updateLayout = _action2["default"].updateLayout,
    updateGroupList = _action2["default"].updateGroupList,
    setManageList = _action2["default"].setManageList,
    getManageList = _action2["default"].getManageList,
    addDesk = _action2["default"].addDesk,
    batchDelect = _action2["default"].batchDelect,
    batchMove = _action2["default"].batchMove,
    selectGroupActions = _action2["default"].selectGroupActions,
    selectListActions = _action2["default"].selectListActions,
    addGroup = _action2["default"].addGroup,
    delectGroup = _action2["default"].delectGroup,
    renameGroup = _action2["default"].renameGroup,
    moveGroup = _action2["default"].moveGroup,
    stickGroup = _action2["default"].stickGroup,
    moveTopGroup = _action2["default"].moveTopGroup,
    moveBottomGroup = _action2["default"].moveBottomGroup,
    splitFolder = _action2["default"].splitFolder,
    addService = _action2["default"].addService,
    delectService = _action2["default"].delectService,
    moveService = _action2["default"].moveService,
    getAllServicesByLabelGroup = _action2["default"].getAllServicesByLabelGroup,
    setCurrentSelectWidgetMap = _action2["default"].setCurrentSelectWidgetMap,
    openBatchMove = _action2["default"].openBatchMove,
    closeBatchMove = _action2["default"].closeBatchMove,
    setEditState = _action2["default"].setEditState,
    setCurrGroupIndex = _action2["default"].setCurrGroupIndex,
    editTitle = _action2["default"].editTitle,
    setEditonlyId = _action2["default"].setEditonlyId,
    returnDefaultState = _action2["default"].returnDefaultState,
    setDragInputState = _action2["default"].setDragInputState,
    emptySelectGroup = _action2["default"].emptySelectGroup,
    changeSiderState = _action2["default"].changeSiderState,
    getAllMenuList = _action2["default"].getAllMenuList,
    moveSideCards = _action2["default"].moveSideCards,
    dropSideCards = _action2["default"].dropSideCards,
    updateManageList = _action2["default"].updateManageList,
    dropSideCardsInGroup = _action2["default"].dropSideCardsInGroup,
    updateCheckedCardList = _action2["default"].updateCheckedCardList;


var defaultState = {
  manageList: [],
  isEdit: false,
  isFocus: false,
  batchMoveModalDisplay: false,
  selectList: [], // 勾选的服务列表
  // selectWidgetList:[],
  selectGroup: [],
  currGroupIndex: 0,
  currentSelectWidgetMap: {},
  title: '',
  currEditonlyId: '',

  applicationsMap: {},
  // selectWidgetItem:true,
  allServicesByLabelGroup: {},

  dragState: true, // 是否可拖拽

  shadowCard: {}, //
  isSiderDisplay: true, //左侧默认展开
  layout: {
    containerWidth: 1200,
    containerHeight: 200,
    calWidth: 175,
    rowHeight: 175,
    col: 6,
    margin: [10, 10],
    containerPadding: [0, 0]
  },
  currentHoveredTargetId: '',
  defaultLayout: {
    containerWidth: 1200,
    containerHeight: 200,
    calWidth: 175,
    rowHeight: 175,
    col: 6,
    margin: [10, 10],
    containerPadding: [0, 0]
  },
  checkedCardList: [] //左侧已选择元素数组
};

var findTreeById = function findTreeById(data, curId) {
  var result = void 0;
  for (var i = 0, l = data.length; i < l; i += 1) {
    var menu = data[i];
    var id = menu.id,
        children = menu.children;

    if (children && children.length) {
      result = findTreeById(children, curId);
    }
    if (result) {
      break;
    }
    if (id === curId) {
      result = menu;
      break;
    }
  }
  return result;
};
// 定义上下移动数组
function swapItems(arr, index1, index2) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
}
var defaultGroup = {
  widgetName: '',
  type: 1,
  children: [],
  isNew: true
};

// 递归查找
var data = void 0;
function findById(manageList, id) {
  for (var i = 0; i < manageList.length; i++) {
    if (manageList[i].widgetId && manageList[i].widgetId === id) {
      data = manageList[i];
      break;
    } else {
      manageList[i].children && findById(manageList[i].children, id);
    }
  }
  return data;
}

function setDefaultSelected(manageList, applicationsMap) {
  manageList.forEach(function (da) {
    if (da && da.type === 3) {
      // 表示服务和应用
      if (applicationsMap[da.serviceId]) {
        applicationsMap[da.serviceId].selected = '1';
      }
    } else if (da.children && da.children != 0) {
      setDefaultSelected(da.children, applicationsMap);
    }
  });
}

var reducer = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, updateCheckedCardList, function (state, _ref) {
  var payload = _ref.payload;

  return _extends({}, state, {
    checkedCardList: payload
  });
}), _defineProperty(_handleActions, changeSiderState, function (state) {
  return _extends({}, state, {
    isSiderDisplay: !state.isSiderDisplay
  });
}), _defineProperty(_handleActions, updateShadowCard, function (state, _ref2) {
  var shadowCard = _ref2.payload;

  return _extends({}, state, {
    shadowCard: shadowCard
  });
}), _defineProperty(_handleActions, updateLayout, function (state, _ref3) {
  var layout = _ref3.payload;

  return _extends({}, state, {
    layout: layout
  });
}), _defineProperty(_handleActions, updateGroupList, function (state, _ref4) {
  var groupList = _ref4.payload;

  console.log(groupList, 'isEdit=================================isEdit==================isEdit');

  if (Object.prototype.toString.call(groupList) == "[object Object]" && groupList.isEdit) {
    state.isEdit = groupList.isEdit;
    groupList = groupList.manageList;
  }
  return _extends({}, state, {
    manageList: groupList,
    checkedCardList: [],
    isEdit: state.isEdit
  });
}), _defineProperty(_handleActions, setManageList, function (state, _ref5) {
  var payload = _ref5.payload,
      error = _ref5.error;
  return _extends({}, state, {
    selectWidgetItem: true
  });
}), _defineProperty(_handleActions, setDragInputState, function (state, _ref6) {
  var dragState = _ref6.payload;
  return _extends({}, state, {
    dragState: dragState
  });
}), _defineProperty(_handleActions, getManageList, function (state, _ref7) {
  var payload = _ref7.payload,
      error = _ref7.error;

  if (error) {
    return state;
  }
  // 更改了原有数据， 暂时无碍吧， 为了将数据的文件夹平铺到上一级
  var list = payload.workList;
  list.forEach(function (item) {
    item.children.forEach(function (list, index) {
      if (list.type === 2) {
        var arr = list.children;
        item.children.splice(index, 1);
        arr.forEach(function (data, key) {
          data.parentId = item.widgetId;
          item.children.splice(index + key, 0, data);
        });
      }
    });
  });
  return _extends({}, state, {
    manageList: [].concat(_toConsumableArray(list)),
    currEditonlyId: ''
  });
}), _defineProperty(_handleActions, addDesk, function (state, _ref8) {
  var data = _ref8.payload;
  var dataList = data.dataList,
      parentId = data.parentId;

  dataList.forEach(function (da) {
    da.parentId = parentId;
    da.type = 3;
    da.size = 1;
    da.widgetId = da.serviceId;
    da.widgetName = da.serviceName;
    da.serviceCode = da.serviceCode;
    da.icon = da.serviceIcon;
    da.size = da.widgetTemplate.size;
    da.serviceType = da.widgetTemplate.serviceType;
  });
  state.manageList.forEach(function (da, i) {
    if (da.widgetId == parentId) {
      da.children = [].concat(_toConsumableArray(da.children), _toConsumableArray(dataList));
    }
  });
  var newManageList = JSON.parse(JSON.stringify(state.manageList));
  return _extends({}, state, {
    manageList: newManageList,
    isEdit: true
  });
}), _defineProperty(_handleActions, getAllServicesByLabelGroup, function (state, _ref9) {
  var payload = _ref9.payload,
      error = _ref9.error;

  if (error) {
    return state;
  }
  var applicationsMap = {};
  payload.applications.forEach(function (da, i) {
    applicationsMap[da.applicationId] = da;
    da.service.forEach(function (serviceDa, j) {
      applicationsMap[serviceDa.serviceId] = serviceDa;
    });
  });
  setDefaultSelected(state.manageList, applicationsMap);
  return _extends({}, state, {
    applicationsMap: applicationsMap,
    allServicesByLabelGroup: payload
  });
}), _defineProperty(_handleActions, setCurrentSelectWidgetMap, function (state, _ref10) {
  var payload = _ref10.payload,
      error = _ref10.error;
  return _extends({}, state);
}), _defineProperty(_handleActions, batchDelect, function (state, _ref11) {
  var payload = _ref11.payload;

  var manageList = state.manageList;
  // 选中之后将id 都放到这个组中
  var selectList = state.selectList;
  var newList = [];
  manageList.forEach(function (_ref12) {
    var children = _ref12.children;

    for (var i = 0, flag = true, len = children.length; i < len; flag ? i++ : i) {
      selectList.forEach(function (select) {
        if (children[i] && children[i].widgetId === select) {
          children.splice(i, 1);
          flag = false;
        } else {
          flag = true;
        }
      });
    }
  });
  manageList = JSON.parse(JSON.stringify(manageList));
  return _extends({}, state, {
    manageList: manageList,
    selectList: [],
    selectGroup: [],
    isEdit: true,
    currEditonlyId: ''
  });
}), _defineProperty(_handleActions, batchMove, function (state, _ref13) {
  var toGroupIndex = _ref13.payload;

  var manageList = state.manageList;
  // 选中之后将id 都放到这个组中
  var selectList = state.selectList;
  var newList = [];
  manageList.forEach(function (_ref14) {
    var children = _ref14.children;

    for (var i = 0, flag = true, len = children.length; i < len; flag ? i++ : i) {
      selectList.forEach(function (select) {
        if (children[i] && children[i].widgetId === select) {
          newList.push(children[i]);
          children.splice(i, 1);
          flag = false;
        } else {
          flag = true;
        }
      });
    }
  });
  newList.forEach(function (item) {
    manageList[toGroupIndex].children.push(item);
  });
  manageList = JSON.parse(JSON.stringify(manageList));
  return _extends({}, state, {
    manageList: manageList,
    selectList: [],
    selectGroup: [],
    isEdit: true,
    currEditonlyId: ''
  });
}), _defineProperty(_handleActions, selectGroupActions, function (state, _ref15) {
  var selectGroup = _ref15.payload;
  return _extends({}, state, {
    selectGroup: [].concat(_toConsumableArray(selectGroup)),
    currEditonlyId: ''
  });
}), _defineProperty(_handleActions, selectListActions, function (state, _ref16) {
  var selectList = _ref16.payload;
  return _extends({}, state, {
    selectList: selectList,
    currEditonlyId: ''
  });
}), _defineProperty(_handleActions, addGroup, function (state, _ref17) {
  var _ref17$payload = _ref17.payload,
      index = _ref17$payload.index,
      widgetId = _ref17$payload.widgetId,
      _ref17$payload$widget = _ref17$payload.widgetName,
      widgetName = _ref17$payload$widget === undefined ? '' : _ref17$payload$widget;

  var manageList = state.manageList;
  var newGroup = _extends({}, defaultGroup, {
    widgetId: widgetId || (0, _util.guid)(),
    widgetName: widgetName,
    children: []
  });
  manageList.splice(index + 1, 0, newGroup);
  return _extends({}, state, {
    manageList: [].concat(_toConsumableArray(manageList)),
    selectGroup: [],
    selectList: [],
    isEdit: true,
    currEditonlyId: newGroup.widgetId
  });
}), _defineProperty(_handleActions, delectGroup, function (state, _ref18) {
  var index = _ref18.payload;

  var manageList = state.manageList;
  var newList = manageList.filter(function (item, i) {
    return index !== i;
  });
  /* if (!newList.length) {
    newList.push({
      ...defaultGroup,
      children: [],
    })
  } */
  var children = manageList[index].children;
  children.forEach(function (da, i) {
    delete state.currentSelectWidgetMap[da.widgetId];
  });
  return _extends({}, state, {
    manageList: newList,
    selectGroup: [],
    selectList: [],
    isEdit: true,
    currEditonlyId: '',
    currentSelectWidgetMap: state.currentSelectWidgetMap
  });
}), _defineProperty(_handleActions, setCurrGroupIndex, function (state, _ref19) {
  var index = _ref19.payload;
  return _extends({}, state, {
    currGroupIndex: index
    // currEditonlyId:""
  });
}), _defineProperty(_handleActions, renameGroup, function (state, _ref20) {
  var _ref20$payload = _ref20.payload,
      name = _ref20$payload.name,
      index = _ref20$payload.index,
      id = _ref20$payload.id,
      dontChangeCurrEditonlyId = _ref20$payload.dontChangeCurrEditonlyId;

  var manageList = state.manageList;
  var group = void 0;
  var currEditonlyId = void 0;
  if (typeof id !== 'undefined') {
    group = manageList.find(function (_ref21) {
      var widgetId = _ref21.widgetId;
      return widgetId === id;
    });
  } else if (typeof index !== 'undefined') {
    group = manageList[index];
  }
  if (dontChangeCurrEditonlyId) {
    currEditonlyId = state.currEditonlyId;
  } else {
    currEditonlyId = '';
  }
  group.widgetName = name;
  group.isNew = false;
  return _extends({}, state, {
    manageList: manageList,
    isEdit: true,
    currEditonlyId: currEditonlyId
  });
}), _defineProperty(_handleActions, moveGroup, function (state, _ref22) {
  var _ref22$payload = _ref22.payload,
      id = _ref22$payload.id,
      afterId = _ref22$payload.afterId;

  var manageList = state.manageList;
  var item = manageList.filter(function (_ref23) {
    var widgetId = _ref23.widgetId;
    return widgetId === id;
  })[0];
  var afterItem = manageList.filter(function (_ref24) {
    var widgetId = _ref24.widgetId;
    return widgetId === afterId;
  })[0];
  var itemIndex = manageList.indexOf(item);
  var afterIndex = manageList.indexOf(afterItem);

  manageList = (0, _update2["default"])(manageList, {
    $splice: [[itemIndex, 1], [afterIndex, 0, item]]
  });
  // 深拷贝
  // manageList = JSON.parse(JSON.stringify(manageList));

  return _extends({}, state, {
    isEdit: true,
    selectGroup: [],
    selectList: [],
    manageList: manageList,
    currEditonlyId: ''
  });
}), _defineProperty(_handleActions, stickGroup, function (state, _ref25) {
  var index = _ref25.payload;

  var manageList = state.manageList;
  var curr = manageList[index];
  var newList = manageList.filter(function (item, i) {
    return index !== i;
  });
  newList.unshift(curr);
  return _extends({}, state, {
    manageList: newList,
    isEdit: true,
    currEditonlyId: ''
  });
}), _defineProperty(_handleActions, moveTopGroup, function (state, _ref26) {
  var index = _ref26.payload;

  var manageList = state.manageList;
  var newList = swapItems(manageList, index, index - 1);
  return _extends({}, state, {
    manageList: [].concat(_toConsumableArray(newList)),
    selectGroup: [],
    selectList: [],
    isEdit: true,
    currEditonlyId: ''
  });
}), _defineProperty(_handleActions, moveBottomGroup, function (state, _ref27) {
  var index = _ref27.payload;

  var manageList = state.manageList;
  var newList = swapItems(manageList, index, index + 1);
  return _extends({}, state, {
    manageList: [].concat(_toConsumableArray(newList)),
    selectGroup: [],
    selectList: [],
    isEdit: true,
    currEditonlyId: ''
  });
}), _defineProperty(_handleActions, splitFolder, function (state, _ref28) {
  var manageList = _ref28.payload;
  return _extends({}, state, {
    manageList: manageList,
    currEditonlyId: ''
  });
}), _defineProperty(_handleActions, addService, function (state, _ref29) {
  var _ref29$payload = _ref29.payload,
      groupIndex = _ref29$payload.index,
      service = _ref29$payload.service;
  var manageList = state.manageList;

  var group = manageList[groupIndex];
  group.children = group.children.concat(service);
  manageList.splice(groupIndex, 1, _extends({}, group));
  return _extends({}, state, {
    isEdit: true,
    manageList: [].concat(_toConsumableArray(manageList)),
    currEditonlyId: ''
  });
}), _defineProperty(_handleActions, delectService, function (state, _ref30) {
  var folderId = _ref30.payload;
  var manageList = state.manageList,
      allMenuList = state.allMenuList;

  var groupIndex = void 0;
  var widgetIndex = void 0;
  if (!manageList.some(function (group, i) {
    groupIndex = i;
    return group.children.some(function (_ref31, j) {
      var widgetId = _ref31.widgetId;

      widgetIndex = j;
      return folderId === widgetId;
    });
  })) {
    return state;
  }
  var group = manageList[groupIndex];
  group.children.splice(widgetIndex, 1);
  group.children = [].concat(_toConsumableArray(group.children));
  manageList.splice(groupIndex, 1, _extends({}, group));
  delete state.currentSelectWidgetMap[folderId];
  (0, _util.updateAllMenuList)(allMenuList, manageList);
  return _extends({}, state, {
    isEdit: true,
    manageList: [].concat(_toConsumableArray(manageList)),
    currEditonlyId: '',
    currentSelectWidgetMap: state.currentSelectWidgetMap
  });
}), _defineProperty(_handleActions, editTitle, function (state, _ref32) {
  var _ref32$payload = _ref32.payload,
      id = _ref32$payload.id,
      name = _ref32$payload.name;

  var manageList = state.manageList;
  // manageList = JSON.parse(JSON.stringify(manageList));
  return _extends({}, state, {
    title: name,
    drag: 'zoomIn',
    // manageList,
    manageList: [].concat(_toConsumableArray(manageList)),
    currEditonlyId: ''
    // manageList: [...manageList],
  });
}), _defineProperty(_handleActions, moveService, function (state, _ref33) {
  var _ref33$payload = _ref33.payload,
      id = _ref33$payload.id,
      preParentId = _ref33$payload.preParentId,
      preType = _ref33$payload.preType,
      afterId = _ref33$payload.afterId,
      parentId = _ref33$payload.parentId,
      afterType = _ref33$payload.afterType,
      monitor = _ref33$payload.monitor;

  var manageAllList = state.manageList;
  var manageList = manageAllList;

  var sourceData = preParentId && findById(manageAllList, preParentId); // 拖拽前 父级源对象
  var targetData = parentId && findById(manageAllList, parentId); // 拖拽后 父级目标对象
  var preParentType = sourceData.type;
  var afterParentType = targetData.type;
  // 判断是否为文件夹里面元素拖拽
  var itemIn = findById(manageAllList, id);
  var itemAfter = findById(manageAllList, afterId);
  if (preParentType === 1 && afterParentType === 1 && preParentId !== parentId && preType === 3 && afterType === 3) {
    // 跨分组拖拽
    sourceData.children.splice(sourceData.children.indexOf(itemIn), 1); // 删掉

    var _data = manageList.filter(function (_ref34) {
      var widgetId = _ref34.widgetId;
      return widgetId === parentId;
    })[0].children; // 当前分组数据

    if (preParentId !== parentId) {
      itemIn.parentId = parentId;
      monitor.getItem().parentId = parentId;
    }
    manageList.filter(function (_ref35) {
      var widgetId = _ref35.widgetId;
      return widgetId === parentId;
    })[0].children = (0, _update2["default"])(_data, {
      $splice: [[targetData.children.indexOf(itemAfter), 0, itemIn]]
    });
  } else if (preParentId !== parentId && preType === 3 && afterType === 1) {
    // 跨分组拖拽 放到组内 而不是元素上
    sourceData.children.splice(sourceData.children.indexOf(itemIn), 1); // 删掉
    if (preParentId !== parentId) {
      itemIn.parentId = parentId;
    }
    targetData.children.splice(targetData.children.length, 0, itemIn); // 添加
  } else {
    var dataPre = manageList.filter(function (_ref36) {
      var widgetId = _ref36.widgetId;
      return widgetId === preParentId;
    })[0].children;
    var _data2 = manageList.filter(function (_ref37) {
      var widgetId = _ref37.widgetId;
      return widgetId === parentId;
    })[0].children;
    var item = dataPre.filter(function (_ref38) {
      var widgetId = _ref38.widgetId;
      return widgetId === id;
    })[0];
    var afterItem = _data2.filter(function (_ref39) {
      var widgetId = _ref39.widgetId;
      return widgetId === afterId;
    })[0];
    var itemIndex = _data2.indexOf(item);
    var afterIndex = _data2.indexOf(afterItem);

    manageList.filter(function (_ref40) {
      var widgetId = _ref40.widgetId;
      return widgetId === parentId;
    })[0].children = (0, _update2["default"])(_data2, {
      $splice: [[itemIndex, 1], [afterIndex, 0, item]]
    });
  }

  manageList = JSON.parse(JSON.stringify(manageAllList));
  return _extends({}, state, {
    isEdit: true,
    manageList: manageList,
    currEditonlyId: ''
  });
}), _defineProperty(_handleActions, openBatchMove, function (state) {
  return _extends({}, state, {
    batchMoveModalDisplay: true,
    currEditonlyId: ''
  });
}), _defineProperty(_handleActions, closeBatchMove, function (state) {
  return _extends({}, state, {
    batchMoveModalDisplay: false,
    currEditonlyId: ''
  });
}), _defineProperty(_handleActions, setEditState, function (state, _ref41) {
  var isEdit = _ref41.payload;
  return _extends({}, state, {
    isEdit: isEdit,
    currEditonlyId: ''
  });
}), _defineProperty(_handleActions, setEditonlyId, function (state, _ref42) {
  var currEditonlyId = _ref42.payload;
  return _extends({}, state, {
    currEditonlyId: currEditonlyId
  });
}), _defineProperty(_handleActions, returnDefaultState, function (state) {
  return {
    curEditFolderId: '',
    manageList: [],
    isEdit: false,
    isFocus: false,

    folderModalDisplay: false,
    batchMoveModalDisplay: false,
    selectList: [], // 勾选的服务列表
    // selectWidgetList:[],
    selectGroup: [],
    currGroupIndex: 0,
    currentSelectWidgetMap: {},
    title: '',
    currEditonlyId: '',

    applicationsMap: {},
    // selectWidgetItem:true,
    allServicesByLabelGroup: {},

    dragState: true, // 是否可拖拽
    isSiderDisplay: true, //左侧默认展开
    shadowCard: {
      size: 1,
      type: 3,
      widgetId: "shadowCardId",
      widgetName: "item"
    },
    ifDifferentSizeExchanged: false,
    checkedCardList: []
  };
}), _defineProperty(_handleActions, emptySelectGroup, function (state) {
  return _extends({}, state, {
    selectGroup: []
  });
}), _handleActions), defaultState);

exports["default"] = reducer;
module.exports = exports['default'];