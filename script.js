//your JS code here. If required.
const boxes=document.querySelectorAll(".square")
   for(let box of boxes){
    box.addEventListener("mouseover",(e)=>addbgcolor(e))
    box.addEventListener("mouseout",(e)=>defalt())
   }
   function addbgcolor(e){
    const selected=e.target.id
    for(let i=0;i<boxes.length;i++){
        if(boxes[i].id!==selected){
            boxes[i].style.backgroundColor="green"
        }
    }
   }
   function defalt(){
    for(let box of boxes){
        box.style.backgroundColor="black"
    }
   }