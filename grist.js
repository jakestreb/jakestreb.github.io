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

// function menuItem(name, desc, price) {
//   return name ? `<div class="mb">
//       <h4>${name}</h4>
//       <p>${desc || ''}</p>
//       <p>\$${price}</p>
//     </div>` : '';
// }

// retrieveData(menuItems => {
//   menuItems.forEach((item, i) => {
//     let type = item.Type === 'Appetizer' ? 'appetizers' :
//       (item.Type === 'Dessert' ? 'desserts' : 'entrees');
//     let side = (i % 2) ? 'left' : 'right';
//     document.getElementById(`${side}-${type}`).innerHTML +=
//       menuItem(item.Item, item.Description, item.Price);
//   });
// })

var grist = new GristAPI();
