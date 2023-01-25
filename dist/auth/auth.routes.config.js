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
var jwt_middleware_1 = __importDefault(require("./middleware/jwt.middleware"));
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
        this.app.post("/auth/refresh-token", [
            jwt_middleware_1.default.validJWTNeeded,
            jwt_middleware_1.default.verifyRefreshBodyField,
            jwt_middleware_1.default.validRefreshNeeded,
            auth_controller_1.default.createJWT
        ]);
        return this.app;
    };
    return AuthRoutes;
}(common_routes_config_1.CommonRoutesConfig));
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYXV0aC9hdXRoLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQW9FO0FBQ3BFLGtGQUEyRDtBQUMzRCxpRkFBMEQ7QUFFMUQsK0dBQXVGO0FBQ3ZGLCtFQUF3RDtBQUN4RCx1REFBeUM7QUFHekM7SUFBZ0MsOEJBQWtCO0lBQzlDLG9CQUFZLEdBQXdCO2VBQ2hDLGtCQUFNLEdBQUcsRUFBRSxZQUFZLENBQUM7SUFDNUIsQ0FBQztJQUVELG9DQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN2QixJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBRTNCLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQyx5QkFBYyxDQUFDLGtCQUFrQjtZQUNqQyx5QkFBYyxDQUFDLFNBQVM7WUFFeEIsVUFBQyxHQUFtQixFQUFFLEdBQW9CO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDdEIsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQ2pDLHdCQUFhLENBQUMsY0FBYztZQUM1Qix3QkFBYSxDQUFDLHNCQUFzQjtZQUNwQyx3QkFBYSxDQUFDLGtCQUFrQjtZQUNoQyx5QkFBYyxDQUFDLFNBQVM7U0FDM0IsQ0FBQyxDQUFBO1FBR0YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFJTCxpQkFBQztBQUFELENBQUMsQUFqQ0QsQ0FBZ0MseUNBQWtCLEdBaUNqRDtBQWpDWSxnQ0FBVSJ9