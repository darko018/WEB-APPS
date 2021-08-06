"use strict";

(function () {

    function Product(name, price, expirationDate) {
        this.id = function () {
            return String((Math.round((99999 - 1) * Math.random() + 1))).padStart(5, '0');  //String() and .padStart(5, "0") function is used to change number to string and then use padStart to add leading zeros if a number has less than 5 digits
        };
        this.name = name;
        this.price = price.toFixed(2);
        this.expirationDate = new Date(expirationDate);
        this.getInfo = function () {
            let short = "";
            short = `${this.name[0]} ${this.name[this.name.length - 1].toUpperCase()}`;
            return `short ${this.id()}, ${this.name}, ${this.price}`;
        };
    }

    function ShoppingBag() {
        this.date = new Date();
        this.listOfProducts = [];

        this.addProduct = function (product) {
            if (this.date <= product.expirationDate) {
                this.listOfProducts.push(product);
            }
            return this.listOfProducts;
        };

        this.getTotalPrice = function () {
            let sum = 0;
            this.listOfProducts.forEach(function (element) {
                sum += parseFloat(element.price);   //we have to use parseFloat because it sees price as a STRING
            });
            return sum.toFixed(2);
        };

        this.getAveragePrice = function () {
            return (this.getTotalPrice() / this.listOfProducts.length).toFixed(3);
        };

        this.getMostExpensive = function () {
            let mostExpensivePrice = 0;
            let mostExpensiveProduct;

            this.listOfProducts.forEach(function (element) {
                if (parseFloat(element.price) > mostExpensivePrice) {
                    mostExpensivePrice = parseFloat(element.price);
                    mostExpensiveProduct = element.name;
                }
            });
            return `The most expensive product is: ${mostExpensiveProduct}, and its price is: ${mostExpensivePrice}.`;
        };
      
    }

    function PaymentCard(accountBallance, status, validUntil) {
        this.accountBallance = accountBallance.toFixed(2);
        this.status = status;
        this.validUntil = new Date(validUntil);
    }

    function checkoutAndBuy(shoppingBag, paymentCard) {
        if (paymentCard.status !== "active") {
            throw new Error("This payment card is not active.");
        }
        if (paymentCard.validUntil < new Date()) {
            throw new Error("This payment card is expired.");
        }
        if (shoppingBag.getTotalPrice() <= parseFloat(paymentCard.accountBallance)) {   //we have to parseFloat this because it sees it as STRING
            return "Purchase is successful!";
        } else {
            return "There is not enough money. The missing ammount is: " + (shoppingBag.getTotalPrice() - paymentCard.accountBallance);
        }
    }

    try {

        let shoppingBag1 = new ShoppingBag();

        let product1 = new Product("Bannana", 130, "Jan 7 2023");
        let product2 = new Product("Apple", 230, "Oct 30 2024");
        let product3 = new Product("Pear", 330, "Mar 23 2023");

        let paymentCard1 = new PaymentCard(3000, "active", "Jan 10 2022");

        shoppingBag1.addProduct(product1);
        shoppingBag1.addProduct(product2);
        shoppingBag1.addProduct(product3);

        console.log(product1.getInfo());
        console.log(shoppingBag1.listOfProducts);
        console.log(shoppingBag1.getTotalPrice());
        console.log(shoppingBag1.getAveragePrice());
        console.log(shoppingBag1.getMostExpensive());

        console.log(checkoutAndBuy(shoppingBag1, paymentCard1));

    } catch (error) {
        console.log("Error message: " + error.message);
    }

})();
