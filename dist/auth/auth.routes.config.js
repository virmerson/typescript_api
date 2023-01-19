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
exports.AuthRoutes = void 0;
var common_routes_config_1 = require("../common/common.routes.config");
var auth_controller_1 = __importDefault(require("./controllers/auth.controller"));
var auth_middleware_1 = __importDefault(require("./middleware/auth.middleware"));
var body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
var express_validator_1 = require("express-validator");
var AuthRoutes = /** @class */ (function (_super) {
    __extends(AuthRoutes, _super);
    function AuthRoutes(app) {
        return _super.call(this, app, 'AuthRoutes') || this;
    }
    AuthRoutes.prototype.configureRoutes = function () {
        this.app.post("/auth", [
            (0, express_validator_1.body)('email').isEmail(),
            (0, express_validator_1.body)('password').isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            auth_middleware_1.default.verifyUserPassword,
            auth_controller_1.default.createJWT,
            function (req, res) {
                console.log(req.body);
                res.send(req.body);
            }
        ]);
        return this.app;
    };
    return AuthRoutes;
}(common_routes_config_1.CommonRoutesConfig));
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYXV0aC9hdXRoLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQW9FO0FBQ3BFLGtGQUEyRDtBQUMzRCxpRkFBMEQ7QUFFMUQsK0dBQXVGO0FBQ3ZGLHVEQUF5QztBQUd6QztJQUFnQyw4QkFBa0I7SUFDOUMsb0JBQVksR0FBd0I7ZUFDaEMsa0JBQU0sR0FBRyxFQUFFLFlBQVksQ0FBQztJQUM1QixDQUFDO0lBRUQsb0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFBLHdCQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFFM0Isb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLHlCQUFjLENBQUMsa0JBQWtCO1lBQ2pDLHlCQUFjLENBQUMsU0FBUztZQUV4QixVQUFDLEdBQW1CLEVBQUUsR0FBb0I7Z0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN0QixDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFyQkQsQ0FBZ0MseUNBQWtCLEdBcUJqRDtBQXJCWSxnQ0FBVSJ9