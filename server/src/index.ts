import express from "express";

import loginRouter from "./routes/loginRoute";
import protectedRouter from "./routes/protectedRoute";
import RegisterRouter from "./routes/registerRoute";

require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/v1/auth", RegisterRouter); // Register the user route
app.use("/api/v1/auth", loginRouter);
app.use("/", protectedRouter);

app.listen(PORT, () => {
  // Start the server and listen on the specified port
  console.log(`Server is running on http://localhost:${PORT}`);
});
