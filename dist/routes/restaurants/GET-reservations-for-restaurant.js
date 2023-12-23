"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllReservationsForRestaurant = void 0;
const getAllReservationsForRestaurant = (req, res) => {
    console.log("id: ", req.params.id);
    res.status(200).send("getting reservations all reservations for restaurant");
};
exports.getAllReservationsForRestaurant = getAllReservationsForRestaurant;
//# sourceMappingURL=GET-reservations-for-restaurant.js.map