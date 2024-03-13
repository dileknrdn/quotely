 // Creates the like button dynamically
 let likeButton = document.createElement("button");
 //favoriteButton.innerHTML = '<i class="fas fa-heart favorite-btn"></i>';
 likeButtonButton.classList.add("favorite-btn");
 likeButton.onclick = () => {
     addToFavorites(item);
     likeModal();
 };

 // I want to add a remove button to each liked quote
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn");
    removeButton.onclick = () => {
        removeFromFavorites(item);
        removeModal();
    };


  // Function to show modal when like button is clicked
 function likeModal() {
     var modal = document.getElementById("likeModal");
     modal.style.display = "block";
     setTimeout(() => {
         modal.style.display = "none";
     }, 1000); // Hide modal after 1 second
 }

 // Function to show modal when remove button is clicked
 function removeModal() {
    var modal = document.getElementById("removeModal");
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.display = "none";
    }, 1000); // Hide modal after 1 second
}

 // Function to add snippet to favorites section on HTML page using server storage
 //function addToFavorites(item) {
     // Retrieves existing favorites from the local storage
     //let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

     // Checks if the item is already in favorites and prevents duplicate from being added
     //if (!favorites.some(fav => fav.url === item.url)) {
         // Adds the article to the favorites section using article description and url data taken from the JSON object
         //favorites.push({ description: item.description, url: item.url });
         // Update local storage with the newest favorites 
         //localStorage.setItem('favorites', JSON.stringify(favorites));
         // Refreshes the favorites container with updated favorites
         //showFavoritesContainer();
     //}
 //}

 // Function to display favorites in the "favorite news" section of the application
 //function showFavoritesContainer() {
    // let favoritesData = JSON.parse(localStorage.getItem('favorites')) || [];
     //let favoritesContainer = document.getElementById("favorite");
     //favoritesContainer.innerHTML = ""; // Clears out the previous content of the favorites section

     //favoritesData.forEach((fav, index) => {
         // Creates a div dynamically to contain each favorite article
         //let favoriteContainer = document.createElement("div");
         //favoriteContainer.id = `favorite-${index + 1}`;

         // Creates a span to display the favorite article's description
         //let favoriteElement = document.createElement("span");
         //favoriteElement.innerHTML = fav.description;

         // Creates a "Read More" link to allow the user to read the full article
         //let readMoreLink = document.createElement("a");
         //readMoreLink.href = fav.url;
         //readMoreLink.target = "_blank"; // Opens the full article in a new tab
         //readMoreLink.textContent = "Read More";
         
         // Appends elements to the favorite container to allow the list to expand
         //favoriteContainer.appendChild(favoriteElement);
         //favoriteContainer.appendChild(document.createElement("br"));
         //favoriteContainer.appendChild(readMoreLink);

         // Appends the favorites container to the favoritesContainer div
         //favoritesContainer.appendChild(favoriteContainer);
         //favoritesContainer.appendChild(document.createElement("hr")); // Adds a horizontal line between favorites
    // });
// }

 // Function to clear the favorites in local storage
 //function clearFavorites() {
     //localStorage.removeItem('favorites');
     // Refreshes the favorites container
     //showFavoritesContainer();
 //}