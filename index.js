const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const errorHandler = require("./middlewares/errorHandler");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/profile", require("./routes/profileRoutes"));
app.use("/api/recipes", require("./routes/recipeRoutes"));
app.use("/api/favorites", require("./routes/favoriteRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));
app.use("/api/social", require("./routes/socialRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

app.use(errorHandler);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
