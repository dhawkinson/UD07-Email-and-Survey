module.exports = (req, res, next) => {
    //  if no logged in user
    if (!req.user) {
        return res.status(401).send({ error: 'You must be logged in!' });
    }
    //  if logged in user
    next();
};