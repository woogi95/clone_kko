window.addEventListener("load", function () {
  // api 주소 : /apis/news.json 을 request(호출)
  const NEWS_DATA_URL = "/apis/news.json";
  // 연산처리 : html 만들기
  fetch(NEWS_DATA_URL)
    .then(function (response) {
      // console.log("뉴스", response);
      const result = response.json();
      return result;
    })
    .then(function (result) {
      // console.log("뉴스결과", result);
      let htmlNews = "";
      for (let i = 0; i < 3; i++) {
        const obj = result[i];
        const tag = `
        <a href="result${obj.link}" class="thum">
            <div class="thum-img">
                        <img src="/images/${obj.imgpath}" alt="${obj.category}" />
            </div>
            <div class="thum-cate" >
                <img src="/images/icon/${obj.icon}" alt="${obj.category}" />
                <span style="color:${obj.txtcolor}">${obj.category}</span>
            </div>
            <h5 class="thum-title" >
                ${obj.title}
            </h5>
            <span class="thum-date">${obj.day}</span>
        </a>`;

        // console.log(tag);
        // 모든 hrml 글자 하나로 합치기
        htmlNews += tag;
      }
      // console.log(htmlNews);
      //   html 출력하기
      const newsTag = document.querySelector("#news-api");
      // console.log(newsTag);
      newsTag.innerHTML = htmlNews;
    })
    .catch(function (error) {});
});
