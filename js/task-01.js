const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`)
const listForItem = items.forEach( e => { 
    console.log(`Category: ${e.firstElementChild.textContent}`)
    console.log(`Elements: ${e.lastElementChild.children.length}`)
})
