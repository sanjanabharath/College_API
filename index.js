const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/auth");
const setupSwagger = require("./src/docs/swagger");
const assignRouter = require("./src/routes/assignments");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/assign", assignRouter);

setupSwagger(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
