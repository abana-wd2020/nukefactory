"use-strict"

 var cursor1 = document.querySelector(".cursor");
 var cursorInner = document.querySelector(".cursor-inner");


 document.addEventListener("mousemove", function (e){
     var x = e.clientX;
     var y = e.clientY;

     cursor1.style.left = x + "px";
     cursor1.style.top = y + "px";
 })
 document.addEventListener("mousemove", function (e){
    var x = e.clientX;
    var y = e.clientY;

    cursorInner.style.left = x + "px";
    cursorInner.style.top = y + "px";
})
document.addEventListener("mousedown", function(){
    cursorInner.classList.add("click");
})
document.addEventListener("mouseup", function(){
    cursorInner.classList.remove("click");
})