const app = require("./app");
const connectDB = require("./config/db");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const reviewRoutes = require("./routes/reviewRoutes");

const errorHandler = require("./middleware/errorMiddleware");

connectDB();

app.use("/api/reviews", reviewRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});