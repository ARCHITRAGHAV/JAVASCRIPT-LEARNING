class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toLocaleString()}`);
    }

    calculateTotal(saleTax) {
        saleTax = (this.price * saleTax) / 100;
        const totalPrice = this.price + saleTax;
        console.log(`Total price of ${this.name} after ${saleTax} tax: ${totalPrice}`);
    }
}

const product1 = new Product("Shirt", 1500);
const product2 = new Product("Laptop", 100000);

product1.displayProduct();
product2.displayProduct();
product2.calculateTotal(18);