import {NextFunction, Request, Response} from "express";
import { getGameDir, getWorldDir, getComputerDir } from "../utils/path";
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/health', (req: Request, res: Response) => {
  res.send({message: "health ok!"});
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.send('respond with a resource');
});

router.post('/source', (req: Request, res: Response) => {
  console.log(req.body);
  const gameDir: string = req.body.gameDir;
  const world: string = req.body.world;
  const computerId: string = req.body.computerId;
  const computerDir = getComputerDir(gameDir, world, computerId);
  console.log(computerDir);
  const source = req.body.source;
  const programName = req.body.programName;
  fs.writeFileSync(`${computerDir}/${programName}.lua`, source);
  res.send({message: 'post source'});
});


router.get('/findDir', (req: Request, res: Response) => {
  let existsGameDir = false;
  let existsWorldDir = false;
  const gameDir = getGameDir(req.query.gameDir);
  if (gameDir) {
    existsGameDir = true;
  }
  const worldDir = getWorldDir(req.query.gameDir, req.query.world);
  if (worldDir) {
    existsWorldDir = true;
  }

  res.send({
    message: 'gameDir',
    exists: {
      gameDir: existsGameDir,
      worldDir: existsWorldDir,
    },
  });
});

module.exports = router;
