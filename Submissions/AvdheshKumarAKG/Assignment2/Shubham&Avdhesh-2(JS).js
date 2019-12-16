//defining buttons and container
var container = document.createElement("div");
var but1 = document.createElement("button");
var but2 = document.createElement("button");
var but3 = document.createElement("button");
var but4 = document.createElement("button");
var but5 = document.createElement("button");


//Defining Each buttons
but1.innerHTML="Header";
but2.innerHTML="Main 1"
but3.innerHTML="Main 2"
but4.innerHTML="Footer"
but5.innerHTML="Sidebar"


//Defining grid area
but1.style.gridArea = "header"
but2.style.gridArea = "main1"
but3.style.gridArea = "main2"
but4.style.gridArea = "footer"
but5.style.gridArea = "sidebar"


//Designing the container
container.style.background = "mistyrose"

container.style.display = "grid"
container.style.gridTemplateAreas = '"header header header header header header" "main1 main1 main2 main2 sidebar sidebar" "footer footer footer footer sidebar sidebar"'
container.style.gridGap = "10px";
container.style.textAlign = "center"
container.style.margin = "0px"
container.style.padding = "20px"
document.body.style.margin = "0px"


//Appending
container.appendChild(but1)
container.appendChild(but2)
container.appendChild(but3)
container.appendChild(but4)
container.appendChild(but5)
document.body.appendChild(container);



let x = document.querySelectorAll("button")


for(let i of x){

    i.style.background = "white";
    i.style.fontSize="50px"
    i.style.padding = "20px";

}
/*function react(){
    console.log("you just pressed me")
    alert ("you just touched me"); 

}
but1.addEventListener("click",react)
*/

but1.addEventListener("click",()=>{
    console.log("you just pressed me")
    alert ("you just touched me");
})

/*just for guidance for developer
document.querySelector("#ulelement").addEventListener('click',()=>{
    console.log('event here in bubbling phase');
});

document.querySelector("#secondListItem").addEventListener('click',()=>{
    console.log('event here in capturing phase');
},true);
*/
