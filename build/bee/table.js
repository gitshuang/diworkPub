'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _beeTable = require('bee-table');

Object.keys(_beeTable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _beeTable[key];
    }
  });
});
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_beeTable)["default"];
  }
});

require('bee-table/build/Table.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// if (window.location.origin.indexOf("u8c") > -1) {
require("./table_u8c.css");
// }

/*
* 行选中状态，添加selected类名
* 操作按钮的父元素用action-btns-container类名，按钮添加action-btn
* */
module.exports = exports['default'];