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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var users_dao_1 = __importDefault(require("../daos/users.dao"));
var UsersService = /** @class */ (function () {
    function UsersService() {
    }
    UsersService.prototype.list = function (limit, page) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_dao_1.default.getUsers()];
            });
        });
    };
    UsersService.prototype.create = function (resource) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_dao_1.default.addUser(resource)];
            });
        });
    };
    UsersService.prototype.putById = function (id, resource) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_dao_1.default.updateUserById(id, resource)];
            });
        });
    };
    UsersService.prototype.readById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_dao_1.default.getUserById(id)];
            });
        });
    };
    UsersService.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_dao_1.default.removeUserById(id)];
            });
        });
    };
    UsersService.prototype.patchById = function (id, resource) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_dao_1.default.updateUserById(id, resource)];
            });
        });
    };
    UsersService.prototype.getUserByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_dao_1.default.getUserByEmail(email)];
            });
        });
    };
    return UsersService;
}());
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRUFBeUM7QUFNekM7SUFBQTtJQStCQSxDQUFDO0lBN0JRLDJCQUFJLEdBQVgsVUFBYyxLQUFhLEVBQUUsSUFBWTs7O2dCQUNuQyxzQkFBTyxtQkFBUSxDQUFDLFFBQVEsRUFBRSxFQUFBOzs7S0FDOUI7SUFFSyw2QkFBTSxHQUFaLFVBQWUsUUFBdUI7OztnQkFDakMsc0JBQU8sbUJBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUE7OztLQUNwQztJQUVLLDhCQUFPLEdBQWIsVUFBZSxFQUFVLEVBQUUsUUFBb0I7OztnQkFDM0Msc0JBQU8sbUJBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFBOzs7S0FDL0M7SUFHSSwrQkFBUSxHQUFkLFVBQWdCLEVBQVU7OztnQkFDckIsc0JBQU8sbUJBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUE7OztLQUNsQztJQUVLLGlDQUFVLEdBQWpCLFVBQW1CLEVBQVU7OztnQkFDeEIsc0JBQU8sbUJBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUE7OztLQUNyQztJQUVLLGdDQUFTLEdBQWYsVUFBaUIsRUFBVSxFQUFFLFFBQXNCOzs7Z0JBQy9DLHNCQUFPLG1CQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBQTs7O0tBQy9DO0lBRUsscUNBQWMsR0FBcEIsVUFBcUIsS0FBYTs7O2dCQUM5QixzQkFBTyxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBQzs7O0tBQ3pDO0lBRUwsbUJBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBRUQsa0JBQWUsSUFBSSxZQUFZLEVBQUUsQ0FBQSJ9