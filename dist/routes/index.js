"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRouter = void 0;
const express_1 = require("express");
const reservations_1 = require("./reservations");
const restaurants_1 = require("./restaurants");
const tableConfigurations_1 = require("./tableConfigurations");
exports.rootRouter = (0, express_1.Router)();
exports.rootRouter.use("/restaurants", restaurants_1.restaurantsRouter);
exports.rootRouter.use("/reservations", reservations_1.reservationsRouter);
exports.rootRouter.use("/table-configurations", tableConfigurations_1.tableConfigurationRouter);
//# sourceMappingURL=index.js.map