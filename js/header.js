// 협업에서는 소스를 덮어 쓰면안된다. 소스 컨벤션 중요
window.addEventListener("load", function () {
  /*
        1. 사용자가 스크롤바로 화면아래로 이동 시
        2. header class에 하단에 라인을 생성
        3. 사용자가 스크롤 바로 화면 최상단으로 이동 시
        4. header class에 하단에 라인 제거
    */
  // header 를 보관함에 담아둔다.
  const header = document.querySelector(".header");
  console.log(header);
  // 스크롤 체크하기
  window.addEventListener("scroll", function () {
    const scrollPositionY = window.scrollY;
    console.log(scrollPositionY);
    // header 에 class 추가하기
    if (scrollPositionY > 0) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });
});

// 이미지 바꾸기 및 메뉴 펼침
window.addEventListener("load", function () {
  /**
   * 아이콘 이미지 바꾸기
   * <img src="경로" alt="" />
   * 위의 경로를 즉, html 글자 수정
   * 클릭시 이미지 바꾸기 (토글)
   */

  // 1. 버튼 역할하는 id 찾기
  const btMobile = document.querySelector("#mb-menu-bt");
  // console.log(btMobile);
  // 2. 버튼 안에 있는 이미지를 찾기
  const btMobileImage = document.querySelector("#mb-menu-bt img");
  // console.log(btMobileImage);

  // 3. 버튼 안에 있는 이미지의 src는 무엇일까?
  // <igm src="./image/icon/icon-hbr.png" alt="모바일메뉴" />
  // const scrString = btMobileImage.getAttribute("src");
  // console.log(scrString);

  // 4. 버튼 클릭 처리
  const openIcon = "./images/icon/icon-hbr.png";
  const closeIcon = "./images/icon/icon-close.png";

  // 모바일 메뉴 관련 내용을 찾아서 이름을 주고 보관하자.
  // 1.모바일 배경
  const mobileMenuBg = document.querySelector(".bg-mb-menu");
  // console.log(mobileMenuBg);
  // 2. 모바일 메뉴
  const mobileMenu = document.querySelector(".mb-menu");
  // console.log(mobileMenu);

  btMobile.addEventListener("click", function () {
    // 이미지의 src 에  담겨진 글자를 수정
    const imageSrc = btMobileImage.getAttribute("src");
    if (imageSrc == openIcon) {
      // 이미지 src를 교체 하겠다.
      btMobileImage.setAttribute("src", closeIcon);
      mobileMenuBg.classList.add("bg-mb-menu-active");
      mobileMenu.classList.add("mb-menu-active");
    } else {
      // 이미지 src 를 교체 하겠다.
      btMobileImage.setAttribute("src", openIcon);
      mobileMenuBg.classList.remove("bg-mb-menu-active");
      mobileMenu.classList.remove("mb-menu-active");
    }
  });

  // 반응형 테스트
  // pc 버전에서는 모두 다, 버튼,모바일 메뉴 초기화
  window.addEventListener("resize", function () {
    // 웹브라우저의 넓이를 체크한다.
    const windowWidth = window.innerWidth;
    // console.log(windowWidth);
    // css 코드에 반응형 작동이 1024px 부터 작동하니까.
    if (windowWidth > 1024) {
      // 모바일 메뉴 버튼을 원래대로 되돌린다.
      btMobileImage.setAttribute("src", openIcon);
      mobileMenuBg.classList.remove("bg-mb-menu-active");
      mobileMenu.classList.remove("mb-menu-active");
    }
  });
});

// 자바스크립트 호이스팅 > const, let, function 사용 하기전
// 메모리에 정리 하는 것. (타이핑 된 순서대로)
// visibility : hidden 눈에는 안보이는데  html 상 있음
// display : none > html 상에서 없는 취급
// 애니메이션 코드
/* opacity: 내용물투명도 
opacity: 0;
/* transition: 영역, 시간, 딜레이시간
transition: all 0.5s 0.5s;
.상위 클래스
opacity: 0;

  transition: all 0.5s;
  visibility: hidden;

}
.하위클래스 {
  visibility: visible !important;
  opacity: 1 !important;

**/

/**
 * transition-duration: 0.5s;
  transition-property: all;
  transition-timing-function: cubic-bezier();
  transition-delay: ;
 * 
 */
