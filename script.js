const movieData = {
  godfather: {
    title: "The Godfather",
    year: "1972",
    director: "Francis Ford Coppola",
    cast: "Marlon Brando, Al Pacino, James Caan",
    rating: "9.2/10",
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. The story follows the Corleone family under patriarch Vito Corleone, focusing on the transformation of his youngest son Michael from reluctant family outsider to ruthless Mafia boss.",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    trailer: "UaVTIH8mujA",
  },
  shawshank: {
    title: "The Shawshank Redemption",
    year: "1994",
    director: "Frank Darabont",
    cast: "Tim Robbins, Morgan Freeman",
    rating: "9.3/10",
    plot: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion. Andy Dufresne, a banker wrongly convicted of murder, and Red, the prison contraband smuggler, find hope and perseverance in their harsh environment.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    trailer: "NmzuHjWmXOc",
  },
  darkknight: {
    title: "The Dark Knight",
    year: "2008",
    director: "Christopher Nolan",
    cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
    rating: "9.0/10",
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. The Dark Knight follows Bruce Wayne's Batman as he sets out to dismantle the remaining criminal organizations that plague Gotham City streets.",
    image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    trailer: "EXeTwQWrcwY",
  },
}

function showMovieDetails(movieId) {
  const movie = movieData[movieId]
  const modalContent = `
    <div class="movie-info">
      <div class="movie-poster">
        <img src="${movie.image}" alt="${movie.title} poster">
      </div>
      <div class="movie-details">
        <h1>${movie.title} <span class="year">(${movie.year})</span></h1>
        <div class="movie-meta">
          <div class="movie-director"><strong>Director:</strong> ${movie.director}</div>
          <div class="movie-rating">★ ${movie.rating}</div>
        </div>
        <p><strong>Cast:</strong> ${movie.cast}</p>
        <p>${movie.plot}</p>
      </div>
    </div>
    <div class="movie-trailer">
      <h2>Trailer</h2>
      <div class="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/${movie.trailer}" 
          title="${movie.title} trailer" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `

  document.getElementById("movieContent").innerHTML = modalContent
  const modal = document.getElementById("movieDetails")
  modal.style.display = "block"

  // Add a small delay before adding the visible class for the animation
  setTimeout(() => {
    modal.classList.add("modal-visible")
  }, 10)
}

function closeMovieDetails() {
  const modal = document.getElementById("movieDetails")
  modal.classList.remove("modal-visible")

  // Wait for the animation to complete before hiding the modal
  setTimeout(() => {
    modal.style.display = "none"

    // Stop video playback when closing modal
    const iframes = modal.querySelectorAll("iframe")
    iframes.forEach((iframe) => {
      const src = iframe.src
      iframe.src = src
    })
  }, 300)
}

// Close modal when clicking outside of it
window.onclick = (event) => {
  const modal = document.getElementById("movieDetails")
  if (event.target === modal) {
    closeMovieDetails()
  }
}

// Add keyboard accessibility
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMovieDetails()
  }
})
