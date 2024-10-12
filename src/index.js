// index.js
const handleClick = function(ramen){
    document.getElementByClass('name').innerText = ramen.name;
    document.getElementByClass('detail-image').src = ramen.image;
    document.getElementByClass('restaurant').innerText = ramen.restaurant;
    document.getElementById('rating-display').innerText = ramen.rating;
    document.getElementById('comments-display').innerText = ramen.comments
   }    
          
const addSubmitListener = () => {
  // Add code
  const form=document.getElementById("new-ramen")
  form.addEventListener("submit",()=>{
    fetch(("http://localhost:3000/ramens"),{
          method:"POST",
          headers:{"Content-type":"application/json"},
          body:json.stringify(form)})
     .then(console.log(res))
     .catch(error=>console.log(error))
    event.preventDefault()})}
  
                  
const displayRamens = () => {
  // Add code
  fetch("http://localhost:3000/ramens",)
        .then(res=>res.json())
        .then((data)=>{
             data.forEach((ramen)=>{
             const image=document.createElement("img")
             const menu=document.getElementById("ramen-menu")
             image.src=ramen.image
             image.alt=ramen.name
             image.addEventListener("click",handleClick(ramen) ),
             menu.appendChild(image)
           })})}  

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens()
  addSubmitListener()
}

document.addEventListener("DOMContentLoaded",main)

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
