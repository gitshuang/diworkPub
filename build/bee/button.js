'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _beeButton = require('bee-button');

Object.keys(_beeButton).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _beeButton[key];
        }
    });
});
Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_beeButton)["default"];
    }
});

require('bee-button/build/Button.css');

var _ = require('..utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (window.location.origin.indexOf("u8c") > -1) {
    require("./button_u8c.css");
} else {
    require("./button.css");
}
module.exports = exports['default'];