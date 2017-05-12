////////////////////////////////////////////////////////////////////////////////
//                              BUSINESS LOGIC                                //
////////////////////////////////////////////////////////////////////////////////

//Restaurant constructor
function Restaurant() {
  this.availableMeats = ['pepperoni', 'sausage', 'bacon', 'canadian bacon', 'beef', 'chicken', 'ham', 'salami'];
  this.availableNonMeats = ['onions', 'mushrooms', 'olives', 'green peppers', 'pineapple', 'cheddar', 'asiago', 'banana peppers', 'garlic', 'jalapenos', 'red peppers', 'tomatoes', 'feta', 'provolone', 'spinach'];
  this.availableSizes = ['small', 'medium', 'large'];
  this.basePizzaPrice = 12;
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
  this.orderTotal += pizza.price;
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
  //display the date on the mid-line
  $('#date').text(new Date().toDateString());

  //construct the restaurant
  var restaurant = new Restaurant();

  //go to order form click handler
  $('.order-online').click(function() {
    $('#landing').hide();
    $('#pizza-builder').show();
  });

  //update the price function
  function updatePrice(pizza) {
    $('#current-pizza-price').text(pizza.updatePrice(restaurant));
    $('#total-price').text(restaurant.orderTotal);
  }

  //function to draw form to page and attach event handlers
  function drawOrderForm() {
    var pizza = new Pizza();
    $('#form-area').append('<form id="order-form">' +
                        '<div class="form-group" id="size">' +
                          '<h3>Choose your size:</h3>');
    //populate size buttons
    restaurant.availableSizes.forEach(function(size) {
      $('#size').append('<button type="button" name="' + size + '" class="size-button">' + size + '</button>')
    });
    $('#form-area').append('</div>' +
                       '<div class="form-group" id="toppings">' +
                         '<div class="meat-toppings">' +
                           '<h3>Choose your meats:</h3>');
     //populate the meats checkboxes
    restaurant.availableMeats.forEach(function(meat) {
      $('.meat-toppings').append('<label class="checkbox-inline">' +
                                   '<input type="checkbox" value="' + meat + '">' + meat + '' +
                                 '</label>');
    });
    $('#form-area').append('</div>' +
                       '<div class="non-meat-toppings">' +
                         '<h3>Choose your non-meats:</h3>');
    restaurant.availableNonMeats.forEach(function(nonMeat) {
      $('.non-meat-toppings').append('<label class="checkbox-inline">' +
                                       '<input type="checkbox" value="' + nonMeat + '">' + nonMeat + '' +
                                     '</label>');
    });
    $('#form-area').append('</div>' +
                     '</div>' +
                     '<div class="form-group">' +
                       '<button type="button" name="order" id="add-to-order">Add To Order</button>' +
                     '</div>' +
                   '</form>');
    //add listeners
    //size selection click event
    $('#size button').click(function() {
      var size = $(this).prop('name');
      $(this).addClass('size-selected');
      $(this).siblings().removeClass('size-selected');
      pizza.setSize(restaurant, size);
      $('#current-size-selection').empty();
      $('#current-size-selection').append('<li>' + size + '</li>');
      updatePrice(pizza);
    });

    //meat toppings selection click event
    $('input[type="checkbox"]').click(function() {
      var topping = $(this).val();
      if (!pizza.toppings.includes(topping)) {
        pizza.addTopping(restaurant, topping);
        $('#current-toppings-selection').empty();
        pizza.toppings.forEach(function(top) {
          $('#current-toppings-selection').append('<li>' + top + '</li>');
        });
      } else {
        pizza.removeTopping(topping);
        $('#current-toppings-selection').empty();
        pizza.toppings.forEach(function(top) {
          $('#current-toppings-selection').append('<li>' + top + '</li>');
        });
      }
      updatePrice(pizza);
    });

    $('#add-to-order').click(function() {
      restaurant.addToOrder(pizza);
      $('#form-area').empty();
      $('#current-size-selection').empty();
      $('#current-toppings-selection').empty();
      updatePrice(pizza);
      $('#current-pizza-price').text('0');
      drawOrderForm();
      $('#order-details').empty();
      restaurant.currentOrder.forEach(function(order, index) {
        $('#order-details').append('<h4>Pizza ' + (index + 1) + '</h4>' +
                                    '<p>' + order.pizzaSize + '</p>' +
                                    '<p>' + order.toppings.join(", ") + '</p><hr>');
      });
    });
  }
  drawOrderForm();

  $('#checkout').click(function() {
    $('#pizza-builder').hide();
    $('#checkout-page').show();
    restaurant.currentOrder.forEach(function(order, index) {
      $('#confirmation-page-order').append('<h4>Pizza ' + (index + 1) + '</h4>' +
                                  '<p>' + order.pizzaSize + '</p>' +
                                  '<p>' + order.toppings.join(", ") + '</p><hr>');
    });
    $('#confirmation-page-order').append('<h3>Your Total: $' + restaurant.orderTotal + ' + tax</h3>');
  });

  $('#delivery-radio').click(function() {
    $('#location-information').show();
  });

  $('#pickup-radio').click(function() {
    $('#location-information').hide();
  });

  $('#confirm-order').click(function() {
    $('#checkout-page').hide();
    $('#confirmation-page').show();
  })
});
