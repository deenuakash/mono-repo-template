import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import session from "express-session";
import store from "./config/dbStore.js";
import "./config/db.js";
import trackRouter from "./routes/trackRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
    store,
  })
);

app.use("/api/user", userRouter);

app.use("/api/track", trackRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

//Setup auth middlewares
//work on tracker process
