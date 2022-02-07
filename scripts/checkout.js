

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your Order Accepted !");
    orderCooked();
    orderReady();
    OrderOut();
    OrderDelivered();
    cartEmpty();
})

function orderCooked() {
    
    setTimeout(function () {
    alert("Your order is being cooked ");
},3000)

   
}
  
function orderReady() {
    setTimeout(function () {
        alert("Your order is ready");
    }, 8000)
    
}

function OrderOut() {
    setTimeout(function () {
        alert("Order out for delivery");
    },10000)
}

function OrderDelivered() {
    setTimeout(function () {
        alert("Order delivered");
         window.location.href = "index.html";
    }, 12000)
    
   
}

function cartEmpty() {
    cartArr = [];
    localStorage.setItem("cart", JSON.stringify(cartArr));
}

