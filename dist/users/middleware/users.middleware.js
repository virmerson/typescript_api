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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("../services/users.service"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default("app:users-middleware");
class UsersMiddleware {
    constructor() {
        this.validatePatchEmail = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            if (req.body.email) {
                log('Validating e-mail', req.body.email);
                this.validateSameEmailBelongToSameUser(req, res, next);
            }
            else {
                next();
            }
        });
    }
    validateRequiredUserBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.email && req.body.password) {
                next();
            }
            else {
                res.status(400).send({ error: `Missing required fields email and password` });
            }
        });
    }
    validateSameEmailDoesntExist(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.getUserByEmail(req.body.email);
            if (user) {
                res.status(400).send({ error: `User email already exists` });
            }
            else {
                next();
            }
        });
    }
    validateSameEmailBelongToSameUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.getUserByEmail(req.body.email);
            if (user && user.id === req.params.userId) {
                next();
            }
            else {
                res.status(400).send({ error: `Invalid email ` });
            }
        });
    }
    validateUserExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.readById(req.params.userId);
            if (user) {
                next();
            }
            else {
                res.status(404).send({
                    error: `User ${req.params.userId} not found`,
                });
            }
        });
    }
    extractUserId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.readById(req.params.id);
            req.body.id = req.params.userId;
            next();
        });
    }
}
exports.default = new UsersMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXJzL21pZGRsZXdhcmUvdXNlcnMubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLDhFQUFxRDtBQUNyRCxrREFBeUM7QUFFekMsTUFBTSxHQUFHLEdBQW1CLGVBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0FBRXpELE1BQU0sZUFBZTtJQUFyQjtRQXFDUSx1QkFBa0IsR0FBRyxDQUFPLEdBQW1CLEVBQUUsR0FBb0IsRUFBRSxJQUF5QixFQUFDLEVBQUU7WUFFM0YsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztnQkFDZixHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDeEMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFDekQ7aUJBQUk7Z0JBQ0QsSUFBSSxFQUFFLENBQUE7YUFDVDtRQUVULENBQUMsQ0FBQSxDQUFBO0lBd0JULENBQUM7SUFwRVUsOEJBQThCLENBQUMsR0FBbUIsRUFBRSxHQUFvQixFQUFFLElBQXlCOztZQUNsRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUM7Z0JBQ2hELElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQUk7Z0JBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsNENBQTRDLEVBQUMsQ0FBQyxDQUFBO2FBQzdFO1FBQ1IsQ0FBQztLQUFBO0lBR1EsNEJBQTRCLENBQUMsR0FBbUIsRUFBRSxHQUFvQixFQUFFLElBQXlCOztZQUUvRixNQUFNLElBQUksR0FBRyxNQUFNLHVCQUFZLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDOUQsSUFBSSxJQUFJLEVBQUM7Z0JBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsMkJBQTJCLEVBQUMsQ0FBQyxDQUFBO2FBQ2hFO2lCQUFJO2dCQUNELElBQUksRUFBRSxDQUFDO2FBQ1Y7UUFHVCxDQUFDO0tBQUE7SUFFSyxpQ0FBaUMsQ0FBQyxHQUFtQixFQUFFLEdBQW9CLEVBQUUsSUFBeUI7O1lBRXhHLE1BQU0sSUFBSSxHQUFHLE1BQU0sdUJBQVksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUU5RCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDO2dCQUNwQyxJQUFJLEVBQUUsQ0FBQTthQUNUO2lCQUFJO2dCQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLGdCQUFnQixFQUFDLENBQUMsQ0FBQTthQUNqRDtRQUdMLENBQUM7S0FBQTtJQWVLLGtCQUFrQixDQUFDLEdBQW9CLEVBQUMsR0FBcUIsRUFBRSxJQUEwQjs7WUFDM0YsTUFBTSxJQUFJLEdBQUcsTUFBTSx1QkFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBRTNELElBQUcsSUFBSSxFQUFDO2dCQUNKLElBQUksRUFBRSxDQUFBO2FBQ1Q7aUJBQUk7Z0JBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxZQUFZO2lCQUMvQyxDQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxHQUFvQixFQUFDLEdBQXFCLEVBQUUsSUFBMEI7O1lBQ3RGLE1BQU0sSUFBSSxHQUFHLE1BQU0sdUJBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUV2RCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQTtZQUMvQixJQUFJLEVBQUUsQ0FBQTtRQUVWLENBQUM7S0FBQTtDQUdSO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQSJ9