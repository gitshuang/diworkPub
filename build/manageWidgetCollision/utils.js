"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IS_IE = exports.hasCardContainInGroups = exports.removeCardByGroupIndexAndCardID = exports.calColWidth = exports.calColCount = exports.isContained = exports.checkCardContainInGroup = exports.checkInContainer = exports.setPropertyValueForCards = exports.calWHtoPx = exports.calGridItemPosition = exports.calGridXY = exports.getCardByGroupIDAndCardID = exports.layoutBottom = exports.getContainerMaxHeight = undefined;
exports.findItemById = findItemById;
exports.DeferFn = DeferFn;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
 * 计算卡片容器的最大高度
 * @param {Array} cards
 * @param {Number} rowHeight
 * @param {Number} margin
 * @returns {Number} 容器高度
 */
var getContainerMaxHeight = exports.getContainerMaxHeight = function getContainerMaxHeight(cards, rowHeight, margin) {
    var resultRow = layoutBottom(cards);
    return resultRow * rowHeight + (resultRow - 1) * margin[1] + 2 * margin[1];
};

/**
 * 获得当前layout中最底单元格的Y坐标
 * @param {Array} layout
 * @returns {Number} 最底单元格Y坐标
 */
var layoutBottom = exports.layoutBottom = function layoutBottom(layout) {
    var max = 0,
        bottomY = void 0;
    for (var i = 0, len = layout.length; i < len; i++) {
        bottomY = layout[i].gridy + layout[i].height;
        if (bottomY > max) max = bottomY;
    }
    return max;
};

/**
 * 通过GroupID找到某个组，通过CardID找到该组内的卡片对象
 * @param {Array} manageList
 * @param {String} groupID
 * @param {String} cardID
 * @return {Object} 目标卡片对象
 */
