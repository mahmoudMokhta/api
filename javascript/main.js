





fetch('data.json')
.then((data)=>data.json())
.then((data)=>{
data.forEach(e => {

    let  color = e.color
    let  id = e.id
    let  model = e.model
    let  name = e.name
    let  price = e.price
    let  mainSrc = e.src
    let  contanImg = document.querySelector('.contan-card')
    console.log(e)
   
    
    let card = `<div class"card">
    <div class="card" style="width: 18rem;">
    <img src=${mainSrc} class="card-img-top" alt="...">
    <div class="card-body ${color}">
    <h5 class="card-title">${name}</h5>
    <h5 class="card-title">Price : ${price}</h5>
    <h5 class="card-title">Color : ${color}</h5>
    <h5 class="card-title">Model : ${model}</h5>
    >
    
    <a href="#" class="btn btn-primary">add to card</a>
    </div>
    </div>
    </div>
 `

    contanImg.innerHTML += card
   
    
    
});


    


    

})