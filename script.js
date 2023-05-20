const progress = document.getElementById('progress')
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll('.circle')


//To move the pages higher
let currentActive = 1;
next.addEventListener('click', ()=> {
    currentActive++
 
    //to prevent perpetual increase
    if (currentActive > circles.length){
        currentActive = circles.length
    } 
    Update()   
})

//to go backward
prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  Update();  
});


//this function ensures the clicked circles take on the properties of the active class
function Update(){
    circles.forEach((circle, idx)=>{
        if(idx < currentActive){
          circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    
//to make the lines move
const actives = document.querySelectorAll('.active')

progress.style.width =((actives.length -1)/ (circles.length -1)) * 100 + '%'
 
if(currentActive ===1){
    prev.disabled = true
}else if(currentActive === circles.length){
    next.disabled = true
}
else{
    prev.disabled = false
    next.disabled = false
}
}