"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var debug_1 = __importDefault(require("debug"));
var log = (0, debug_1.default)("app:mongoose-service");
var MongooseService = /** @class */ (function () {
    function MongooseService() {
        var _this = this;
        this.count = 0;
        this.mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        };
        this.connectWithRetry = function () {
            log('Attempting MongoDB connection (will retry if needed)');
            mongoose_1.default
                .connect("mongodb://localhost:27017/api-db", _this.mongooseOptions)
                .then(function () {
                log("Mongo DB Connected");
            })
                .catch(function (err) {
                var retrySeconds = 5;
                //log
                log("MongoDB connection unsuccessful (will retry #\n                ".concat(++_this.count, " after ").concat(retrySeconds, " seconds):"), err);
                //chamada 
                setTimeout(_this.connectWithRetry, retrySeconds * 1000);
            });
        };
        this.connectWithRetry();
    }
    MongooseService.prototype.getMongoose = function () {
        return mongoose_1.default;
    };
    return MongooseService;
}());
exports.default = new MongooseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlL21vbmdvb3NlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBZ0M7QUFDaEMsZ0RBQTBCO0FBRTFCLElBQU0sR0FBRyxHQUFxQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFBO0FBRTNEO0lBV0k7UUFBQSxpQkFFQztRQVhPLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFVixvQkFBZSxHQUFHO1lBQ3RCLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsd0JBQXdCLEVBQUUsSUFBSTtTQUVqQyxDQUFDO1FBU0YscUJBQWdCLEdBQUc7WUFDZixHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQztZQUM1RCxrQkFBUTtpQkFDUCxPQUFPLENBQUMsa0NBQWtDLEVBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQztpQkFDaEUsSUFBSSxDQUFFO2dCQUNILEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1lBQzdCLENBQUMsQ0FBRTtpQkFDRixLQUFLLENBQUUsVUFBQyxHQUFHO2dCQUNSLElBQU0sWUFBWSxHQUFHLENBQUMsQ0FBQTtnQkFDdEIsS0FBSztnQkFDTCxHQUFHLENBQUUseUVBQ0MsRUFBRSxLQUFJLENBQUMsS0FBSyxvQkFBVSxZQUFZLGVBQVksRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFFMUQsVUFBVTtnQkFDVixVQUFVLENBQUMsS0FBSSxDQUFDLGdCQUFnQixFQUFLLFlBQVksR0FBQyxJQUFJLENBQUUsQ0FBQztZQUU3RCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQTtRQXZCRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNJLE9BQU8sa0JBQVEsQ0FBQztJQUNwQixDQUFDO0lBb0JMLHNCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQUVELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==