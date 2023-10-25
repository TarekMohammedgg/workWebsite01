document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');
    const loadMoreButton = document.getElementById('load-more-button');
    let visibleCards = 3; // Number of cards initially visible
    const totalCards = projectCards.length;

    // Function to toggle visibility of cards
    function toggleCards() {
        for (let i = 0; i < totalCards; i++) {
            if (i < visibleCards) {
                projectCards[i].style.display = 'block';
            } else {
                projectCards[i].style.display = 'none';
            }
        }
    }

    // Initial toggle
    toggleCards();

    // Click event for "Load More" button
    loadMoreButton.addEventListener('click', function () {
        visibleCards += 3; // Increase the number of visible cards
        if (visibleCards >= totalCards) {
            // If all cards are visible, hide the "Load More" button
            loadMoreButton.style.display = 'none';
        }
        // Toggle the visibility of cards based on the new count
        toggleCards();
    });
});
