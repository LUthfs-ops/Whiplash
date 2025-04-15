const movieData = {
    godfather: {
        title: "The Godfather (1972)",
        director: "Francis Ford Coppola",
        cast: "Marlon Brando, Al Pacino, James Caan",
        rating: "9.2/10",
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. The story follows the Corleone family under patriarch Vito Corleone, focusing on the transformation of his youngest son Michael from reluctant family outsider to ruthless Mafia boss.",
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    shawshank: {
        title: "The Shawshank Redemption (1994)",
        director: "Frank Darabont",
        cast: "Tim Robbins, Morgan Freeman",
        rating: "9.3/10",
        plot: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion. Andy Dufresne, a banker wrongly convicted of murder, and Red, the prison contraband smuggler, find hope and perseverance in their harsh environment.",
        image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
    },
    darkknight: {
        title: "The Dark Knight (2008)",
        director: "Christopher Nolan",
        cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
        rating: "9.0/10",
        plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. The Dark Knight follows Bruce Wayne's Batman as he sets out to dismantle the remaining criminal organizations that plague Gotham City streets.",
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
    }
};

function showMovieDetails(movieId) {
    const movie = movieData[movieId];
    const modalContent = `
        <div class="movie-info">
            <img src="${movie.image}" alt="${movie.title}">
            <h1>${movie.title}</h1>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Cast:</strong> ${movie.cast}</p>
            <p><strong>Rating:</strong> ${movie.rating}</p>
            <p><strong>Plot:</strong> ${movie.plot}</p>
        </div>
    `;
    
    document.getElementById('movieContent').innerHTML = modalContent;
    document.getElementById('movieDetails').style.display = 'block';
}

function closeMovieDetails() {
    document.getElementById('movieDetails').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('movieDetails');
    if (event.target === modal) {
        closeMovieDetails();
    }
}