"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const cormo = require("cormo");
const is_in_console = process.env.IN_CONSOLE === 'true';
cormo.BaseModel.lean_query = true;
const connection_1 = require("./connection");
exports.connection = connection_1.connection;
__export(require("./Mymodel"));
try {
    const deasync = require('deasync');
    deasync(async (callback) => {
        try {
            await connection_1.connection.applySchemas({ verbose: is_in_console });
            callback(null);
        }
        catch (error) {
            callback(error);
        }
    })();
}
catch (error) {
    if (error.message !== "Cannot find module 'deasync'") {
        console.log(error);
        while (error.cause) {
            error = error.cause;
        }
        throw error;
    }
}
