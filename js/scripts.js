////////////////////////////////////////////////////////////////////////////////
//                              BUSINESS LOGIC                                //
////////////////////////////////////////////////////////////////////////////////

//Restaurant constructor
function Restaurant() {
  this.availableToppings = ['pepperoni', 'sausage', 'onions'];
  this.availableSizes = ['small', 'medium', 'large'];
  this.additionalToppingsPrice = 1;
  this.basePizzaPrice = 8;
  this.currentOrder = [];
}

//Pizza constructor
function Pizza() {
  this.toppings = [];
  this.pizzaSize = "";
  this.price = 0;
}

//add completed pizza to overall order
Restaurant.prototype.addToOrder = function(pizza) {
  this.currentOrder.push(pizza);
  return this.currentOrder;
}

//verify topping is valid to prevent bugs, and if so add the topping to the pizza
Pizza.prototype.addTopping = function(restaurant, topping) {
  if (restaurant.availableToppings.includes(topping)) {
    this.toppings.push(topping);
    return this.toppings;
  } else {
    return false;
  }
}





















////////////////////////////////////////////////////////////////////////////////
//                           USER INTERFACE LOGIC                             //
////////////////////////////////////////////////////////////////////////////////
