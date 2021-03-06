import { createActions } from '../../utils';
import types from './types';
import {
  setManageList,
  getManageList,
  getAllServicesByLabelGroup,
  getAllMenuList
} from './api';

const {
  CHANGE_SIDER_STATE,
  UPDATE_SHADOW_CARD,
  UPDATE_LAYOUT,
  UPDATE_GROUP_LIST,
  SET_MANAGE_LIST,
  GET_MANAGE_LIST,
  BATCH_DELECT,
  BATCH_MOVE,
  SELECT_GROUP_ACTIONS,
  SELECT_LIST_ACTIONS,
  ADD_GROUP,
  ADD_DESK,
  DELECT_GROUP,
  RENAME_GROUP,
  MOVE_GROUP,
  STICK_GROUP,
  MOVE_TOP_GROUP,
  MOVE_BOTTOM_GROUP,
  SPLIT_FOLDER,
  ADD_SERVICE,
  DELECT_SERVICE,
  MOVE_SERVICE,
  GET_ALL_SERVICES_BY_LABEL_GROUP,
  OPEN_BATCH_MOVE,
  CLOSE_BATCH_MOVE,
  SET_EDIT_STATE,
  SET_CURR_GROUP_INDEX,
  EDIT_TITLE,
  SET_EDITONLY_ID,
  SET_CURRENT_SELECT_WIDGET_MAP,
  RETURN_DEFAULT_STATE,
  SET_DRAG_INPUT_STATE,
  EMPTY_SELECT_GROUP,
  GET_ALL_MENU_LIST,
  MOVE_SIDE_CARDS,
  DROP_SIDE_CARDS,
  UPDATE_MANAGE_LIST,
  DROP_SIDE_CARDS_IN_GROUP,
  UPDATE_CHECKED_CARD_LIST,
} = types;

const actions = createActions(
  {
    namespace: 'managewidget',
  },
  {
    [SET_MANAGE_LIST]: setManageList,
    [GET_MANAGE_LIST]: getManageList,
    [GET_ALL_SERVICES_BY_LABEL_GROUP]: getAllServicesByLabelGroup,
    [GET_ALL_MENU_LIST]: getAllMenuList,
  },
  UPDATE_CHECKED_CARD_LIST,
  DROP_SIDE_CARDS_IN_GROUP,
  UPDATE_MANAGE_LIST,
  DROP_SIDE_CARDS,
  MOVE_SIDE_CARDS,
  CHANGE_SIDER_STATE,
  UPDATE_SHADOW_CARD,
  UPDATE_LAYOUT,
  UPDATE_GROUP_LIST,
  BATCH_DELECT,
  ADD_GROUP,
  ADD_DESK,
  DELECT_GROUP,
  BATCH_MOVE,
  SELECT_GROUP_ACTIONS,
  SELECT_LIST_ACTIONS,
  RENAME_GROUP,
  MOVE_GROUP,
  STICK_GROUP,
  MOVE_TOP_GROUP,
  MOVE_BOTTOM_GROUP,
  SPLIT_FOLDER,
  ADD_SERVICE,
  DELECT_SERVICE,
  MOVE_SERVICE,
  OPEN_BATCH_MOVE,
  CLOSE_BATCH_MOVE,
  SET_EDIT_STATE,
  SET_CURR_GROUP_INDEX,
  EDIT_TITLE,
  SET_EDITONLY_ID,
  SET_CURRENT_SELECT_WIDGET_MAP,
  RETURN_DEFAULT_STATE,
  SET_DRAG_INPUT_STATE,
  EMPTY_SELECT_GROUP,
);
export default actions;
