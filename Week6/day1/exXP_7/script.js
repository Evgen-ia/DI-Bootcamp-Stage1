
const allBooks = [
    {
        title: "Harry Potter",
        author: "JK Rowling",
        image: "https://cdn.britannica.com/81/152981-050-7891A7CF/Daniel-Radcliffe-Harry-Potter-and-the-Philosophers.jpg",
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "John Roland Reuel Tolkien",
        image: "https://imageio.forbes.com/blogs-images/thumbnails/blog_1594/pt_1594_2204_o.jpg?format=jpg&height=600&width=1200&fit=bounds",
        alreadyRead: false
    }
];

const listBooksSection = document.querySelector('.listBooks');

allBooks.forEach(book => {
    const bookDiv = document.createElement('div');
    
    const bookDetails = document.createElement('p');
    bookDetails.textContent = `${book.title} written by ${book.author}`;

    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.style.width = '100px';

    if (book.alreadyRead) {
        bookDetails.style.color = 'red';
    }

    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(bookImage);

    listBooksSection.appendChild(bookDiv);
});
