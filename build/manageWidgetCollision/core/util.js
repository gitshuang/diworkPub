'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHost = exports.hasCardContainInGroups = exports.createActions = exports.createTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.mapStateToProps = mapStateToProps;
exports.updateAllMenuList = updateAllMenuList;
exports.findById = findById;
exports.setDefaultSelected = setDefaultSelected;
exports.guid = guid;
exports.post = post;
exports.postFileCros = postFileCros;
exports.get = get;
exports.getContext = getContext;

var _reduxActions = require('redux-actions');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var createTypes = exports.createTypes = function createTypes() {
  for (var _len = arguments.length, types = Array(_len), _key = 0; _key < _len; _key++) {
    types[_key] = arguments[_key];
  }

  return types.reduce(function (obj, type) {
    obj[type] = type;
    return obj;
  }, {});
};

var createActions = exports.createActions = function createActions(namespaceObj) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  var namespace = [];
  if ((typeof namespaceObj === 'undefined' ? 'undefined' : _typeof(namespaceObj)) === 'object' && namespaceObj.namespace) {
    var _args = args,
        _args2 = _toArray(_args),
        actionMap = _args2[0],
        identityActions = _args2.slice(1);

    namespace = namespaceObj.namespace.split('.');
    var result = {};
    var space = namespace.reduce(function (obj, name) {
      name = name.toUpperCase();
      obj[name] = {};
      return obj[name];
    }, result);
    if ((typeof actionMap === 'undefined' ? 'undefined' : _typeof(actionMap)) === 'object') {
      _extends(space, actionMap);
    } else {
      identityActions = [actionMap].concat(identityActions);
    }
    identityActions.reduce(function (obj, identity) {
      obj[identity] = undefined;
      return obj;
    }, space);
    var actions = (0, _reduxActions.createActions)(result);
    return namespace.reduce(function (action, space) {
      return action[space] ? action[space] : action;
    }, actions);
  } else {
    args = [namespaceObj].concat(args);
    return _reduxActions.createActions.apply(undefined, _toConsumableArray(args));
  }
};

function mapStateToProps() {
  for (var _len3 = arguments.length, keys = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    keys[_key3] = arguments[_key3];
  }

  if (keys.length) {
    return function (state, ownProps) {
      var rootState = state;
      var namespace = keys.slice(-1)[0].namespace;

      if (namespace) {
        namespace = namespace.split('.');
        state = namespace.reduce(function (subState, space) {
          var stateByNamespace = subState[space];
          if (!stateByNamespace) {
            stateByNamespace = subState;
          }
          return stateByNamespace;
        }, state);
      }

      return keys.reduce(function (obj, key) {
        if (typeof key === 'string') {
          obj[key] = state[key];
        } else if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object' && typeof key.key === 'string' && typeof key.value === 'function') {
          obj[key.key] = key.value(state, ownProps, rootState);
        }
        return obj;
      }, {});
    };
  } else {
    return function () {
      return {};
    };
  }
}

/**
*  拖拽到manageList中时，更改当前卡片的状态 ,用于判断是都可拖拽
*  @param {Array} allMenuList  
*  @param {Array} manageList 
*/
function updateAllMenuList(allMenuList, manageList) {
  allMenuList.forEach(function (a) {
    //第一级
    a.menuItems.forEach(function (b) {
      //第二级
      b.children.forEach(function (c) {
        //第三极
        if (c.children.length) {
          c.children.forEach(function (d) {
            if (hasCardContainInGroups(manageList, d.serviceId)) {
              d.hasBeenDragged = true;
            } else {
              d.hasBeenDragged = false;
            }
          });
        } else {
          if (hasCardContainInGroups(manageList, c.serviceId)) {
            c.hasBeenDragged = true;
          } else {
            c.hasBeenDragged = false;
          }
        }
      });
    });
  });
}

function findById(manageList, id) {
  var data = void 0;
  for (var i = 0; i < manageList.length; i++) {
    if (manageList[i].widgetId && manageList[i].widgetId === id) {
      data = manageList[i];
      break;
    } else {
      manageList[i].children && findById(manageList[i].children, id);
    }
  }
  return data;
}

