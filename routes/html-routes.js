// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", isAuthenticated, (req, res) => {
    // If the user already has an account send them to the dashboard page
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
       res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  app.get("/dashboard", (req, res) => {
    // If the user already has an account send them to the members page
       res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
       res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/userProfile", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

  app.get("/history", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/history.html"));
  });

  app.get("/map", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/map.html"));
  });

  app.get("/petProfile", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/petProfile.html"));
  });
  app.get("/addPet", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/petProfile.html"));
  });
};
