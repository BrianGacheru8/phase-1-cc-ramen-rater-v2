// index.js

// Callbacks
img=document.querySelector(img)

const handleClick = function(ramen){
  // Add code
    document.getElementById('ramen-name').innerText = ramen.name;
    document.getElementById('ramen-image').src = ramen.image;
    document.getElementById('ramen-description').innerText = ramen.description;
    document.getElementById('ramen-rating').innerText = ramen.rating;
    document.getElementById('ramen-comments').innerText = ramen.comments
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
