import { createActions as createReduxActions } from 'redux-actions';
export const createTypes = (...types) => {
    return types.reduce((obj, type) => {
      obj[type] = type;
      return obj;
    }, {});
  };
  
  export const createActions = (namespaceObj, ...args) => {
    let namespace = [];
    if (typeof namespaceObj === 'object' && namespaceObj.namespace) {
      let [actionMap, ...identityActions] = args;
      namespace = namespaceObj.namespace.split('.');
      const result = {};
      const space = namespace.reduce((obj, name) => {
        name = name.toUpperCase();
        obj[name] = {};
        return obj[name];
      }, result);
      if (typeof actionMap === 'object') {
        Object.assign(space, actionMap);
      } else {
        identityActions = [actionMap].concat(identityActions);
      }
      identityActions.reduce((obj, identity) => {
        obj[identity] = undefined;
        return obj;
      }, space);
      const actions = createReduxActions(result);
      return namespace.reduce((action, space) => {
        return action[space] ? action[space] : action;
      }, actions);
    } else {
      args = [namespaceObj].concat(args);
      return createReduxActions(...args);
    }
  }


  export function mapStateToProps(...keys) {
    if (keys.length) {
      return (state, ownProps) => {
        const rootState = state;
        let { namespace } = keys.slice(-1)[0];
        if (namespace) {
          namespace = namespace.split('.');
          state = namespace.reduce(
            (subState, space) => {
              let stateByNamespace = subState[space];
              if (!stateByNamespace) {
                stateByNamespace = subState;
              }
              return stateByNamespace;
            },
            state,
          );
        }
  
        return keys.reduce((obj, key) => {
          if (typeof key === 'string') {
            obj[key] = state[key];
          } else if (
            typeof key === 'object' &&
            typeof key.key === 'string' &&
            typeof key.value === 'function'
          ) {
            obj[key.key] = key.value(state, ownProps, rootState);
          }
          return obj;
        }, {});
      };
    } else {
      return () => ({});
    }
  }


  /**
 *  拖拽到manageList中时，更改当前卡片的状态 ,用于判断是都可拖拽
 *  @param {Array} allMenuList  
 *  @param {Array} manageList 
 */
export function updateAllMenuList(allMenuList,manageList){ 
  allMenuList.forEach(a=>{ //第一级
      a.menuItems.forEach(b=>{  //第二级
         b.children.forEach(c=>{//第三极
             if(c.children.length){
                 c.children.forEach(d=>{
                 if(hasCardContainInGroups(manageList,d.serviceId)){
                      d.hasBeenDragged = true;
                 }else{
                  d.hasBeenDragged = false;
                 }
                 })
             }else{
                 if(hasCardContainInGroups(manageList,c.serviceId)){
                  c.hasBeenDragged = true;
              }else{
                  c.hasBeenDragged = false;
                 }
                 
             }
        })
     })
  })
}



export function findById(manageList, id) {
  let data;
  for (let i = 0; i < manageList.length; i++) {
      if (manageList[i].widgetId && manageList[i].widgetId === id) {
          data = manageList[i];
          break;
      } else {
          manageList[i].children && findById(manageList[i].children, id);
      }
  }
  return data;
}

export function setDefaultSelected(manageList, applicationsMap) {
  manageList.forEach((da) => {
      if (da && da.type === 3) { // 表示服务和应用
          if (applicationsMap[da.serviceId]) {
              applicationsMap[da.serviceId].selected = '1';
          }
      } else if (da.children && da.children != 0) {
          setDefaultSelected(da.children, applicationsMap);
      }
  });
}

function isSameParent(preParentId, parentId) {
  return preParentId == parentId;
}
function compareIndex(manageAllList, id, afterId, preParentId, parentId) {
  let parentData = {},
      curIndex = 0,
      afterIndex = 0;
  if (preParentId == parentId) {
      parentData = findById(manageAllList, preParentId);
  }
  parentData.children.forEach((v, k) => {
      if (v.widgetId == id) {
          curIndex = k;
      }
      if (v.widgetId == afterId) {
          afterIndex = k;
      }
  });
  return curIndex < afterIndex;
}
/**
* 判断所有分组内是否有某卡片
* @param {Array} groups
* @param {String} cardID
* @returns {Boolean}
*/
export const hasCardContainInGroups = (groups, cardID) => {
  let flag = false;
  groups.forEach(g => {
    g.children.forEach(a => {
          if (a.widgetId === cardID) {
              flag = true;
              return false;
          }
      });
      if (flag) {
          return false;
      }
  });
  return flag;
};


export function guid() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return `LS-${(S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4())}`;
}

