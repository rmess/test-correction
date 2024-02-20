class Basket {
    constructor() {
        this.items = []; // Each item is an object { name: 'Item', price: 1.99 }
    }

    // Add an item to the basket
    addItem(name, price) {
        this.items.push({ name: name, price: price });
        console.log(`${name} has been successfully added. Your basket is starting to look like a treasure trove!`);
    }

    // Calculate the total price of the basket
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    // Remove an item from the basket by its name
    removeItem(itemToRemove) {
        const index = this.items.findIndex(item => item.name === itemToRemove);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(`${itemToRemove} has been removed. Lighter and faster now!`);
        } else {
            console.log(`Unable to find ${itemToRemove}... Are you sure it was in the basket, or is it just an illusion?`);
        }
    }

    // Empty the basket
    emptyBasket() {
        this.items = [];
        console.log("The basket is now as empty as a salesman's promises on Black Friday.");
    }
}

export default Basket;