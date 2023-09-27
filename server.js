const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const helmet = require("helmet");
require("dotenv").config();

// Connect to the database
require("./config/database");

const app = express();

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const PORT = process.env.PORT || 3001;

// ----- Configure Middleware ------ //
app.use(logger("dev"));
app.use(express.json());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: [
        "'self'",
        "https://upload-widget.cloudinary.com",
        "'nonce-ABC123'",
        "'unsafe-inline'",
      ],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "https://res.cloudinary.com", "'nonce-ABC123'"],
    },
  })
);

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// Check for token and create a req.user prop in the request
app.use(require("./config/check-token"));

// Define the 'catch all'
app.use(express.static(path.join(__dirname, "build")));

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));

//Protect the API routes
// const ensureLoggedIn = require("./config/ensure-loggedin");
app.use("/api/posts", require("./routes/api/posts"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Error handler for CSP violation reports
app.post("/csp-report", (req, res) => {
  const report = req.body;
  // Log or process the CSP violation report
  console.error("CSP Violation Report:", report);
  res.status(204).end();
});

// Listen to the port
app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}`);
});
