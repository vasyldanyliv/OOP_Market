function Shopping(name, place, price, weight){
    this.name = name;
    this.place = place;
    this.price = price;
    this.weight = weight;
}

Shopping.prototype.getWeight = function() {
    document.getElementById("weightPrice").innerHTML = this.weight + ' gr -' + '\n'+ this.price + '$/1kg' ;
};
