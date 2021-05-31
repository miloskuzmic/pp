"use strict";
(function (){
////PRODUCT ///////
function Product(name, price, experationDate){
    this.productId = Math.floor(Math.random() * 90000 - 10000);
    this.name = name;
    this.price = price.toFixed(2);
    this.experationDate = new Date(experationDate);
    this.getInfo = function(){
        var firstAndLastLetter = (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
        var rezult = firstAndLastLetter + this.productId + ', ' + this.name + ', ' + this.price;
        return rezult;
    }
}
//// SHOPING BAG //////
function ShopingBag(){
    this.listOfProducts = [];
    this.addProduct = function(product) {
        if (product.experationDate > new Date()){
            this.listOfProducts.push(product);
        }
    }
    this.averageProductPrice = function() {
        var sum = 0;
        this.listOfProducts.forEach(function(priceOfProduct){
          sum = sum + parseFloat(priceOfProduct.price);
        
        })
        var averagePrice = sum / this.listOfProducts.length;
        return averagePrice.toFixed(3);
    }
    this.getMostExpensive = function(){
        var onlyPrice = this.listOfProducts.map(function(el){
            return el.price;
        })
        var max = onlyPrice[0];
        for (var i = 0; i < onlyPrice.length; i++){
            if ( max < onlyPrice[i]){
                max = onlyPrice[i];
            };
        }
        for (var j = 0; j < this.listOfProducts.length; j++ ){
            if (parseFloat(max) === parseFloat(this.listOfProducts[j].price))
            return 'The most expensive product is: ' + this.listOfProducts[j].name + ' price: ' + this.listOfProducts[j].price + ', experation date ' + this.listOfProducts[j].experationDate
        };
    }
    this.calculateTotalPrice = function(){
        var total = 0;
        this.listOfProducts.forEach(function(priceOfProduct){
            total = total + parseFloat(priceOfProduct.price);
        });
       
        return total;
    }
}
function PaymentCard(accountBalance, activOrInactiveStatus, validUntilDate){
    this.accountBalance = accountBalance.toFixed(2);
    this.activOrInactiveStatus = activOrInactiveStatus;
    this.validUntilDate = validUntilDate;
}
function checkOutAndBuy(shopingBag, paymentCard){
    if(parseFloat(paymentCard.accountBalance) >= shopingBag.calculateTotalPrice()){
        return 'Purchase is successful';
    }else{
        var missingMoney = shopingBag.calculateTotalPrice() - parseFloat(paymentCard.accountBalance);
        return 'Amount of money that is missing is: ' + missingMoney.toFixed(2);
    }
}
//test
var banana = new Product('banana', 100.56, 'Dec 12 2023');
var jabuka = new Product('jabuka', 200, 'Oct 23 2023' );
var jagoda = new Product('jagode', 60.32, 'Oct 23 2021' );
var tresnja = new Product('tresnje', 150.21, 'Sep 21 2022' );
var korpa = new ShopingBag();
var mycard = new PaymentCard(100, 'active', 'Nov 1 2030');
korpa.addProduct(banana);
korpa.addProduct(jabuka);
korpa.addProduct(jagoda);
korpa.addProduct(tresnja);
console.log(checkOutAndBuy(korpa, mycard));

})()