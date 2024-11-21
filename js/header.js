// jQuery 의 목적은 2가지
// html 및 css 제어
// 외부데이터 연동

// html 과 css 가 화면에 보일 준비 끝나면
// image, font, mp3, mp4 는 로딩 체크를 못함.
// window.addEventListener("DOMContentLoaded", function(){})
$(document).ready(function () {
  // header 를 보관함에 담아둔다.
  var header = $(".header");

  // 스크롤 체크하기
  $(window).on("scroll", function () {
    var scrollPositionY = $(window).scrolTop();
    if (scrollPositionY > 0) {
      header.addClass("header-active");
    } else {
      header.removeClass("header-active");
    }
  });
});

// 이미지 바꾸기 및 메뉴 펼침
window.addEventListener("load", function () {
  // 1. 버튼 역할하는 id 찾기
  var btMobile = $("#mb-menu-bt");
  // console.log(btMobile);
  // 2. 버튼 안에 있는 이미지를 찾기
  var btMobileImage = $("#mb-menu-bt img");
  // console.log(btMobileImage);

  // 3. 버튼 안에 있는 이미지의 src는 무엇일까?
  // <igm src="./image/icon/icon-hbr.png" alt="모바일메뉴" />
  // const scrString = btMobileImage.getAttribute("src");
  // console.log(scrString);

  // 4. 버튼 클릭 처리
  var openIcon = "/images/icon/icon-hbr.png";
  var closeIcon = "/images/icon/icon-close.png";

  // 모바일 메뉴 관련 내용을 찾아서 이름을 주고 보관하자.
  // 1.모바일 배경
  var mobileMenuBg = $(".bg-mb-menu");
  // console.log(mobileMenuBg);
  // 2. 모바일 메뉴
  var mobileMenu = $(".mb-menu");
  // console.log(mobileMenu);

  btMobile.on("click", function () {
    // 이미지의 src 에  담겨진 글자를 수정
    var imageSrc = btMobileImage.attr("src");
    if (imageSrc == openIcon) {
      // 이미지 src를 교체 하겠다.
      btMobileImage.attr("src", closeIcon);
      mobileMenuBg.addClass("bg-mb-menu-active");
      mobileMenu.addClass("mb-menu-active");
    } else {
      // 이미지 src 를 교체 하겠다.
      btMobileImage.attr("src", openIcon);
      mobileMenuBg.removeClass("bg-mb-menu-active");
      mobileMenu.removeClass("mb-menu-active");
    }
  });

  // 반응형 테스트
  // pc 버전에서는 모두 다, 버튼,모바일 메뉴 초기화
  $(window).on("resize", function () {
    // 웹브라우저의 넓이를 체크한다.
    const windowWidth = $(window).width();
    // console.log(windowWidth);
    // css 코드에 반응형 작동이 1024px 부터 작동하니까.
    if (windowWidth > 1024) {
      // 모바일 메뉴 버튼을 원래대로 되돌린다.
      btMobileImage.attr("src", openIcon);
      mobileMenuBg.removeClass("bg-mb-menu-active");
      mobileMenu.removeClass("mb-menu-active");
    }
  });
});

/**
 * 자바스크립트 호이스팅 > const, let, function 사용 하기전
 * 메모리에 정리 하는 것. (타이핑 된 순서대로)
 * visibility : hidden 눈에는 안보이는데  html 상 있음
 * display : none > html 상에서 없는 취급
 * 애니메이션 코드
 * opacity: 내용물투명도
 *opacity: 0;
 * transition: 영역, 시간, 딜레이시간
 *transition: all 0.5s 0.5s;
 *.상위 클래스
 * opacity: 0;
 *transition: all 0.5s;
 * visibility: hidden;}
 * .하위클래스 {
 * visibility: visible !important;
 * opacity: 1 !important;
 * transition-duration: 0.5s;
 * transition-property: all;
 * transition-timing-function: cubic-bezier();
 * transition-delay: ;
 */
