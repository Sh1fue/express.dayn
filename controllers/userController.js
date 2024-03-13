const ApiError = require('../error/ApiError.js')


class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res , next) {
        const {id} = req.query
        if (!id) {
            next(Api)
        }
        res.json(id)
    }
}

module.exports = new UserController()