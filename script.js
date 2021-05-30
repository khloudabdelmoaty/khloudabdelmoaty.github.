var images =Array.from( document.querySelectorAll(".item img"));
var box = document.querySelector(".box ");
var change =document.querySelector(".box div ");

// console.log(images);
// console.log(change);

for(var i =0 ;i < images.length;i++)
{

    images[i].addEventListener("click",show)
}

function show(e)
{
   var imgsrc =e.target.src;
    console.log(imgsrc);
    var imgindex = 0;

    
// box.firstElementChild.style.backgroundimage="url(" + " src"  +"))";
// change.firstElementChild.style.backgroundImage="url(" + src  +")";
// imgindex=images.indexOf(e.target);
box.style.transform="scale(1,1)";
// change.style.background="red";
change.style.backgroundImage="url(" + imgsrc  +")";
// change.style.background="red";
// console.log("kkkkkkkkkkkkk");

} 
function hide()
{
    box.style.transform="scale(0,0)";
}