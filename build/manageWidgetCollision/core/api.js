'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAllMenuList = exports.getAllServicesByLabelGroup = exports.getManageList = exports.setManageList = undefined;

var _util = require('../core/util');

//import { get, post } from '@u';

var setManageList = exports.setManageList = function setManageList(list) {
    return (0, _util.post)('/desktop/update', list);
};
var getManageList = exports.getManageList = function getManageList(manageListUrl) {
    return (0, _util.get)(manageListUrl);
};

var getAllServicesByLabelGroup = exports.getAllServicesByLabelGroup = function getAllServicesByLabelGroup(serviceName) {
    return (0, _util.get)('/service/getAllServicesByLabelGroup?serviceName=' + serviceName);
};
var getAllMenuList = exports.getAllMenuList = function getAllMenuList(menuListUrl) {
    return (0, _util.get)(menuListUrl); // eslint-disable-line
};