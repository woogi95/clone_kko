window.addEventListener("load", function () {
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
