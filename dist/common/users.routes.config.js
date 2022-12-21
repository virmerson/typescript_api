"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("./common.routes.config");
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "UsersRoute");
    }
    configureRoutes() {
        this.app.route('/users')
            .get((req, res) => {
            res.status(200).send('List of users');
        })
            .post((req, res) => {
            res.status(200).send('Post to users');
        });
        this.app.route('user/:userId')
            .all((req, res, next) => {
            next();
        })
            .get((req, res) => {
            res.status(200).send(`GET requested for ${req.params.userId}`);
        })
            .put((req, res) => {
            res.status(200).send(`PUT requested for ${req.params.userId}`);
        })
            .patch((req, res) => {
            res.status(200).send(`Patch requested for ${req.params.userId}`);
        })
            .delete((req, res) => {
            res.status(200).send(`DELETE requested for ${req.params.userId}`);
        });
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbi91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlFQUF5RDtBQUl6RCxNQUFhLFdBQVksU0FBUSx5Q0FBa0I7SUFHbEQsWUFBWSxHQUF1QjtRQUM1QixLQUFLLENBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFRCxlQUFlO1FBRVgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ3ZCLEdBQUcsQ0FBRyxDQUFDLEdBQW1CLEVBQUcsR0FBb0IsRUFBQyxFQUFFO1lBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQ3pDLENBQUMsQ0FBRTthQUNGLElBQUksQ0FBRyxDQUFDLEdBQW1CLEVBQUcsR0FBb0IsRUFBQyxFQUFFO1lBQ2xELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQ3pDLENBQUMsQ0FBQyxDQUFBO1FBR0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO2FBQzdCLEdBQUcsQ0FBRSxDQUFDLEdBQW1CLEVBQUcsR0FBb0IsRUFBRyxJQUF5QixFQUFFLEVBQUU7WUFDN0UsSUFBSSxFQUFFLENBQUE7UUFDVixDQUFDLENBQUM7YUFDRCxHQUFHLENBQUUsQ0FBQyxHQUFtQixFQUFHLEdBQW9CLEVBQUMsRUFBRTtZQUNoRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQ2xFLENBQUMsQ0FBQzthQUNELEdBQUcsQ0FBRSxDQUFDLEdBQW1CLEVBQUcsR0FBb0IsRUFBQyxFQUFFO1lBQ2hELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDbEUsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFFLENBQUMsR0FBbUIsRUFBRyxHQUFvQixFQUFDLEVBQUU7WUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUNwRSxDQUFDLENBQUM7YUFDRCxNQUFNLENBQUUsQ0FBQyxHQUFtQixFQUFHLEdBQW9CLEVBQUMsRUFBRTtZQUNuRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQ3JFLENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ25CLENBQUM7Q0FDSjtBQXJDRCxrQ0FxQ0MifQ==