# News York Pizza

#### An application using objects and constructors to drive a user interface that will allow a user to build their desired pizza and display the price.

#### By Jared Eiseman

## Description

## Specifications
| Specification | Example Input | Example Output |
| ------------- |:-------------:| -----:|
| The app will be able to construct a restaurant object that will house toppings objects, and available pizza sizes | new Restaurant() | { availableToppings: [pep, sausage, ...], availableSizes: ['small', ...], toppingsPrice: 1, basePizzaPrice: 8, currentOrder: [{pizza objects}] } |
| The app will be able to construct a pizza object that holds current toppings selected, size, and current price property | new Pizza() | { toppings: [], pizzaSize: "small", price: # } |
| The app will be able to use the Pizza constructor and add the base pizza to the overall order from the restaurant | Restaurant.currentOrder.push(new Pizza()) | Constructs the pizza in the currentOrder property |
| There will be a method to call when a topping is selected to add it to the appropriate pizza | Pizza.addTopping('pepperoni') | pizza.toppings: ['pepperoni'] |
| The app will be able to remove toppings from a pizza | Pizza.removeTopping('pepperoni') | pizza.toppings: [] |
| The app will be able to update the price of the pizza whenever a change is made by the user | Pizza.updatePrice() | price: 11 |

## Data Structure
Restaurant: {
  availableToppings: ['pepperoni', 'sausage', 'onions', 'mushrooms', ... , 'Green Peppers'],
  availableSizes: ['small', 'medium', 'large'],
  toppingsPrice: 1,
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
* Open 'index.html' in a browser
* Choose the answers that best suit your purpose
* Choose the next or previous buttons to navigate the survey
* When all answers are satisfactory, choose submit, enjoy the animation and read your results

## Known Bugs

When only the final question is answered in the form, and the form is submitted, validation will still work as intended to prevent the form from being completed. However, the styling added to denote unanswered questions does not colorize the final question properly after a couple of iterations through failing the validation.

## Support and contact details

For feedback or support contact Jared at jathei@gmail.com.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

MIT

Copyright (c) 2017 Jared Eiseman
