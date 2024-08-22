// DOM 요소를 가져와서 상품 이름을 변경하는 함수
function changeProductName(productIndex, newProductName) {
  const products = document.getElementsByClassName("product");
  if (productIndex >= 0 && productIndex < products.length) {
    const productNameElement = products[productIndex].querySelector("h2");
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

// Define dataLayer and the gtag function.

function gtag() {
  dataLayer.push(arguments);
}

// Set default consent to 'denied' as a placeholder
// Determine actual values based on your own requirements
gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "denied",
});

//GTM 스니펫 코드
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-5B2JF4R");

(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-MKPZL29L");
