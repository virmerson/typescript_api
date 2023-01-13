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
var UsersRoutes = /** @class */ (function (_super) {
    __extends(UsersRoutes, _super);
    function UsersRoutes(app) {
        return _super.call(this, app, "UsersRoute") || this;
    }
    UsersRoutes.prototype.configureRoutes = function () {
        this.app.route('/users')
            .get(users_controller_1.default.listUsers)
            .post((0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('password')
            .isLength({ min: 5 })
            .withMessage('Field must to have at least 5 characters '), body_validation_middleware_1.default.verifyBodyFieldsErrors, users_middleware_1.default.validateSameEmailDoesntExist, users_controller_1.default.createUser);
        this.app.param("userId", users_middleware_1.default.extractUserId);
        this.app.route('/users/:userId')
            .all(users_middleware_1.default.validateUserExists)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQWlFO0FBQ2pFLG9GQUE0RDtBQUM1RCxtRkFBMkQ7QUFFM0QsdURBQXdDO0FBQ3hDLCtHQUFzRjtBQUV0RjtJQUFpQywrQkFBa0I7SUFHbEQscUJBQVksR0FBdUI7ZUFDNUIsa0JBQU8sR0FBRyxFQUFFLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUVJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN2QixHQUFHLENBQUUsMEJBQWUsQ0FBQyxTQUFTLENBQUU7YUFDaEMsSUFBSSxDQUNELElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFDdkIsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQzthQUNmLFFBQVEsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsQ0FBQzthQUNqQixXQUFXLENBQUMsMkNBQTJDLENBQUMsRUFDekQsb0NBQXdCLENBQUMsc0JBQXNCLEVBQy9DLDBCQUFlLENBQUMsNEJBQTRCLEVBQzVDLDBCQUFlLENBQUMsVUFBVSxDQUFDLENBQUE7UUFFL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLDBCQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7UUFFdkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7YUFDOUIsR0FBRyxDQUFFLDBCQUFlLENBQUMsa0JBQWtCLENBQUM7YUFDekMsR0FBRyxDQUFFLDBCQUFlLENBQUMsV0FBVyxDQUFDO2FBQ2pDLE1BQU0sQ0FBQywwQkFBZSxDQUFDLFVBQVUsQ0FBRSxDQUFBO1FBSXBDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLGdCQUFnQixFQUMxQjtZQUNBLElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQztpQkFDZixRQUFRLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUM7aUJBQ2pCLFdBQVcsQ0FBQywyQ0FBMkMsQ0FBQztZQUN6RCxJQUFBLHdCQUFJLEVBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQzVCLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBQSx3QkFBSSxFQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxFQUFFO1lBQzlCLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQywwQkFBZSxDQUFDLGlDQUFpQztZQUNqRCwwQkFBZSxDQUFDLEdBQUc7U0FBQyxDQUFDLENBQUE7UUFJekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNsQyxJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDO2lCQUNmLFFBQVEsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsQ0FBQztpQkFDakIsV0FBVyxDQUFDLDJDQUEyQyxDQUFDO2lCQUN4RCxRQUFRLEVBQUU7WUFDWCxJQUFBLHdCQUFJLEVBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDdEMsSUFBQSx3QkFBSSxFQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3pDLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQywwQkFBZSxDQUFDLGtCQUFrQjtZQUNsQywwQkFBZSxDQUFDLEtBQUs7U0FBQyxDQUFDLENBQUE7UUFHL0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ25CLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUE1REQsQ0FBaUMseUNBQWtCLEdBNERsRDtBQTVEWSxrQ0FBVyJ9