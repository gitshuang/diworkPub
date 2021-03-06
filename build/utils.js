"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IS_IE = exports.getHost = exports.logout = exports.createActions = exports.createTypes = exports.mergeReducers = exports.noop = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.post = post;
exports.deleteRequest = deleteRequest;
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
exports.equals = equals;
exports.addWidthAndHeight = addWidthAndHeight;

var _reduxActions = require("redux-actions");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var noop = exports.noop = function noop() {};

var getLocaleIndex = function getLocaleIndex() {
  // const pathname = window.location.pathname;
  var lanArr = ["en_US", "zh_TW", "fr_FR", "de_DE", "ja_JP"];
  if (window.diworkContext && typeof window.diworkContext === 'function') {
    var context = getContext();
    var locale = context.locale;

    var index = lanArr.findIndex(function (value) {
      return value === locale;
    });
    return index;
  }
  if (window.managerContext) {
    var _locale = window.managerContext.locale;

    var _index2 = lanArr.findIndex(function (value) {
      return value === _locale;
    });
    return _index2;
  }
  return -1;
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
  if ((typeof namespaceObj === "undefined" ? "undefined" : _typeof(namespaceObj)) === 'object' && namespaceObj.namespace) {
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
    if ((typeof actionMap === "undefined" ? "undefined" : _typeof(actionMap)) === 'object') {
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
  // 退出之前清下tabs_data
  if (window.sessionStorage.getItem('TABS_DATA')) {
    window.sessionStorage.removeItem('TABS_DATA');
  }

  var _getContext = getContext(),
      defaultDesktop = _getContext.defaultDesktop,
      productLine = _getContext.productLine;

  if (defaultDesktop === "portal" && productLine === "diwork") {
    var ajaxUrl = getHost('u8cportal') + "/user/logOut?v=1.0";
    deleteRequest(ajaxUrl).then(function (payload) {
      window.location.href = payload.url;
    }, function (err) {
      console.log(err);
    });
  } else {
    var _window = window,
        origin = _window.location.origin;

    window.location.href = "/logout?service=" + encodeURIComponent((origin ? origin : '') + "/");
  }
};

var getHost = exports.getHost = function getHost() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'api';

  var hosts = {
    api: {
      development: process.env.HOST || '',
      daily: process.env.HOST || '',
      combine: process.env.HOST || '',
      pre: process.env.HOST || '',
      production: process.env.HOST || ''
    },
    workbench: {
      development: 'http://workbench.yyuap.com',
      combine: 'https://diwork-daily.yyuap.com',
      production: 'https://www.diwork.com'
    },
    ys: {
      development: 'http://u8c-test.yyuap.com',
      combine: 'https://u8c-daily.yyuap.com',
      pre: 'https://yonsuite-pre.diwork.com',
      production: 'https://yonsuite.diwork.com'
    },
    // 门户地址
    yzone: {
      development: 'http://web.yyuap.com:91/portal/home/index',
      combine: 'https://ec-u8c-daily.yyuap.com/portal/home/index',
      production: 'https://ec.diwork.com/portal/home/index'
    },
    // 门户地址 - ys
    yzoneYs: {
      development: 'http://web.yyuap.com:91/portal_index',
      combine: 'https://u8c-daily.yyuap.com/portal_index',
      pre: 'https://yonsuite-pre.diwork.com/portal_index',
      production: 'https://yonsuite.diwork.com/portal_index'
    },
    // 门户首页
    portalIndex: {
      development: 'http://web.yyuap.com:91',
      combine: 'https://nec-u8c-daily.yyuap.com',
      pre: 'https://nec-yonsuite-pre.diwork.com',
      production: 'https://nec.diwork.com'
    },
    portal: {
      development: 'http://web.yyuap.com:91',
      daily: 'https://ec-daily.yyuap.com',
      combine: 'https://ec-u8c-daily.yyuap.com',
      pre: 'https://ec-yonsuite-pre.diwork.com',
      production: 'https://ec.diwork.com'
    },
    // 门户请求地址
    u8cportal: {
      development: 'http://dwweb.api.yyuap.com:6062',
      daily: 'https://dwweb-api.yyuap.com',
      combine: 'https://dwweb-api-u8c-daily.yyuap.com',
      pre: "https://y3me-pre.diwork.com/portal_index",
      production: 'https://dwweb-api.diwork.com'
    },

    // 帐号 登录
    login: {
      development: 'https://idtest.yyuap.com',
      daily: "https://sso-daily.yyuap.com",
      combine: "https://u8c-sso-daily.yyuap.com",
      pre: 'https://sso-y3me-pre.diwork.com',
      production: 'https://euc.diwork.com'
    },
    // 帐号管理、注册
    euc: {
      development: 'https://idtest.yyuap.com',
      daily: "https://user-daily.yyuap.com",
      combine: "https://u8c-user-daily.yyuap.com",
      pre: 'https://user-y3me-pre.diwork.com',
      production: 'https://euc.diwork.com'
    },
    // 员工信息
    user: {
      development: 'http://hrcloud.yyuap.com',
      daily: 'https://hr-daily.yyuap.com',
      combine: 'https://hr-u8c-daily.yyuap.com',
      pre: '',
      production: 'https://hr.diwork.com'
    },
    // 应用市场
    market: {
      development: 'https://uastest.yyuap.com',
      daily: 'https://market-daily.yyuap.com',
      combine: 'https://u8cmaket-daily.yyuap.com',
      pre: 'https://market-pre.diwork.com',
      production: 'https://market.yonyoucloud.com'
    },
    // 荣耀    2
    honor: {
      development: '//wsbs.app.yyuap.com',
      daily: '//wsbs-daily.yyuap.com',
      combine: '//wsbs-daily.yyuap.com',
      pre: '',
      production: '//wsbs.diwork.com'
    },
    // 工单  
    ticket: {
      development: 'http://ticket-v2.dev.app.yyuap.com',
      daily: 'http://ticket-v2.dev.app.yyuap.com',
      combine: 'http://ticket-v2.dev.app.yyuap.com',
      pre: 'http://ticket-v2.dev.app.yyuap.com',
      production: 'https://wo.diwork.com'
    },
    // 参照
    ref: {
      development: 'http://workbench.yyuap.com',
      daily: 'https://ms-daily.yyuap.com',
      combine: 'https://u8cms-daily.yyuap.com',
      pre: 'https://ms-y3me-pre.diwork.com',
      production: 'https://ms.diwork.com'
    },
    // 参照组织
    org: {
      development: 'http://workbenchdev.yyuap.com/fe',
      daily: 'https://cdn.yonyoucloud.com/pro/diwork',
      integrate: 'https://cdn.yonyoucloud.com/pro/diwork',
      combine: 'https://cdn.yonyoucloud.com/pro/diwork',
      pre: 'https://cdn.yonyoucloud.com/pro/diwork',
      production: 'https://cdn.yonyoucloud.com/pro/diwork'
    },
    // 帮助中心
    help: {
      development: 'http://helpcenter-fe.test.app.yyuap.com',
      daily: 'https://helpcenter-daily.yyuap.com',
      combine: 'https://helpcenter-daily.yyuap.com',
      pre: 'https://helpcenter-y3me-pre.diwork.com',
      production: 'https://helpcenter-yonsuite.diwork.com'
    },
    // 我的首选 - 友互通语言设置
    lang: {
      development: 'https://uastest.yyuap.com',
      daily: 'https://u8c-apptenant-daily.yyuap.com',
      combine: 'https://u8c-apptenant-daily.yyuap.com',
      pre: '',
      production: ''
      // 门户个人信息
      // info: {
      //   production: 'https://ec.diwork.com/static/home.html#/myspeech/personInfo?target=pc',
      //   development: 'http://web.yyuap.com:91/static/home.html#/myspeech/personInfo?target=pc',
      //   daily: 'https://ec-daily.yyuap.com/static/home.html#/myspeech/personInfo?target=pc',
      //   integrate: 'https://ec-daily.yyuap.com/static/home.html#/myspeech/personInfo?target=pc',
      //   combine: 'https://ec-u8c-daily.yyuap.com/static/home.html#/myspeech/personInfo?target=pc',
      //   pre: 'https://ec-yonsuite-pre.diwork.com/static/home.html#/myspeech/personInfo?target=pc'
      // },
      // // 门户发言
      // speak: {
      //   production: 'https://ec.diwork.com/static/home.html#/myspeech/index?index=0&target=pc',
      //   development: 'http://web.yyuap.com:91/static/home.html#/myspeech/index?index=0&target=pc',
      //   daily: 'https://ec-daily.yyuap.com/static/home.html#/myspeech/index?index=0&target=pc',
      //   integrate: 'https://ec-daily.yyuap.com/static/home.html#/myspeech/index?index=0&target=pc',
      //   combine: 'https://ec-u8c-daily.yyuap.com/static/home.html#/myspeech/index?index=0&target=pc',
      //   pre: 'https://ec-yonsuite-pre.diwork.com/static/home.html#/myspeech/index?index=0&target=pc',
      // },
      // u8c 向导参数设置
      // paramsetting: {
      //   production: '',
      //   development: 'http://u8c-config-test.yyuap.com/platform/paramsSetting?optionId=common_option',
      //   daily: 'https://u8c-config-daily.yyuap.com/platform/paramsSetting?optionId=common_option',
      //   integrate: 'https://u8c-config-daily.yyuap.com/platform/paramsSetting?optionId=common_option',
      //   combine: 'https://u8c-config-daily.yyuap.com/platform/paramsSetting?optionId=common_option',
      //   pre: '',
      // },
      // u8c: {
      //   production: 'https://u8c.diwork.com',
      //   development: 'http://u8c-test.yyuap.com',
      //   daily: 'https://workbench-daily.yyuap.com',
      //   integrate: 'https://y3me-daily.yyuap.com',
      //   combine: 'https://u8c-daily.yyuap.com',
      //   pre: 'https://yonsuite-pre.diwork.com',
      // },
      //开放平台
      // platform: {
      //   production: 'https://open.diwork.com',   //diwork 正式
      //   development: 'http://open-test.app.yyuap.com',
      //   daily: 'https://open-daily.yyuap.com',   //diwork daily
      //   integrate: 'https://open-daily.yyuap.com',   //diwork daily
      //   combine: 'https://open-u8cdaliy.yonyoucloud.com', //u8cdaily
      //   pre: 'http://diwok-open-web.pre.app.yyuap.com',   //u8c 预发
      // },
      // //开发者信息路径
      // developerPath: {
      //   production: 'dpApplication.html',   //diwork 正式
      //   development: 'dpApplication.html',
      //   daily: 'dpApplication.html',   //diwork daily
      //   integrate: 'dpApplication.html',   //diwork daily
      //   combine: 'yonsuite.html#/appdev', //u8cdaily
      //   pre: 'yonsuite.html#/appdev',   //u8c 预发
      // },
      //订单查询
      // orderSearch: {
      //   development: 'http://workbench.yyuap.com',
      //   daily: 'https://workbench-daily.yyuap.com',
      //   production: 'https://www.diwork.com',
      //   combine: 'https://u8c-daily.yyuap.com',
      //   pre: 'https://y3me-pre.diwork.com',
      //   integrate: 'https://workbench-daily.yyuap.com'
      // }
      // 工单和用友云官网  u8c没有  2
      // order: {
      //   production: 'https://ticket.yonyoucloud.com',
      //   development: 'https://ticket.yonyoucloud.com',
      //   daily: 'https://ticket.yonyoucloud.com',
      //   integrate: 'https://ticket.yonyoucloud.com',
      //   combine: 'https://ticket.yonyoucloud.com',
      //   pre: '',
      // },
      // 工单和用友云官网 u8c没有  2
      // cloundyy: {
      //   production: 'https://www.yonyoucloud.com',
      //   development: 'https://cloudtest.yyuap.com',
      //   daily: 'https://www.yonyoucloud.com',
      //   integrate: 'https://www.yonyoucloud.com',
      //   combine: 'https://www.yonyoucloud.com',
      //   pre: '',
      // },
      // 空间管理
      // manageTeamEnter: {
      //   production: 'https://nec.diwork.com/static/home.html#/spaceList/joined?target=pc',
      //   development: 'http://web.yyuap.com:91/static/home.html#/spaceList/joined?target=pc',
      //   daily: 'https://ec-daily.yyuap.com/static/home.html#/spaceList/joined?target=pc',
      //   integrate: 'https://ec-daily.yyuap.com/static/home.html#/spaceList/joined?target=pc',
      //   combine: 'https://ec-u8c-daily.yyuap.com/static/home.html#/spaceList/joined?target=pc',
      //   pre: '',
      // },
      // 上传
      // upload: {
      //   production: 'https://bd.diwork.com/manager/file/upload/oss/workbench-image-path-applicationIcon',
      //   development: 'http://workbenchdev.yyuap.com/manager/file/upload/oss/workbench-image-path-applicationIcon',
      //   daily: 'http://workbenchdev.yyuap.com/manager/file/upload/oss/workbench-image-path-applicationIcon',
      //   integrate: 'http://workbenchdev.yyuap.com/manager/file/upload/oss/workbench-image-path-applicationIcon',
      //   combine: 'https://u8c-daily.com/manager/file/upload/oss/workbench-image-path-applicationIcon',
      //   pre: 'https://y3me-pre.diwork.com/manager/file/upload/oss/workbench-image-path-applicationIcon'
      // },
    } };
  return hosts[key][process.env.NODE_ENV] || "";
};
//ie11的window.ActiveXObject返回undefined，
var IS_IE = exports.IS_IE = !!window.ActiveXObject || "ActiveXObject" in window;

var fetchTools = {
  params: function params(_params) {
    try {
      return Object.keys(_params).map(function (key) {
        var param = _params[key];
        switch (typeof param === "undefined" ? "undefined" : _typeof(param)) {
          case 'object':
            param = escape(JSON.stringify(param));
            break;
          case 'undefined':
            param = '';
            break;
          default:
            break;
        }
        return key + "=" + param;
      }).join('&');
    } catch (e) {
      console.log('error in urlParams');
      return '';
    }
  },
  fetch: function (_fetch) {
    function fetch(_x2, _x3, _x4) {
      return _fetch.apply(this, arguments);
    }

    fetch.toString = function () {
      return _fetch.toString();
    };

    return fetch;
  }(function (url, options, withEc) {
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
                errorCode = _result.errorCode,
                needrelogin = _result.needrelogin;

            var _data = {};
            // 获取隔离的接口没有status,data这一项
            if (url.indexOf("/ref/diwork/iref_ctr/refInfo") > -1) {
              return Promise.resolve(result);
              // } else if (status && status !== '0' || withEc && (result.code === 0 || result.code ===100010001 || result.code === 8000030001)) { 
            } else if (status && status !== '0' || withEc && result.code === 0) {
              // withEc && result.code === 0 为了兼容友空间数据返回格式
              // 获取语种索引
              var index = getLocaleIndex();
              // 赋值_data
              if (index > -1 && (typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                _data = _diff(index + 2, data, "set");
              } else {
                _data = data;
              }
              return Promise.resolve(_data);
            } else if (needrelogin) {
              return Promise.resolve(result);
              // alert(msg);
              // logout();
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

    var withEc = arguments[2];

    var headers = withEc ? {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    } : {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'isAjax': 1
      // 判断当前登录的是portal 则增加header头
    };
    var _getContext2 = getContext(),
        defaultDesktop = _getContext2.defaultDesktop;
    // !withEc 主要是为了判断他们自己跨域请求的， 不增加判断是否工作台还是权限， 是因为权限获取不到getContext 


    if (defaultDesktop === "portal" && !withEc) {
      headers.isPortal = true;
    }
    return _extends({
      method: method.toUpperCase(),
      credentials: 'include',
      cache: 'no-cache',
      headers: headers
    }, _options);
  },
  url: function url(_url) {
    if (!_url) {
      throw new Error('has no url!');
    } else if (_url.indexOf('http') !== 0) {
      var _getContext3 = getContext(),
          defaultDesktop = _getContext3.defaultDesktop;
      // 当前如果是友空间， 则固定url   workbench.yyuap.com +


      _url = defaultDesktop === "portal" && window.location.port !== "3000" ? "" + getHost('workbench') + _url : "" + getHost() + _url;
    }
    return _url;
  }
};

function post(oriUrl) {
  var oriParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isExt = arguments[2];
  var fetch = fetchTools.fetch,
      optionsMaker = fetchTools.options,
      url = fetchTools.url;

  var data = {};
  var index = getLocaleIndex();
  // TOdo忘记后边判断是为了啥了。 先注释， isExt 当初也是为了多语言， 现在暂时换成 支持门户
  // if (index > -1 && typeof oriParams === "object" || isExt) {
  if (index > -1) {
    data = _diff(index + 2, oriParams, "get");
  } else {
    data = oriParams;
  }
  var options = optionsMaker('post', {}, isExt);
  // 当不是门户发起的请求， content-type 
  if (!isExt) {
    options.headers['Content-Type'] = 'application/json;charset=UTF-8';
  }

  try {
    // 是不是门户发起的请求， body 
    if (isExt) {
      var reset = '';
      for (var it in data) {
        reset += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
      }
      options.body = reset;
    } else {
      options.body = JSON.stringify(data);
    }
  } catch (e) {
    return Promise.reject(e);
  }
  return fetch(url(oriUrl), options, isExt);
}

function deleteRequest(oriUrl) {
  var oriParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fetch = fetchTools.fetch,
      optionsMaker = fetchTools.options,
      url = fetchTools.url;

  var options = optionsMaker('delete', {}, true);

  try {
    // 是不是门户发起的请求， body 
    var reset = '';
    for (var it in oriParams) {
      reset += encodeURIComponent(it) + '=' + encodeURIComponent(oriParams[it]) + '&';
    }
    options.body = reset;
  } catch (e) {
    return Promise.reject(e);
  }
  return fetch(url(oriUrl), options, true);
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
  var withEc = arguments[2];
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
  }
  if (data) {
    url = url + "?" + data;
  }
  var fh = url.indexOf("?") == -1 ? "?" : "&";
  url += fh + "tm=" + new Date().getTime();
  return fetch(url, options("get", {}, withEc), withEc);
}

function jsonp(options) {
  return new Promise(function (resolve, reject) {
    var callbackID = "jsonp_" + Date.now(),
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
        } else if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === 'object' && typeof key.key === 'string' && typeof key.value === 'function') {
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
  return "LS-" + (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
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
  var reg = new RegExp("^" + name + "(\\((\\d+)\\)){0,1}$");
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
    return name + "(" + num + ")";
  } else {
    return name;
  }
}

function getContext() {
  if (window.diworkContext && typeof window.diworkContext === 'function') {
    var result = window.diworkContext();
    if (result.productLine.indexOf("u8c") > -1) {
      result.productLine = "u8c";
    }
    return result;
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
  var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
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

function equals(x, y) {
  var f1 = x instanceof Object;
  var f2 = y instanceof Object;
  if (!f1 || !f2) {
    return x === y;
  }
  if (Object.keys(x).length !== Object.keys(y).length) {
    return false;
  }
  var newX = Object.keys(x);
  for (var p in newX) {
    p = newX[p];
    var a = x[p] instanceof Object;
    var b = y[p] instanceof Object;
    if (a && b) {
      var equal = equals(x[p], y[p]);
      if (!equal) {
        return equal;
      }
    } else if (x[p] != y[p]) {
      return false;
    }
  }
  return true;
}

var _diff = function _diff(_index, _data, type) {
  var data = JSON.parse(JSON.stringify(_data));
  var loop = function loop(data) {
    if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object" && Array.isArray(data) && data.length) {
      data.forEach(function (item) {
        if (item && (typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && (item.length !== 0 || Object.keys(item).length)) {
          loop(item);
        }
      });
    } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object" && Object.keys(data).length) {
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
        if ((typeof currData === "undefined" ? "undefined" : _typeof(currData)) === "object" && (currData.length !== 0 || Object.keys(currData).length)) {
          loop(currData);
        }
      });
    }
    return data;
  };
  return loop(data);
};

function addWidthAndHeight(a) {
  switch (a.size) {
    case 1:
      a.height = 1;
      a.width = 1;
      break;
    case 2:
      a.height = 1;
      a.width = 2;
      break;
    case 3:
      a.height = 2;
      a.width = 2;
      break;
    case 4:
      a.height = 1;
      a.width = 3;
      break;
    case 5:
      a.height = 2;
      a.width = 3;
      break;
    case 6:
      a.height = 1;
      a.width = 4;
      break;
    case 7:
      a.height = 2;
      a.width = 4;
      break;
    case 8:
      a.height = 2;
      a.width = 6;
      break;
    case 9:
      a.height = 4;
      a.width = 6;
      break;
    default:
      a.height = 1;
      a.width = 1;
  }
}