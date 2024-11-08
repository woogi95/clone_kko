window.addEventListener("load", function () {
  // MockData
  // { imgUrl : "경로", desc: "설명문" }
  // [{} {} {}]
  //   const LogoData;
  //   api 주소 : json 주소가 어디니?
  const LOGO_DATA_URL = "/apis/logodata.json";
  // API 를 통한 데이터 불러오기
  // ---- request : 리퀘스트
  //   ftch : 불러오기
  // then : 성공했을때 , catch : 실패했을때
  //   API 를 통해 불러들여진 결과물
  // ----response : 리스판스
  fetch(LOGO_DATA_URL)
    .then(function (response) {
      //   console.log(response);
      const result = response.json();
      //   console.log(result);
      return result;
    })
    .then(function (result) {
      // 1. json 뜯기
      console.log(result);
      // 2. 반복해서 html 태그 를 생성
      let logoHtml = "";
      for (let i = 0; i < 9; i++) {
        const data = `<div class="swiper-slide"><img src="${result[1].imgUrl}" alt="${result[i].desc}" /></div>`;
        logoHtml += data;
      }
      console.log(logoHtml);
      // 3. 생성된 html 을 원하는 곳에 배치
      // 4. swiper생성 및 실행
    })
    .catch(function (error) {
      //   console.log(error);
    });

  const headerLogo = new Swiper(".header-logo-motion", {
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
});
