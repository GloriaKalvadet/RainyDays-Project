const form = document.querySelector('#form');
console.log(form);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fullName = document.getElementById('fname').value;
  const email = document.getElementById('email').value;
  const category = document.querySelector('input[name="buttons"]:checked').nextSibling.textContent;
  const country = document.getElementById('country').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  console.log(`Full Name: ${fullName}`);
  console.log(`Email: ${email}`);
  console.log(`Category: ${category}`);
  console.log(`Country: ${country}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
});




const products = [
  {
    name: "Men's Sweater Weather",
    price: 128,
    image: "images/RainyDays_Jacket3.png",
    sizes: ["XS", "S", "M", "L", "XL"],
    quantity: 1
  }
];

const productList = document.querySelector(".products");

for (let i = 0; i < products.length; i++) {
  const product = products[i];
  
  const productItem = document.createElement("div");
  productItem.classList.add("product-item");
  
  const productImage = document.createElement("img");
  productImage.src = product.image;
  productItem.appendChild(productImage);
  
  const productName = document.createElement("h3");
  productName.textContent = product.name;
  productItem.appendChild(productName);
  
  for (let j = 0; j < product.sizes.length; j++) {
    const size = product.sizes[j];
    const sizeElement = document.createElement("h3");
    sizeElement.classList.add("sizes");
    sizeElement.textContent = size;
    productItem.appendChild(sizeElement);
  }
  
  const productPrice = document.createElement("p");
  productPrice.classList.add("price");
  productPrice.textContent = "EUR " + product.price;
  productItem.appendChild(productPrice);
  
  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("CTA");
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.addEventListener("click", function() {
    addToCart(product);
  });
  productItem.appendChild(addToCartButton);
  
  productList.appendChild(productItem);
}

const cart = {
  totalItems: 0,
  totalPrice: 0,
  items: []
};


function addToCart(product) {
  cart.totalItems += 1;
  cart.totalPrice += product.price;
  
  const item = {
    name: product.name,
    price: product.price,
    size: "",
    quantity: 1
  };
  
  const existingItem = cart.items.find(function(item) {
    return item.name === product.name && item.size === item.size;
  });}




  fetch('https://rainy-days.casa/wp-json/wp/v2/products')
  .then(response => response.json())
  .then(data => {
    console.log(data); 
  });


  fetch('https://rainy-days.casa/wp-json/wp/v2/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('The network response was wrong');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // or do something else with the data
  })
  .catch(error => {
    console.error('There was a problem with the API request:', error);
  });
