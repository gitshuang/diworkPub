'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IS_IE = exports.getHost = exports.logout = exports.createActions = exports.createTypes = exports.mergeReducers = exports.noop = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.post = post;
exports.postFileCros = postFileCros;
exports.get = get;
exports.mapStateToProps = mapStateToProps;
exports.guid = guid;
exports.findPath = findPath;
exports.avoidSameName = avoidSameName;
exports.getContext = getContext;
exports.getStrLenSubstr = getStrLenSubstr;
exports.browserRedirect = browserRedirect;
exports.postMessageToWin = postMessageToWin;
exports.GetQueryString = GetQueryString;
exports.getNewEvent = getNewEvent;

var _reduxActions = require('redux-actions');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var noop = exports.noop = function noop() {};

var getLocaleIndex = function getLocaleIndex() {
  var currLocal = window.self === window.top ? getContext().locale : window.top.diworkContext().locale;
  var index = ["en_US", "zh_TW", "fr_FR", "de_DE", "ja_JP"].findIndex(function (value) {
    return value === currLocal;
  });
  return index;
};

var mergeReducers = exports.mergeReducers = function mergeReducers() {
  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
    reducers[_key] = arguments[_key];
  }

  return function (state, action) {
    return reducers.reduce(function (prevState, reducer) {
      return _extends(prevState, reducer(state, action));
    }, {});
  };
};

var createTypes = exports.createTypes = function createTypes() {
  for (var _len2 = arguments.length, types = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    types[_key2] = arguments[_key2];
  }

  return types.reduce(function (obj, type) {
    obj[type] = type;
    return obj;
  }, {});
};

var createActions = exports.createActions = function createActions(namespaceObj) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
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

var logout = exports.logout = function logout() {
  var _window = window,
      origin = _window.location.origin;

  window.location.href = '/logout?service=' + encodeURIComponent((origin ? origin : '') + '/');
};

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
    }
  };
  return hosts[key][process.env.NODE_ENV];
};
//ie11的window.ActiveXObject返回undefined，
var IS_IE = exports.IS_IE = !!window.ActiveXObject || "ActiveXObject" in window;

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
    function fetch(_x2, _x3) {
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

function mapStateToProps() {
  for (var _len4 = arguments.length, keys = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
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

function guid() {
  function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }
  return 'LS-' + (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function findPath(datas, childrenKey, compareKey, compareValue) {
  var paths = [];
  function loop(children) {
    for (var i = 0, l = children.length; i < l; i++) {
      var result = false;
      var child = children[i];
      paths.push(child);
      if (child[childrenKey]) {
        result = loop(child[childrenKey]);
      }
      var value = void 0;
      try {
        value = compareKey.split('.').reduce(function (obj, key) {
          return obj[key];
        }, child);
      } catch (e) {
        console.log(e);
      }
      if (value === compareValue) {
        result = true;
      }
      if (result) {
        return result;
      } else {
        paths.pop();
      }
    }
    return false;
  }
  loop(datas);
  return paths;
}

function avoidSameName(namaArr, name) {
  var reg = new RegExp('^' + name + '(\\((\\d+)\\)){0,1}$');
  var num = 0;
  namaArr.forEach(function (item) {
    if (reg.test(item)) {
      var curNum = item.match(reg)[2];
      if (curNum) {
        curNum = parseInt(curNum, 10) + 1;
        if (curNum > num) {
          num = curNum;
        }
      } else if (!num) {
        num = 1;
      }
    }
  });
  if (num) {
    return name + '(' + num + ')';
  } else {
    return name;
  }
}

function getContext() {
  if (window.diworkContext && typeof window.diworkContext === 'function') {
    return window.diworkContext();
  } else {
    return {};
  }
}

/**
 * 汉子超过3位截取，其他字符8位数
 * @param {*} str
 */
function getStrLenSubstr(str, zh_len, cn_len, sl) {
  if (!str) return "";
  var newStr = "";
  var reg = new RegExp('[\\u4E00-\\u9FFF]+', "g");
  if (reg.test(str)) {
    if (str.length == zh_len) {
      newStr = str;
    } else {
      newStr = str.length > zh_len ? str.substring(0, zh_len) + (sl ? "" : "...") : str;
    }
  } else {
    if (str.length == cn_len) {
      newStr = str;
    } else {
      newStr = str.length > cn_len ? str.substring(0, cn_len) + (sl ? "" : "...") : str;
    }
    // newStr = str.substring(0,cn_len)+(sl?"":"...");
  }
  return newStr;
}

function browserRedirect() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

  if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) //判断是否有非pc的值存在
    {
      // alert("pc");
      //没有，则显示为pc
      return "pc";
    } else {
    if (bIsIpad.length != 0) {
      return "ipad";
    }
    if (bIsIphoneOs.length != 0) {
      return "iphone os";
    }
    if (bIsMidp.length != 0) {
      return "midp";
    }
    if (bIsUc7.length != 0) {
      return "rv:1.2.3.4";
    }
    if (bIsUc.length != 0) {
      return "ucweb";
    }
    if (bIsAndroid.length != 0) {
      return "android";
    }
    if (bIsCE.length != 0) {
      return "windows ce";
    }
    if (bIsWM.length != 0) {
      return "windows mobile";
    }
    //显示对应的产品名称
  }
}

function postMessageToWin(win, data) {
  if (win && data) {
    win.postMessage(JSON.stringify(data), '*');
  }
}
// 获取location 参数
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);return null;
}

function getNewEvent(name) {
  if (IS_IE) {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, true, true, undefined);
    return evt;
  } else {
    return new Event(name, {
      bubbles: true
    });
  }
}

var _diff = function _diff(_index, _data, type) {
  var data = JSON.parse(JSON.stringify(_data));
  var loop = function loop(data) {
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === "object" && Array.isArray(data) && data.length) {
      data.forEach(function (item) {
        if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === "object" && (item.length !== 0 || Object.keys(item).length)) {
          loop(item);
        }
      });
    } else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === "object" && Object.keys(data).length) {
      // 获取 JSON VALUE  数组   [a,a1,b,c]
      var dataKeys = Object.keys(data);
      dataKeys.forEach(function (item, index) {
        var currKey = item + 'Ext' + _index;
        var currKey2 = item + _index;
        if (dataKeys.includes(currKey)) {
          var currItem = data[currKey];
          if (!currItem) {
            return;
          }
          // 判断是设置 新属性  还是读取新属性的
          if (type == "set") {
            data.TEMPORARY = data[item];
            data[item] = currItem;
          } else {
            data[currKey] = data[item];
            data[item] = data.TEMPORARY;
            delete data.TEMPORARY;
          }
        } else if (dataKeys.includes(currKey2)) {
          var _currItem = data[currKey2];
          if (!_currItem) {
            return;
          }
          if (type == "set") {
            data.TEMPORARY = data[item];
            data[item] = _currItem;
          } else {
            data[currKey2] = data[item];
            data[item] = data.TEMPORARY;
            delete data.TEMPORARY;
          }
        }
        var currData = data[item];
        if (!currData) return;
        if ((typeof currData === 'undefined' ? 'undefined' : _typeof(currData)) === "object" && (currData.length !== 0 || Object.keys(currData).length)) {
          loop(currData);
        }
      });
    }
    return data;
  };
  return loop(data);
};