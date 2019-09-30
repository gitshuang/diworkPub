'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _beeCheckbox = require('bee-checkbox');

Object.keys(_beeCheckbox).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _beeCheckbox[key];
        }
    });
});
Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_beeCheckbox)["default"];
    }
});

require('bee-checkbox/build/Checkbox.css');

require('bee-icon/build/Icon.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 审查完毕， 
if (window.location.origin.indexOf("u8c") > -1) {
    require("./checkbox.css");
} else {
    require("./checkbox.css");
}
module.exports = exports['default'];