"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.compactLayoutHorizontal = exports.compactLayout = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _collision = require("./collision");

var _utils = require("./utils");

/**
 * 布局的item排序，按照gridx由小到大，gridy由小到大
 * @param {Array} layout 布局的数组
 * @returns {Array} 新的排序后的layout
 */
var sortLayout = function sortLayout(layout) {
    return [].concat(layout).sort(function (a, b) {
        if (a.gridy > b.gridy || a.gridy === b.gridy && a.gridx > b.gridx) {
            return 1;
        } else if (a.gridy === b.gridy && a.gridx === b.gridx) {
            return 0;
        }
        return -1;
    });
};
/**
 * 压缩单个元素，使得每一个元素都会紧挨着边界或者相邻的元素
 * @param {Array} finishedLayout 压缩完的元素会放进这里来，用来对比之后的每一个元素是否需要压缩
 * @param {Object} item
 * @returns {Object} item 返回新的坐标位置的item
 */
var compactItem = function compactItem(finishedLayout, item) {
    var newItem = _extends({}, item);
    if (finishedLayout.length === 0) {
        return _extends({}, newItem, { gridy: 0 });
    }

    while (true) {
        var FirstCollison = (0, _collision.getFirstCollision)(finishedLayout, newItem);
        if (FirstCollison) {
            newItem.gridy = FirstCollison.gridy + FirstCollison.height;
            return newItem;
        }
        newItem.gridy--;
        if (newItem.gridy < 0) return _extends({}, newItem, { gridy: 0 }); //碰到边界，gridy设为0
    }
};
/**
 * 纵向压缩vertical，使得每一个元素都会紧挨着边界或者相邻的元素
 * @param {Array} layout
 * @param {Object} movingItem
 * @returns {Array} layout 最新layout布局
 */
var compactLayout = exports.compactLayout = function compactLayout(layout, movingItem) {
    var sorted = sortLayout(layout);
    var compareList = [];
    var needCompact = Array(layout.length);

    for (var i = 0, length = sorted.length; i < length; i++) {
        var finished = compactItem(compareList, sorted[i]);
        compareList.push(finished);
        needCompact[i] = finished;
    }
    return needCompact;
};
/**
 * 获取空闲卡片放置区域
 * @param {Array} finishedLayout
 * @param {Object} item
 * @param {Int} cols
 * @returns {Object} 卡片放置位置
 */
var getSpaceArea = function getSpaceArea(finishedLayout, item, cols) {
    var newItem = _extends({}, item);
    if (finishedLayout.length === 0) {
        return newItem;
    }

    var FirstCollison = (0, _collision.getFirstCollision)(finishedLayout, newItem);
    if (FirstCollison) {
        newItem.gridx++;
        if (newItem.gridx + item.width > cols) {
            newItem.gridx = 0;
            newItem.gridy++;
        }
        return getSpaceArea(finishedLayout, newItem, cols);
    } else {
        return newItem;
    }
};
/**
 * horizontal compact Layout Version2.0
 * 横向压缩 2.0版本
 * 先将卡片按照x和y排序，
 * 放置一个卡片，从0，0开始检测是否碰撞或超过边界，如果碰撞，则grix=0，y+1，再次检测是否碰撞
 * 需优化的地方：如果移动中的卡片坐标应该一直在一个区域范围内，而不应该任意位置拖拽
 * @param {Array} layout
 * @param {Int} cols
 * @param {String} movingCardID 移动中的元素
 * @returns {layout} 最新layout布局
 */
var compactLayoutHorizontal = exports.compactLayoutHorizontal = function compactLayoutHorizontal(layout, cols, movingCardID) {
    var sorted = sortLayout(layout);
    var compareList = [];
    var needCompact = Array(layout.length);
    var arr = [];
    var moveCard = void 0;
    //进行坐标重置，移动中的卡片除外
    for (var i = 0; i < sorted.length; i++) {
        if (movingCardID === sorted[i].widgetId) {
            moveCard = sorted[i];
            continue;
        }
        arr.push(sorted[i]);
    }
    //获得当前组内的最大的y值，并赋值给移动卡片，防止分组Y值无限变大
    if (moveCard) {
        moveCard.gridy = Math.min((0, _utils.layoutBottom)(arr), moveCard.gridy);
    }
    //将非移动的卡片进行坐标重置
    for (var _i = 0; _i < sorted.length; _i++) {
        if (movingCardID !== sorted[_i].widgetId) {
            sorted[_i].gridy = 0;
            sorted[_i].gridx = 0;
        }
    }
    var rowCount = 0;
    //进行重新放置，移动中卡片除外
    for (var _i2 = 0, length = sorted.length; _i2 < length; _i2++) {
        var finished = void 0;
        if (movingCardID === sorted[_i2].widgetId) {
            finished = sorted[_i2];
        } else {
            finished = getSpaceArea(compareList, sorted[_i2], cols);
        }
        compareList.push(finished);
        needCompact[_i2] = finished;
    }

    return needCompact;
};