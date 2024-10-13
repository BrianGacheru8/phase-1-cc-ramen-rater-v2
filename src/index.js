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
             Object.entries(data).forEach((ramen)=>{
             let bee=document.createElement("span")
             let tee=document.createElement("img"),
             let menu=document.getElementById("ramen-menu"),
             tee.src=ramen.image,
             tee.alt=ramen.name,
             bee.appendChild=tee, 
             menu.appendChild(bee),  
             document.queryselector("img").addEventListener("click",handleClick(ramen))          
            }))}  

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
