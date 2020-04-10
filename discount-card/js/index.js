
// var itemTemplate = `
//   <div class="itemcontent" onclick="storeClick(<%=id%>)">
//     <div class="logo">
//       <img src="<%=logo %>" alt="" />
//     </div>
//     <div class="right">
//       <div class="titleContent">
//         <span class="itemTitle"><%=title%></span>
//         <span class="subTitle"><%=subTitle%></span>
//       </div>
//       <div class="keyWords"><%=keyWords.join(" | ")%></div>
//       <div class="comment"><%=comment%></div>
//       <div class="tag">
//         <% tags.forEach(function(tag){%>
//           <span class="tagItem"><%=tag %></span>
//         <% }) %>
//       </div>
//     </div>
//   </div>
// `;

var itemTemplate = `
  <div class="itemcontent" onclick="storeClick(<%=id%>)">
    <div class="logo">
      <img src="<%=logo %>" alt="" />
    </div>
    <div class="right">
      <div class="titleContent">
        <span class="itemTitle"><%=title%></span>
        <span class="subTitle"><%=subTitle%></span>
      </div>
      <div class="receive-rate">
          <span class="rate-bar">
            <span class="rate-progress-bar"></span> 
          </span>
          <span class="rate-data">已领取20%</span>
        </div>
      <div class="tag">
        <% tags.forEach(function(tag){%>
          <span class="card-price">
            <span class="currency-type">￥</span>
            <span class="price">50</span>
          </span>
          <span class="tagItem"><%=tag %></span>
        <% }) %>
      </div>
    </div>
  </div>
`;

main();

function main() {
  initBanner();
  document.getElementById("type").addEventListener('click', function (e) {
    typeClick(e);
  });
  // 根据筛选类型渲染列表
  renderList('餐饮娱乐');
}

function initBanner() {
  var swiper = new Swiper('#banner', {
    loop: true,
    // allowTouchMove: false,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
  var imgs = document.querySelectorAll('#banner img');
  window._data.banner.forEach(function (item, index) {
    if (imgs[index]) {
      imgs[index].src = item;
    }
  })
}

function renderList(type) {
  var typeBtns = document.querySelectorAll("#type .btn");
  typeBtns.forEach(function (btn) {
    if (btn.innerHTML.trim() === type) {
      btn.className += " active";
    } else {
      btn.className = "btn";
    }
  })

  var dataList = [];
  window._data.stores.forEach(function (dataItem) {
    if (dataItem.type.indexOf(type) !== -1) {
      dataList.push(dataItem);
    }
  })

  var list = document.getElementById("list");
  var rawHtml = "";

  dataList.forEach(dataItem => {
    var htmlStr = ejs.render(itemTemplate, dataItem);
    rawHtml += htmlStr;
  });
  list.innerHTML = rawHtml;
}

function typeClick(e) {
  var target = e.target;
  var tarClass = target.className;
  if (tarClass === 'btn') {
    var type = target.innerHTML.trim();
    renderList(type);
  }
}

function storeClick(id) {
  window.location.href = './detail.html' + '?id=' + id;
}
