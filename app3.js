var h2 = document.querySelector('#book-list h2');
h2.addEventListener('click', function (e) {
    console.log(e.target);
    console.log(e);
});

var buttons = document.querySelectorAll('#book-list .delete')

buttons.forEach((btn) => btn.addEventListener('click', function (event) {
    console.log('btn clicked: ' + btn);

    const li = event.target.parentElement;

    console.log(li);

    li.parentNode.removeChild(li);
}));

var linker = document.querySelector('#linker a');

linker.addEventListener('click', function (ev) {
    ev.preventDefault();
    console.log('nav to', ev.target.textContent, ' was prevented');
});