const fetchTools = {
  params(params) {
    try {
      return Object.keys(params).map((key) => {
        let param = params[key];
        switch (typeof param) {
          case 'object':
            param = escape(JSON.stringify(param));
            break;
          case 'undefined':
            param = '';
            break;
          default:
            break;
        }
        return `${key}=${param}`;
      }).join('&');
    } catch (e) {
      console.log('error in urlParams');
      return '';
    }
  },
  fetch(url, options) {
    return fetch(url, options).then((response) => {
      if (response.ok) {
        return response.text().then((text) => {
          if (text) {
            let result = {
              status: 0,
              msg: '接口请求失败',
            };
            try {
              result = JSON.parse(text);
            } catch (e) {
              return Promise.reject(new Error('接口返回数据无法解析'));
            }
            const { status, data, msg, errorCode } = result;
            let _data = {};
            // 获取隔离的接口没有status,data这一项
            if ((url.indexOf("/ref/diwork/iref_ctr/refInfo") > -1)) {
              return Promise.resolve(result);
            } else if (status && status !== '0') {
              // 获取语种索引
              const index = getLocaleIndex();
              // 赋值_data
              if (index > -1 && typeof data === "object") {
                _data = _diff(index + 2, data, "set");
              } else {
                _data = data;
              }
              return Promise.resolve(_data);
            } else if (errorCode) {
              switch (errorCode) {
                case '000001':
                  logout();
                  break;
                default:
                  break;
              }
            }
            return Promise.reject(msg);
          }
          return Promise.reject(new Error('接口未返回数据'));
        });
      }
      return Promise.reject(new Error('请求失败'));
    });
  },
  options(method = 'get', options = {}) {
    return {
      method: method.toUpperCase(),
      credentials: 'include',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'isAjax': 1,
      },
      ...options,
    };
  },
  url(url) {
    if (!url) {
      throw new Error('has no url!');
    } else if (url.indexOf('http') !== 0) {
      url = `${getHost()}${url}`;
    }
    return url;
  },
};



export function post(oriUrl, oriParams = {}, isExt) {
  const {
    params,
    fetch,
    options: optionsMaker,
    url,
  } = fetchTools;
  // const data = params(oriParams);
  let data = {};
  const index = getLocaleIndex();
  if (index > -1 && typeof oriParams === "object" || isExt) {
    data = _diff(index + 2, oriParams, "get");
  } else {
    data = oriParams;
  }
  const options = optionsMaker('post');
  options.headers['Content-Type'] = 'application/json;charset=UTF-8';

  try {
    options.body = JSON.stringify(data);
  } catch (e) {
    return Promise.reject(e);
  }
  return fetch(url(oriUrl), options);
}

export function postFileCros(oriUrl, file) {
  const {
    params,
    fetch,
    options: optionsMaker,
    url,
  } = fetchTools;
  const options = optionsMaker('post', {
    mode: 'cors',
  });
  delete options.headers;
  try {
    options.body = file;
  } catch (e) {
    return Promise.reject(e);
  }
  console.log(options);
  return fetch(url(oriUrl), options);
}

export function get(oriUrl, oriParams = {}) {
  const {
    params,
    fetch,
    options,
    url: urlMaker,
  } = fetchTools;

  const data = params(oriParams);
  let url = urlMaker(oriUrl);
  // 这里是授权参照的请求接口 不需要manager
  if (oriUrl === "/ref/diwork/iref_ctr/refInfo" || oriUrl.indexOf('/ref/diwork/iref_ctr/refInfo') > -1) {
    url = oriUrl;
    let arr = data.split('&');
    let objData = {};
    for (let index = 0; index < arr.length; ++index) {
      let curr = arr[index].split('=');
      objData[curr[0]] = curr[1];
    }
    return jsonp({ url, data: objData });
    return false;

  }
  if (data) {
    url = `${url}?${data}`;
  }
  let fh = url.indexOf("?") == -1 ? "?" : "&";
  url += fh + "tm=" + new Date().getTime();
  return fetch(url, options());
}

function jsonp(options) {
  return new Promise((resolve, reject) => {
    let callbackID = `jsonp_${Date.now()}`,
      container = document.getElementsByTagName('head')[0],
      scriptNode = document.createElement("script"),
      data = options.data || {},
      url = options.url,
      params = [];
    data["callback"] = callbackID
    for (let key in data) {
      params.push(key + "=" + data[key]);
    }

    url += (/\?/.test(url)) ? '&' : '?';
    url += params.join('&');
    scriptNode.id = callbackID;
    scriptNode.src = url;
    function removeNode() {
      window[callbackID] = undefined;
      let script = document.getElementById(callbackID)
      container.removeChild(script)
    }
    scriptNode.onerror = function () {
      reject();
      removeNode()
    }
    window[callbackID] = function (response) {
      resolve(response);
      removeNode()
    }
    scriptNode.type = "text/javascript";
    try {
      container.appendChild(scriptNode)
    } catch (err) {
      reject(err)
    }
  })
}

