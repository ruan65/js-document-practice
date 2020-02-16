var d = document;
let p = (text) => console.log(text)

var wrapper = d.querySelector('#wrapper');

const wmf = d.querySelector('#book-list li:nth-child(2) .name')

var books = d.querySelectorAll('#book-list li .name')
p('looping books')
books.forEach(function (b) {
    console.log(b.textContent)
    b.textContent += '(book title)'
    p(b.textContent)
})
books.forEach((e) => {
    p(e)
});

const bookList = document.querySelector('#book-list')

p(bookList.innerHTML += '<H2>Books and more Books</H2>')