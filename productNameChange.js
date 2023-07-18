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

// DOM 요소를 가져와서 상품 가격을 변경하는 함수
function changeProductPrice(productIndex, newProductPrice) {
  const products = document.getElementsByClassName('product');
  if (productIndex >= 0 && productIndex < products.length) {
    const productNameElement = products[productIndex].querySelector('p');
    productNameElement.textContent = newProductPrice;
  }
}

// 모든 상품의 가격을 변경
for (let i = 0; i < products.length; i++) {
  const newProductPrice = "$ " + ((i +1)* 101);
  changeProductPrice(i, newProductPrice);
}


// JavaScript로 슬라이드를 자동으로 전환하는 코드
const slides = document.getElementsByClassName("slider-slide");
let currentSlide = 0;

function showSlide(slideIndex) {
  // 모든 슬라이드의 active 클래스 제거
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  // 현재 슬라이드에 active 클래스 추가
  slides[slideIndex].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// 첫 번째 슬라이드를 보여줌
showSlide(currentSlide);

// 1.5초마다 다음 슬라이드를 보여줌
setInterval(nextSlide, 1500);



// 구매 버튼 클릭 함수 호출
const buyButtons = document.getElementsByClassName("buy-button");


