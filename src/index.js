// index.js

// Callbacks

const handleClick = function(ramen){
  // Add code
    document.getElementById('name').innerText = ramen.name;
    document.getElementById('detail-image').src = ramen.image;
    document.getElementById('restaurant').innerText = ramen.restaurant;
    document.getElementById('rating-display').innerText = ramen.rating;
    document.getElementById('comments-display').innerText = ramen.comments
   }    
          
const addSubmitListener = () => {
  // Add code
  const form=document.getElementbyId("new-ramen")
  form.addEventlistener("submit",(){
    

const displayRamens = () => {
  // Add code
  fetch(http://localhost:3000)
        .then(res=>res.json())
        .then(data=>ramens)
   ramens.forEach((ramen)=>{
    menu=document.getElementbyId("ramen-menu")
    img=document.createElement(img)
    img.src=ramen.image
    img.alt=ramen.name
    menu.appendChild(img)
    img.addEventListener("click",handleClick(ramen) })
}  

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens()
  addSubmitLIstener()
}

document.addEventListener("DOMContent-loaded",main())

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
