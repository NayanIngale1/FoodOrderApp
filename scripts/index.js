var menu = document.getElementById("menu");

const url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";


    let cartArr = JSON.parse(localStorage.getItem("cart")) || [];



async function getData() {
    try {
        let res = await fetch(url);
        // console.log('res:', res)
        let data = await res.json();
        console.log('data:', data.meals)

        appendproduct(data.meals);
    }
    catch (err) {
        console.log('err:', err)
        
    }
 
}

getData();
updateCart(cartArr);

function appendproduct(data) {


    menu.innerHTML = "";

    data.map(function (el) {

        // console.log(el)
        let div = document.createElement("div");

        div.setAttribute("class", "card");
        
        let img = document.createElement('img');
        img.src = el.strMealThumb;

        let name = document.createElement('h2');
        name.innerText = el.strMeal;

        let price = document.createElement('p');
        
        let x = Math.floor(Math.random() *(500-50) +50)
        price.innerText = `Price : ₹ ${x} `;
        el.price = x;
        // console.log('price:', price);

        let btn = document.createElement('button');
        btn.className = "btn";
        btn.addEventListener("click", function () {
            addtocart(el);
        });
        btn.innerText = 'Add to Cart';

        div.append(img, name, price, btn);
        menu.append(div);



    })




    function addtocart(el) {
        cartArr.push(el);
        console.log('cartArr:', cartArr);

        localStorage.setItem("cart", JSON.stringify(cartArr));
        updateCart(cartArr);
    }

}
 function updateCart(arr){
//    console.log('arr:', arr)
//      let total = arr.forEach(function(acc,el){
//        return acc + el.price
//    });

//    console.log("total:", total);
   document.getElementById("count").innerHTML = `<b>Items : ${arr.length}</b>`;
 }