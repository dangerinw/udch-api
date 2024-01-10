import express, { Express, Request, Response } from "express";
const app: Express = express();
import cors from "cors";
import dotenv from 'dotenv'; 
import { Routes } from "./routes";
dotenv.config();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
console.log(process.env)

Routes.forEach((route) => {
  (app as any)[route.method](
    "/api" + route.route,
    // jwt.verify,
    (req: Request, res: Response, next: Function) => {
      const result = new (route.controller as any)()[route.action](
        req,
        res,
        next
      );
      if (result instanceof Promise) {
        result.then((result) =>
          result !== null && result !== undefined ? res.send(result) : undefined
        );
      } else if (result !== null && result !== undefined) {
        res.json(result);
      }
    }
  );
});

app.listen(process.env.PORT);
console.log(
  `Express server has started on port ${process.env.PORT}. Open http://localhost:${process.env.PORT}/users to see results`
);