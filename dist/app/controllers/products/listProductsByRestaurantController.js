"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductsByRestaurantController = void 0;
const RestaurantModel_1 = require("../../models/RestaurantModel");
const ProductModel_1 = require("../../models/ProductModel");
async function listProductsByRestaurantController(req, res) {
    const { code } = req.params;
    if (!code) {
        return res.status(400).json({ error: 'Restaurant code is required' });
    }
    const restaurant = await RestaurantModel_1.Restaurant.findOne({ code });
    const restaurantId = restaurant?._id;
    const products = await ProductModel_1.Product.find().where('restaurant').equals(restaurantId).populate('restaurant').populate('category').populate('restaurant');
    res.json({
        products,
        code,
    });
}
exports.listProductsByRestaurantController = listProductsByRestaurantController;
//# sourceMappingURL=listProductsByRestaurantController.js.map