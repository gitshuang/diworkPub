'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _beeTree = require('bee-tree');

Object.keys(_beeTree).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _beeTree[key];
    }
  });
});
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_beeTree)["default"];
  }
});

require('bee-tree/build/Tree.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// if (window.location.origin.indexOf("u8c") > -1) {
require("./tree_u8c.css");
// }
module.exports = exports['default'];