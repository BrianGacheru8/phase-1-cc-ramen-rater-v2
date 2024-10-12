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
  
document.queryselector(img).addEventListener("click",handleClick())    
    
const addSubmitListener = () => {
  // Add code
  const form=document.getElementbyId("new-ramen")
  form.addEventlistener("submit",(){
    newname=document.getElementbyId("new-name").value
    newrest=document.getElementbyId("new-restaurant").value
    newimg=document.getElementbyId("new-image").value
    newrate=document.getElementbyId("new-rate").value
    newcommt=document.getElementbyId("new-comment").value
}

const displayRamens = () => {
  // Add code
  fetch(http://localhost:3000)
        .then(res=>res.json())
        .then(data=>console.log(data))
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
