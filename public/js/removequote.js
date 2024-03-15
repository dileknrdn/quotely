console.log("removequote.js is connected"); 
 
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
 removeButton.innerHTML = '<button class="remove-button"></button>';
 removeButton.classList.add("remove-btn");
 removeButton.onclick = () => {
     removeFromFavorites(item);
     removeModal();
 };
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
