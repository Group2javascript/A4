document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchBtn");
    searchButton.addEventListener("click", searchMovieReviews);
});

function searchMovieReviews() {
    const userInput = document.getElementById("userInput").value;
    const results = document.getElementById("results");
    results.innerHTML = "";

    const movieKey = "AoxyJoH6EXppfqnXU3nGnYDHMsGzANMK";
    const movieUrl = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${movieKey}&query=${userInput}`;

    fetch(movieUrl)
        .then(response => response.json())
        .then(data => {
            const reviews = data.results;
            if (reviews.length === 0) {
                results.innerHTML = "<p>Sorry! Unable to find a result for that movie!!!</p>";
            } else {
                const ul = document.createElement("ul");
                reviews.forEach(review => {
                    const li = document.createElement("li");
                    li.innerHTML = `<strong>${review.display_title}</strong><br>Publication Date: ${review.publication_date}<br>${review.summary_short}`;
                    ul.appendChild(li);
                    li.style.color = 'white';
                    li.style.lineHeight = '25px';

                });
                results.appendChild(ul);
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            results.innerHTML = "<p>An error occurred while fetching data.</p>";
        });
}
