import {NextFunction, Request, Response} from "express";
import { getComputerDirectories, getGameDir } from "../utils/path";
const express = require('express');
const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  console.log(await getComputerDirectories())
  res.send('respond with a resource');
});

module.exports = router;
