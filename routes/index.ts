import {NextFunction, Request, Response} from "express";
import { getHomeDir } from "../utils/path";
const express = require('express');
const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log(getHomeDir())
  res.send('respond with a resource');
});

module.exports = router;
