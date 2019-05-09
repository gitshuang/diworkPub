import { get, post } from '../core/util';
//import { get, post } from '@u';

export const setManageList = list => post('/desktop/update', list);
export const getManageList = (manageListUrl) => {
    return get(manageListUrl);
}

export const getAllServicesByLabelGroup = serviceName => get(`/service/getAllServicesByLabelGroup?serviceName=${serviceName}`);
export const getAllMenuList = (menuListUrl) => {    ///menubar/v2/get4Edit
    return get(menuListUrl); // eslint-disable-line
}
