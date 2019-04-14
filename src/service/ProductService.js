import Request from "../common/Axios";

const apiURL = 'http://localhost/php-rest-api/product/';
class ProductService {
  static createProduct(data) {
    return Request.post("products", data);
  }

  static getProduct(id) {
    return Request.get(`products/${id}`);
  }

  static getBestProducts() {
    return Request.get(`${apiURL}/read.php/`);
  }

  static getNewProducts() {
    return Request.get(`${apiURL}/read.php/`);
  }

  static getHotProducts() {
    return Request.get(`${apiURL}/read.php/`);
  }

  static updateProduct(id, data) {
    return Request.put(`products/${id}`, data);
  }

  static deleteProduct(id) {
    return Request.delete(`products/${id}`);
  }

  static getUserProducts() {
    return Request.get("users/getProducts");
  }
}

export default ProductService;
