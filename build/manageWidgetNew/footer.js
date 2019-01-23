'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('pub-comp/button');

require('./style.css');

var _style = {
  'management': 'management__style___ind3u',
  'page_home': 'page_home__style___1xxtQ',
  'um_content': 'um_content__style___WVdPG',
  'umBoxJustify': 'umBoxJustify__style___2gLN3',
  'preserve': 'preserve__style___1rCbH',
  'batchArea': 'batchArea__style___3-eiG',
  'saveArea': 'saveArea__style___3lTER',
  'um_footer': 'um_footer__style___pr77c',
  'addBtn': 'addBtn__style___26MPc',
  'addGroupBtn': 'addGroupBtn__style___3kp-Y',
  'manager_save_pop': 'manager_save_pop__style___PCRTH'
};

var _reactRedux = require('react-redux');

var _u = require('@u');

var _actions = require('store/root/manage/actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

_objectDestructuringEmpty(_actions2["default"]);

var Footer = (_dec = (0, _reactRedux.connect)((0, _u.mapStateToProps)('selectList', 'isEdit', 'isSiderDisplay', {
  namespace: 'manage'
})), _dec(_class = function (_Component) {
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
            _button.ButtonU8c,
            { onClick: batchDelectFn, disabled: selectList.length ? false : true, className: 'horizontal' },
            languagesJSON["delete"]
          ),
          _react2["default"].createElement(
            _button.ButtonU8c,
            { onClick: openGroupTo, disabled: selectList.length ? false : true, className: 'horizontal' },
            languagesJSON.moveTo
          )
        ),
        _react2["default"].createElement(
          'div',
          { className: _style.saveArea + '  horizontalParent' },
          _react2["default"].createElement(
            _button.ButtonU8cPrimary,
            { disabled: !isEdit, onClick: save, className: 'save' },
            languagesJSON.save
          ),
          _react2["default"].createElement(
            _button.ButtonU8cDefault,
            { onClick: popOpenCancel, className: 'cancel' },
            languagesJSON.cancel
          )
        )
      )
    );
  };

  return Footer;
}(_react.Component)) || _class);
exports["default"] = Footer;
module.exports = exports['default'];