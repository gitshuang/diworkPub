'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _beeTabs = require('bee-tabs');

Object.keys(_beeTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _beeTabs[key];
    }
  });
});
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_beeTabs)["default"];
  }
});

require('bee-tabs/build/Tabs.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// if (window.location.origin.indexOf("u8c") > -1) {
require("./tabs_u8c.css");
// }
module.exports = exports['default'];