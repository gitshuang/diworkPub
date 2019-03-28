'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _backend = require('./backend');

var _backend2 = _interopRequireDefault(_backend);

var _reactDnd = require('react-dnd');

var _sider = require('./sider');

var _sider2 = _interopRequireDefault(_sider);

require('./style.css');

var _style = {
  'management': 'management__style___1VA_-',
  'page_home': 'page_home__style___1TGg1',
  'um_content': 'um_content__style___2jxWf',
  'umBoxJustify': 'umBoxJustify__style___38ezk',
  'preserve': 'preserve__style___18zdq',
  'batchArea': 'batchArea__style___2Kez5',
  'saveArea': 'saveArea__style___mmapj',
  'um_footer': 'um_footer__style___2zW7n',
  'addBtn': 'addBtn__style___dv2TN',
  'addGroupBtn': 'addGroupBtn__style___3pqek',
  'manager_save_pop': 'manager_save_pop__style___XqtTi'
};

var _customDragLayer = require('./dragLayer/customDragLayer.js');

var _customDragLayer2 = _interopRequireDefault(_customDragLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

// import Simple from './Simple'

var CreateManageModule = function (_Component) {
  _inherits(CreateManageModule, _Component);

  function CreateManageModule(props) {
    _classCallCheck(this, CreateManageModule);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  CreateManageModule.prototype.render = function render() {
    return _react2["default"].createElement(
      'div',
      { className: _style.management },
      _react2["default"].createElement(_sider2["default"], { languagesJSON: this.props.languagesJSON, roleId: this.props.roleId }),
      _react2["default"].createElement(_content2["default"], this.props),
      _react2["default"].createElement(_customDragLayer2["default"], null)
    );
  };

  return CreateManageModule;
}(_react.Component);

exports["default"] = (0, _reactDnd.DragDropContext)(_backend2["default"])(CreateManageModule);
module.exports = exports['default'];