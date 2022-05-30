// On clicking remove button the item should be removed from DOM as well as localstorage.


let coffeeData = JSON.parse(localStorage.getItem("coffee"));

let total = 0;
coffeeData.map(function(ele){
    total = total + ele.price;
})
document.getElementById("total_amount").innerHTML = total;

    coffeeData.map(function(ele,index){
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
        btn.innerText = "Remove"
        btn.setAttribute("id","remove_coffee")
        btn.addEventListener("click", function(){
            remove(ele,index)
        })
        div.append(img,title,price,btn)
        document.getElementById("bucket").append(div)

    })

function remove(ele,index) {
    coffeeData.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(coffeeData))
    window.location.reload();
}
