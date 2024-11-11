window.addEventListener("load", function () {
  const POST_DATA_URL = "/apis/crew.json";
  fetch(POST_DATA_URL)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      let htmlPost = "";
      //   a 태그만 만들어서 배치하기
      let htmlAtaglist = "";
      for (let i = 0; i < result.length; i++) {
        // 현재 실행되는 순서 0,1,2,3
        // console.log("i", i);
        const obj = result[i];
        htmlAtaglist += `
        <a href="${obj.link}" class="thum">
                    <div class="thum-img">
                      <img src="./images/${obj.imgpath}" alt="뉴스" />
                    </div>
                    <div class="thum-cate">
                      <img src="./images/icon/${obj.icon}" alt="llms" />
                      <span style="color:${obj.txtcolor}">${obj.category}</span>
                    </div>
                    <h5 class="thum-title">
                    ${obj.title}
                    </h5>
                    <span class="thum-date">${obj.day}</span>
                  </a>`;

        let postData = "";
        // 3개씩 배치하는 div 형태
        // i가 0일때 예외처리 하는 코드
        if ((i + 1) % 3 == 0) {
          //   console.log("list div 만들어");
          postData = `<div class="list">${htmlAtaglist}</div>`;
          //   3개를 다 채웠다. 그렇다면 다시 만들자.
          //  a 태그 목록만 다시 만들기 위해 비우자
          htmlAtaglist = "";
        } else if (i == result.length - 1) {
          postData = `<div class="list">${htmlAtaglist}</div>`;
          //   console.log(postData);
          htmlAtaglist = "";
        }

        htmlPost += postData;
      }
      //   console.log(htmlPost);
      const postTag = document.querySelector("#list-post");
      postTag.innerHTML = htmlPost;
    })
    .catch(function () {});
});
