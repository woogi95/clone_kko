window.addEventListener("load", function () {
  const CARDS_DATA_URL = "/apis/cards.json";

  fetch(CARDS_DATA_URL)
    .then(function (response) {
      // console.log("카드", response);
      const result = response.json();
      return result;
    })
    .then(function (result) {
      // console.log("카드결과", result);
      let htmlCards = "";
      for (let i = 0; i < 5; i++) {
        const obj = result[i];
        const cardData = `
        <div class="swiper-slide"> 
        <a href="#" class="card-wrap">
                <div class="card-img">
                  <img src="/images/${obj.imgpath}" alt="${obj.cardno}" />
                </div>
                <div class="card-info">
                  <h5 class="card-cate">${obj.cardname}</h5>
                  <span class="card-count">${obj.cardno}</span>
                </div>
              </a>
              </div>
              `;
        htmlCards += cardData;
      }

      // console.log(htmlCards);
      const cardsTag = document.querySelector(".mb-card-slide .swiper-wrapper");
      // console.log(cardsTag);
      cardsTag.innerHTML = htmlCards;
      const cardSlide = new Swiper(".mb-card-slide-wrap", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
      });
    })

    .catch(function (error) {});
});
