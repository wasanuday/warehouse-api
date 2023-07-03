import { Express } from "express";
import { ProductRepository } from "../repositories/product.repository";
import { JsonStorage } from "../utils/json.storage";
import { ProductService } from "../services/product.service";
import { ProductController } from "../controllers/product.controller";
import { productRoutes } from "../routes/product.route";
import * as path from 'path';
const initProduct = (app: Express) => {
    const PRODUCTS_FILE_PATH =  path.join(__dirname,'../utils/products.json');
    const storage = new JsonStorage(PRODUCTS_FILE_PATH);
    const productRepository = new ProductRepository(storage);
    const productService = new ProductService(
      productRepository,
    );
    const productController = new ProductController(productService);
    app.use("/products", productRoutes(productController));
 };

export { initProduct };
