const d = document
let p = (text) => console.log(text)

const banner = d.querySelector('#page-banner')
p('banner node type: ' + banner.nodeType)
p('banner node name: ' + banner.nodeName)
p('banner childs: ' + banner.hasChildNodes())

const bannerClone = banner.cloneNode(true)
p('cloned banner: ' + bannerClone)

const bookList = d.querySelector('#book-list')

p('parent node: ' + bookList.parentNode.parentNode)

p(bookList.children)

p('next sibling: ' + bookList.nextSibling)
p('next sibling: ' + bookList.nextElementSibling)

p(bookList.previousSibling)
p(bookList.previousElementSibling)

bookList.previousElementSibling.querySelector('p').innerHTML += 
'<br/>Too cool for everyone else!'