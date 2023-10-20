var prds = document.querySelectorAll('[data-gt-product]');
prds[1].dataset.gtProduct
JSON.parse(prds[1].dataset.gtProduct)
console.dir($0)
$0.getAttribute('ap-click-area')
$0.dataset.gtProduct
JSON.parse($0.dataset.gtProduct)



var prds = document.querySelectorAll('[data-gt-product]');
var items = [];
prds.forEach(function(el){
  items.push(JSON.parse(el.dataset.gtProduct));
})
console.log(items);