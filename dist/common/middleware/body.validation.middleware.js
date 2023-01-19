"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var BodyValidationMiddleware = /** @class */ (function () {
    function BodyValidationMiddleware() {
    }
    BodyValidationMiddleware.prototype.verifyBodyFieldsErrors = function (req, res, next) {
        var errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array() });
        }
        else {
            next();
        }
    };
    return BodyValidationMiddleware;
}());
exports.default = new BodyValidationMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS52YWxpZGF0aW9uLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21tb24vbWlkZGxld2FyZS9ib2R5LnZhbGlkYXRpb24ubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHVEQUFxRDtBQUVyRDtJQUFBO0lBWUEsQ0FBQztJQVRPLHlEQUFzQixHQUF0QixVQUF1QixHQUFtQixFQUFFLEdBQW9CLEVBQUUsSUFBeUI7UUFDdkYsSUFBTSxNQUFNLEdBQUcsSUFBQSxvQ0FBZ0IsRUFBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFDO1lBQ2xCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFDLENBQUMsQ0FBQTtTQUN2RDthQUFLO1lBQ0YsSUFBSSxFQUFFLENBQUE7U0FDVDtJQUVMLENBQUM7SUFDVCwrQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBRUQsa0JBQWUsSUFBSSx3QkFBd0IsRUFBRSxDQUFBIn0=