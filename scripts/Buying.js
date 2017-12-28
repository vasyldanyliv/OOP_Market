 // arr for summary purchases
var arr = [];



function getBill(currentResult, currentValue) {
    return currentResult + currentValue;
}
Shopping.prototype.Buying = function() {
    var sum = (this.price * this.weight ) * 0.001;
    arr.push(sum);
    var totalBill = arr.reduce(getBill).toFixed(2);
    var totalBillShow = document.getElementById("summary").innerHTML = "For ALL: " + totalBill + " $";

    var $tr = document.getElementById("receipt");
    var td = document.createElement("TD");
    $tr.appendChild(td);
    $table = document.querySelector('table');
    $table.classList.add('visible');
    var receipt = document.createTextNode(this.weight + " gr " + this.name + " - " + sum.toFixed(2) + " $");

    td.appendChild(receipt);
    var totalItem = document.getElementById("total").classList.add('visible');
};

