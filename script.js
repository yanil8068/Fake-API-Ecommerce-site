fetch('https://fakestoreapi.com/products').then((data)=>{
// console.log(data);
return data.json();

}).then((completedata)=>{
    // console.log(completedata);
    let data1="";
    completedata.map((values)=>{
        data1+=`<div class="card">
        <h1 class="title">${values.title}</h1>
        <img
          src=${values.image}
          alt="img"
          class="images"
        />
        <p>${values.description}</p>
        <p class="category">
        ${values.category}</p>
        <p class="price">${"₹ "+values.price}</p>
        <button class="btn1" onclick="fun()">${"buy me"}</button>
        <button class="btn2" onclick="fun()">${"Add to cart"}</button>
      </div>`
    });
    document.getElementById("cards").innerHTML=data1;


}).catch((err)=>{
    console.log(err);
})
var icon = document.getElementById('icon');
var navUl = document.querySelector('nav ul');
icon.addEventListener('click', function() {
    navUl.classList.toggle('show');
});





function fun() {
  window.open("product.html")
}