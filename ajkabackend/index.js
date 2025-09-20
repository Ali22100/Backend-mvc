import chalk from "chalk";
import 'dotenv/config';
import express from "express"
import cors from "cors";
import { connectDB } from "./database/db.js";
import useRoute from "./routes/router.js"

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

connectDB()

app.use('/api' , useRoute)


app.get("/", (req, res) => {
    res.json({
        message: "server start",
    });
});

app.listen(PORT, () => {
        console.log(chalk.blue(`server is running on http://localhost:${PORT}`));
});