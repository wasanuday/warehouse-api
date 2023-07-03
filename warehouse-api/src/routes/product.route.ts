import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

export function productRoutes(productController: ProductController): Router {
  const router = Router();
  router.post("/", (req, res) => productController.createProduct(req, res));
  router.get("/", (req, res) => productController.getAllProducts(req, res));
  router.get("/product/:id", (req, res) => productController.getProductById(req, res));
  router.put("/product/:id", (req, res) => productController.upateProduct(req, res));
  return router;
}
