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
var express_validator_1 = require("express-validator");
var body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
var jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
var common_permission_middleware_1 = __importDefault(require("../common/middleware/common.permission.middleware"));
var common_permissionflag_enum_1 = require("../common/middleware/common.permissionflag.enum");
var UsersRoutes = /** @class */ (function (_super) {
    __extends(UsersRoutes, _super);
    function UsersRoutes(app) {
        return _super.call(this, app, "UsersRoute") || this;
    }
    UsersRoutes.prototype.configureRoutes = function () {
        this.app.route('/users')
            .get(jwt_middleware_1.default.validJWTNeeded, common_permission_middleware_1.default.permissionFlagRequired(common_permissionflag_enum_1.PermissionFlag.ADMIN_PERMISSION), users_controller_1.default.listUsers)
            .post((0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('password')
            .isLength({ min: 5 })
            .withMessage('Field must to have at least 5 characters '), body_validation_middleware_1.default.verifyBodyFieldsErrors, users_middleware_1.default.validateSameEmailDoesntExist, users_controller_1.default.createUser);
        this.app.param("userId", users_middleware_1.default.extractUserId);
        this.app.route('/users/:userId')
            .all(users_middleware_1.default.validateUserExists, jwt_middleware_1.default.validJWTNeeded, common_permission_middleware_1.default.onlySameUserOrAdminCanDoThisAction)
            .get(users_controller_1.default.getUserById)
            .delete(users_controller_1.default.removeUser);
        this.app.put("/users/:userId", [
            (0, express_validator_1.body)('email').isEmail(),
            (0, express_validator_1.body)('password')
                .isLength({ min: 5 })
                .withMessage('Field must to have at least 5 characters '),
            (0, express_validator_1.body)('firstName').isString(),
            (0, express_validator_1.body)('lastName').isString(),
            (0, express_validator_1.body)('permissionFlag').isInt(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            users_middleware_1.default.validateSameEmailBelongToSameUser,
            users_controller_1.default.put
        ]);
        this.app.patch('/users/:userId', [
            (0, express_validator_1.body)('email').isEmail().optional(),
            (0, express_validator_1.body)('password')
                .isLength({ min: 5 })
                .withMessage('Field must to have at least 5 characters ')
                .optional(),
            (0, express_validator_1.body)('firstName').isString().optional(),
            (0, express_validator_1.body)('lastName').isString().optional(),
            (0, express_validator_1.body)('permissionFlag').isInt().optional(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            users_middleware_1.default.validatePatchEmail,
            users_controller_1.default.patch
        ]);
        return this.app;
    };
    return UsersRoutes;
}(common_routes_config_1.CommonRoutesConfig));
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQWlFO0FBQ2pFLG9GQUE0RDtBQUM1RCxtRkFBMkQ7QUFFM0QsdURBQXdDO0FBQ3hDLCtHQUFzRjtBQUN0RixxRkFBOEQ7QUFDOUQsbUhBQXFGO0FBQ3JGLDhGQUFpRjtBQUVqRjtJQUFpQywrQkFBa0I7SUFHbEQscUJBQVksR0FBdUI7ZUFDNUIsa0JBQU8sR0FBRyxFQUFFLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUVJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUV2QixHQUFHLENBQ0Esd0JBQWEsQ0FBQyxjQUFjLEVBQzVCLHNDQUFvQixDQUFDLHNCQUFzQixDQUFDLDJDQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFDNUUsMEJBQWUsQ0FBQyxTQUFTLENBQUU7YUFDOUIsSUFBSSxDQUNELElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFDdkIsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQzthQUNmLFFBQVEsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsQ0FBQzthQUNqQixXQUFXLENBQUMsMkNBQTJDLENBQUMsRUFDekQsb0NBQXdCLENBQUMsc0JBQXNCLEVBQy9DLDBCQUFlLENBQUMsNEJBQTRCLEVBQzVDLDBCQUFlLENBQUMsVUFBVSxDQUFDLENBQUE7UUFFL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLDBCQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7UUFFdkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7YUFDOUIsR0FBRyxDQUNELDBCQUFlLENBQUMsa0JBQWtCLEVBQ2xDLHdCQUFhLENBQUMsY0FBYyxFQUM1QixzQ0FBb0IsQ0FBQyxrQ0FBa0MsQ0FBQzthQUMzRCxHQUFHLENBQUUsMEJBQWUsQ0FBQyxXQUFXLENBQUM7YUFDakMsTUFBTSxDQUFDLDBCQUFlLENBQUMsVUFBVSxDQUFFLENBQUE7UUFJcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUUsZ0JBQWdCLEVBQzFCO1lBQ0EsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN2QixJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDO2lCQUNmLFFBQVEsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsQ0FBQztpQkFDakIsV0FBVyxDQUFDLDJDQUEyQyxDQUFDO1lBQ3pELElBQUEsd0JBQUksRUFBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMzQixJQUFBLHdCQUFJLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDOUIsb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLDBCQUFlLENBQUMsaUNBQWlDO1lBQ2pELDBCQUFlLENBQUMsR0FBRztTQUFDLENBQUMsQ0FBQTtRQUl6QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFBLHdCQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2xDLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUM7aUJBQ2YsUUFBUSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxDQUFDO2lCQUNqQixXQUFXLENBQUMsMkNBQTJDLENBQUM7aUJBQ3hELFFBQVEsRUFBRTtZQUNYLElBQUEsd0JBQUksRUFBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUN0QyxJQUFBLHdCQUFJLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDekMsb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLDBCQUFlLENBQUMsa0JBQWtCO1lBQ2xDLDBCQUFlLENBQUMsS0FBSztTQUFDLENBQUMsQ0FBQTtRQUcvQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDbkIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQW5FRCxDQUFpQyx5Q0FBa0IsR0FtRWxEO0FBbkVZLGtDQUFXIn0=