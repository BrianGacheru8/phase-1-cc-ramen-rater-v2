// index.js

// Callbacks

const handleClick = function(ramen){
  // Add code
    //document.getElementById('name').innerText = ramen.name;
    //document.getElementById('detail-image').src = ramen.image;
    //document.getElementById('restaurant').innerText = ramen.restaurant;
    //document.getElementById('rating-display').innerText = ramen.rating;
    //document.getElementById('comments-display').innerText = ramen.comments
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
  fetch("http://localhost:3000/ramens")
        .then(res=>res.json())
        .then((data)=>{
           const ramens = data
           ramens.forEach((ramen)=>{
             document.getElementById('name').innerText = ramen.name;
             document.getElementById('detail-image').src = ramen.image;
             document.getElementById('restaurant').innerText = ramen.restaurant;
             document.getElementById('rating-display').innerText = ramen.rating;
             document.getElementById('comments-display').innerText = ramen.comments
             //image.addEventListener("click",handleClick(ramen) ),
             //menu.appendChild(image)})})}  

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
