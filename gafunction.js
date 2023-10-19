// DOM 요소를 가져와서 상품 이름을 변경하는 함수
function changeProductName(productIndex, newProductName) {
    const products = document.getElementsByClassName('product');
    if (productIndex >= 0 && productIndex < products.length) {
      const productNameElement = products[productIndex].querySelector('h2');
      productNameElement.textContent = newProductName;
    }
  }


//데이터레이어 생성

window.dataLayer = window.dataLayer || [];

// 데이터레이어 초기화 함수 선언
function dataLayerReset(targetObj) {
    const A = {};
    for (key in targetObj) {
        A[key] = undefined;
    }
    dataLayer.push(A);
}

//GTM 스니펫 코드
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5B2JF4R');



    let isAndroid = navigator.userAgent.indexOf('/AOS_gtkim') > -1;
