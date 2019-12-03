'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

require('./index.css');

var sizes = {
  'md': 'md__index___3HmlR'
};

require('./style.css');

var types = {
  'icon-Set-up': 'icon-Set-up__style___1J5iR',
  'icon-move-upward': 'icon-move-upward__style___2DjZL',
  'icon-home-black': 'icon-home-black__style___2e_1H',
  'icon-move-down': 'icon-move-down__style___o_7wi',
  'icon-news': 'icon-news__style___m4L8N',
  'icon-More': 'icon-More__style___h3MRO',
  'icon-account-management': 'icon-account-management__style___1-vh6',
  'icon-cancellation': 'icon-cancellation__style___1tDsy',
  'icon-language': 'icon-language__style___3_7uy',
  'icon-History': 'icon-History__style___1WDyE',
  'icon-Tree-plus-sign': 'icon-Tree-plus-sign__style___1gwJz',
  'icon-Tree-minus-sign': 'icon-Tree-minus-sign__style___Hf4U1',
  'icon-Friends-space': 'icon-Friends-space__style___24yj2',
  'icon-staff-solid': 'icon-staff-solid__style___3cFfZ',
  'icon-icon-table': 'icon-icon-table__style___1H6b9',
  'icon-icon-pie': 'icon-icon-pie__style___3XRSn',
  'icon-icon-line': 'icon-icon-line__style___CqNte',
  'icon-icon-card': 'icon-icon-card__style___1up4K',
  'icon-icon-bar': 'icon-icon-bar__style___3PM-Z',
  'icon-was-service-monitoring': 'icon-was-service-monitoring__style___3hO9Q',
  'icon-screen-projection': 'icon-screen-projection__style___12rMl',
  'icon-request-error': 'icon-request-error__style___VB8qy',
  'icon-probe-downloading': 'icon-probe-downloading__style___3bSMM',
  'icon-presentation': 'icon-presentation__style___1leze',
  'icon-page-analysis': 'icon-page-analysis__style___3EOO3',
  'icon-js-error': 'icon-js-error__style___1DC7K',
  'icon-collapse': 'icon-collapse__style___2umdu',
  'icon-business-operation-check-error': 'icon-business-operation-check-error__style___1cJT5',
  'icon-anr': 'icon-anr__style___3XxaA',
  'icon-apache': 'icon-apache__style___3b7Jm',
  'icon-alarm-message': 'icon-alarm-message__style___P3D7v',
  'icon-alarm-management': 'icon-alarm-management__style___3IuHW',
  'icon-plane': 'icon-plane__style___3xxjx',
  'icon-display': 'icon-display__style___1o7qZ',
  'icon-home': 'icon-home__style___3PJ6I',
  'icon-download': 'icon-download__style___2e-Yy',
  'icon-uploading': 'icon-uploading__style___fGFLj',
  'icon-yy-clud': 'icon-yy-clud__style___2dko3',
  'icon-add-friends': 'icon-add-friends__style___37oXp',
  'icon-analyze': 'icon-analyze__style___-AS0W',
  'icon-application': 'icon-application__style___SD3CF',
  'icon-bad': 'icon-bad__style___16pRg',
  'icon-credit-card': 'icon-credit-card__style___3mnER',
  'icon-bill': 'icon-bill__style___3Vmpl',
  'icon-business': 'icon-business__style___3cypH',
  'icon-calendar': 'icon-calendar__style___3CMFS',
  'icon-card': 'icon-card__style___WHzgZ',
  'icon-chat': 'icon-chat__style___wfiGH',
  'icon-check': 'icon-check__style___PVdaD',
  'icon-clock': 'icon-clock__style___3JTnu',
  'icon-price': 'icon-price__style___1Axl9',
  'icon-hide': 'icon-hide__style___PQKBr',
  'icon-comment': 'icon-comment__style___3ox8J',
  'icon-computer': 'icon-computer__style___311xS',
  'icon-configuration': 'icon-configuration__style___2u_Jx',
  'icon-conserve': 'icon-conserve__style___1K3Lm',
  'icon-delete-friend': 'icon-delete-friend__style___HTm4b',
  'icon-document': 'icon-document__style___3I2zQ',
  'icon-e-mail': 'icon-e-mail__style___1MYEe',
  'icon-expense': 'icon-expense__style___2aMki',
  'icon-derivation': 'icon-derivation__style___2ie21',
  'icon-brief-case': 'icon-brief-case__style___8uA6Q',
  'icon-hard-disk': 'icon-hard-disk__style___3suFj',
  'icon-information': 'icon-information__style___3yEQ7',
  'icon-instrument-2': 'icon-instrument-2__style___rWiyT',
  'icon-instrument-3': 'icon-instrument-3__style___1FcVv',
  'icon-instrument': 'icon-instrument__style___2Yu9q',
  'icon-integral': 'icon-integral__style___1psmY',
  'icon-favorite': 'icon-favorite__style___1kUsA',
  'icon-chaining': 'icon-chaining__style___ukY4q',
  'icon-location': 'icon-location__style___3falT',
  'icon-lock': 'icon-lock__style___1hUGR',
  'icon-love': 'icon-love__style___3eKAn',
  'icon-message': 'icon-message__style___3gxZS',
  'icon-navigation': 'icon-navigation__style___3gia2',
  'icon-notification': 'icon-notification__style___2rxwj',
  'icon-pad': 'icon-pad__style___3cz_c',
  'icon-copyreader': 'icon-copyreader__style___mk8iU',
  'icon-expression': 'icon-expression__style___2UxIV',
  'icon-expression-2': 'icon-expression-2__style___3kFVn',
  'icon-personal-details': 'icon-personal-details__style___14Rf5',
  'icon-phone': 'icon-phone__style___1jAyO',
  'icon-picture': 'icon-picture__style___37u3B',
  'icon-pin-2': 'icon-pin-2__style___1x2dB',
  'icon-pin': 'icon-pin__style___3XMCx',
  'icon-praise': 'icon-praise__style___1l5UJ',
  'icon-print-2': 'icon-print-2__style___2a8A0',
  'icon-print': 'icon-print__style___11OFN',
  'icon-record': 'icon-record__style___Jbmfq',
  'icon-report': 'icon-report__style___2D7gs',
  'icon-search': 'icon-search__style___1IekA',
  'icon-send': 'icon-send__style___3aQW4',
  'icon-server': 'icon-server__style___3Nt15',
  'icon-service': 'icon-service__style___27J6k',
  'icon-setting': 'icon-setting__style___5edHI',
  'icon-settle-account': 'icon-settle-account__style___3fQ2w',
  'icon-share': 'icon-share__style___zcU_c',
  'icon-shrink': 'icon-shrink__style___tdOuE',
  'icon-speediness': 'icon-speediness__style___1pI5c',
  'icon-staff': 'icon-staff__style___22pLq',
  'icon-group': 'icon-group__style___2uZ4o',
  'icon-toolbox': 'icon-toolbox__style___-3aE0',
  'icon-return': 'icon-return__style___2CiW_',
  'icon-wallet': 'icon-wallet__style___36vbF',
  'icon-enlargement': 'icon-enlargement__style___2ahhz',
  'icon-loan': 'icon-loan__style___2_gLH',
  'icon-add-files': 'icon-add-files__style___1g_QI',
  'icon-dustbin': 'icon-dustbin__style___1gMiC',
  'icon-add': 'icon-add__style___1lVo9',
  'icon-add2': 'icon-add2__style___3_m3L',
  'icon-alarm': 'icon-alarm__style___2jcHc',
  'icon-back': 'icon-back__style___9kVke',
  'icon-back2': 'icon-back2__style___zXwjT',
  'icon-back3': 'icon-back3__style___29QEG',
  'icon-blank-page': 'icon-blank-page__style___3Tejb',
  'icon-calculator': 'icon-calculator__style___1EGUj',
  'icon-clock-in': 'icon-clock-in__style___3X9jo',
  'icon-cloud': 'icon-cloud__style___3lGx8',
  'icon-correct': 'icon-correct__style___3hsa3',
  'icon-delete-files': 'icon-delete-files__style___Vux0k',
  'icon-delete': 'icon-delete__style___2itCX',
  'icon-download2': 'icon-download2__style___2Tv3W',
  'icon-error': 'icon-error__style___3Hjm_',
  'icon-error2': 'icon-error2__style___2DdaT',
  'icon-forward': 'icon-forward__style___27kLj',
  'icon-forward2': 'icon-forward2__style___xigTc',
  'icon-Internet': 'icon-Internet__style___2lrqj',
  'icon-Internet2': 'icon-Internet2__style___1vgdt',
  'icon-loading': 'icon-loading__style___jrT-j',
  'icon-more': 'icon-more__style___2DUuD',
  'icon-notification2': 'icon-notification2__style___2wzOT',
  'icon-personal-center': 'icon-personal-center__style___16W4f',
  'icon-pull-down': 'icon-pull-down__style___33NfR',
  'icon-reading': 'icon-reading__style___18Yim',
  'icon-refresh': 'icon-refresh__style___2BC9k',
  'icon-refresh2': 'icon-refresh2__style___3wuW2',
  'icon-refresh3': 'icon-refresh3__style___30c7h',
  'icon-tabulation': 'icon-tabulation__style___3e2HB',
  'icon-upward': 'icon-upward__style___2S-hL',
  'icon-Yoyo-Filled': 'icon-Yoyo-Filled__style___3eJrl',
  'icon-Yoyo-Line': 'icon-Yoyo-Line__style___2qRwl',
  'icon-airplane-mode': 'icon-airplane-mode__style___n223E',
  'icon-target': 'icon-target__style___ONuAD',
  'icon-taxi': 'icon-taxi__style___ePJui',
  'icon-charge-up': 'icon-charge-up__style___HGCw-',
  'icon-currency-conversion': 'icon-currency-conversion__style___34aaO',
  'icon-dynamics': 'icon-dynamics__style___DhcvN',
  'icon-error3': 'icon-error3__style___1hXgX',
  'icon-excel': 'icon-excel__style___2AqDP',
  'icon-glory': 'icon-glory__style___3SV_6',
  'icon-pdf': 'icon-pdf__style___24-B9',
  'icon-application-management': 'icon-application-management__style___6uFag',
  'icon-ppt': 'icon-ppt__style___1ioww',
  'icon-vote': 'icon-vote__style___s09DT',
  'icon-wallet2': 'icon-wallet2__style___3dRLS',
  'icon-word': 'icon-word__style___1ThpF',
  'icon-application-management2': 'icon-application-management2__style___1L0WM',
  'icon-application-management3': 'icon-application-management3__style___30D2G',
  'icon-close': 'icon-close__style___2mNKB',
  'icon-life-buoy': 'icon-life-buoy__style___jkLzY',
  'icon-message-management': 'icon-message-management__style___28k6l',
  'icon-message-management2': 'icon-message-management2__style___1BJ8i',
  'icon-role-management-2': 'icon-role-management-2__style___14Mu5',
  'icon-role-management': 'icon-role-management__style___35Gil',
  'icon-close2': 'icon-close2__style___3z8Tb',
  'icon-pin2': 'icon-pin2__style___3tMAE',
  'icon-copy': 'icon-copy__style___bBTbn',
  'icon-cancel': 'icon-cancel__style___gDtun',
  'icon-right': 'icon-right__style___2IBH_',
  'icon-archive': 'icon-archive__style___1D6rg',
  'icon-authorise': 'icon-authorise__style___2Wqtt',
  'icon-default': 'icon-default__style___4n_Jb',
  'icon-exit': 'icon-exit__style___aTNbQ',
  'icon-job-duty': 'icon-job-duty__style___1I5Lx',
  'icon-job-grade': 'icon-job-grade__style___2Du-g',
  'icon-material-classification': 'icon-material-classification__style___3aadL',
  'icon-position': 'icon-position__style___1e-SQ',
  'icon-reference-customization': 'icon-reference-customization__style___mwtpf',
  'icon-error4': 'icon-error4__style___1qw0a',
  'icon-help-information': 'icon-help-information__style___3qzwW',
  'icon-notice': 'icon-notice__style___1TwTr',
  'icon-application-management4': 'icon-application-management4__style___3weOj',
  'icon-authority-management': 'icon-authority-management__style___1d0fm',
  'icon-availability-monitoring': 'icon-availability-monitoring__style___2K8oV',
  'icon-business-operation-analysis': 'icon-business-operation-analysis__style___2nMio',
  'icon-error-monitoring': 'icon-error-monitoring__style___ex_5b',
  'icon-mysql-analysis': 'icon-mysql-analysis__style___3Nepb',
  'icon-oracle-analysis': 'icon-oracle-analysis__style___eX1Ej',
  'icon-overview': 'icon-overview__style___G-5RW',
  'icon-parameter-management': 'icon-parameter-management__style___165ZE',
  'icon-performance-monitoring': 'icon-performance-monitoring__style___1Ifrn',
  'icon-regional-analysis': 'icon-regional-analysis__style___3gswp',
  'icon-sqlserver-analysis': 'icon-sqlserver-analysis__style___3foR7',
  'icon-tenant-information': 'icon-tenant-information__style___SroCN',
  'icon-tenant-management': 'icon-tenant-management__style___1axbw',
  'icon-terminal-analysis': 'icon-terminal-analysis__style___jqieF',
  'icon-transaction-analysis': 'icon-transaction-analysis__style___2qQgt',
  'icon-user-analysis': 'icon-user-analysis__style___1t3J0',
  'icon-user-management': 'icon-user-management__style___37vHu',
  'icon-java-service': 'icon-java-service__style___3EzUv',
  'icon-probe-management': 'icon-probe-management__style___3HLU_',
  'icon-select': 'icon-select__style___3q7tD',
  'icon-sql-analysis': 'icon-sql-analysis__style___zU6_U',
  'icon-target-management': 'icon-target-management__style___3ziKE',
  'icon-topology': 'icon-topology__style___1mTVG',
  'icon-board': 'icon-board__style___1gOH1',
  'icon-master': 'icon-master__style___2eBdM',
  'icon-presentation2': 'icon-presentation2__style___33Efr',
  'icon-accumulation-fund': 'icon-accumulation-fund__style___w3t2D',
  'icon-address-book': 'icon-address-book__style___3Hrxa',
  'icon-already': 'icon-already__style___3Kc6d',
  'icon-approval': 'icon-approval__style___V7jD0',
  'icon-attendance-center': 'icon-attendance-center__style___3IuNd',
  'icon-call': 'icon-call__style___39z7Q',
  'icon-call2': 'icon-call2__style___2D4CM',
  'icon-care': 'icon-care__style___1523O',
  'icon-change': 'icon-change__style___2tJ12',
  'icon-check-salary': 'icon-check-salary__style___1lrz4',
  'icon-check-social-security': 'icon-check-social-security__style___2o29o',
  'icon-cloudy': 'icon-cloudy__style___1JXlF',
  'icon-employee': 'icon-employee__style___qauSj',
  'icon-entry-map': 'icon-entry-map__style___PEMNh',
  'icon-FAQ': 'icon-FAQ__style___3RpbR',
  'icon-financing': 'icon-financing__style___JkKF7',
  'icon-firm-introduction': 'icon-firm-introduction__style___3OvRU',
  'icon-HR-calendar': 'icon-HR-calendar__style___2Ueme',
  'icon-HR-guide': 'icon-HR-guide__style___ywHQh',
  'icon-increase-n-decrease': 'icon-increase-n-decrease__style___11KFI',
  'icon-information2': 'icon-information2__style___uI6gQ',
  'icon-leave': 'icon-leave__style___mEKHp',
  'icon-my-application': 'icon-my-application__style___2bNq8',
  'icon-need': 'icon-need__style___2gZoW',
  'icon-overtime': 'icon-overtime__style___2BROZ',
  'icon-performance': 'icon-performance__style___2kXT1',
  'icon-promotion': 'icon-promotion__style___1Dn7K',
  'icon-prove': 'icon-prove__style___3x4A4',
  'icon-qualifications': 'icon-qualifications__style___2LJAL',
  'icon-questionnaire': 'icon-questionnaire__style___3MfKy',
  'icon-recommendation': 'icon-recommendation__style___9d5Yu',
  'icon-resume': 'icon-resume__style___3oyO2',
  'icon-scan': 'icon-scan__style___2Zavn',
  'icon-social-security': 'icon-social-security__style___3ibWk',
  'icon-train': 'icon-train__style___31a3A',
  'icon-vacation': 'icon-vacation__style___eFGMH',
  'icon-cloudy-night': 'icon-cloudy-night__style____4qjX',
  'icon-cloudy2': 'icon-cloudy2__style___2ii2j',
  'icon-hail': 'icon-hail__style___3CquT',
  'icon-haze': 'icon-haze__style___2QB53',
  'icon-night': 'icon-night__style___1L5aP',
  'icon-overcast': 'icon-overcast__style___3pMxS',
  'icon-rain': 'icon-rain__style___zYvzS',
  'icon-sandstorm': 'icon-sandstorm__style___Bz1JE',
  'icon-sleet': 'icon-sleet__style___2qlkI',
  'icon-snow': 'icon-snow__style___2MJv-',
  'icon-sunny': 'icon-sunny__style___2NTDI',
  'icon-thunder': 'icon-thunder__style___1nm_A',
  'icon-typhoon': 'icon-typhoon__style___1ltdI',
  'icon-wind': 'icon-wind__style___6o-zI',
  'icon-succeed': 'icon-succeed__style___p1MPD',
  'icon-screen-2': 'icon-screen-2__style___2whSm',
  'icon-screen': 'icon-screen__style___2_7-R',
  'icon-error5': 'icon-error5__style___S1tyO',
  'icon-Determine': 'icon-Determine__style___pf-k4',
  'icon-Face-recognition': 'icon-Face-recognition__style___12iN6',
  'icon-Face-recognition-2': 'icon-Face-recognition-2__style___2BJZ0',
  'icon-classification': 'icon-classification__style___3t8Dq',
  'icon-classification-2': 'icon-classification-2__style___3LZ6t',
  'icon-updata-load': 'icon-updata-load__style___3Uh69',
  'icon-Help-document': 'icon-Help-document__style___3Kvn-',
  'icon-Overview': 'icon-Overview__style___6XpPL',
  'icon-title': 'icon-title__style___1bWCO',
  'icon-paragraph': 'icon-paragraph__style___19EJc',
  'icon-one-to-two': 'icon-one-to-two__style___27JaO',
  'icon-three-bisection': 'icon-three-bisection__style___1_oVB',
  'icon-picture2': 'icon-picture2__style___2Ig4-',
  'icon-words': 'icon-words__style___3-lX6',
  'icon-two-to-one': 'icon-two-to-one__style___1kUtU',
  'icon-a-column': 'icon-a-column__style___1fxfk',
  'icon-two-column': 'icon-two-column__style___2cBXT'
}; //icomonn字体库

