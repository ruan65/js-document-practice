const bookList = document.querySelector('#book-list ul');

bookList.addEventListener('click', function (ev) {
    if (ev.target.className == 'delete') {
        bookList.removeChild(ev.target.parentElement);
    }
});


const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function (ev) {
    console.log('submitted ............. ' + ev);
    ev.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    bookList.appendChild(li);



});

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(ev) {
    console.log('changed: ' + hideBox.checked);
    bookList.style.display = hideBox.checked ? 'none' : 'block';
})

const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', function(ev) {

    const term = ev.target.value.toLowerCase();

    console.log(term)

    const books = bookList.getElementsByTagName('li');
    Array.from(books).forEach(function(book) {

        const title = book.firstElementChild.textContent;

        if(title.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
    
});

// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});