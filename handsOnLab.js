class ProductManager {
    constructor() {
      this.products = [];
      this.idProduct = 0;
    }
  
    getProducts() {
      return this.products;
    }
  
    agregarProducto(title, description, price, thumbnail, code, stock) {
      this.idProduct++;
      const newProduct = {
        id: this.idProduct,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(newProduct);
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
  
      if (product) {
        console.log('Producto encontrado'+ ' '+ product.title);
        return product;
      } else {
        console.log('NOT FOUND');
        return null;
      }
    }
  }
  
  const productManager = new ProductManager();
  
  productManager.agregarProducto("Producto 1", "Descripción 1", 10, "thumbnail1.jpg", "ABC123", 50);
  productManager.agregarProducto("Producto 2", "Descripción 2", 19, "thumbnail2.jpg", "DEF456", 20);
  productManager.agregarProducto("Producto 3", "Descripción 3", 7, "thumbnail3.jpg", "GHI789", 30);
  

  //PRUEBA TERMINAL 
  
  const productId = 4
;
  const product = productManager.getProductById(productId);
  