require('./font/iconfont.css');

var fonts = {
  'icon-wenjianjia': 'icon-wenjianjia__iconfont___2DQcb',
  'icon-shangyi': 'icon-shangyi__iconfont___l6RuZ',
  'icon-xiayi': 'icon-xiayi__iconfont___1M0ic',
  'icon-morendenglu': 'icon-morendenglu__iconfont___2Tv-D',
  'icon-time': 'icon-time__iconfont___1Ll2R',
  'icon-shuzhankai': 'icon-shuzhankai__iconfont___27lXV',
  'icon-shushouqi': 'icon-shushouqi__iconfont___2eZjD',
  'icon-bangzhu': 'icon-bangzhu__iconfont___Lxjdl',
  'icon-riqi': 'icon-riqi__iconfont___1pS3V'
}; // iconfont字体

var propTypes = {
  type: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  style: _propTypes2["default"].object,
  font: _propTypes2["default"].string
};
var defaultProps = {
  className: '',
  type: '',
  size: 'md',
  font: ''
};

function Icon(props) {
  var type = props.type,
      className = props.className,
      size = props.size,
      font = props.font,
      ret = _objectWithoutProperties(props, ['type', 'className', 'size', 'font']);

  var sizeClassName = sizes[size] || '';
  var typeClassName = font ? fonts['icon-' + font] : types['icon-' + type] || '';
  return _react2["default"].createElement('i', _extends({
    className: 'iconfont ' + (font ? 'u8ciconfont' : 'diworkiconfont') + ' ' + typeClassName + ' ' + sizeClassName + ' ' + className
  }, ret));
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

exports["default"] = Icon;
module.exports = exports['default'];