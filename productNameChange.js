// DOM 요소를 가져와서 상품 이름을 변경하는 함수
function changeProductName(productIndex, newProductName) {
    const products = document.getElementsByClassName('product');
    if (productIndex >= 0 && productIndex < products.length) {
      const productNameElement = products[productIndex].querySelector('h2');
      if (productNameElement) {
        productNameElement.textContent = newProductName;
      }
    }
  }
  
  // 모든 상품의 이름을 변경
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    const newProductName = "상품 " + (i + 1);
    changeProductName(i, newProductName);
  }