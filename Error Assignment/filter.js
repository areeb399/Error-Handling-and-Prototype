function productFilter(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }

  
const products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Shoes", category: "Footwear" },
    { name: "Hat", category: "Accessories" },
    { name: "Socks", category: "Clothing" },
    { name: "Watch", category: "Accessories" }
  ];
  
  
  const filterByCategory = productFilter(products);
  
  
  const clothingProducts = filterByCategory("Clothing");
  console.log(clothingProducts);
  
  
  const accessoryProducts = filterByCategory("Accessories");
  console.log(accessoryProducts);
    
