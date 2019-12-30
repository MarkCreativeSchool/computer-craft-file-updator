import {NextFunction, Request, Response} from "express";
import { getGameDir } from "../utils/path";
const express = require('express');
const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log(getGameDir())
  res.send('respond with a resource');
});

module.exports = router;
