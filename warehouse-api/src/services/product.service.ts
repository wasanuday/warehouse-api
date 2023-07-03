import { Product, ProductDto, ProductWithFormattedPrice }  from '../models/product';
import { ProductRepository } from '../repositories/product.repository';

export class ProductService {

    constructor(private readonly productRepository: ProductRepository) {   }

    async getAllProductsAsync(): Promise<ProductWithFormattedPrice[]> {
      const products = await this.productRepository.getAllProducts();
      const formatedProduct: ProductWithFormattedPrice[] = [];
        products.map((product)=> {
        this.formatProductPrice(product);
        formatedProduct.push(this.formatProductPrice(product));
        }
      );
       return formatedProduct;
    }

    async getProductByIdAsync(id : string): Promise<ProductWithFormattedPrice>{
      const product = await this.productRepository.getProductById(id)
      if(!product){
        throw new Error('Product not found');
      }
      return this.formatProductPrice(product);
    }

    async updateProductAsync(id : string, stock: number): Promise<void>{
      await this.productRepository.updateProduct(id, stock)
    }

    async createProductAsync(productDto: ProductDto): Promise<void>{
      await this.productRepository.createProduct(productDto)
    }

    private formatProductPrice(product: Product): ProductWithFormattedPrice {
      const price = `${product.price.amount} ${product.price.currency}`;
      return { ...product, price };
    }
}