function setDefaultSelected(manageList, applicationsMap) {
  manageList.forEach(function (da) {
    if (da && da.type === 3) {
      // 表示服务和应用
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
  var parentData = {},
      curIndex = 0,
      afterIndex = 0;
  if (preParentId == parentId) {
    parentData = findById(manageAllList, preParentId);
  }
  parentData.children.forEach(function (v, k) {
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
var hasCardContainInGroups = exports.hasCardContainInGroups = function hasCardContainInGroups(groups, cardID) {
  var flag = false;
  groups.forEach(function (g) {
    g.children.forEach(function (a) {
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

function guid() {
  function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }
  return 'LS-' + (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

var fetchTools = {
  params: function params(_params) {
    try {
      return Object.keys(_params).map(function (key) {
        var param = _params[key];
        switch (typeof param === 'undefined' ? 'undefined' : _typeof(param)) {
          case 'object':
            param = escape(JSON.stringify(param));
            break;
          case 'undefined':
            param = '';
            break;
          default:
            break;
        }
        return key + '=' + param;
      }).join('&');
    } catch (e) {
      console.log('error in urlParams');
      return '';
    }
  },
  fetch: function (_fetch) {
    function fetch(_x, _x2) {
      return _fetch.apply(this, arguments);
    }

    fetch.toString = function () {
      return _fetch.toString();
    };

    return fetch;
  }(function (url, options) {
    return fetch(url, options).then(function (response) {
      if (response.ok) {
        return response.text().then(function (text) {
          if (text) {
            var result = {
              status: 0,
              msg: '接口请求失败'
            };
            try {
              result = JSON.parse(text);
            } catch (e) {
              return Promise.reject(new Error('接口返回数据无法解析'));
            }
            var _result = result,
                status = _result.status,
                data = _result.data,
                msg = _result.msg,
                errorCode = _result.errorCode;

            var _data = {};
            // 获取隔离的接口没有status,data这一项
            if (url.indexOf("/ref/diwork/iref_ctr/refInfo") > -1) {
              return Promise.resolve(result);
            } else if (status && status !== '0') {
              // 获取语种索引
              var index = getLocaleIndex();
              // 赋值_data
              if (index > -1 && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === "object") {
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
  }),
  options: function options() {
    var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'get';

    var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return _extends({
      method: method.toUpperCase(),
      credentials: 'include',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'isAjax': 1
      }
    }, _options);
  },
  url: function url(_url) {
    if (!_url) {
      throw new Error('has no url!');
    } else if (_url.indexOf('http') !== 0) {
      _url = '' + getHost() + _url;
    }
    return _url;
  }
};

function post(oriUrl) {
  var oriParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isExt = arguments[2];
  var params = fetchTools.params,
      fetch = fetchTools.fetch,
      optionsMaker = fetchTools.options,
      url = fetchTools.url;
  // const data = params(oriParams);

  var data = {};
  var index = getLocaleIndex();
  if (index > -1 && (typeof oriParams === 'undefined' ? 'undefined' : _typeof(oriParams)) === "object" || isExt) {
    data = _diff(index + 2, oriParams, "get");
  } else {
    data = oriParams;
  }
  var options = optionsMaker('post');
  options.headers['Content-Type'] = 'application/json;charset=UTF-8';

  try {
    options.body = JSON.stringify(data);
  } catch (e) {
    return Promise.reject(e);
  }
  return fetch(url(oriUrl), options);
}

function postFileCros(oriUrl, file) {
  var params = fetchTools.params,
      fetch = fetchTools.fetch,
      optionsMaker = fetchTools.options,
      url = fetchTools.url;

  var options = optionsMaker('post', {
    mode: 'cors'
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

function get(oriUrl) {
  var oriParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var params = fetchTools.params,
      fetch = fetchTools.fetch,
      options = fetchTools.options,
      urlMaker = fetchTools.url;


  var data = params(oriParams);
  var url = urlMaker(oriUrl);
  // 这里是授权参照的请求接口 不需要manager
  if (oriUrl === "/ref/diwork/iref_ctr/refInfo" || oriUrl.indexOf('/ref/diwork/iref_ctr/refInfo') > -1) {
    url = oriUrl;
    var arr = data.split('&');
    var objData = {};
    for (var index = 0; index < arr.length; ++index) {
      var curr = arr[index].split('=');
      objData[curr[0]] = curr[1];
    }
    return jsonp({ url: url, data: objData });
    return false;
  }
  if (data) {
    url = url + '?' + data;
  }
  var fh = url.indexOf("?") == -1 ? "?" : "&";
  url += fh + "tm=" + new Date().getTime();
  return fetch(url, options());
}

function jsonp(options) {
  return new Promise(function (resolve, reject) {
    var callbackID = 'jsonp_' + Date.now(),
        container = document.getElementsByTagName('head')[0],
        scriptNode = document.createElement("script"),
        data = options.data || {},
        url = options.url,
        params = [];
    data["callback"] = callbackID;
    for (var key in data) {
      params.push(key + "=" + data[key]);
    }

    url += /\?/.test(url) ? '&' : '?';
    url += params.join('&');
    scriptNode.id = callbackID;
    scriptNode.src = url;
    function removeNode() {
      window[callbackID] = undefined;
      var script = document.getElementById(callbackID);
      container.removeChild(script);
    }
    scriptNode.onerror = function () {
      reject();
      removeNode();
    };
    window[callbackID] = function (response) {
      resolve(response);
      removeNode();
    };
    scriptNode.type = "text/javascript";
    try {
      container.appendChild(scriptNode);
    } catch (err) {
      reject(err);
    }
  });
}

var getHost = exports.getHost = function getHost() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'api';

  var hosts = {
    api: {
      production: process.env.HOST || '',
      development: process.env.HOST || '',
      daily: process.env.HOST || ''
    },
    yzone: {
      production: 'https://ec.diwork.com',
      development: 'http://web.yyuap.com:91',
      daily: 'https://ec-daily.yyuap.com'
    },
    manageTeamEnter: {
      production: 'https://nec.diwork.com/static/home.html#/spaceList/joined?target=pc',
      development: 'http://web.yyuap.com:91/static/home.html#/spaceList/joined?target=pc',
      daily: 'https://ec-daily.yyuap.com/static/home.html#/spaceList/joined?target=pc'
    },
    // dynamic: {
    //   production: 'https://nec.diwork.com/app/app/appredirect?appid=15',
    //   development: 'http://web.yyuap.com:91/app/app/appredirect?appid=15',
    //   daily:'https://ec-daily.yyuap.com/app/app/appredirect?appid=15',
    // },
    euc: {
      production: 'https://euc.diwork.com',
      development: 'https://idtest.yyuap.com',
      daily: "https://user-daily.yyuap.com"
    },
    user: {
      production: 'https://hr.diwork.com',
      development: 'http://hrcloud.yyuap.com',
      daily: 'https://hr-daily.yyuap.com'
    },
    market: {
      production: 'https://market.yonyoucloud.com/market/index#/shopping/orderlist',
      development: 'https://uastest.yyuap.com/market/index#/shopping/orderlist',
      daily: 'https://market-daily.yyuap.com/market/index#/shopping/orderlist'
    },
    order: {
      production: 'https://ticket.yonyoucloud.com',
      development: 'https://ticket.yonyoucloud.com',
      daily: 'https://ticket.yonyoucloud.com'
    },
    cloundyy: {
      production: 'https://www.yonyoucloud.com',
      development: 'https://cloudtest.yyuap.com',
      daily: 'https://www.yonyoucloud.com'
    },
    ref: {
      production: 'https://ms.diwork.com',
      development: 'http://workbench.yyuap.com',
      daily: 'https://ms-daily.yyuap.com'
    },
    org: {
      production: 'https://cdn.yonyoucloud.com/pro/diwork',
      development: 'http://workbenchdev.yyuap.com/fe',
      daily: 'https://cdn.yonyoucloud.com/pro/diwork'
    },
    upload: {
      production: 'https://bd.diwork.com/manager/file/upload/oss/workbench-image-path-applicationIcon',
      development: 'http://workbenchdev.yyuap.com/manager/file/upload/oss/workbench-image-path-applicationIcon',
      daily: 'http://workbenchdev.yyuap.com/manager/file/upload/oss/workbench-image-path-applicationIcon'
    },
    info: {
      production: 'https://ec.diwork.com/static/home.html#/myspeech/personInfo?target=pc',
      development: 'http://web.yyuap.com:91/static/home.html#/myspeech/personInfo?target=pc',
      daily: 'https://ec-daily.yyuap.com/static/home.html#/myspeech/personInfo?target=pc'
    },
    speak: {
      production: 'https://ec.diwork.com/static/home.html#/myspeech/index?index=0&target=pc',
      development: 'http://web.yyuap.com:91/static/home.html#/myspeech/index?index=0&target=pc',
      daily: 'https://ec-daily.yyuap.com/static/home.html#/myspeech/index?index=0&target=pc'
    },
    honor: {
      production: '//wsbs.diwork.com/pc/modules/honorZone/ph/index.html',
      development: '//wsbs.app.yyuap.com/pc/modules/honorZone/ph/index.html',
      daily: '//wsbs-daily.yyuap.com/pc/modules/honorZone/ph/index.html'
    },
    sendHonor: {
      production: '//wsbs.diwork.com/pc/modules/honorZone/send/index.html',
      development: '//wsbs.app.yyuap.com/pc/modules/honorZone/send/index.html',
      daily: '//wsbs-daily.yyuap.com/pc/modules/honorZone/send/index.html'
    },
    ticket: {
      production: 'http://wo.diwork.com/ticket/query',
      development: 'http://172.20.9.47:8000/ticket/query',
      daily: 'http://ticket.app.yyuap.com/ticket/query'
    }
  };
  return hosts[key][process.env.NODE_ENV];
};

var getLocaleIndex = function getLocaleIndex() {
  var pathname = window.location.pathname;
  var lanArr = ["en_US", "zh_TW", "fr_FR", "de_DE", "ja_JP"];

  if (pathname.length > 1) {
    return window.jDiwork && window.jDiwork.getContext(function (data) {
      var currLocal = data.locale;
      var index = lanArr.findIndex(function (value) {
        return value === currLocal;
      });
      return index;
    });
  } else {
    var currLocal = getContext().locale;
    var index = lanArr.findIndex(function (value) {
      return value === currLocal;
    });
    return index;
  }
};

function getContext() {
  if (window.diworkContext && typeof window.diworkContext === 'function') {
    return window.diworkContext();
  } else {
    return {};
  }
}