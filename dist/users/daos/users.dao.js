"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var mongoose_service_1 = __importDefault(require("../../common/service/mongoose.service"));
var common_permissionflag_enum_1 = require("../../common/middleware/common.permissionflag.enum");
var shortid_1 = __importDefault(require("shortid"));
var debug_1 = __importDefault(require("debug"));
var log = (0, debug_1.default)('app:in-mongodb-dao');
var UsersDao = /** @class */ (function () {
    function UsersDao() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.userSchema = new this.Schema({
            _id: String,
            email: String,
            password: { type: String, select: false },
            firstName: String,
            lastName: String,
            permissionFlags: Number,
        }, { id: false });
        this.User = mongoose_service_1.default.getMongoose().model('User', this.userSchema);
        log('Created a new instance of UsersDao');
    }
    UsersDao.prototype.addUser = function (userFields) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = shortid_1.default.generate();
                        user = new this.User(__assign(__assign({ _id: userId }, userFields), { permissionFlags: common_permissionflag_enum_1.PermissionFlag.FREE_PERMISSION }));
                        return [4 /*yield*/, user.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, userId];
                }
            });
        });
    };
    UsersDao.prototype.getUsers = function (limit, page) {
        if (limit === void 0) { limit = 25; }
        if (page === void 0) { page = 0; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //1-25  (p 1)
                //26 -50
                //
                return [2 /*return*/, this.User.find().limit(limit).skip(limit * page).exec()];
            });
        });
    };
    UsersDao.prototype.getUserById = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.User.findOne({ _id: userId }).exec()];
            });
        });
    };
    UsersDao.prototype.updateUserById = function (userId, userFields) {
        return __awaiter(this, void 0, void 0, function () {
            var existingUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.User.findOneAndUpdate({ _id: userId }, { $set: userFields }, { new: true }).exec()];
                    case 1:
                        existingUser = _a.sent();
                        return [2 /*return*/, existingUser];
                }
            });
        });
    };
    UsersDao.prototype.removeUserById = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.User.deleteOne({ _id: userId }).exec();
                return [2 /*return*/];
            });
        });
    };
    UsersDao.prototype.getUserByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                log("getUserByEmail: " + email);
                return [2 /*return*/, this.User.findOne({ email: email }).exec()];
            });
        });
    };
    UsersDao.prototype.getUserByEmailWithPassword = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.User.findOne({ email: email }).select('_id email permissionFlags +password').exec()];
            });
        });
    };
    return UsersDao;
}());
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvZGFvcy91c2Vycy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJGQUFvRTtBQUlwRSxpR0FBaUY7QUFFakYsb0RBQThCO0FBQzlCLGdEQUEwQjtBQUcxQixJQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUUsb0JBQW9CLENBQUMsQ0FBQTtBQUV6RDtJQWVJO1FBYkQsV0FBTSxHQUFJLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBRS9DLGVBQVUsR0FBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekIsR0FBRyxFQUFFLE1BQU07WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUN6QyxTQUFTLEVBQUUsTUFBTTtZQUNqQixRQUFRLEVBQUUsTUFBTTtZQUNoQixlQUFlLEVBQUUsTUFBTTtTQUMxQixFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7UUFFakIsU0FBSSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFFLENBQUE7UUFHL0QsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUVLLDBCQUFPLEdBQWIsVUFBZSxVQUF3Qjs7Ozs7O3dCQUM5QixNQUFNLEdBQUksaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDN0IsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUkscUJBQ3pCLEdBQUcsRUFBRyxNQUFNLElBQ1QsVUFBVSxLQUNiLGVBQWUsRUFBRSwyQ0FBYyxDQUFDLGVBQWUsSUFDOUMsQ0FBQTt3QkFFRCxxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUFqQixTQUFpQixDQUFBO3dCQUNqQixzQkFBTyxNQUFNLEVBQUE7Ozs7S0FDaEI7SUFDSywyQkFBUSxHQUFkLFVBQWUsS0FBVSxFQUFFLElBQU07UUFBbEIsc0JBQUEsRUFBQSxVQUFVO1FBQUUscUJBQUEsRUFBQSxRQUFNOzs7Z0JBRTdCLGFBQWE7Z0JBQ2IsUUFBUTtnQkFDUixFQUFFO2dCQUNGLHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUE7OztLQUcvRDtJQUVLLDhCQUFXLEdBQWpCLFVBQWtCLE1BQWE7OztnQkFDM0Isc0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7O0tBQ2hEO0lBRUssaUNBQWMsR0FBcEIsVUFBcUIsTUFBYSxFQUFFLFVBQW9DOzs7Ozs0QkFFakQscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FFL0MsRUFBRSxHQUFHLEVBQUMsTUFBTSxFQUFDLEVBQ2IsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLEVBQ2xCLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxDQUVmLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQU5ILFlBQVksR0FBRyxTQU1aO3dCQUVQLHNCQUFPLFlBQVksRUFBQTs7OztLQUN0QjtJQUlLLGlDQUFjLEdBQXBCLFVBQXFCLE1BQWM7OztnQkFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTs7OztLQUMzQztJQUVLLGlDQUFjLEdBQXBCLFVBQXFCLEtBQWE7OztnQkFFOUIsR0FBRyxDQUFDLGtCQUFrQixHQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUMvQixzQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFBOzs7S0FDaEQ7SUFHSyw2Q0FBMEIsR0FBaEMsVUFBaUMsS0FBWTs7O2dCQUN6QyxzQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFBOzs7S0FDL0Y7SUFFTCxlQUFDO0FBQUQsQ0FBQyxBQTFFRCxJQTBFQztBQUVELGtCQUFlLElBQUksUUFBUSxFQUFFLENBQUMifQ==