"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleQuerySingleResult = void 0;
const pool_1 = require("./pool");
function simpleQuerySingleResult(queryString, parameters) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield pool_1.pool.connect();
        try {
            const response = yield client.query(queryString, parameters);
            yield client.query("commit");
            return response.rows[0];
        }
        catch (e) {
            yield client.query("rollback");
            throw e;
        }
        finally {
            client.release();
        }
    });
}
exports.simpleQuerySingleResult = simpleQuerySingleResult;
//# sourceMappingURL=simpleQuerySingleResult.js.map