const products = [
    { name: "Curly Wig 8 inches", price: "$50" },
    { name: "Curly Wig 20 inches", price: "$120" },
    { name: "Body Wave 12 inches", price: "$65" },
    { name: "Body Wave 20 inches", price: "$130" },
    { name: "Kinky Wig 10 inches", price: "$70" },
    { name: "Straight Wig 18 inches", price: "$100" }
];

function displayProducts() {
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = "";
    
    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p><button>Add to Cart</button>`;
        productContainer.appendChild(productDiv);
    });
}

document.getElementById("search-bar").addEventListener("input", function() {
    const searchText = this.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));
    
    document.getElementById("products").innerHTML = "";
    
    filteredProducts.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p><button>Add to Cart</button>`;
        document.getElementById("products").appendChild(productDiv);
    });
});

displayProducts();
