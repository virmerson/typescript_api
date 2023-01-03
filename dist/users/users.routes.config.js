"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_controller_1 = __importDefault(require("./controllers/users.controller"));
const users_middleware_1 = __importDefault(require("./middleware/users.middleware"));
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "UsersRoute");
    }
    configureRoutes() {
        this.app.route('/users')
            .get(users_controller_1.default.listUsers)
            .post(users_middleware_1.default.validateRequiredUserBodyFields, users_middleware_1.default.validateSameEmailDoesntExist, users_controller_1.default.createUser);
        this.app.param(`userId`, users_middleware_1.default.extractUserId);
        this.app.route('/users/:userId')
            .all(users_middleware_1.default.validateUserExists)
            .get(users_controller_1.default.getUserById)
            .delete(users_controller_1.default.removeUser);
        this.app.put(`/users/:userId`, [users_middleware_1.default.validateRequiredUserBodyFields,
            users_middleware_1.default.validateSameEmailBelongToSameUser,
            users_controller_1.default.put]);
        this.app.patch('/users/:userId', [
            users_middleware_1.default.validatePatchEmail,
            users_controller_1.default.patch
        ]);
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQWlFO0FBQ2pFLHNGQUE0RDtBQUM1RCxxRkFBMkQ7QUFHM0QsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBR2xELFlBQVksR0FBdUI7UUFDNUIsS0FBSyxDQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRUQsZUFBZTtRQUVYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN2QixHQUFHLENBQUUsMEJBQWUsQ0FBQyxTQUFTLENBQUU7YUFDaEMsSUFBSSxDQUNELDBCQUFlLENBQUMsOEJBQThCLEVBQzlDLDBCQUFlLENBQUMsNEJBQTRCLEVBQzVDLDBCQUFlLENBQUMsVUFBVSxDQUFDLENBQUE7UUFFL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLDBCQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7UUFFdkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7YUFDOUIsR0FBRyxDQUFFLDBCQUFlLENBQUMsa0JBQWtCLENBQUM7YUFDekMsR0FBRyxDQUFFLDBCQUFlLENBQUMsV0FBVyxDQUFDO2FBQ2pDLE1BQU0sQ0FBQywwQkFBZSxDQUFDLFVBQVUsQ0FBRSxDQUFBO1FBSXBDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLGdCQUFnQixFQUMxQixDQUFDLDBCQUFlLENBQUMsOEJBQThCO1lBQy9DLDBCQUFlLENBQUMsaUNBQWlDO1lBQ2pELDBCQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUlyQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUM3QiwwQkFBZSxDQUFDLGtCQUFrQjtZQUNsQywwQkFBZSxDQUFDLEtBQUs7U0FBQyxDQUFDLENBQUE7UUFHL0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ25CLENBQUM7Q0FDSjtBQXZDRCxrQ0F1Q0MifQ==