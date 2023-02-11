const allNavCategoryEl = document.querySelectorAll('.item');
console.log('Number of categories: ', allNavCategoryEl.length)

for (let i = 0; i < allNavCategoryEl.length; i += 1) {
    console.log('Category: ', allNavCategoryEl[i].querySelector('h2').textContent)
    console.log('Elements: ', allNavCategoryEl[i].querySelectorAll('li').length,)
}


