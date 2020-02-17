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
    console.log(value);
});