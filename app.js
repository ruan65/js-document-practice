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