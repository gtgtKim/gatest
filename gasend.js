
// 구매 버튼 클릭 함수 선언
function gaSend(i) {
 const gaPrice = Number(document.querySelectorAll(".product")[i].querySelector('p').textContent.match(/\d+/));
 const A = i + 1

    dataLayer.push({
        "event":  "select_item",
        "ecommerce":  {
         "items": [{
           "item_id": A.toString(),
           "price": gaPrice,
           "index": A
         }],
         "item_list_name": "상품 리스트",
         "currency": "USD"
       }
     });
}

for (let i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener('click', () => gaSend(i));
    }