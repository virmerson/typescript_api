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
var express_1 = __importDefault(require("express"));
var http = __importStar(require("http"));
var winston = __importStar(require("winston"));
var expressWinston = __importStar(require("express-winston"));
var cors_1 = __importDefault(require("cors"));
var users_routes_config_1 = require("./users/users.routes.config");
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
}
app.use(expressWinston.logger(loggerOptions));
routes.push(new users_routes_config_1.UsersRoutes(app));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBNkI7QUFDN0IseUNBQTRCO0FBQzVCLCtDQUFrQztBQUNsQyw4REFBaUQ7QUFDakQsOENBQXVCO0FBRXZCLG1FQUF1RDtBQUN2RCxnREFBeUI7QUFHekIsSUFBTSxHQUFHLEdBQXNCLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBQ3pDLElBQU0sTUFBTSxHQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakQsSUFBTSxJQUFJLEdBQVEsSUFBSSxDQUFFO0FBQ3hCLElBQU0sTUFBTSxHQUEyQixFQUFFLENBQUM7QUFDMUMsSUFBTSxRQUFRLEdBQWtCLElBQUEsZUFBSyxFQUFDLEtBQUssQ0FBQyxDQUFDO0FBRzdDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEdBQUUsQ0FBQyxDQUFBO0FBR2YsSUFBTSxhQUFhLEdBQWlDO0lBQ2hELFVBQVUsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQ3pDO0NBQ0osQ0FBQztBQUdGLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQztJQUNuQixhQUFhLENBQUMsSUFBSSxHQUFDLEtBQUssQ0FBQTtDQUMzQjtBQUVELEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO0FBRTdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxpQ0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFFakMsSUFBTSxjQUFjLEdBQUcsbUNBQTRCLElBQUksQ0FBRSxDQUFBO0FBRXpELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBbUIsRUFBRSxHQUFvQjtJQUNuRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUN4QyxDQUFDLENBQUMsQ0FBQTtBQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2hCLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUF3QjtRQUNyQyxRQUFRLENBQUMsZ0NBQXlCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBRSxDQUFDLENBQUE7SUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQ2hDLENBQUMsQ0FBQyxDQUFBIn0=