const categories = document.querySelectorAll("#categories .item")

let categorySize = `Number of categories: ${categories.length}`
console.log(categorySize);

// NOT: for ... of yönetmi ile 
/* for (const category of categories) {
    let title = category.querySelector("h2").innerText; 
    console.log(`Category: ${title}`);

    let elements = category.querySelectorAll("li").length;
    console.log(`Elements: ${elements}`);

} */

// NOT: forEach yönetmi ile 

    categories.forEach(category => {
    let title = category.querySelector("h2").innerText; 
    console.log(`Category: ${title}`);

    let elements = category.querySelectorAll("li").length;
    console.log(`Elements: ${elements}`);
    }
    )