// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 4.76
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 33.333333333
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];
let shoppingList = "";
let totalPrice = 0;
document.getElementById("count_product").innerHTML = 0;

// Exercise 1
function buy(id) {
    const productFind = products.find( (product) => product.id === id );
    cartList.push(productFind);
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 2
function cleanCart() {
    cartList = [];
    cart = [];
    shoppingList = "";
    totalPrice = 0;
    totalQuantity = 0;
    document.getElementById("total_price").innerHTML = totalPrice;
    document.getElementById("cart_list").innerHTML = 
        `<tr>
            <th scope="row" class="border border-0">Empty</th>
        </tr>`;
    document.getElementById("count_product").innerHTML = totalQuantity;

}

// Exercise 3
function calculateTotal() {
    let counter = 0;
    totalPrice = 0;

    addToCart()
    
    for ( counter; counter < cart.length; counter++ ) {
        totalPrice += cart[counter].subtotalWithDiscount;
    }
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
function generateCart() {
    cart = [];

    for ( let i = 0; i < cartList.length; i++ ) {
        let product = cartList[i];
        let found = false;
        for ( let j = 0; j < cart.length; j++ ) {
            if ( cart[j] === product ) {
                cart[j].quantity++;
                found = true;
                break;
            }
        }
        if ( !found ) {
            product.quantity = 1; 
            cart.push( product );
        }
        applyPromotionsCart(cart)
    }
}
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.


// Exercise 5
function applyPromotionsCart(cart) {
    cart.forEach( function (product) {
        const subtotal = product.price * product.quantity;

        if ( product.offer ) {

            if ( product.offer.number === 3 && product.quantity >= 3 || 
                product.offer.number === 10 && product.quantity >= 10 ) {
                let discount = ( subtotal * product.offer.percent ) / 100;
                discount = discount.toFixed(2)
                product.subtotalWithDiscount = subtotal - discount;
            }
            else {
                product.subtotalWithDiscount = subtotal
            }
        }
        else {
            product.subtotalWithDiscount = subtotal
        }
    })
    // Apply promotions to each item in the array "cart"
}

// Exercise 6
function printCart() {
    calculateTotal();
    
    shoppingList = cart.map ( function (product) {
        return  `<tr>
                <th scope="row">${product.name}</th>
                <td>$${product.price}</td>
                <td>${product.quantity}</td>
                <td>$${product.subtotalWithDiscount}</td>
                <td><a type="button" onclick="removeFromCart(${product.id})">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    </a></td>
                </tr>`;
    } );

    document.getElementById("cart_list").innerHTML = shoppingList.join("<br>");

    cart.length === 0 ? 
        document.getElementById("total_price").innerHTML = 0 : 
        document.getElementById("total_price").innerHTML = `${totalPrice}`;
}
    // Fill the shopping cart modal manipulating the shopping cart dom


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    for ( let i = 0; i < products.length; i++ ) {
        if ( products[i].id === id ) {

            let product = products[i];
            let findProduct = cart.includes(product);

            if ( findProduct ) {
                product.quantity++;
            }
            else {
                product.quantity = 1;
                cart.push(product);
            }
        }
        applyPromotionsCart(cart)
    }
    
    let totalQuantity = 0;

    for ( let counter = 0; counter < cart.length; counter++ ) {
        totalQuantity += cart[counter].quantity;
        document.getElementById("count_product").innerHTML = totalQuantity;
    }
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 9
function removeFromCart(id) {
    for ( let i = 0; i < cart.length; i++ ) {
        //const product = cart[i];
        //const removeProduct = product.id === id && product.quantity;
        
        if ( cart[i].id === id ) {
            
            if (cart[i].quantity > 1) {
                cart[i].quantity--;
            }

            else {
                cart.splice(i, 1);
                i--;
            }
        } 
    }

    printCart();

    cart.length === 0 ? 
        document.getElementById("count_product").innerHTML = 0 : false;
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}