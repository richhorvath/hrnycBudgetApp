module.exports = (req, res, next) => {
  if (req.body.date) {
    let date = req.body.date.substring(0, 10);
    req.body.date = date;
  }

  next();
};
