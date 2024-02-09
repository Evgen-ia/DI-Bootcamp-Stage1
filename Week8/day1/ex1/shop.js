
const products = require('./products');

function findProductByName(productName) {
  const product = products.find(p => p.name === productName);
  if (product) {
    console.log(`Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`);
  } else {
    console.log(`Product '${productName}' not found.`);
  }
}

findProductByName('Product 1');
findProductByName('Product 2');
findProductByName('Product 4');
