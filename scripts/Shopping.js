function Shopping(name, place, price){
 this.name = name;
 this.place = place;
 this.price = price;
}
// arr for summary purchases
var arr = [];
Shopping.prototype.Buying = function(elem) {
 var itemWeight = parseFloat(elem.nextElementSibling.value);
 if(isNaN(itemWeight) || itemWeight < 0 ){
  alert('Please enter correct weight');
  return ;
 }
 this.weight = itemWeight;
 var sum = (this.price * this.weight );
 arr.push(sum);
 var totalBill = arr.reduce(getBill).toFixed(2);
 var totalBillShow = document.getElementById("summary").innerHTML = "For ALL: " + totalBill + " $";
 var $tr = document.getElementById("receipt");
 var td = document.createElement("TD");
 $tr.appendChild(td);
 $table = document.querySelector('table');
 $table.classList.add('visible');
 var receipt = document.createTextNode(this.weight + " kg " + this.name + " - " + sum.toFixed(2) + " $");
 td.appendChild(receipt);
 var totalItem = document.getElementById("total").classList.add('visible');
 clearWeightInput();
};

function getBill(currentResult, currentValue) {
 return currentResult + currentValue;
}

function clearWeightInput() {
 var els = document.getElementsByClassName("weight");

 Array.prototype.forEach.call(els, function(el) {
  el.value = '';
 });
}
