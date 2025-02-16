const apiKey = "d8e99a8f";

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
const movieDetails = document.getElementById("movieDetails");

fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`)
    .then(response => {
        if (!response.ok) throw new Error('خطای شبکه');
        return response.json();
    })
    .then(data => {
        if (data.Response === "True") {
            movieDetails.innerHTML = `
                <div class="movie-detail">
                    <h2>${data.Title || '---'}</h2>
                    <img src="${data.Poster !== 'N/A' ? data.Poster : 'placeholder.jpg'}" 
                         alt="${data.Title}">
                    <div class="details">
                        <p><strong>سال:</strong> ${data.Year || '---'}</p>
                        <p><strong>کارگردان:</strong> ${data.Director || '---'}</p>
                        <p><strong>بازیگران:</strong> ${data.Actors || '---'}</p>
                        <p><strong>امتیاز:</strong> ${data.imdbRating || '---'}</p>
                        <p><strong>توضیحات:</strong> ${data.Plot || '---'}</p>
                    </div>
                </div>
            `;
        } else {
            movieDetails.innerHTML = `<div class="error">${data.Error || 'اطلاعات یافت نشد'}</div>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        movieDetails.innerHTML = `<div class="error">خطا در دریافت داده‌ها</div>`;
    });

