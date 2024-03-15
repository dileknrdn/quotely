 
 
// Function to remove a quote from the dashboard
function removeFromFavorites(item) {
    // Send a POST request to the API endpoint
    fetch(`/api/quotes/${item.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Failed to delete quote");
        })
        .then((data) => {
            console.log(data);
            location.reload();
        })
        .catch((error) => {
            console.error(error);
        });
}




 
 // Function to show modal when remove button is clicked
 function removeModal() {
    var modal = document.getElementById("removeModal");
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.display = "none";
    }, 1000); // Hide modal after 1 second
}

 // I want to add a remove button to each liked quote
 let removeButton = document.createElement("button");
 favoriteButton.innerHTML = '<button class="remove-button"></button>';
 removeButton.classList.add("remove-btn");
 removeButton.onclick = () => {
     removeFromFavorites(item);
     removeModal();
 };
