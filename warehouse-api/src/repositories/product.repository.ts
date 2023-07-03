import { JsonStorage }  from '../utils/json.storage';
import { Product, ProductDto }  from '../models/product';
import { v4 as uuidv4 } from 'uuid';

export class ProductRepository {
  constructor(private readonly jsonStorage: JsonStorage) {}

  async getAllProducts(): Promise<Product[]> {
    const products = await this.jsonStorage.getJsonObject();
    return products;
  }

  async getProductById(id : string): Promise<Product>{
    const products = await this.jsonStorage.getJsonObject();
    const product = products.find((p) => p.id === id)
    if(!product){
      throw new Error('Product not found');
    }
      return product;
  }

  async createProduct(productDto: ProductDto): Promise<void> {
    const products = await this.jsonStorage.getJsonObject();
    const product: Product = {
      id:  uuidv4(),
      name: productDto.name,
      price: productDto.price,
      stock: productDto.stock
    };
    products.push(product);
    this.jsonStorage.post(products);
  }

  async updateProduct(id : string, stock: number): Promise<void>{
    const products = await this.getAllProducts();
    const product = products.findIndex((p) => p.id === id);
    if(!product){
      throw new Error('Product not found');
    }
    else{
      products[product].stock = stock;
      this.jsonStorage.post(products);
    }
  }

}
