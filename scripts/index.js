// Add the coffee to local storage with key "coffee"

const url = `https://masai-mock-api.herokuapp.com/coffee/menu`

fetch(url).then(function(res){
    return res.json()
}).then(function(res){
    console.log(res.menu.data)
     apend(res.menu.data)
}).catch(function(err){
    console.log(err)
})


let coffeeData = JSON.parse(localStorage.getItem("coffee")) || []

 function apend(data){
    data.map(function(ele){
        let div = document.createElement("div")
        div.setAttribute("class","coffee")
        let img = document.createElement("img")
        img.setAttribute("class","img")
        img.src = ele.image;
        let title = document.createElement("h3")
        title.innerText = ele.title;
        let price = document.createElement("h3")
        price.innerText = ele.price;
        let btn = document.createElement("button")
        btn.innerText = "Add to Bucket"
        btn.setAttribute("id","add_to_bucket")
        btn.addEventListener("click", function(){
            addtobucket(ele)
        })
        div.append(img,title,price,btn)
        document.getElementById("menu").append(div)

    })
}
function addtobucket(ele){
    coffeeData.push(ele)
    localStorage.setItem("coffee",JSON.stringify(coffeeData))
    window.location.reload();
}
if(coffeeData.length == null){
    document.getElementById("coffee_count").innerHTML = 0;
}else{
    document.getElementById("coffee_count").innerHTML = (coffeeData.length);
}