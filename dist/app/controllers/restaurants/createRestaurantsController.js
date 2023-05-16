"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRestaurantsController = void 0;
const RestaurantModel_1 = require("../../models/RestaurantModel");
async function createRestaurantsController(req, res) {
    const { name, code } = req.body;
    const restaurant = await RestaurantModel_1.Restaurant.create({
        name,
        code
    });
    res.status(201).json(restaurant);
}
exports.createRestaurantsController = createRestaurantsController;
//# sourceMappingURL=createRestaurantsController.js.map