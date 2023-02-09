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
var app_1 = __importDefault(require("../app"));
var supertest_1 = __importDefault(require("supertest"));
var chai_1 = require("chai");
var shortid_1 = __importDefault(require("shortid"));
var firstUserIdTest = ''; // will later hold a value returned by our API
var firstUserBody = {
    email: "jao+".concat(shortid_1.default.generate(), "@toptal.com"),
    password: 'Sup3rSecret!23',
};
var accessToken = '';
var refreshToken = '';
var newFirstName = 'Jose';
var newFirstName2 = 'Paulo';
var newLastName2 = 'Faraco';
describe('users and auth endpoints', function () {
    var request;
    before(function () {
        request = supertest_1.default.agent(app_1.default);
    });
    it('should allow a POST to /users', function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.post('/users').send(firstUserBody)];
                    case 1:
                        res = _a.sent();
                        (0, chai_1.expect)(res.status).to.equal(201);
                        (0, chai_1.expect)(res.body).not.to.be.empty;
                        (0, chai_1.expect)(res.body).to.be.an('object');
                        (0, chai_1.expect)(res.body.id).to.be.a('string');
                        firstUserIdTest = res.body.id;
                        return [2 /*return*/];
                }
            });
        });
    });
    it('should allow a POST to /auth', function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request.post('/auth').send(firstUserBody)];
                    case 1:
                        res = _a.sent();
                        (0, chai_1.expect)(res.status).to.equal(201);
                        (0, chai_1.expect)(res.body).not.to.be.empty;
                        (0, chai_1.expect)(res.body).to.be.an('object');
                        (0, chai_1.expect)(res.body.accessToken).to.be.a('string');
                        accessToken = res.body.accessToken;
                        refreshToken = res.body.refreshToken;
                        return [2 /*return*/];
                }
            });
        });
    });
    it('should allow a GET from /users/:userId with an access token', function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .get("/users/".concat(firstUserIdTest))
                            .set({ Authorization: "Bearer ".concat(accessToken) })
                            .send()];
                    case 1:
                        res = _a.sent();
                        (0, chai_1.expect)(res.status).to.equal(200);
                        (0, chai_1.expect)(res.body).not.to.be.empty;
                        (0, chai_1.expect)(res.body).to.be.an('object');
                        (0, chai_1.expect)(res.body._id).to.be.a('string');
                        (0, chai_1.expect)(res.body._id).to.equal(firstUserIdTest);
                        (0, chai_1.expect)(res.body.email).to.equal(firstUserBody.email);
                        return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvdXNlcnMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUF5QjtBQUN6Qix3REFBa0M7QUFDbEMsNkJBQThCO0FBQzlCLG9EQUE4QjtBQUc5QixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUMsQ0FBQyw4Q0FBOEM7QUFDeEUsSUFBTSxhQUFhLEdBQUc7SUFDbEIsS0FBSyxFQUFFLGNBQU8saUJBQU8sQ0FBQyxRQUFRLEVBQUUsZ0JBQWE7SUFDN0MsUUFBUSxFQUFFLGdCQUFnQjtDQUM3QixDQUFDO0FBRUYsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUN0QixJQUFNLFlBQVksR0FBRyxNQUFNLENBQUM7QUFDNUIsSUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDO0FBQzlCLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQztBQUc5QixRQUFRLENBQUMsMEJBQTBCLEVBQUU7SUFDakMsSUFBSSxPQUFpQyxDQUFDO0lBQ3RDLE1BQU0sQ0FBQztRQUNILE9BQU8sR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxhQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztJQUdILEVBQUUsQ0FBQywrQkFBK0IsRUFBRTs7Ozs7NEJBQ3BCLHFCQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFBOzt3QkFBdEQsR0FBRyxHQUFHLFNBQWdEO3dCQUU1RCxJQUFBLGFBQU0sRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDakMsSUFBQSxhQUFNLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFD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