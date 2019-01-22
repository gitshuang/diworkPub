'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = require('store/root/manage/actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

//这里是可变的别的项目里面可能不叫这个

//const actions;

var namespace = 'manage';

exports["default"] = {
    actions: actions,
    namespace: namespace
};
module.exports = exports['default'];