
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



// "product" 클래스를 가진 모든 div 요소를 선택합니다.
let elements = document.querySelectorAll('div.product');

// 첫 번째 요소가 존재하는 경우에만 id를 설정합니다.
if (elements.length > 0) {
  elements[0].id = 'mouseon';
}

let hoverTime = 0;
let hoverStart = 0;
let element = document.getElementById("mouseon");

element.addEventListener("mouseover", function() {
  hoverStart = new Date();
});

element.addEventListener("mouseout", function() {
  let hoverEnd = new Date();
  hoverTime += hoverEnd - hoverStart;
  let mouseout = {
    "event": "mouseout",
    "mouseontime": hoverTime
    }

  dataLayer.push(mouseout)
  dataLayerReset(mouseout)
});