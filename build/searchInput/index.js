'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formControl = require('../bee/form-control');

var _formControl2 = _interopRequireDefault(_formControl);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./index.css');

var _index = {
  'searchPanel': 'searchPanel__index___29hZQ',
  'serviceSearch': 'serviceSearch__index___1tqoZ',
  'search_icon_con': 'search_icon_con__index___9tRAU'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var SearchInput = function (_Component) {
  _inherits(SearchInput, _Component);

  function SearchInput(props) {
    _classCallCheck(this, SearchInput);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {};
    return _this;
  }

  SearchInput.prototype.componentDidMount = function componentDidMount() {};

  SearchInput.prototype.render = function render() {
    var _props = this.props,
        keywords = _props.keywords,
        onKeyDown = _props.onKeyDown,
        onChange = _props.onChange,
        onClick = _props.onClick,
        classname = _props.classname;

    return _react2["default"].createElement(
      'div',
      { className: _index.searchPanel + ' ' + classname },
      _react2["default"].createElement(_formControl2["default"], {
        className: _index.serviceSearch,
        placeholder: '\u641C\u7D22\u4EBA\u5458\u4FE1\u606F\u3001\u670D\u52A1\u53CA\u5176\u4ED6\u5185\u5BB9',
        value: keywords,
        onKeyDown: onKeyDown,
        onChange: onChange
      }),
      _react2["default"].createElement(
        'div',
        { className: _index.search_icon_con, onClick: onClick },
        _react2["default"].createElement(
          'b',
          null,
          '|'
        ),
        _react2["default"].createElement(_icon2["default"], { type: 'search' }),
        _react2["default"].createElement(
          'span',
          null,
          '\u641C\u7D22'
        )
      )
    );
  };

  return SearchInput;
}(_react.Component);

SearchInput.propTypes = {
  keywords: _propTypes2["default"].string,
  onKeyDown: _propTypes2["default"].func,
  onChange: _propTypes2["default"].func,
  onClick: _propTypes2["default"].func,
  classname: _propTypes2["default"].string
};
SearchInput.defaultProps = {
  keywords: '',
  onKeyDown: function onKeyDown() {},
  onChange: function onChange() {},
  onClick: function onClick() {},
  classname: ''
};
exports["default"] = SearchInput;
module.exports = exports['default'];