var getCardByGroupIDAndCardID = exports.getCardByGroupIDAndCardID = function getCardByGroupIDAndCardID(manageList, groupID, cardID) {
    var tmpGroup = {};
    var resultCard = {};
    manageList.forEach(function (g) {
        if (g.widgetId === groupID) {
            tmpGroup = g;
            return false;
        }
    });
    tmpGroup.children.forEach(function (a) {
        if (a.widgetId === cardID) {
            resultCard = a;
            return false;
        }
    });
    return resultCard;
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

/**
* 通过坐标x，y像素值计算所在的单元格坐标
* @param {Number} x
* @param {Number} y
* @param {Number} cardWidth
* @param {Number} margin
* @param {Number} containerWidth
* @param {Number} col
* @param {Number} rowHeight
* @returns {Object} 包含gridx和gridy的单元格坐标的对象
*/
var calGridXY = exports.calGridXY = function calGridXY(x, y, cardWidth, margin, containerWidth, col, rowHeight) {
    //坐标转换成格子的时候，向下取整，无须计算margin
    var gridX = Math.floor(x / containerWidth * col);
    var gridY = Math.floor(y / (rowHeight + (margin ? margin[1] : 0)));
    //防止卡片溢出容器
    return checkInContainer(gridX, gridY, col, cardWidth);
};

/**
 * 给予一个grid的位置，算出元素具体的在容器中位置在哪里，单位是px
 * @param {Number} gridx
 * @param {Number} gridy
 * @param {Number} margin
 * @param {Number} rowHeight
 * @param {Number} calWidth
 * @returns {Object} 包含x，y坐标的对象
 */
var calGridItemPosition = exports.calGridItemPosition = function calGridItemPosition(gridx, gridy, margin, rowHeight, calWidth) {
    var x = Math.round(gridx * calWidth + margin[0] * (gridx + 1));
    var y = Math.round(gridy * rowHeight + margin[1] * (gridy + 1));
    return {
        x: x,
        y: y
    };
};

/**
 * 宽和高计算成为px
 * @param {Number} w
 * @param {Number} h
 * @param {Number} margin
 * @param {Number} rowHeight
 * @param {Number} cardWidth
 * @returns {Object} 包含wPx, hPx的对象
 */
var calWHtoPx = exports.calWHtoPx = function calWHtoPx(w, h, margin, rowHeight, calWidth) {
    var wPx = Math.round(w * calWidth + (w - 1) * margin[0]);
    var hPx = Math.round(h * rowHeight + (h - 1) * margin[1]);
    return { wPx: wPx, hPx: hPx };
};

/**
 * 以组为单位，设置卡片属性值
 * @param {Array} groups
 * @param {String} property
 * @param {*} value
 */
var setPropertyValueForCards = exports.setPropertyValueForCards = function setPropertyValueForCards(groups, property, value) {
    _lodash2["default"].forEach(groups, function (g, index) {
        _lodash2["default"].forEach(g.children, function (a) {
            a[property] = value;
        });
    });
};

/**
 * 防止元素溢出容器
 * @param {Int} gridX
 * @param {Int} gridY
 * @param {Int} col
 * @param {Int} w 卡片宽度
 * @returns {Object} gridX，gridY的单元格坐标对象
 */
var checkInContainer = exports.checkInContainer = function checkInContainer(gridX, gridY, col, w) {
    if (gridX + w > col - 1) gridX = col - w; //右边界
    if (gridX < 0) gridX = 0; //左边界
    if (gridY < 0) gridY = 0; //上边界
    return { gridX: gridX, gridY: gridY };
};

/**
 * 检查卡片是否在组内包含
 * @param {Array} groups
 * @param {String} cardID
 * @returns {Boolean}
 */
var checkCardContainInGroup = exports.checkCardContainInGroup = function checkCardContainInGroup(groups, widgetId) {
    var tmpFlag = false;
    groups.children.forEach(function (a) {
        if (a.widgetId === widgetId && a.isShadow === false) {
            tmpFlag = true;
        }
    });
    return tmpFlag;
};

var isContained = exports.isContained = function isContained(a, b) {
    if (!(a instanceof Array) || !(b instanceof Array)) return false;
    if (a.length < b.length) return false;
    var aStr = a.toString();
    for (var i = 0, len = b.length; i < len; i++) {
        if (aStr.indexOf(b[i]) == -1) return false;
    }
    return true;
};

/**
 * 已知格子大小，计算容器一行放置格子数量
 * @param {Number} defaultCalWidth
 * @param {Number} containerWidth
 * @param {Number} containerPadding
 * @param {Number} margin
 * @returns {Number} 每行单元格数量
 */
var calColCount = exports.calColCount = function calColCount(defaultCalWidth, containerWidth, containerPadding, margin) {
    if (margin) {
        return Math.floor((containerWidth - containerPadding[0] * 2 - margin[0]) / (defaultCalWidth + margin[0]));
    }
};

/**
 * 已知放置格子数量, 计算容器的每一个格子多大
 * @param {Number} containerWidth
 * @param {Number} col
 * @param {Number} containerPadding
 * @param {Number} margin
 * @returns {Number} 单元格大小
 */
var calColWidth = exports.calColWidth = function calColWidth(containerWidth, col, containerPadding, margin) {
    if (margin) {
        return (containerWidth - containerPadding[0] * 2 - margin[0] * (col + 1)) / col;
    }
    return (containerWidth - containerPadding[0] * 2 - 0 * (col + 1)) / col;
};

/**
 * 连续的ajax延迟
 * @param {Function} fn 需要延迟运行的的回调函数
 **/
var deferFnInterval = void 0;
function DeferFn(fn) {
    deferFnInterval = new Date().getTime();
    setTimeout(function () {
        //停止输入0.5s后执行
        if (new Date().getTime() - deferFnInterval >= 500) {
            fn();
        }
    }, 500);
}

/**
 * 从某个分组中删除卡片
 * @param {Array} groups
 * @param {Int} groupIndex
 * @param {String} cardID
 * @return {Object} 被删除的卡片对象
 */
var removeCardByGroupIndexAndCardID = exports.removeCardByGroupIndexAndCardID = function removeCardByGroupIndexAndCardID(groups, groupIndex, cardID) {
    var tmpGroupIndex = groupIndex;
    var resultCardArr = [];
    resultCardArr = _lodash2["default"].remove(groups[tmpGroupIndex].children, function (a) {
        return a.widgetId === cardID;
    });
    return resultCardArr[0];
};
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
            if (a.serviceCode === cardID) {
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
//ie11的window.ActiveXObject返回undefined，
var IS_IE = exports.IS_IE = !!window.ActiveXObject || "ActiveXObject" in window;