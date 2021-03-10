const user = require ('../models/User'); 


module.exports = (role) => {
    return (req, res, next) => {
        if (req.user.role === role){
            res.satus(401)
            return res.sen('Not allowed')
        }
        next()
    }
}