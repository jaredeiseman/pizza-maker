////////////////////////////////////////////////////////////////////////////////
//                              BUSINESS LOGIC                                //
////////////////////////////////////////////////////////////////////////////////

//Restaurant constructor
function Restaurant() {
  this.availableMeats = ['pepperoni', 'sausage', 'bacon', 'canadian bacon'];
  this.availableNonMeats = ['onions', 'mushrooms', 'olives', 'green peppers', 'pineapple']
  this.availableSizes = ['small', 'medium', 'large'];
  this.additionalToppingsPrice = 1;
  this.basePizzaPrice = 8;
  this.currentOrder = [];
  this.orderTotal = 0;
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
  if (restaurant.availableMeats.includes(topping) || restaurant.availableNonMeats.includes(topping)) {
    this.toppings.push(topping);
    return this.toppings;
  } else {
    return false;
  }
}

//Verify topping being removed is in the array and locate it's position, then remove it
Pizza.prototype.removeTopping = function(topping) {
  var index = this.toppings.indexOf(topping);
  if (index !== -1) {
    this.toppings.splice(index, 1);
    return this.toppings;
  } else {
    return false;
  }
}

//set the pizza size on selected size
Pizza.prototype.setSize = function(restaurant, size) {
  if (restaurant.availableSizes.includes(size)) {
    this.pizzaSize = size;
  } else {
    return false;
  }
}

//update the price of the current pizza
Pizza.prototype.updatePrice = function(restaurant) {
  //get base pizza price
  this.price = restaurant.basePizzaPrice;

  if (this.pizzaSize === 'small') {
    //subtract 2 if small
    this.price -= 2;
  } else if (this.pizzaSize === 'large') {
    //add 2 if large
    this.price += 2;
  }

  //add $1 for each topping beyond the first
  if (this.toppings.length > 0) {
    this.price += (this.toppings.length - 1);
  }

  return this.price;
}

////////////////////////////////////////////////////////////////////////////////
//                           USER INTERFACE LOGIC                             //
////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
  var restaurant = new Restaurant();
  var pizza = new Pizza();

  //update the price function
  function updatePrice() {
    $('#price').text(pizza.updatePrice(restaurant));
  }

  //size selection click event
  $('#size button').click(function() {
    var size = $(this).prop('name');
    $(this).addClass('size-selected');
    $(this).siblings().removeClass('size-selected');
    pizza.setSize(restaurant, size);
    updatePrice();
  });

  //toppings selection click event
  $('input[type="checkbox"]').click(function() {
    var topping = $(this).val();
    if (!pizza.toppings.includes(topping)) {
      pizza.addTopping(restaurant, topping);
    } else {
      pizza.removeTopping(topping);
    }
    updatePrice();
  });

  $('#order-form').submit(function(e) {
    e.preventDefault();

    restaurant.addToOrder(pizza);
    console.log(restaurant.currentOrder);
  });
});
