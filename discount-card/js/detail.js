var detailTelate = `
  <div class="topContainer">  
    <div class="top" >
      <div class="logo">
        <img src="<%=logo %>" alt="" />
      </div>
      <div class="right">
        <div class="titleContent">
          <span class="itemTitle"><%=title%></span>
          <span class="subTitle"><%=subTitle%></span>
        </div>
        <div class="keyWords"><%=keyWords.join(" | ")%></div>
      </div>
    </div>
    <div class="descItem">
      <span class="addr"></span>
      <span class="descContent"></span>
    </div>
    <div class="descItem">
      <span class="phone"></span>
      <span class="descContent"></span>
    </div>
  </div>
`;
main();

function main() {
  var search = parseSearch(location.search);
  var detailData = getData(search.id);
  console.log(detailData)
  // 根据筛选类型渲染列表

  // renderDetail(detailData);
}

function renderDetail(data) {
  var detail = document.getElementById("detail");
  console.log(data)
  var rawHtml = ejs.render(detailTelate, data);
  detail.innerHTML = rawHtml;
}

function getData(id) {
  var stores = window._data.stores;
  for (var i = 0; i < stores.length; i++) {
    if (stores[i].id == id) {
      return stores[i];
    }
  }
  return {}
}