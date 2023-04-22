//add to basket function
function itemAdded() {
    //pop up an alert
    alert("Item has been added to your cart.");
    
    //get form elements
    const shopping_cart = document.querySelector('.shopping-cart');
    
    //compute
    shopping_cart.classList.add('active');
    let product_count = Number(shopping_cart.getAttribute('data-product-count')) || 0;
    shopping_cart.setAttribute('data-product-count', product_count + 1);
    
    //store cart item quantity in local storage
    localStorage.setItem('cartItemCount', product_count + 1);
}

//retrieve cart item quantity from local storage on page load
window.addEventListener('load', () => {
    const shopping_cart = document.querySelector('.shopping-cart');
    const cartItemCount = localStorage.getItem('cartItemCount');
    
    if (cartItemCount) {
        shopping_cart.setAttribute('data-product-count', cartItemCount);
    }
});

//empty the cart item
function emptyCart() {
	const shopping_cart = document.querySelector('.shopping-cart');
	shopping_cart.setAttribute('data-product-count', '0');
	localStorage.removeItem('cartItemCount');
	console.log("Cart emptied!");
  }
  

//sign up button
function sign_up() {
	var dialog = document.getElementById("dialog");
	dialog.style.display = "block";
}

//submit and validate the form
function submitEmail() {
	const emailInput = document.getElementById('signup-email');
	const email = emailInput.value.trim(); // remove leading/trailing white space
	const emailRegex = /^[a-zA-Z0-9]+([_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([_][a-zA-Z0-9]+)*(\.[a-zA-Z0-9]+([_][a-zA-Z0-9]+)*)+$/;
  
	if (emailRegex.test(email)) {
	  alert("Thanks for signing up with our newsletter!");
	} else {
	  alert("Please enter a valid email address. Example: jane_doe@example.com");
	}
  }
  

//sign in form validation - email
//get form elements
const form = document.getElementById('signup-form');
const emailInput = document.getElementById('signup-email');
const errorDiv = document.getElementById('error');
//form submission event handler
form.addEventListener('submit', (event) => {
	// prevent form automatic submission
	event.preventDefault(); 		
    // delete previous error messages
    const errors = form.querySelectorAll('.error');
    errors.forEach((error) => error.remove());	
	//get email input
	const email = emailInput.value;
	const emailRegex = /^[a-zA-Z0-9]+([_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([_][a-zA-Z0-9]+)*(\.[a-zA-Z0-9]+([_][a-zA-Z0-9]+)*)+$/;
	//submit if the email is in the right format
	if (emailRegex.test(email)) {
		form.submit();
	}
	//display error message if the email is in a wrong format
	else {
		const error = document.createElement('p');
		error.textContent = 'Please enter a valid email address.\nExample: jane_doe@example.com';
		error.classList.add('error');
		emailInput.parentElement.insertBefore(error, emailInput.nextElementSibling);
	}
	
});	