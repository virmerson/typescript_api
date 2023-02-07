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
var common_permissionflag_enum_1 = require("./common.permissionflag.enum");
var debug_1 = __importDefault(require("debug"));
var log = (0, debug_1.default)('app:common-permission-middleware');
var CommonPermissionMiddleware = /** @class */ (function () {
    function CommonPermissionMiddleware() {
    }
    CommonPermissionMiddleware.prototype.onlySameUserOrAdminCanDoThisAction = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userPermissionFlags;
            return __generator(this, function (_a) {
                userPermissionFlags = parseInt(res.locals.jwt.permissionFlags);
                if (req.params &&
                    req.params.userId &&
                    req.params.userId === res.locals.jwt.userId) {
                    return [2 /*return*/, next()];
                }
                else {
                    if (userPermissionFlags & common_permissionflag_enum_1.PermissionFlag.ADMIN_PERMISSION) {
                        return [2 /*return*/, next()];
                    }
                    else {
                        return [2 /*return*/, res.status(403).send()];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    CommonPermissionMiddleware.prototype.permissionFlagRequired = function (requiredPermissionFlag) {
        return function (req, res, next) {
            try {
                var userPermissionFlags = parseInt(res.locals.jwt.permissionFlags);
                if (userPermissionFlags & requiredPermissionFlag) {
                    next();
                }
                else {
                    res.status(403).send();
                }
            }
            catch (e) {
                log(e);
            }
        };
    };
    CommonPermissionMiddleware.prototype.userCantChangePermission = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if ('permissionFlags' in req.body &&
                    req.body.permissionFlags !== res.locals.user.permissionFlags) {
                    res.status(400).send({
                        errors: ['User cannot change permission flags'],
                    });
                }
                else {
                    next();
                }
                return [2 /*return*/];
            });
        });
    };
    return CommonPermissionMiddleware;
}());
exports.default = new CommonPermissionMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnBlcm1pc3Npb24ubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9taWRkbGV3YXJlL2NvbW1vbi5wZXJtaXNzaW9uLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwyRUFBOEQ7QUFDOUQsZ0RBQTBCO0FBRTFCLElBQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBRXZFO0lBQUE7SUE2REEsQ0FBQztJQTNEUyx1RUFBa0MsR0FBeEMsVUFDSSxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7OztnQkFFcEIsbUJBQW1CLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNyRSxJQUNJLEdBQUcsQ0FBQyxNQUFNO29CQUNWLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTtvQkFDakIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUM3QztvQkFDRSxzQkFBTyxJQUFJLEVBQUUsRUFBQztpQkFDakI7cUJBQU07b0JBQ0gsSUFBSSxtQkFBbUIsR0FBRywyQ0FBYyxDQUFDLGdCQUFnQixFQUFFO3dCQUN2RCxzQkFBTyxJQUFJLEVBQUUsRUFBQztxQkFDakI7eUJBQU07d0JBQ0gsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQztxQkFDakM7aUJBQ0o7Ozs7S0FDSjtJQUdELDJEQUFzQixHQUF0QixVQUF1QixzQkFBc0M7UUFDekQsT0FBTyxVQUNILEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCO1lBRTFCLElBQUk7Z0JBQ0EsSUFBTSxtQkFBbUIsR0FBRyxRQUFRLENBQ2hDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FDakMsQ0FBQztnQkFDRixJQUFJLG1CQUFtQixHQUFHLHNCQUFzQixFQUFFO29CQUM5QyxJQUFJLEVBQUUsQ0FBQztpQkFDVjtxQkFBTTtvQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUMxQjthQUNKO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1Y7UUFDTCxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUssNkRBQXdCLEdBQTlCLFVBQ0ksR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7OztnQkFFMUIsSUFDSSxpQkFBaUIsSUFBSSxHQUFHLENBQUMsSUFBSTtvQkFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUM5RDtvQkFDRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDakIsTUFBTSxFQUFFLENBQUMscUNBQXFDLENBQUM7cUJBQ2xELENBQUMsQ0FBQztpQkFDTjtxQkFBTTtvQkFDSCxJQUFJLEVBQUUsQ0FBQztpQkFDVjs7OztLQUNKO0lBQ0wsaUNBQUM7QUFBRCxDQUFDLEFBN0RELElBNkRDO0FBS0Qsa0JBQWUsSUFBSSwwQkFBMEIsRUFBRSxDQUFDIn0=