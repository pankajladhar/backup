export default class Model {
  httpGet(url, params) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url + "?" + params);
      xhr.send();
      xhr.onload = function() {
        if (this.status >= 200 && this.status < 300) {
          resolve(this.response);
        } else {
          reject(this.statusText);
        }
      };
      xhr.onerror = function() {
        reject(this.statusText);
      };
    });
  }

  toRequestParams() {
    return Object.keys(this).map((key) => { 
      return encodeURIComponent(key) + "=" + encodeURIComponent(this[key]);
    }).join('&');
  }
}
