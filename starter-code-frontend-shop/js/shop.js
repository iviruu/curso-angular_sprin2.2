


var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
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
            percent: 30
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




var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    let producto = products.find(producto => producto.id === id)
    let productoInCart = cart.find(item => item.id === id)
    if (productoInCart) {
        productoInCart.cantidad ++;
    }
    else {
        cart.push({ ...producto, cantidad: 1 });
    }
}

// Exercise 2
function cleanCart() {
    cart=[]
}

// Exercise 3
function calculateTotal() {
    let total = 0;

    for(let i= 0 ; i < cart.length; i ++) {
        const producte = cart[i] ; 
        total += producte.price * producte.cantidad;
    }
    return total;
}

// Exercise 4
function applyPromotionsCart() {
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const product = products.find(product => product.id === item.id);
        if (product.offer && item.cantidad >= product.offer.number) {
            const discountedPrice = product.price * (1 - product.offer.percent / 100);
            item.price = discountedPrice;
        } else {
            item.price = product.price; 
        }
    }
}
// Exercise 5
function printCart() {
    const cartList = document.getElementById("cart_list");
    cartList.innerHTML = ''; 

    cart.forEach(product => {
        const subtotal = product.price * product.cantidad;
        const row = cartList.insertRow();
        
        const cellProduct = row.insertCell(0);
        cellProduct.textContent = product.name;
        
        const cellPrice = row.insertCell(1);
        cellPrice.textContent = `$${product.price.toFixed(2)}`;
        
        const cellQuantity = row.insertCell(2);
        cellQuantity.textContent = product.cantidad;
        
        const cellTotal = row.insertCell(3);
        cellTotal.textContent = `$${subtotal.toFixed(2)}`;
    });

    const total = calculateTotal(); 
    document.getElementById('total_price').textContent = total.toFixed(2);
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
        if (cart[index].cantidad > 1) {
            cart[index].cantidad--;
        } else {
            cart.splice(index, 1);
        }
    }
}

function open_modal() {
    printCart();
};




