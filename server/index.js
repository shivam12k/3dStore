import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoutes from './routes/dalle.route.js'
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use('/api/v1/dalle', dalleRoutes);
app.get("/", (req, res) => {
  res.status(200).json({ message: "hellow world" });
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server is listening at the port 8080");
});
