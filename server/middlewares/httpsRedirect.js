const redirectHTTPS = (req, res, next) => {
  if (!req.secure && process.env.NODE_ENV !== "development") {
    return res.redirect("https://" + req.headers.host + request.url);
  }
  next();
};

module.exports = { redirectHTTPS };
