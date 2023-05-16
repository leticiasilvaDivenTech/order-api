"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const node_path_1 = __importDefault(require("node:path"));
const listCategoriesController_1 = require("./app/controllers/categories/listCategoriesController");
const createCategoriesController_1 = require("./app/controllers/categories/createCategoriesController");
const listProductsController_1 = require("./app/controllers/products/listProductsController");
const createProductsController_1 = require("./app/controllers/products/createProductsController");
const listProductsByCategoryController_1 = require("./app/controllers/categories/listProductsByCategoryController");
const listOrdersController_1 = require("./app/controllers/orders/listOrdersController");
const createOrdersController_1 = require("./app/controllers/orders/createOrdersController");
const changeOrderStatusController_1 = require("./app/controllers/orders/changeOrderStatusController");
const cancelOrdersController_1 = require("./app/controllers/orders/cancelOrdersController");
const deleteCategoryController_1 = require("./app/controllers/categories/deleteCategoryController");
const updateCategoryController_1 = require("./app/controllers/categories/updateCategoryController");
const deleteProductsController_1 = require("./app/controllers/products/deleteProductsController");
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, node_path_1.default.resolve(__dirname, '..', 'uploads'));
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    })
});
exports.router = (0, express_1.Router)();
exports.router.get('/categories', listCategoriesController_1.listCategoriesController);
exports.router.get('/categories/:categoryId/products', listProductsByCategoryController_1.listProductsByCategoryController);
exports.router.post('/categories', createCategoriesController_1.createCategoriesController);
exports.router.delete('/categories/:id', deleteCategoryController_1.deleteCategoryController);
exports.router.patch('/categories/:id', updateCategoryController_1.updateCategoryController);
exports.router.get('/products', listProductsController_1.listProductsController);
exports.router.post('/products', upload.single('image'), createProductsController_1.createProductsController);
exports.router.delete('/products/:id', deleteProductsController_1.deleteProductController);
exports.router.get('/orders', listOrdersController_1.listOrdersController);
exports.router.post('/orders', createOrdersController_1.createOrdersController);
exports.router.patch('/orders/:orderId', changeOrderStatusController_1.changeOrderStatusController);
exports.router.delete('/orders/:orderId', cancelOrdersController_1.cancelOrdersController);
//# sourceMappingURL=routes.js.map