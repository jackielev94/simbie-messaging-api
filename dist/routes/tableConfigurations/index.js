"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableConfigurationRouter = void 0;
const express_1 = require("express");
const POST_table_configurations_1 = require("./POST-table-configurations");
exports.tableConfigurationRouter = (0, express_1.Router)();
exports.tableConfigurationRouter.post("/", POST_table_configurations_1.createTableConfiguration);
//# sourceMappingURL=index.js.map