export const getHost = (key = 'api') => {
  const hosts = {
    api: {
      production: process.env.HOST || '',
      development: process.env.HOST || '',
      daily: process.env.HOST || '',
    },
    yzone: {
      production: 'https://ec.diwork.com',
      development: 'http://web.yyuap.com:91',
      daily: 'https://ec-daily.yyuap.com',
    },
    manageTeamEnter: {
      production: 'https://nec.diwork.com/static/home.html#/spaceList/joined?target=pc',
      development: 'http://web.yyuap.com:91/static/home.html#/spaceList/joined?target=pc',
      daily: 'https://ec-daily.yyuap.com/static/home.html#/spaceList/joined?target=pc',
    },
    // dynamic: {
    //   production: 'https://nec.diwork.com/app/app/appredirect?appid=15',
    //   development: 'http://web.yyuap.com:91/app/app/appredirect?appid=15',
    //   daily:'https://ec-daily.yyuap.com/app/app/appredirect?appid=15',
    // },
    euc: {
      production: 'https://euc.diwork.com',
      development: 'https://idtest.yyuap.com',
      daily: "https://user-daily.yyuap.com",
    },
    user: {
      production: 'https://hr.diwork.com',
      development: 'http://hrcloud.yyuap.com',
      daily: 'https://hr-daily.yyuap.com',
    },
    market: {
      production: 'https://market.yonyoucloud.com/market/index#/shopping/orderlist',
      development: 'https://uastest.yyuap.com/market/index#/shopping/orderlist',
      daily: 'https://market-daily.yyuap.com/market/index#/shopping/orderlist',
    },
    order: {
      production: 'https://ticket.yonyoucloud.com',
      development: 'https://ticket.yonyoucloud.com',
      daily: 'https://ticket.yonyoucloud.com',
    },
    cloundyy: {
      production: 'https://www.yonyoucloud.com',
      development: 'https://cloudtest.yyuap.com',
      daily: 'https://www.yonyoucloud.com',
    },
    ref: {
      production: 'https://ms.diwork.com',
      development: 'http://workbench.yyuap.com',
      daily: 'https://ms-daily.yyuap.com',
    },
    org: {
      production: 'https://cdn.yonyoucloud.com/pro/diwork',
      development: 'http://workbenchdev.yyuap.com/fe',
      daily: 'https://cdn.yonyoucloud.com/pro/diwork',
    },
    upload: {
      production: 'https://bd.diwork.com/manager/file/upload/oss/workbench-image-path-applicationIcon',
      development: 'http://workbenchdev.yyuap.com/manager/file/upload/oss/workbench-image-path-applicationIcon',
      daily: 'http://workbenchdev.yyuap.com/manager/file/upload/oss/workbench-image-path-applicationIcon',
    },
    info: {
      production: 'https://ec.diwork.com/static/home.html#/myspeech/personInfo?target=pc',
      development: 'http://web.yyuap.com:91/static/home.html#/myspeech/personInfo?target=pc',
      daily: 'https://ec-daily.yyuap.com/static/home.html#/myspeech/personInfo?target=pc',
    },
    speak: {
      production: 'https://ec.diwork.com/static/home.html#/myspeech/index?index=0&target=pc',
      development: 'http://web.yyuap.com:91/static/home.html#/myspeech/index?index=0&target=pc',
      daily: 'https://ec-daily.yyuap.com/static/home.html#/myspeech/index?index=0&target=pc',
    },
    honor: {
      production: '//wsbs.diwork.com/pc/modules/honorZone/ph/index.html',
      development: '//wsbs.app.yyuap.com/pc/modules/honorZone/ph/index.html',
      daily: '//wsbs-daily.yyuap.com/pc/modules/honorZone/ph/index.html',
    },
    sendHonor: {
      production: '//wsbs.diwork.com/pc/modules/honorZone/send/index.html',
      development: '//wsbs.app.yyuap.com/pc/modules/honorZone/send/index.html',
      daily: '//wsbs-daily.yyuap.com/pc/modules/honorZone/send/index.html',
    },
    ticket: {
      production: 'http://wo.diwork.com/ticket/query',
      development: 'http://172.20.9.47:8000/ticket/query',
      daily: 'http://ticket.app.yyuap.com/ticket/query',
    }
  };
  return hosts[key][process.env.NODE_ENV];
};

const getLocaleIndex = () => {
  const pathname = window.location.pathname;
  const lanArr = ["en_US", "zh_TW", "fr_FR", "de_DE", "ja_JP"];
  
  if (pathname.length > 1) {
    return window.jDiwork && window.jDiwork.getContext((data) => {
      const currLocal = data.locale;
      const index = lanArr.findIndex(value => {
        return value === currLocal;
      });
      return index;
    });
  } else {
    const currLocal = getContext().locale;
    const index = lanArr.findIndex(value => {
      return value === currLocal;
    });
    return index;
  }
}

export function getContext() {
  if (window.diworkContext && typeof window.diworkContext === 'function') {
    return window.diworkContext();
  } else {
    return {};
  }
}