'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _beeBreadcrumb = require('bee-breadcrumb');

Object.keys(_beeBreadcrumb).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _beeBreadcrumb[key];
    }
  });
});
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_beeBreadcrumb)["default"];
  }
});

require('bee-breadcrumb/build/Breadcrumb.css');

require('./breadcrumb.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = exports['default'];