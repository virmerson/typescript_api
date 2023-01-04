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
var shortid_1 = __importDefault(require("shortid"));
var debug_1 = __importDefault(require("debug"));
var log = (0, debug_1.default)('app:in-memory-dao');
var UsersDao = /** @class */ (function () {
    function UsersDao() {
        this.users = [];
        log('Created a new instance of UsersDao');
    }
    UsersDao.prototype.addUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                user.id = shortid_1.default.generate();
                this.users.push(user);
                return [2 /*return*/, user.id];
            });
        });
    };
    UsersDao.prototype.getUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.users];
            });
        });
    };
    UsersDao.prototype.getUserById = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                user = this.users.find(function (user) { return user.id == userId; });
                return [2 /*return*/, user];
            });
        });
    };
    UsersDao.prototype.putUserById = function (userId, user) {
        return __awaiter(this, void 0, void 0, function () {
            var objIndex;
            return __generator(this, function (_a) {
                objIndex = this.users.findIndex(function (obj) { obj.id === userId; });
                this.users.splice(objIndex, 1, user);
                return [2 /*return*/, "".concat(user.id, " updated via put")];
            });
        });
    };
    UsersDao.prototype.patchUserById = function (userId, user) {
        return __awaiter(this, void 0, void 0, function () {
            var objIndex, currentUser, allowedFields, _i, allowedFields_1, field;
            return __generator(this, function (_a) {
                objIndex = this.users.findIndex(function (obj) { return obj.id === userId; });
                currentUser = this.users[objIndex];
                allowedFields = [
                    'email',
                    'password',
                    'firstName',
                    'lastName',
                    'permissionLevel'
                ];
                for (_i = 0, allowedFields_1 = allowedFields; _i < allowedFields_1.length; _i++) {
                    field = allowedFields_1[_i];
                    if (field in user) {
                        // @ts-ignore
                        currentUser[field] = user[field];
                    }
                }
                return [2 /*return*/, "".concat(userId, " patched ")];
            });
        });
    };
    UsersDao.prototype.removeUserById = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var objIndex;
            return __generator(this, function (_a) {
                objIndex = this.users.findIndex(function (obj) { return obj.id === userId; });
                this.users.splice(objIndex, 1);
                return [2 /*return*/, "".concat(userId, " removed")];
            });
        });
    };
    UsersDao.prototype.getUserByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var objIndex, currentUser;
            return __generator(this, function (_a) {
                objIndex = this.users.findIndex(function (obj) { return obj.email === email; });
                currentUser = this.users[objIndex];
                if (currentUser) {
                    return [2 /*return*/, currentUser];
                }
                else {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/];
            });
        });
    };
    return UsersDao;
}());
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvZGFvcy91c2Vycy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxvREFBOEI7QUFDOUIsZ0RBQTBCO0FBRTFCLElBQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBRSxtQkFBbUIsQ0FBQyxDQUFBO0FBRXhEO0lBR0k7UUFGQSxVQUFLLEdBQXdCLEVBQUUsQ0FBQTtRQUczQixHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRUssMEJBQU8sR0FBYixVQUFlLElBQWtCOzs7Z0JBQzdCLElBQUksQ0FBQyxFQUFFLEdBQUksaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtnQkFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3JCLHNCQUFPLElBQUksQ0FBQyxFQUFFLEVBQUE7OztLQUNqQjtJQUNLLDJCQUFRLEdBQWQ7OztnQkFDSSxzQkFBTyxJQUFJLENBQUMsS0FBSyxFQUFBOzs7S0FDcEI7SUFFSyw4QkFBVyxHQUFqQixVQUFrQixNQUFhOzs7O2dCQUNyQixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUUsVUFBQyxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxJQUFFLE1BQU0sRUFBZixDQUFlLENBQUcsQ0FBQTtnQkFDekQsc0JBQU8sSUFBSSxFQUFDOzs7S0FDZjtJQUVLLDhCQUFXLEdBQWpCLFVBQWtCLE1BQWEsRUFBRSxJQUFlOzs7O2dCQUN0QyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUUsVUFBQyxHQUFnQixJQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUcsTUFBTSxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUE7Z0JBQy9FLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQ3BDLHNCQUFPLFVBQUcsSUFBSSxDQUFDLEVBQUUscUJBQWtCLEVBQUE7OztLQUN0QztJQUVLLGdDQUFhLEdBQW5CLFVBQW9CLE1BQWEsRUFBRSxJQUFpQjs7OztnQkFDdEMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFFLFVBQUMsR0FBZSxJQUFNLE9BQUEsR0FBRyxDQUFDLEVBQUUsS0FBRyxNQUFNLEVBQWYsQ0FBZSxDQUFFLENBQUE7Z0JBRTFFLFdBQVcsR0FBaUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFFaEQsYUFBYSxHQUFHO29CQUNoQixPQUFPO29CQUNQLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxVQUFVO29CQUNWLGlCQUFpQjtpQkFDcEIsQ0FBQTtnQkFFRCxXQUErQixFQUFiLCtCQUFhLEVBQWIsMkJBQWEsRUFBYixJQUFhLEVBQUM7b0JBQXZCLEtBQUs7b0JBQ1YsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO3dCQUNmLGFBQWE7d0JBQ2IsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtxQkFDcEM7aUJBQ0o7Z0JBRUQsc0JBQU8sVUFBRyxNQUFNLGNBQVcsRUFBQTs7O0tBQ2xDO0lBRUssaUNBQWMsR0FBcEIsVUFBcUIsTUFBYzs7OztnQkFDekIsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUNqQyxVQUFDLEdBQW1CLElBQUssT0FBQSxHQUFHLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBakIsQ0FBaUIsQ0FDN0MsQ0FBQztnQkFDRixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLHNCQUFPLFVBQUcsTUFBTSxhQUFVLEVBQUM7OztLQUM5QjtJQUVLLGlDQUFjLEdBQXBCLFVBQXFCLEtBQWE7Ozs7Z0JBQ3hCLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDakMsVUFBQyxHQUFzQixJQUFLLE9BQUEsR0FBRyxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQW5CLENBQW1CLENBQ2xELENBQUM7Z0JBQ0UsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksV0FBVyxFQUFFO29CQUNiLHNCQUFPLFdBQVcsRUFBQztpQkFDdEI7cUJBQU07b0JBQ0gsc0JBQU8sSUFBSSxFQUFDO2lCQUNmOzs7O0tBQ0o7SUFFTCxlQUFDO0FBQUQsQ0FBQyxBQXRFRCxJQXNFQztBQUVELGtCQUFlLElBQUksUUFBUSxFQUFFLENBQUMifQ==