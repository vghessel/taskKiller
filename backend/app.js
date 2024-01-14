const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const { authenticate } = require("./middleware/authMiddleware");
const routes = require("./routes/router");
const app = express();

app.use(cors());
app.use(express.json());

// DB Connection
const conn = require("./db/conn");
conn();

// Public Routes
app.use(authRoutes);


// Private Routes
app.use("/api", authenticate, routes);

app.listen(3000, function() {
    console.log("Server running...");
});