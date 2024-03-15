 // Function to add a quote to the dashboard
    function addToFavorites(item) {
        // Send a POST request to the API endpoint
        fetch(`/api/quotes`, {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to add quote");
            })
            .then((data) => {
                console.log(data);
                location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    }
    
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
likeButton.innerHTML = '<button class="add-button"></button>';
likeButtonButton.classList.add("favorite-btn");
likeButton.onclick = () => {
    addToFavorites(item);
    likeModal();
};