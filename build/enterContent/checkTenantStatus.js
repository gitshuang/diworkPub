'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function check(tenantId, loadingFunc, successFunc) {
  var xhr = new XMLHttpRequest();
  xhr.onload = loop; // eslint-disable-line
  xhr.open('get', '/manager/teamEnter/check?tenantId=' + tenantId + '&switch=true&ts=' + new Date().getTime());
  xhr.send();
  function loop() {
    if (this.status === 200) {
      var result = {
        data: false
      };
      try {
        result = JSON.parse(this.responseText);
      } catch (e) {
        console.log(e); // eslint-disable-line
      }
      if (result.data) {
        successFunc();
      } else {
        setTimeout(function () {
          loadingFunc(tenantId);
          check(tenantId, loadingFunc, successFunc);
        }, 300);
      }
    } else {
      setTimeout(function () {
        successFunc();
      }, 1000);
    }
  }
}
exports.check = check; // eslint-disable-line