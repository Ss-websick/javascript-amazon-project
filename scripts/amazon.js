// an array represents a list

// .toFixed(2) will convert the number into a string and it will show two numbers after decimal point

// Data Structure => Organizes the data

// Accumulator Pattern
// Combining HTML Together
let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
  <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed()} 
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
    `; 

});

// Putting the HTML on the web page (using the DOM)
document.querySelector('.js-products-grid').innerHTML = productsHTML;
/* 
 How do we know which product to add?
 Data Attribute 
 -is just another HTML attribute
 -allows us to attach any information to an element 
 */

/*  
 Data Attribute Syntax
 -> name on left and value on right.
 -> Have to start with "data-"
 -> data-product-name="${product.name}"
 -> data-product-image="${product.image}"
 -> data-product-price="${product.priceCents}" 
 */
document.querySelectorAll('.js-add-to-cart')
 .forEach((button) => {
  button.addEventListener('click', () => {
    // dataset property gives us all the data attributes that are attached to this button 
      const productId = button.dataset.productId;
      
      let matchingItem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1
        });
      }

      console.log(cart);
  });
 });

