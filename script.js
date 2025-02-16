

const apiKey = "d8e99a8f"; 
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const movieResults = document.getElementById("movieResults");
const showLoading = () => {
    movieResults.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>در حال جستجو...</p>
        </div>
    `;
};
const showError = (message) => {
    movieResults.innerHTML = `
        <div class="error">
            <p>❌ ${message}</p>
        </div>
    `;
};

searchButton.addEventListener("click", async () => {
    const query = searchInput.value.trim();
    
    if (!query) {
        showError('لطفا نام فیلم را وارد کنید');
        return;
    }

    showLoading();
    
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
        const data = await response.json();
        
        movieResults.innerHTML = "";
        
        if (data.Search && data.Search.length > 0) {
            data.Search.forEach(movie => {
                const movieElement = document.createElement("div");
                movieElement.className = "movie-card";
                movieElement.innerHTML = `
                    <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150x200?text=No+Poster'}" 
                         class="movie-poster" 
                         alt="${movie.Title}"
                         onerror="this.src='https://via.placeholder.com/150x200?text=Poster+Error'">
                    <div class="movie-info">
                        <h3>${movie.Title}</h3>
                        <p class="movie-year">${movie.Year}</p>
                        <a href="movie.html?id=${movie.imdbID}" class="btn btn-primary">مشاهده جزئیات</a>
                    </div>
                `;
                movieResults.appendChild(movieElement);
            });
        } else {
            showError('فیلمی یافت نشد');
        }
    } catch (error) {
        showError('خطا در ارتباط با سرور');
    }
});

if (window.location.pathname.includes('movie.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    const movieDetails = document.getElementById("movieDetails");
}
    