"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationsRouter = void 0;
const express_1 = require("express");
const POST_reservation_1 = require("./POST-reservation");
exports.reservationsRouter = (0, express_1.Router)();
exports.reservationsRouter.post("/", POST_reservation_1.createReservation);
//# sourceMappingURL=index.js.map