"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var dotenvResult = dotenv_1.default.config();
if (dotenvResult.error) {
    throw dotenvResult.error;
}
var express_1 = __importDefault(require("express"));
var http = __importStar(require("http"));
var winston = __importStar(require("winston"));
var expressWinston = __importStar(require("express-winston"));
var cors_1 = __importDefault(require("cors"));
var users_routes_config_1 = require("./users/users.routes.config");
var auth_routes_config_1 = require("./auth/auth.routes.config");
var debug_1 = __importDefault(require("debug"));
var app = (0, express_1.default)();
var server = http.createServer(app);
var port = 3000;
var routes = [];
var debugLog = (0, debug_1.default)('log');
app.use(express_1.default.json());
app.use((0, cors_1.default)());
var loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true })),
};
if (!process.env.DEBUG) {
    loggerOptions.meta = false;
    if (typeof global.it === 'function') {
        loggerOptions.level = 'http'; // for non-debug test runs, squelch entirely
    }
}
app.use(expressWinston.logger(loggerOptions));
routes.push(new users_routes_config_1.UsersRoutes(app));
routes.push(new auth_routes_config_1.AuthRoutes(app));
var runningMessage = "It's running on the port ".concat(port);
app.get("/", function (req, res) {
    res.status(200).send(runningMessage);
});
server.listen(port, function () {
    routes.forEach(function (route) {
        debugLog("Routes configured for ".concat(route.getName()));
    });
    console.log(runningMessage);
});
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBMkI7QUFDM0IsSUFBTSxZQUFZLEdBQUcsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUNwQyxJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUM7SUFDbkIsTUFBTSxZQUFZLENBQUMsS0FBSyxDQUFBO0NBQzNCO0FBRUQsb0RBQTZCO0FBQzdCLHlDQUE0QjtBQUM1QiwrQ0FBa0M7QUFDbEMsOERBQWlEO0FBQ2pELDhDQUF1QjtBQUV2QixtRUFBdUQ7QUFDdkQsZ0VBQXNEO0FBQ3RELGdEQUF5QjtBQUd6QixJQUFNLEdBQUcsR0FBc0IsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFDekMsSUFBTSxNQUFNLEdBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqRCxJQUFNLElBQUksR0FBUSxJQUFJLENBQUU7QUFDeEIsSUFBTSxNQUFNLEdBQTJCLEVBQUUsQ0FBQztBQUMxQyxJQUFNLFFBQVEsR0FBa0IsSUFBQSxlQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7QUFHN0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUE7QUFHZixJQUFNLGFBQWEsR0FBaUM7SUFDaEQsVUFBVSxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDekM7Q0FDSixDQUFDO0FBR0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDO0lBQ25CLGFBQWEsQ0FBQyxJQUFJLEdBQUMsS0FBSyxDQUFBO0lBRXhCLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxLQUFLLFVBQVUsRUFBRTtRQUN6QixhQUFhLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLDRDQUE0QztLQUNyRjtDQUNKO0FBRUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7QUFFN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFFLElBQUksK0JBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBRWpDLElBQU0sY0FBYyxHQUFHLG1DQUE0QixJQUFJLENBQUUsQ0FBQTtBQUV6RCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQW1CLEVBQUUsR0FBb0I7SUFDbkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDeEMsQ0FBQyxDQUFDLENBQUE7QUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNoQixNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBd0I7UUFDckMsUUFBUSxDQUFDLGdDQUF5QixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUUsQ0FBQyxDQUFBO0lBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUNoQyxDQUFDLENBQUMsQ0FBQTtBQUVGLGtCQUFlLEdBQUcsQ0FBQSJ9