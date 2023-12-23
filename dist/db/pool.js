"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbClient = void 0;
const pg_1 = require("pg");
const constants_1 = require("../constants");
const pool = new pg_1.Pool({
    connectionString: constants_1.PG_CONN,
});
exports.dbClient = pool.connect();
//# sourceMappingURL=pool.js.map