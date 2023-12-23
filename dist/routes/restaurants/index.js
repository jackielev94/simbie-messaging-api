"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantsRouter = void 0;
const express_1 = require("express");
const GET_reservations_for_restaurant_1 = require("./GET-reservations-for-restaurant");
exports.restaurantsRouter = (0, express_1.Router)();
exports.restaurantsRouter.get("/:id/open-reservations", GET_reservations_for_restaurant_1.getAllReservationsForRestaurant);
//# sourceMappingURL=index.js.map