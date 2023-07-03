import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import * as OpenApiValidator from 'express-openapi-validator';
import YAML from "yamljs";
import { join } from "path";
import { initProduct } from './modules/product.module';

const app = express();
const port = process.env.PORT || 3000;

// 1. Install bodyParsers for the request types your API will support
app.use(express.urlencoded({ extended: false }));
app.use(express.text());
app.use(express.json());
const openApiFilePath = "../openapi.yaml";
const swaggerDocument = YAML.load(join(__dirname, openApiFilePath));

// Initialize Swagger-jsdoc
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/openapi.yaml", (req, res) => {
  res.sendFile(openApiFilePath, { root: __dirname });
});
// Apply OAS validation middleware
app.use(
  OpenApiValidator.middleware({
    apiSpec: join(__dirname, openApiFilePath),
    validateRequests: true, // (default)
    validateResponses: false,
  })
);

initProduct(app);

// Custom error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({
    message: "Response validation error",
    errors: (err as any).errors,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
