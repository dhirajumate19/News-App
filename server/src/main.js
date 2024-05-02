import express from "express";
import { PORTNumber } from "./config/config.js";
import articleRouter from "./api/feature/article/article.routes.js";
import { connectionDB } from "./config/connectionDB.js";
import accountRouter from "./api/feature/account/account.routes.js";

const app = express();

app.use(express.json());
connectionDB();
app.use("/api", articleRouter);
app.use("/api", accountRouter);

app.listen(PORTNumber, () => {
  console.log(`The surver is running on localhost:${PORTNumber}`);
});
