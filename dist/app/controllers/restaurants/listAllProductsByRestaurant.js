"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAllProductsByRestaurantController = void 0;
const ProductModel_1 = require("../../models/ProductModel");
const RestaurantModel_1 = require("../../models/RestaurantModel");
async function listAllProductsByRestaurantController(req, res) {
    const { restaurantCode } = req.params;
    if (!restaurantCode) {
        return res.status(400).json({ error: 'Restaurant code is required' });
    }
    const restaurant = await RestaurantModel_1.Restaurant.findOne({ code: restaurantCode });
    if (!restaurant) {
        return res.status(404).json({ error: 'Restaurante não encontrado' });
    }
    const products = await ProductModel_1.Product.find({ restaurant: restaurant._id });
    res.json(products);
}
exports.listAllProductsByRestaurantController = listAllProductsByRestaurantController;
//# sourceMappingURL=listAllProductsByRestaurant.js.map