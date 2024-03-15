 // I want to add a remove button to each liked quote
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn");
    removeButton.onclick = () => {
        removeFromFavorites(item);
        removeModal();
    };




 // Function to show modal when remove button is clicked
 function removeModal() {
    var modal = document.getElementById("removeModal");
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.display = "none";
    }, 1000); // Hide modal after 1 second
}

