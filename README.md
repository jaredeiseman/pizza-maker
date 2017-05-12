# News York Pizza

#### An application using objects and constructors to drive a user interface that will allow a user to build their desired pizza and display the price.

#### By Jared Eiseman

## Description
News York Pizza is an interactive application allowing users to fill out a pizza order form after clicking "Order Online" from the landing page. The user is brought to a form in which they can choose the size of pizza they would like, and the meat/non-meat toppings of their choosing. Price of the pizza being built appears on the right side of the screen, as well as a live tracker of what toppings they've chosen. Once "add to order" is clicked, the pizza is logged into their overall current order, and given the ability to add another pizza to the order. When the user has finished their selections, and they click "Checkout", they will be brought to a confirmation page, where they have the opportunity to review their order, the price, and to fill out necessary pickup or delivery options. Finally a thank you page is displayed with information as to when their order will be ready/delivered.

## Specifications
| Specification | Example Input | Example Output |
| ------------- |:-------------:| -----:|
| The app will be able to construct a restaurant object that will house toppings objects, and available pizza sizes, as well as set the base pizza price | new Restaurant() | { availableToppings: [pep, sausage, ...], availableSizes: ['small', ...], basePizzaPrice: 8, currentOrder: [{pizza objects}] } |
| The app will be able to construct a pizza object that holds current toppings selected, size, and current price property | new Pizza() | { toppings: [], pizzaSize: "small", price: # } |
| The app will be able to use the Pizza constructor and add the base pizza to the overall order from the restaurant | Restaurant.currentOrder.push(new Pizza()) | Constructs the pizza in the currentOrder property |
| There will be a method to call when a topping is selected to add it to the appropriate pizza | Pizza.addTopping('pepperoni') | pizza.toppings: ['pepperoni'] |
| The app will be able to remove toppings from a pizza | Pizza.removeTopping('pepperoni') | pizza.toppings: [] |
| The app will be able to update the price of the pizza whenever a change is made by the user | Pizza.updatePrice() | price: 11 |

## Data Structure
Restaurant: {
  availableToppings: ['pepperoni', 'sausage', 'onions', 'mushrooms', ... , 'Green Peppers'],
  availableSizes: ['small', 'medium', 'large'],
  basePizzaPrice: 8,
  currentOrder: [
    {
      // Pizza
      toppings: [],
      size: 'small',
      price: current price
    }
  ]
}


## Setup/Installation Requirements

* Clone the repository
* Open 'index.html' from the cloned directory in a browser

## Known Bugs

There are no known bugs at this time.

## Support and contact details

For feedback or support contact Jared Eiseman at jathei@gmail.com.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

MIT

Copyright (c) 2017 Jared Eiseman
