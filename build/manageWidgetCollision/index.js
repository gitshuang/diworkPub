'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _wrapper = require('./wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _index = require('./core/index');

var _index2 = _interopRequireDefault(_index);

var _reactRedux = require('react-redux');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var CreateManageModule = function (_Component) {
    _inherits(CreateManageModule, _Component);

    function CreateManageModule(props) {
        _classCallCheck(this, CreateManageModule);

        return _possibleConstructorReturn(this, _Component.call(this, props));
    }

    CreateManageModule.prototype.render = function render() {
        return _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(
                _reactRedux.Provider,
                { store: _index2["default"] },
                _react2["default"].createElement(
                    'div',
                    null,
                    _react2["default"].createElement(_wrapper2["default"], _extends({}, this.props, { trigger: _utils.trigger, on: _utils.on }))
                )
            )
        );
    };

    return CreateManageModule;
}(_react.Component);

exports["default"] = CreateManageModule;
module.exports = exports['default'];