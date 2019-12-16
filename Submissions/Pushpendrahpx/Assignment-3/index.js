// ------- Data Set Defining --------
class obj{
    constructor(name,src,count = 0){
        this.name = name
        this.src = src
        this.count = count
    }
 inc(){
        this.count++;
    }
}
var img1 = new obj("Dog","assets/download1.jpeg")
var img2 = new obj("Cat","assets/download2.jpeg")
var img3 = new obj("Elephant","assets/download3.jpeg")
var img4 = new obj("Tiger","assets/download4.jpeg")

var btn1 = document.querySelector("#dog")
var btn2 = document.querySelector("#cat")
var btn3 = document.querySelector("#elephant")
var btn4 = document.querySelector("#tiger")
var img = document.querySelector("#img")
var title = document.querySelector("#name")
var count = document.querySelector("#count")
var total = document.querySelector("#total_count")
var tc = 0;
total.innerHTML = tc;
btn1.addEventListener("click",()=>{
    img.setAttribute("src",img1.src)
    title.innerHTML = (img1.name)
    img1.inc()
    tc++
    total.innerHTML = tc;
    count.innerHTML = (img1.count)
})
btn2.addEventListener("click",()=>{
    img.setAttribute("src",img2.src)
    title.innerHTML = (img2.name)
    img2.inc()
    tc++
    total.innerHTML = tc;
    count.innerHTML = (img2.count)
})
btn3.addEventListener("click",()=>{
    img.setAttribute("src",img3.src)
    title.innerHTML = (img3.name)
    img3.inc()
    tc++
    total.innerHTML = tc;
    count.innerHTML = (img3.count)
})
btn4.addEventListener("click",()=>{
    img.setAttribute("src",img4.src)
    title.innerHTML = (img4.name)
    img4.inc()
    tc++
    total.innerHTML = tc;
    count.innerHTML = (img4.count)
})


// setting default Behaviour
img.setAttribute("src",img1.src)
    title.innerHTML = (img1.name)
    // img1.inc()
    count.innerHTML = (img1.count)
