import { Request, Response } from "express";
import { ProductService } from "../services/product.service";
import { ProductDto } from "../models/product";

export class ProductController {
    constructor(private readonly productService: ProductService) {}

    async getAllProducts(req: Request, res: Response) {
      const products = await this.productService.getAllProductsAsync();
      if (products) {
          res.send(products);
      } else {
          res.status(404).send();
      }
  }

    async getProductById(req: Request, res: Response) {
      const id = req.params.id;
      const product = await this.productService.getProductByIdAsync(id);
      if (product) {
          res.send(product);
      } else {
          res.status(404).send();
      }
  }

    async upateProduct(req: Request, res: Response) {
      const id = req.params.id;
      const stock = req.body.stock;
      const product = await this.productService.updateProductAsync(id, stock);
      res.status(200).send(product);
  }

    async createProduct(req: Request, res: Response): Promise<void> {
      const productDto: ProductDto = req.body;
      const product = await this.productService.createProductAsync(productDto);
      res.status(201).send(product);
    }
  }
