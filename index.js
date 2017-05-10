// Retrieves Grist data for embedding
function retrieveData(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://k0yj0ojogc.execute-api.us-east-1.amazonaws.com/test/queryData?embedId=e6I4O2O6X88J4', true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        callback(data);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null);
}

retrieveData(data => {
  console.warn('DATA', data);
  console.warn('ELEM', document.getElementById('menu'));
  document.getElementById('menu').innerHTML = data;
})
