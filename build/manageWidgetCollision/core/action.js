'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createActions;

var _u = require('@u');

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

var _api = require('./api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CHANGE_SIDER_STATE = _types2["default"].CHANGE_SIDER_STATE,
    UPDATE_SHADOW_CARD = _types2["default"].UPDATE_SHADOW_CARD,
    UPDATE_LAYOUT = _types2["default"].UPDATE_LAYOUT,
    UPDATE_GROUP_LIST = _types2["default"].UPDATE_GROUP_LIST,
    SET_MANAGE_LIST = _types2["default"].SET_MANAGE_LIST,
    GET_MANAGE_LIST = _types2["default"].GET_MANAGE_LIST,
    BATCH_DELECT = _types2["default"].BATCH_DELECT,
    BATCH_MOVE = _types2["default"].BATCH_MOVE,
    SELECT_GROUP_ACTIONS = _types2["default"].SELECT_GROUP_ACTIONS,
    SELECT_LIST_ACTIONS = _types2["default"].SELECT_LIST_ACTIONS,
    ADD_GROUP = _types2["default"].ADD_GROUP,
    ADD_DESK = _types2["default"].ADD_DESK,
    DELECT_GROUP = _types2["default"].DELECT_GROUP,
    RENAME_GROUP = _types2["default"].RENAME_GROUP,
    MOVE_GROUP = _types2["default"].MOVE_GROUP,
    STICK_GROUP = _types2["default"].STICK_GROUP,
    MOVE_TOP_GROUP = _types2["default"].MOVE_TOP_GROUP,
    MOVE_BOTTOM_GROUP = _types2["default"].MOVE_BOTTOM_GROUP,
    SPLIT_FOLDER = _types2["default"].SPLIT_FOLDER,
    ADD_SERVICE = _types2["default"].ADD_SERVICE,
    DELECT_SERVICE = _types2["default"].DELECT_SERVICE,
    MOVE_SERVICE = _types2["default"].MOVE_SERVICE,
    GET_ALL_SERVICES_BY_LABEL_GROUP = _types2["default"].GET_ALL_SERVICES_BY_LABEL_GROUP,
    OPEN_BATCH_MOVE = _types2["default"].OPEN_BATCH_MOVE,
    CLOSE_BATCH_MOVE = _types2["default"].CLOSE_BATCH_MOVE,
    SET_EDIT_STATE = _types2["default"].SET_EDIT_STATE,
    SET_CURR_GROUP_INDEX = _types2["default"].SET_CURR_GROUP_INDEX,
    EDIT_TITLE = _types2["default"].EDIT_TITLE,
    SET_EDITONLY_ID = _types2["default"].SET_EDITONLY_ID,
    SET_CURRENT_SELECT_WIDGET_MAP = _types2["default"].SET_CURRENT_SELECT_WIDGET_MAP,
    RETURN_DEFAULT_STATE = _types2["default"].RETURN_DEFAULT_STATE,
    SET_DRAG_INPUT_STATE = _types2["default"].SET_DRAG_INPUT_STATE,
    EMPTY_SELECT_GROUP = _types2["default"].EMPTY_SELECT_GROUP,
    GET_ALL_MENU_LIST = _types2["default"].GET_ALL_MENU_LIST,
    MOVE_SIDE_CARDS = _types2["default"].MOVE_SIDE_CARDS,
    DROP_SIDE_CARDS = _types2["default"].DROP_SIDE_CARDS,
    UPDATE_MANAGE_LIST = _types2["default"].UPDATE_MANAGE_LIST,
    DROP_SIDE_CARDS_IN_GROUP = _types2["default"].DROP_SIDE_CARDS_IN_GROUP,
    UPDATE_CHECKED_CARD_LIST = _types2["default"].UPDATE_CHECKED_CARD_LIST;


var actions = (0, _u.createActions)({
  namespace: 'managewidget'
}, (_createActions = {}, _defineProperty(_createActions, SET_MANAGE_LIST, _api.setManageList), _defineProperty(_createActions, GET_MANAGE_LIST, _api.getManageList), _defineProperty(_createActions, GET_ALL_SERVICES_BY_LABEL_GROUP, _api.getAllServicesByLabelGroup), _defineProperty(_createActions, GET_ALL_MENU_LIST, _api.getAllMenuList), _createActions), UPDATE_CHECKED_CARD_LIST, DROP_SIDE_CARDS_IN_GROUP, UPDATE_MANAGE_LIST, DROP_SIDE_CARDS, MOVE_SIDE_CARDS, CHANGE_SIDER_STATE, UPDATE_SHADOW_CARD, UPDATE_LAYOUT, UPDATE_GROUP_LIST, BATCH_DELECT, ADD_GROUP, ADD_DESK, DELECT_GROUP, BATCH_MOVE, SELECT_GROUP_ACTIONS, SELECT_LIST_ACTIONS, RENAME_GROUP, MOVE_GROUP, STICK_GROUP, MOVE_TOP_GROUP, MOVE_BOTTOM_GROUP, SPLIT_FOLDER, ADD_SERVICE, DELECT_SERVICE, MOVE_SERVICE, OPEN_BATCH_MOVE, CLOSE_BATCH_MOVE, SET_EDIT_STATE, SET_CURR_GROUP_INDEX, EDIT_TITLE, SET_EDITONLY_ID, SET_CURRENT_SELECT_WIDGET_MAP, RETURN_DEFAULT_STATE, SET_DRAG_INPUT_STATE, EMPTY_SELECT_GROUP);
exports["default"] = actions;
module.exports = exports['default'];