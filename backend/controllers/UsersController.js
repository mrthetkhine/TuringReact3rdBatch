let userService = require('../services/UserService');
exports.getUserById = async function (req, res, next) {
    console.log('Req ',req.params);
    let userId = req.params.userId;
    let user = userService.getUserById(userId);
    return res.status(200).json(user);
}
