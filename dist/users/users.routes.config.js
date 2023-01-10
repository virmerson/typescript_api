"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
var common_routes_config_1 = require("../common/common.routes.config");
var users_controller_1 = __importDefault(require("./controllers/users.controller"));
var users_middleware_1 = __importDefault(require("./middleware/users.middleware"));
var UsersRoutes = /** @class */ (function (_super) {
    __extends(UsersRoutes, _super);
    function UsersRoutes(app) {
        return _super.call(this, app, "UsersRoute") || this;
    }
    UsersRoutes.prototype.configureRoutes = function () {
        this.app.route('/users')
            .get(users_controller_1.default.listUsers)
            .post(users_middleware_1.default.validateRequiredUserBodyFields, users_middleware_1.default.validateSameEmailDoesntExist, users_controller_1.default.createUser);
        this.app.param("userId", users_middleware_1.default.extractUserId);
        this.app.route('/users/:userId')
            .all(users_middleware_1.default.validateUserExists)
            .get(users_controller_1.default.getUserById)
            .delete(users_controller_1.default.removeUser);
        this.app.put("/users/:userId", [users_middleware_1.default.validateRequiredUserBodyFields,
            users_middleware_1.default.validateSameEmailBelongToSameUser,
            users_controller_1.default.put]);
        this.app.patch('/users/:userId', [
            users_middleware_1.default.validatePatchEmail,
            users_controller_1.default.patch
        ]);
        return this.app;
    };
    return UsersRoutes;
}(common_routes_config_1.CommonRoutesConfig));
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQWlFO0FBQ2pFLG9GQUE0RDtBQUM1RCxtRkFBMkQ7QUFHM0Q7SUFBaUMsK0JBQWtCO0lBR2xELHFCQUFZLEdBQXVCO2VBQzVCLGtCQUFPLEdBQUcsRUFBRSxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVELHFDQUFlLEdBQWY7UUFFSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDdkIsR0FBRyxDQUFFLDBCQUFlLENBQUMsU0FBUyxDQUFFO2FBQ2hDLElBQUksQ0FDRCwwQkFBZSxDQUFDLDhCQUE4QixFQUM5QywwQkFBZSxDQUFDLDRCQUE0QixFQUM1QywwQkFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBRS9CLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSwwQkFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRXZELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO2FBQzlCLEdBQUcsQ0FBRSwwQkFBZSxDQUFDLGtCQUFrQixDQUFDO2FBQ3pDLEdBQUcsQ0FBRSwwQkFBZSxDQUFDLFdBQVcsQ0FBQzthQUNqQyxNQUFNLENBQUMsMEJBQWUsQ0FBQyxVQUFVLENBQUUsQ0FBQTtRQUlwQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxnQkFBZ0IsRUFDMUIsQ0FBQywwQkFBZSxDQUFDLDhCQUE4QjtZQUMvQywwQkFBZSxDQUFDLGlDQUFpQztZQUNqRCwwQkFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFJekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsMEJBQWUsQ0FBQyxrQkFBa0I7WUFDbEMsMEJBQWUsQ0FBQyxLQUFLO1NBQUMsQ0FBQyxDQUFBO1FBRy9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBdkNELENBQWlDLHlDQUFrQixHQXVDbEQ7QUF2Q1ksa0NBQVcifQ==