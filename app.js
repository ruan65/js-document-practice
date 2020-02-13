var titles = document.getElementsByClassName('title')
var lis = document.getElementsByTagName('li')

// console.log('is array: ' + Array.isArray(titles))
// console.log('is array: ' + Array.isArray(Array.from(titles)))

Array.from(titles).forEach((t) => console.log(t))