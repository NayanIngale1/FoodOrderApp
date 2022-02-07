let cartArr = JSON.parse(localStorage.getItem("cart")) || [];

let cart = document.getElementById("cart");

let displayTotal = document.getElementById("total");

appendproduct(cartArr);
findtotal(cartArr);

function appendproduct(array) {
  cart.innerText = "";

  array.map(function (el,index) {
    // console.log('el:', el)

    div = document.createElement("div");
    div.className = "card";

    let img = document.createElement("img");
    img.src = el.strMealThumb;

    let name = document.createElement("h2");
    name.innerText = el.strMeal;

    let price = document.createElement("p");

    price.innerText = `₹ ${el.price} `;

    let btn = document.createElement("button");
    btn.className = "btn";
    btn.addEventListener("click", function () {
      removeFromcart(index);
    });
    btn.innerText = "Remove";

    div.append(img, name, price, btn);
    cart.append(div);
  });
}


function findtotal(arr) {
  let total = arr.reduce(function (acc, curr) {
    return acc + curr.price;
  }, 0);
  // console.log("total:", total);
    displayTotal.innerText = `Total : ₹ ${total}`;
}


function removeFromcart(i) {
    console.log('i:', i)
    
    cartArr.splice(i, 1);
    console.log('cartArr:', cartArr)
    
    findtotal(cartArr);
    appendproduct(cartArr);
    localStorage.setItem("cart", JSON.stringify(cartArr));
}
  

document.getElementById("checkbtn").addEventListener("click", function () {
    window.location.href = "checkout.html"
})

