import * as fs from 'fs';
import { Product } from '../models/product';

export class JsonStorage {

  constructor(private readonly filePath: string) { }

  async getJsonObject(): Promise<Product[]> {
    const productsData = fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(productsData).products;
  }

  async post(data: Product[]): Promise<void> {
    fs.writeFileSync(this.filePath, JSON.stringify({ products: data }, null, 2), 'utf8');
  }

}
