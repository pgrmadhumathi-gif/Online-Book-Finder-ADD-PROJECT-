function searchBooks() {
    let query = document.getElementById("searchInput").value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then(response => response.json())
    .then(data => {
        let results = document.getElementById("results");
        results.innerHTML = "";

        data.items.forEach(book => {
            let title = book.volumeInfo.title;
            let author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Unknown";
            let thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "";

            let bookDiv = document.createElement("div");
            bookDiv.classList.add("book");

            bookDiv.innerHTML = `
                <img src="${thumbnail}">
                <h3>${title}</h3>
                <p>${author}</p>
            `;

            results.appendChild(bookDiv);
        });
    })
    .catch(error => {
        console.log("Error:", error);
    });
}