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
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var crypto_1 = __importDefault(require("crypto"));
var users_service_1 = __importDefault(require("../../users/services/users.service"));
// @ts-expect-error
var jwtSecret = process.env.JWT_SECRET;
var JwtMiddleware = /** @class */ (function () {
    function JwtMiddleware() {
    }
    JwtMiddleware.prototype.verifyRefreshBodyField = function (req, res, next) {
        if (req.body && req.body.refreshToken) {
            next();
        }
        else {
            return res.status(400).send({ errors: ['Missing required field: refreshToken'] });
        }
    };
    JwtMiddleware.prototype.validRefreshNeeded = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var user, salt, hash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, users_service_1.default.getUserByEmailWithPassword(res.locals.jwt.email)];
                    case 1:
                        user = _a.sent();
                        salt = crypto_1.default.createSecretKey(Buffer.from(res.locals.jwt.refreshKey.data));
                        hash = crypto_1.default
                            .createHmac('sha512', salt)
                            .update(res.locals.jwt.userId + jwtSecret)
                            .digest('base64');
                        //if hash from client is equals to the hash that was just created by using user data 
                        if (hash === req.body.refreshToken) {
                            //add user data in the request body
                            req.body = {
                                userId: user._id,
                                email: user.email,
                                permissionFlags: user.permissionFlags,
                            };
                            return [2 /*return*/, next()];
                        }
                        else {
                            return [2 /*return*/, res.status(400).send({ errors: ['Invalid refresh token'] })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    JwtMiddleware.prototype.validJWTNeeded = function (req, res, next) {
        if (req.headers['authorization']) {
            try {
                var authorization = req.headers['authorization'].split(' ');
                if (authorization[0] !== 'Bearer') {
                    return res.status(401).send();
                }
                else {
                    //valid
                    res.locals.jwt = jsonwebtoken_1.default.verify(authorization[1], jwtSecret);
                    next();
                }
            }
            catch (e) {
                return res.status(403).send();
            }
        }
        else {
            return res.status(401).send();
        }
    };
    return JwtMiddleware;
}());
exports.default = new JwtMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hdXRoL21pZGRsZXdhcmUvand0Lm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4REFBK0I7QUFDL0Isa0RBQTRCO0FBRTVCLHFGQUE4RDtBQUU5RCxtQkFBbUI7QUFDbkIsSUFBTSxTQUFTLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFFakQ7SUFBQTtJQWlFQSxDQUFDO0lBL0RDLDhDQUFzQixHQUF0QixVQUF3QixHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7UUFDN0YsSUFBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDO1lBQ2pDLElBQUksRUFBRSxDQUFBO1NBQ1Q7YUFBSTtZQUNELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQyxFQUFFLENBQUMsQ0FBQTtTQUNwRjtJQUVILENBQUM7SUFFSywwQ0FBa0IsR0FBeEIsVUFBeUIsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOzs7Ozs0QkFHNUUscUJBQU0sdUJBQVksQ0FBQywwQkFBMEIsQ0FDM0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUN2QixFQUFBOzt3QkFGSyxJQUFJLEdBQVEsU0FFakI7d0JBRUssSUFBSSxHQUFHLGdCQUFNLENBQUMsZUFBZSxDQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FDOUMsQ0FBQzt3QkFHSSxJQUFJLEdBQUcsZ0JBQU07NkJBQ2QsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7NkJBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDOzZCQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ2xCLHFGQUFxRjt3QkFDckYsSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7NEJBRWhDLG1DQUFtQzs0QkFDbkMsR0FBRyxDQUFDLElBQUksR0FBRztnQ0FDUCxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUc7Z0NBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQ0FDakIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlOzZCQUN4QyxDQUFDOzRCQUNGLHNCQUFPLElBQUksRUFBRSxFQUFDO3lCQUNqQjs2QkFBTTs0QkFDSCxzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxFQUFDO3lCQUN0RTs7Ozs7S0FFTjtJQUVELHNDQUFjLEdBQWQsVUFBZSxHQUFvQixFQUFDLEdBQXFCLEVBQUUsSUFBMEI7UUFFbkYsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFDO1lBQzdCLElBQUc7Z0JBQ0MsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlELElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFHLFFBQVEsRUFBQztvQkFDNUIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNqQztxQkFBSztvQkFDRixPQUFPO29CQUVQLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLHNCQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQVEsQ0FBQTtvQkFDL0QsSUFBSSxFQUFFLENBQUE7aUJBQ1Q7YUFFSjtZQUFBLE9BQU8sQ0FBQyxFQUFDO2dCQUNOLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNqQztTQUVKO2FBQUs7WUFDRixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBakVELElBaUVDO0FBRUQsa0JBQWUsSUFBSSxhQUFhLEVBQUUsQ0FBQyJ9