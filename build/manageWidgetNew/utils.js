"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findItemById = findItemById;
function findItemById(manageList, id) {
  var dataItem = void 0;
  for (var i = 0; i < manageList.length; i++) {
    if (manageList[i].children) {
      dataItem = findItemById(manageList[i].children, id);
    }
    if (dataItem) {
      break;
    }
    if (manageList[i].widgetId && manageList[i].widgetId === id) {
      dataItem = manageList[i];
      break;
    }
  }
  return dataItem;
}

/**
 * 判断所有分组内是否有某卡片
 * @param {Array} groups
 * @param {String} cardID
 * @returns {Boolean}
 */
var hasCardContainInGroups = exports.hasCardContainInGroups = function hasCardContainInGroups(groups, cardID) {
  var flag = false;
  groups.forEach(function (g) {
    g.children.forEach(function (a) {
      if (a.widgetId === cardID) {
        flag = true;
        return false;
      }
    });
    if (flag) {
      return false;
    }
  });
  return flag;
};

Array.prototype.distinct = function () {
  var arr = this,
      i,
      obj = {},
      result = [],
      len = arr.length;
  for (i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      result.push(arr[i]);
    }
  }
  return result;
};