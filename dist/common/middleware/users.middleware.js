"use strict";
async;
userCantChangePermission(req, express.Request, res, express.Response, next, express.NextFunction);
{
    if ('permissionFlags' in req.body &&
        req.body.permissionFlags !== res.locals.user.permissionFlags) {
        res.status(400).send({
            errors: ['User cannot change permission flags'],
        });
    }
    else {
        next();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9taWRkbGV3YXJlL3VzZXJzLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLEtBQUssQ0FBQTtBQUFDLHdCQUF3QixDQUMxQixHQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFDcEIsR0FBRyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQ3JCLElBQUksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUM3QixDQUFBO0FBQUM7SUFDRSxJQUNJLGlCQUFpQixJQUFJLEdBQUcsQ0FBQyxJQUFJO1FBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFDOUQ7UUFDRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqQixNQUFNLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztTQUNsRCxDQUFDLENBQUM7S0FDTjtTQUFNO1FBQ0gsSUFBSSxFQUFFLENBQUM7S0FDVjtDQUNKIn0=