 // Function to show modal when like button is clicked
 function likeModal() {
    var modal = document.getElementById("likeModal");
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.display = "none";
    }, 1000); // Hide modal after 1 second
}
// Creates the like button dynamically
// let likeButton = document.createElement("button");
// //favoriteButton.innerHTML = '<i class="fas fa-heart favorite-btn"></i>';
// likeButtonButton.classList.add("favorite-btn");
// likeButton.onclick = () => {
//     addToFavorites(item);
//     likeModal();
// };


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.add-quote-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const quoteId = this.getAttribute('data-quote-id');
            console.log('Quote ID:', quoteId);
            
            
            fetch(`/api/quotes/${quoteId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch quote data');
                    }
                    return response.json();
                })
                .then(quoteData => {
                    return fetch('/api/quotes', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ 
                            quoteData: {
                                quote: quoteData.quote,
                                author: quoteData.author
                            } 
                        }), 
                        credentials: 'include' 
                    });
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to post quote data');
                    }
                    return response.json(); 
                })
                .then(data => {
                    console.log('Quote saved:', data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    });
});