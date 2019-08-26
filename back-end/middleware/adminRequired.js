// checks for sessions and returns 401 otherwise 

module.exports = (req, res, next) => {
    if (!req.body.admin) {
      return res.status(401).json({ status: 401, message: 'Unauthorized. Please login and try again' });
    }
    next();
  };