'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

require('./style.css');

var _style = {
  'page_home': 'page_home__style___1SzCo',
  'um_content': 'um_content__style___2DmPd',
  'umBoxJustify': 'umBoxJustify__style___2NeGy',
  'preserve': 'preserve__style___2tDtJ',
  'batchArea': 'batchArea__style___2tAI5',
  'saveArea': 'saveArea__style___3zQKI',
  'um_footer': 'um_footer__style___D4ujK',
  'addBtn': 'addBtn__style___2_xJA',
  'addGroupBtn': 'addGroupBtn__style___7s2Td',
  'manager_save_pop': 'manager_save_pop__style___3lEfm'
};

var _reactRedux = require('react-redux');

var _action = require('./core/action');

var _action2 = _interopRequireDefault(_action);

var _util = require('./core/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var returnDefaultState = _action2["default"].returnDefaultState,
    updateGroupList = _action2["default"].updateGroupList,
    setManageList = _action2["default"].setManageList,
    emptySelectGroup = _action2["default"].emptySelectGroup;


//import rootActions from 'store/root/actions';
//const { requestStart, requestSuccess, requestError } = rootActions;
var Footer = (_dec = (0, _reactRedux.connect)((0, _util.mapStateToProps)('manageList', 'isEdit', {
  namespace: 'managewidget'
}), {
  returnDefaultState: returnDefaultState,
  updateGroupList: updateGroupList,
  setManageList: setManageList,
  emptySelectGroup: emptySelectGroup
}), _dec(_class = function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  Footer.prototype.render = function render() {
    var _props = this.props,
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
}(_react.Component)) || _class);
exports["default"] = Footer;
module.exports = exports['default'];