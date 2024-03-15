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

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.delete-quote-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const quoteId = this.getAttribute('data-quote-id');
            
            fetch(`/api/quotes/${quoteId}`, {
                method: 'DELETE',
                credentials: 'include'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete quote');
                }
                window.location.href = '/dashboard';
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    });
});