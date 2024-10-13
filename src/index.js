// index.js
const handleClick = function (ramen) {
  document.getElementsByClassName('name')[0].innerText = ramen.name;
  document.getElementsByClassName('detail-image')[0].src = ramen.image;
  document.getElementsByClassName('restaurant')[0].innerText = ramen.restaurant;
  document.getElementById('rating-display').innerText = ramen.rating;
  document.getElementById('comments-display').innerText = ramen.comments;
};

const addSubmitListener = () => {
  const form = document.getElementById("new-ramen");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(form);
    const ramen = {
      name: formData.get('name'),
      image: formData.get('image'),
      restaurant: formData.get('restaurant'),
      rating: formData.get('rating'),
      comments: formData.get('comments'),
    };

    fetch("http://localhost:3000/ramens", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ramen)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error));
  });
};

const displayRamens = () => {
  fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(data => {
      const ramenMenu = document.getElementById("ramen-menu");
      ramenMenu.innerHTML = ''; // Clear existing entries

      data.forEach((ramen) => {
        const bee = document.createElement("span");
        const tee = document.createElement("img");
        tee.src = ramen.image;
        tee.alt = ramen.name;

        // Add click event to the image
        tee.addEventListener("click", () => handleClick(ramen));

        bee.appendChild(tee);
        ramenMenu.appendChild(bee);
      });
    })
    .catch(error => console.log(error));
};

const main = () => {
  displayRamens();
  addSubmitListener();
};

document.addEventListener("DOMContentLoaded", main);

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
