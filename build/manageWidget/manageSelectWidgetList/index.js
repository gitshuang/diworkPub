'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _buttonGroup = require('../../bee/button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _button = require('../../bee/button');

var _button2 = _interopRequireDefault(_button);

var _serviceItem = require('../serviceItem');

var _serviceItem2 = _interopRequireDefault(_serviceItem);

var _searchInput = require('../../searchInput');

var _searchInput2 = _interopRequireDefault(_searchInput);

var _button3 = require('../../button');

var _utils = require('../../utils');

require('./style.css');

var _style = {
  'select_widget_list': 'select_widget_list__style___29GCK',
  'widget_left': 'widget_left__style___2PoSw',
  'widget_right': 'widget_right__style___1zoEI',
  'title': 'title__style___EVnXD',
  'searchPanel': 'searchPanel__style___2D6c1',
  'form_control': 'form_control__style___1kIWJ',
  'search_icon_con': 'search_icon_con__style___3OaXI',
  'panel': 'panel__style___30rpa',
  'panel_left': 'panel_left__style___3k5q5',
  'panel_right': 'panel_right__style___bOU63',
  'btn_type': 'btn_type__style___2i9Sz',
  'server_type': 'server_type__style___1zZ5Z',
  'footer_btn': 'footer_btn__style___3b0jb',
  'btn_active': 'btn_active__style___1KOIw',
  'u-button-group-vertical': 'u-button-group-vertical__style___UDj5X'
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var SelectWidgetList = function (_Component) {
  _inherits(SelectWidgetList, _Component);

  function SelectWidgetList(props) {
    _classCallCheck(this, SelectWidgetList);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.btnSearch = function () {
      var applications = _this.state.data.applications;
      var value = _this.state.value;

      var _applications = [];
      if (value == "") {
        _applications = applications;
      } else {
        value = value.trim();
        _applications = _this.getSearch(applications, value);
      }
      _this.setState({
        applications: _applications
      });
    };

    _this.getSearch = function (applications, value) {
      var result = [];
      applications.forEach(function (da) {
        var _name = da.applicationName || da.serviceName;
        if (_name.indexOf(value) != -1) {
          var _data2 = _extends({}, da);
          if (da.service && da.service.length > 0) {
            _data2.service = _this.getSearch(da.service, value);
          }
          result.push(_data2);
        } else {
          // TODO 在原来基础上增加 父级不对应  子集对应的方法    有点low  后续有时间改进
          if (da.service && da.service.length > 0) {
            var data = _extends({}, da);
            data.service = [];
            var flag = false;
            da.service.forEach(function (item) {
              if (item.serviceName.indexOf(value) != -1) {
                flag = true;
                data.service.push(item);
              }
            });
            if (flag) {
              result.push(data);
            }
          }
        }
      });
      return result;
    };

    _this.onChange = function (data, sele) {
      var applications = _this.state.applications;

      var selectObj = null;
      if (data.widgetTemplate.serviceType == "1") {
        //服务
        selectObj = applications.find(function (da) {
          return da.applicationId == data.applicationId;
        });
        var _service = selectObj.service.find(function (da) {
          return da.serviceId == data.serviceId;
        });
        _service.selected = sele;
      }
      if (data.widgetTemplate.serviceType == "2") {
        //应用
        selectObj = applications.find(function (da) {
          return da.applicationId == data.applicationId;
        });
        selectObj.selected = sele;
      }

      var _edit = false;
      applications.forEach(function (da, index) {
        if (da.selected == "3") {
          _edit = true;
        } else {
          if (da.service.length == 0) return;
          var _ser = da.service.find(function (_da) {
            return _da.selected == "3";
          });
          if (_ser) {
            _edit = true;
          }
        }
      });
      _this.setState(_extends({}, _this.state, {
        edit: _edit
      }));
    };

    _this.inputOnChange = function (e) {
      _this.setState({
        value: e
      });
    };

    _this.btnSave = function () {
      console.log(_this.state);
      var applications = _this.state.applications;
      var _this$props = _this.props,
          requestError = _this$props.requestError,
          requestSuccess = _this$props.requestSuccess,
          addDesk = _this$props.addDesk,
          parentId = _this$props.parentId;

      var selectedList = [];
      applications.forEach(function (da, index) {
        if (da.selected == "3") {
          selectedList.push(da);
        }
        if (da.service.length == 0) return;
        da.service.forEach(function (_da, j) {
          if (_da.selected == "3") {
            selectedList.push(_da);
          }
        });
      });
      addDesk({ dataList: selectedList, parentId: parentId });
      _this.setState({
        edit: false
      });
      _this.props.close();
    };

    _this.btnClose = function () {
      _this.props.close();
    };

    _this.btnTypeClick = function (da) {
      var labelGroups = _this.state.data.labelGroups;

      labelGroups.forEach(function (_da, i) {
        _da.labelGroupName == da.labelGroupName ? _da.active = true : _da.active = false;
      });
      _this.setState(_extends({}, _this.state));
    };

    _this.onBtnOnclick = function (_data) {
      var applicationsMap = _this.props.applicationsMap;
      var _this$state = _this.state,
          data = _this$state.data,
          labelGroups = _this$state.data.labelGroups;

      var _applications = [];
      var activeLabelGroups = labelGroups.find(function (da) {
        return da.active;
      });
      activeLabelGroups.labels.forEach(function (da) {
        da.active = false;
      });
      if (_data.labelId == "all") {
        var allLabel = activeLabelGroups.labels.find(function (da) {
          return da.labelId == "all";
        });
        allLabel.active = true;
        _applications = data.applications;
      } else {
        var labels = activeLabelGroups.labels.find(function (da) {
          return da.labelId == _data.labelId;
        });
        labels.active = true;
        labels.appIds.forEach(function (appId) {
          _applications.push(applicationsMap[appId]);
        });
      }
      _this.setState(_extends({}, _this.state, {
        applications: _applications
      }));
    };

    _this.btnUp = function (data) {
      _this.state.applications.forEach(function (da, i) {
        if (da.applicationId == data.applicationId) {
          da.extend = data.extend ? false : true;
        }
      });
      _this.setState(_extends({}, _this.state.applications));
    };

    _this.onKeyup = function (e) {
      if (e.keyCode === 13) {
        _this.btnSearch(e);
      }
    };

    _this.state = {
      data: {}, //接口全部数据
      applications: [],
      value: "",
      edit: false
    };
    return _this;
  }

  SelectWidgetList.prototype.componentDidMount = function componentDidMount() {
    this.getServices();
  };

  SelectWidgetList.prototype.getServices = function getServices() {
    var _this2 = this;

    var _props = this.props,
        requestError = _props.requestError,
        requestSuccess = _props.requestSuccess,
        getAllServicesByLabelGroup = _props.getAllServicesByLabelGroup,
        languagesJSON = _props.languagesJSON;

    getAllServicesByLabelGroup().then(function (_ref) {
      var error = _ref.error,
          payload = _ref.payload;

      if (error) {
        requestError(payload);
      }
      var labelGroups = payload.labelGroups;

      labelGroups.forEach(function (da, i) {
        i === 0 ? da.active = true : da.active = false;
        var labels = da.labels;

        labels.splice(0, 0, { labelName: languagesJSON.all, labelId: "all", active: true });
      });
      _this2.setState({
        data: payload,
        applications: payload.applications
      });
      requestSuccess();
    });
  };

  //输入框修改data数据源


  SelectWidgetList.prototype.render = function render() {
    var _this3 = this;

    var _state = this.state,
        _state$data$labelGrou = _state.data.labelGroups,
        labelGroups = _state$data$labelGrou === undefined ? [] : _state$data$labelGrou,
        applications = _state.applications;
    var languagesJSON = this.props.languagesJSON;

    var btns = [];
    labelGroups.forEach(function (_ref2, i) {
      var active = _ref2.active,
          labels = _ref2.labels;

      if (active) {
        labels.forEach(function (da, j) {
          btns.push(_react2["default"].createElement(
            _button2["default"],
            { key: 'button_li_' + da.labelId + '-' + i + '-' + j, shape: 'border',
              className: da.active ? 'active' : '', onClick: function onClick() {
                _this3.onBtnOnclick(da);
              } },
            '\xA0\xA0\xA0\xA0\xA0',
            da.labelName
          ));
        });
      }
    });
    var list = [];
    applications.forEach(function (item, i) {
      var service = item.service,
          _item$service = item.service,
          id = _item$service.serviceId,
          name = _item$service.serviceName,
          serviceType = item.widgetTemplate.serviceType;

      var _b = item.extend;
      if (serviceType == "2") {
        item.serviceId = item.applicationId;
        item.serviceName = item.applicationName;
        item.serviceType = "2"; //2应用
        item.serviceIcon = item.applicationIcon;
        item.serviceCode = item.applicationCode;
        item.widgettemplateId = item.widgetTemplate.widgettemplateId;
        // item.extend = false;
        list.push(_react2["default"].createElement(_serviceItem2["default"], { key: 'widget-title-' + i + '-' + item.serviceId, onChange: _this3.onChange, data: item,
          packUp: _this3.btnUp, arrow: service && service.length > 0 ? true : false,
          languagesJSON: languagesJSON }));
      }
      item.service.forEach(function (da, i) {
        da.extend = _b;
        list.push(_react2["default"].createElement(_serviceItem2["default"], { key: 'widget-' + (0, _utils.guid)(), onChange: _this3.onChange, data: da,
          languagesJSON: languagesJSON }));
      });
    });
    return _react2["default"].createElement(
      'div',
      { className: _style.select_widget_list },
      _react2["default"].createElement(
        'div',
        { className: _style.widget_right },
        _react2["default"].createElement(_searchInput2["default"], {
          onKeyDown: this.onKeyup,
          onChange: this.inputOnChange,
          keywords: this.state.value,
          onClick: this.btnSearch,
          placeholder: languagesJSON.searchContent,
          btnText: languagesJSON.search
        }),
        _react2["default"].createElement(
          'div',
          { className: _style.panel },
          _react2["default"].createElement(
            'div',
            { className: _style.panel_left },
            _react2["default"].createElement(
              'div',
              { className: _style.btn_type },
              _react2["default"].createElement(
                _buttonGroup2["default"],
                null,
                labelGroups.map(function (da, i) {
                  return _react2["default"].createElement(
                    _button2["default"],
                    { key: 'type-' + i, className: da.active ? _style.btn_active : null,
                      shape: 'border', onClick: function onClick() {
                        _this3.btnTypeClick(da);
                      } },
                    da.labelGroupName
                  );
                })
              )
            ),
            _react2["default"].createElement(
              'div',
              { className: _style.server_type },
              _react2["default"].createElement(
                _buttonGroup2["default"],
                { vertical: true },
                btns
              )
            )
          ),
          _react2["default"].createElement(
            'div',
            { className: _style.panel_right },
            _react2["default"].createElement(
              'div',
              null,
              list
            )
          )
        ),
        _react2["default"].createElement(
          'div',
          { className: _style.footer_btn },
          this.state.edit ? _react2["default"].createElement(
            _button3.ButtonBrand,
            { onClick: this.btnSave },
            languagesJSON.add
          ) : _react2["default"].createElement(
            _button3.ButtonBrand,
            { disabled: true },
            languagesJSON.add
          ),
          _react2["default"].createElement(
            _button3.ButtonDefaultAlpha,
            { onClick: this.btnClose },
            languagesJSON.cancel
          )
        )
      )
    );
  };

  return SelectWidgetList;
}(_react.Component);

exports["default"] = SelectWidgetList;
module.exports = exports['default'];