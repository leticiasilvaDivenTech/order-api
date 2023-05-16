"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRestaurantsController = void 0;
const RestaurantModel_1 = require("../../models/RestaurantModel");
async function listRestaurantsController(req, res) {
    const products = await RestaurantModel_1.Restaurant.find();
    res.json(products);
}
exports.listRestaurantsController = listRestaurantsController;
//# sourceMappingURL=listRestaurantsController.js.map