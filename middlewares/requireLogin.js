module.exports = (req, res, next) => {
    //  if there is no logged in user
    if (!req.user) {
        return res.status(401).send({ error: 'You must be logged in!' });
    }
    //  if there is a logged in user
    next();
};