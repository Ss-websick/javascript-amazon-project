
// Normalizing the data OR you can say deduplicating the data
export let cart = JSON.parse(localStorage.getItem('cart'));

/* To remove from localStorage use console and type "localStorage.removeItem('cart')" */
 
if (!cart) {
  cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    deliveryOptionId: '1'
  }, {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
    deliveryOptionId: '2'
  }];
}

// localStorage can only saves strings.
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


// now this variable is available outside the cart.js file
export function addToCart(productId, selectedElementValue) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: selectedElementValue,
      deliveryOptionId: '1'
    });
  }

  saveToStorage();
 }

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    cart = newCart;

    saveToStorage();
  }

  export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
    // why? because we are updating the cart.
  }