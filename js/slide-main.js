window.addEventListener("load", function () {
  const VISUAL_DATA_URL = "/apis/main.json";
  fetch(VISUAL_DATA_URL)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      let htmlVisual = "";
      // 변경 : 4라는 숫자를 .length 즉 길이로 바꿧다.
      for (let i = 0; i < result.length; i++) {
        const obj = result[i];
        // 각 세부 html 글자 만들기
        // 변경 : 지금의 내용은 문법이 아님
        // 변경 : 지금 변경되는 내용은 프로그래머가 생각을 표현하고 문제 해결 시도
        const tag = `
        
     <div class="swiper-slide" data-pc="${result[i].pc}" data-mb="${result[i].pc}">
                  <a href="${obj.url}">
                    <img src="./images/${obj.pic}" alt="배너이미지" />
                  </a>
                  <div class="slide-title">
                  ${obj.title}
                  </div>
                </div>   
     `;
        htmlVisual += tag;
      }
      const visualTag = document.querySelector("#visual-api");
      visualTag.innerHTML = htmlVisual;

      const slideList = document.querySelectorAll(
        ".visual-slide .swiper-wrapper .swiper-slide"
      );

      // console.log("innerHtml 이후", slideList);
      // 이후 다시 , 키핑
      slideList.forEach(function (aaa) {
        // console.log(aaa);
      });
      // 추가 : 현재 pc 화면인지 아닌지를 먼저 구분한다.
      // 추가 : 현재 어떤 상태인지를 먼저 저장해 둔다.
      let windowState = "PC";
      const windowWidth = window.innerWidth;
      // console.log(windowWidth);
      // 조건에 따라서 버전확인
      if (windowWidth > 1024) {
        // console.log("PC 버전");
        if (windowState != "PC") {
        }
      } else {
        // console.log("MB 버전");
        if (windowState != "MB") {
          windowState = "MB";
        }
      }
    });

  // 추가 : 현재 pc 화면인지 아닌지를 먼저 구분한다.
  // 추가 : 현재 어떤 상태인지를 먼저 저장해 둔다.
  let windowState = "PC";

  window.addEventListener("resize", function () {
    const windowWidth = window.innerWidth;
    // console.log(windowWidth);
    // 조건에 따라서 버전확인
    if (windowWidth > 1024) {
      // console.log("PC 버전");
      if (windowState != "PC") {
      }
    } else {
      // console.log("MB 버전");
      if (windowState != "MB") {
        windowState = "MB";
      }
    }
  });
  const visualSlideSW = new Swiper(".visual-slide", {
    loop: true,
    pagination: {
      el: ".visual-slide .swiper-pagination",
      clickable: true,
    },
    autoplay: { delay: 2500, disableOnInteraction: false },
    speed: 1000,
  });
  // 개발자 추가 작업 : 마우스 가 Enter 가 되면 (마우스 걸치면)
  const visaulSide = document.querySelector(".visual-slide");
  // console.log(visaulSide);

  visaulSide.addEventListener("mouseenter", function () {
    // console.log("오버");
    visualSlideSW.autoplay.stop();
  });

  visaulSide.addEventListener("mouseleave", function () {
    // console.log("아웃");
    visualSlideSW.autoplay.start();
  });
});
