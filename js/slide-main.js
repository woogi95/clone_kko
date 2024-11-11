window.addEventListener("load", function () {
  const VISUAL_DATA_URL = "/apis/main.json";
  fetch(VISUAL_DATA_URL)
    .then(function (response) {
      const result = response.json();
      return result;
    })
    .then(function (result) {
      let htmlVisual = "";
      for (let i = 0; i < 4; i++) {
        const obj = result[i];
        const tag = `
     <div class="swiper-slide">
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
    })
    .catch(function () {});
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
