// DOM 요소를 가져와서 상품 이름을 변경하는 함수
function changeProductName(productIndex, newProductName) {
    const products = document.getElementsByClassName('product');
    if (productIndex >= 0 && productIndex < products.length) {
      const productNameElement = products[productIndex].querySelector('h2');
      productNameElement.textContent = newProductName;
    }
  }
  
  // 모든 상품의 이름을 변경
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    const newProductName = "상품 " + (i + 1);
    changeProductName(i, newProductName);
  }


//슬라이드 변경
  const sliderContainer = document.querySelector('.slider-container');
  const sliderSlides = document.querySelectorAll('.slider-slide');
  
  let slideIndex = 0;
  
  function showSlide(index) {
    sliderSlides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
  }
  
  function nextSlide() {
    slideIndex++;
    if (slideIndex >= sliderSlides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }
  
  // 매 3초마다 다음 슬라이드 보여주기
  setInterval(nextSlide, 3000);