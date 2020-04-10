function parseSearch(searchStr) {
  var keyValueArr = searchStr.replace("?", "").split("&");
  var res = {};
  keyValueArr.forEach(function (item) {
    var key = item.split("=")[0];
    var value = item.split("=")[1];
    res[key] = value;
  })
  return res;
}