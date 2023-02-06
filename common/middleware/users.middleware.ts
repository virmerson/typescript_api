async userCantChangePermission(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    if (
        'permissionFlags' in req.body &&
        req.body.permissionFlags !== res.locals.user.permissionFlags
    ) {
        res.status(400).send({
            errors: ['User cannot change permission flags'],
        });
    } else {
        next();
    }
}
