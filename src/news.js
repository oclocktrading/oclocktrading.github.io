$(document).ready(function() {
  return GetPosts();
});
function GetPosts() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8888/news/",
    dataType: "json",
    success: function(data) {
      let results = "";
      $.each(data.posts, i => {
        results += `
  <div class="swiper-slide">
      <div class="crumina-module crumina-case-item" data-mh="case-item">
          <a href="1534755499011-1534406320658-1534340813951-team2.png" class="case-item__thumb js-zoom-image">
              <img style="width: 220px; height: 320px;" src="${
                data.posts[i].images[0].url
              }" alt="case">
          </a>

          <div class="square-colored bg-product-blue"></div>
          <div class="case-item-content">
              <h5 class="title">${data.posts[i].title}</h5>
              <a href="/post/o-clock-general-trading" class="more-arrow white">
                  <span>Read more</span>
                  <div class="btn-next">
                      <svg class="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlink:href="#utouch-icon-arrow-right-1"></use></svg>
                      <svg class="utouch-icon utouch-icon-arrow-right1"><use xlink:href="#utouch-icon-arrow-right1"></use></svg>
                  </div>
              </a>
          </div>
      </div>
  </div>`;
      });
      $("#posts").html(results);
    }
  });
}
