"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const constants_1 = require("../constants");
exports.pool = new pg_1.Pool({
    connectionString: constants_1.PG_CONN,
});
//# sourceMappingURL=pool.js.map