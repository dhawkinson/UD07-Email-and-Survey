//  NOTE to self:
//      MODULE NAMING CONVENTION
//      when exporting a single function or code snippet
//          we begin the name with a lower case letter
//      when exporting a Class or any kind
//          we begin the name with an Upper Case Letter

//  checking for logged in user
module.exports = (req, res, next) => {
    //  if there is no logged in user -- stop with error
    if (!req.user) {
        return res.status(401).send({ error: 'You must be logged in!' });
    }
    //  if there is a logged in user -- proceed
    next();
};