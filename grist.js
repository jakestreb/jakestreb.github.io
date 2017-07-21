/* global Vue */

function GristAPI() {

}

GristAPI.prototype.loadData = function(embedId, callback) {
  var xhr = new XMLHttpRequest();
  var url = 'https://k0yj0ojogc.execute-api.us-east-1.amazonaws.com/test/queryData';
  xhr.open('GET', url + '?embedId=' + embedId, true);
  xhr.onload = function (e) {
    console.warn('loaded', e);
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        callback(data.filter(data => data.rowId > 0));
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null);
};

GristAPI.prototype.loadDataUsingVue = function(embedId, elementId) {
  var app = new Vue({
    el: '#' + elementId,
    data: {
      gristData: null
    }
  });
  this.loadData(embedId, data => {
    app.gristData = data;
  });
};

var grist = new GristAPI();
