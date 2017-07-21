/* global Vue, Basket */

const BASKET_ID = 'bNOG2S9QTL6XC';

const loadDataUsingVue = function(tableId, elementId) {
  let basket = new Basket(BASKET_ID);
  let app = new Vue({
    el: '#' + elementId,
    data: {
      gristData: null
    }
  });

  basket.getTable(tableId)
  .then(data => {
  	app.gristData = data;
  });
};
