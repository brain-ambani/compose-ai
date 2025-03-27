import express from "express";
import userRouter from "./routes/userRoute";
import loginRouter from "./routes/loginRoute";
import protectedRouter from "./routes/protectedRoute";

require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/v1/", userRouter);
app.use("/api/v1/", loginRouter);
app.use("/", protectedRouter);

app.listen(PORT, () => {
  // Start the server and listen on the specified port
  console.log(`Server is running on http://localhost:${PORT}`);
});
