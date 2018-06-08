'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeProgressBar = require('bee-progress-bar');

var _beeProgressBar2 = _interopRequireDefault(_beeProgressBar);

require('bee-progress-bar/build/ProgressBar.css');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style.css');

var _style = {
    'progress_wrap': 'progress_wrap__style___3jdj3',
    'progress_loading': 'progress_loading__style___2VLp_',
    'progress_load_icon': 'progress_load_icon__style___2FrmF',
    'opacityShow': 'opacityShow__style___1_rJb',
    'opacityHidden': 'opacityHidden__style___2kVQY',
    'loading_desc': 'loading_desc__style___ODeVU'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Progress = function (_Component) {
    _inherits(Progress, _Component);

    function Progress(props) {
        _classCallCheck(this, Progress);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.componentDidMount = function () {
            var _this$props = _this.props,
                tenantId = _this$props.tenantId,
                startFlag = _this$props.startFlag;

            startFlag && _this.goToLoading();
        };

        _this.componentWillReceiveProps = function (nextProps) {
            var tenantId = nextProps.tenantId,
                startFlag = nextProps.startFlag;

            startFlag && _this.goToLoading(tenantId);
        };

        _this.goToLoading = function (tenantId) {
            var tenantIdVal = tenantId || _this.props.tenantId;
            var _this$props2 = _this.props,
                check = _this$props2.check,
                idRequire = _this$props2.idRequire;
            //必须第一个接口返回id就立刻执行加载

            if (idRequire && (tenantIdVal == '' || tenantIdVal == undefined)) {
                return false;
            };
            var self = _this;
            var perValue = Math.floor(Math.random() * 10 + 1); //输出1～10之间的随机整数
            if (self.state.processValue < 90) {
                self.setState({ processValue: self.state.processValue + perValue });
            }
            check(tenantIdVal, _this.loadingFunc, _this.successFunc);
        };

        _this.loadingFunc = function () {
            var _this$props3 = _this.props,
                check = _this$props3.check,
                tenantId = _this$props3.tenantId,
                idRequire = _this$props3.idRequire;

            var perValue = Math.floor(Math.random() * 10 + 1); //输出1～10之间的随机整数
            var self = _this;
            if (_this.state.processValue < 90) {
                _this.setState({ processValue: _this.state.processValue + perValue });
            }
            //当不需要第一个接口返回id立刻执行加载
            if (!idRequire && _this.state.processValue < 100) {
                setTimeout(function () {
                    check(tenantId, self.loadingFunc, self.successFunc);
                }, 500);
            }
        };

        _this.successFunc = function () {
            var tenantId = _this.props.tenantId;

            _beeProgressBar2["default"].done();
            _this.setState({ processValue: 100 }); //直接结束
            setTimeout(function () {
                window.location.href = "/?tenantId=" + tenantId + "&switch=true";
            }, 600);
        };

        _this.state = {
            processValue: 0 //默认开始的是0
        };
        return _this;
    }

    Progress.prototype.render = function render() {
        var loadingDesc = this.props.loadingDesc;

        var now = this.state.processValue;
        return _react2["default"].createElement(
            'div',
            { className: _style.progress_wrap },
            _react2["default"].createElement(_beeProgressBar2["default"], { className: _style.progress_loading, striped: false, now: now, label: now + '%' }),
            _react2["default"].createElement(_icon2["default"], { className: _style.progress_load_icon, type: 'loading' }),
            _react2["default"].createElement(
                'span',
                { className: _style.loading_desc },
                loadingDesc ? loadingDesc : '正在配置信息…'
            )
        );
    };

    return Progress;
}(_react.Component);

exports["default"] = Progress;
module.exports = exports['default'];