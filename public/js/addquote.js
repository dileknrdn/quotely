 // Function to show modal when like button is clicked
 function likeModal() {
    var modal = document.getElementById("likeModal");
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.display = "none";
    }, 1000); // Hide modal after 1 second
}
// Creates the like button dynamically
let likeButton = document.createElement("button");
//favoriteButton.innerHTML = '<i class="fas fa-heart favorite-btn"></i>';
likeButtonButton.classList.add("favorite-btn");
likeButton.onclick = () => {
    addToFavorites(item);
    likeModal();
};