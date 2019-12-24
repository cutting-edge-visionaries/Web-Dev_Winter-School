//creating each entity
var container1=document.createElement("div")
var title=document.createElement("div")
var picPlace=document.createElement("img")
var but1=document.createElement("button")
var but2=document.createElement("button")
var but3=document.createElement("button")
var but4=document.createElement("button")
var counteach=document.createElement("div")
var counttotal=document.createElement("div")

//defining each entity
but1.innerHTML="TIGER"
but2.innerHTML="Lion"
but3.innerHTML="Peacock"
but4.innerHTML="Monkey"
counteach.innerHTML="Each clicks count:"+ce1;
counttotal.innerHTML="Total counts:"+ct;

//defining grid area
title.style.gridArea= "T"
picPlace.style.gridArea= "P"
but1.style.gridArea="B1"
but2.style.gridArea="B2"
but3.style.gridArea="B3"
but4.style.gridArea="B4"
counteach.style.gridArea="CE"
counttotal.style.gridArea="CT"


//designing of container1
container1.style.background = "grey";
container1.style.display ="grid";
container1.style.gridTemplateAreas ='"T T T T" "P P P P" "B1 B2 B3 B4" "CE CE CT CT"';                                     
container1.style.textAlign = "center";
container1.style.margin="10px";
container1.style.padding = "20px";
document.body.style.margin = "10px";


//appending


container1.appendChild(picPlace)
container1.appendChild(but1)
container1.appendChild(but2)
container1.appendChild(but3)
container1.appendChild(but4)
container1.appendChild(counteach)
container1.appendChild(counttotal)
document.body.appendChild(container1)
picPlace.height=200;
picPlace.width=300;
picPlace.style.position="relative";
picPlace.style.left="500px";
//designing buttons 
let x = document.querySelectorAll("button")
for(let i of x){
   i.style.background = "orange";
    i.style.fontSize="30px";
}
counteach.style.background="yellow";
counttotal.style.background="yellow";
counteach.style.fontSize="30px";
counttotal.style.fontSize="30px";

//adding actoin listener in CE and appending image to pic[]
var ce1=0,ce2=0,ce3=0,ce4=0,ct=0;

but1.addEventListener("click",()=>{
    ce1++;ct++;    
    picPlace.src="images/img1.jxr";
    counteach.innerHTML="Each clicks count:"+ce1;
    counttotal.innerHTML="Total counts:"+ct;
    title.innerHTML="Tiger";
    title.style.fontSize="30px";

})
    
but2.addEventListener("click",()=>{
    ce2++;ct++;    
    picPlace.src="images/img2.jpg";
    counteach.innerHTML="Each clicks count:"+ce2;
    counttotal.innerHTML="Total counts:"+ct;
    title.innerHTML="Lion";
    title.style.fontSize="30px";

})

but3.addEventListener("click",()=>{
    ce3++;ct++;    
    picPlace.src="images/img3.jpg";
    counteach.innerHTML="Each clicks count:"+ce3;
    counttotal.innerHTML="Total counts:"+ct;
    title.innerHTML="peacock";
    title.style.fontSize="30px";

})

but4.addEventListener("click",()=>{
    ce4++;ct++;    
    picPlace.src="images/img4.jpg";
    counteach.innerHTML="Each clicks count:"+ce4;
    counttotal.innerHTML="Total counts:"+ct;
    title.innerHTML="Monkey";
    title.style.fontSize="30px";

  })
container1.appendChild(title);
/*
var pic =new Array();
pic.forEach(Element => {new Image(800,300)})
pic[0].src="/all.jpg";
*/