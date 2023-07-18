
// 구매 버튼 클릭 함수 선언
function gaSend(i) {
 const gaPrice = Number(document.querySelectorAll(".product")[i].querySelector('p').textContent.match(/\d+/));
 const ii = i + 1
 const targetObj = {
    "event":  "select_item",
    "ecommerce":  {
     "items": [{
       "item_id": ii.toString(),
       "price": gaPrice,
       "index": ii
     }],
     "item_list_name": "상품 리스트",
     "currency": "USD"
   }
 }
    dataLayer.push(targetObj);
    dataLayerReset(targetObj);

}

for (let i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener('click', () => gaSend(i));
    }