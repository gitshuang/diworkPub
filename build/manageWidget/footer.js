'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

require('./style.css');

var _style = {
  'page_home': 'page_home__style___vsQOe',
  'um_content': 'um_content__style___3a8jv',
  'umBoxJustify': 'umBoxJustify__style___2tN2v',
  'preserve': 'preserve__style___1CXeY',
  'batchArea': 'batchArea__style___1mhxk',
  'saveArea': 'saveArea__style___20m3j',
  'um_footer': 'um_footer__style___3cr-t',
  'addBtn': 'addBtn__style___3zZN2',
  'addGroupBtn': 'addGroupBtn__style___3tnOQ',
  'manager_save_pop': 'manager_save_pop__style___2tUW_'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Footer = (_temp = _class = function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  Footer.prototype.render = function render() {
    var _props = this.props,
        batchDelectFn = _props.batchDelectFn,
        selectList = _props.selectList,
        openGroupTo = _props.openGroupTo,
        isEdit = _props.isEdit,
        save = _props.save,
        popOpenCancel = _props.popOpenCancel,
        languagesJSON = _props.languagesJSON;


    return _react2["default"].createElement(
      'div',
      { className: _style.um_footer },
      _react2["default"].createElement(
        'div',
        { className: _style.umBoxJustify },
        _react2["default"].createElement(
          'div',
          { className: _style.batchArea + '  horizontalParent' },
          _react2["default"].createElement(
            _button.ButtonDefaultLine,
            { onClick: this.props.batchDelectFn, disabled: selectList.length ? false : true, className: 'horizontal' },
            languagesJSON["delete"]
          ),
          _react2["default"].createElement(
            _button.ButtonDefaultLine,
            { onClick: this.props.openGroupTo, disabled: selectList.length ? false : true },
            languagesJSON.moveTo
          )
        ),
        _react2["default"].createElement(
          'div',
          { className: _style.saveArea + '  horizontalParent' },
          _react2["default"].createElement(
            _button.ButtonBrand,
            { disabled: !isEdit, onClick: this.props.save },
            languagesJSON.save
          ),
          _react2["default"].createElement(
            _button.ButtonDefaultLine,
            { onClick: this.props.popOpenCancel },
            languagesJSON.cancel
          )
        )
      )
    );
  };

  return Footer;
}(_react.Component), _class.defaultProps = {}, _temp);
exports["default"] = Footer;
module.exports = exports['default'];