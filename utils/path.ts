import { homedir } from "os";
import { readdir } from "fs-extra";

export const getHomeDir = ():string => {
  return homedir();
};

export const minecraftDir = (): string => {
  return getHomeDir() + "/Library/Application Support/minecraft";
};

export const getGameDir = (gameDir: string):string => {
  return minecraftDir() + "/versions/" + gameDir;
};

export const getWorldDir = (gameDir: string, worldDir: string): string => {
  return getGameDir(gameDir) + "/saves/" + worldDir;
};

export const getComputerDir = (gameDir: string, worldDir: string, computerId: string):string => {
  return getWorldDir(gameDir, worldDir) + "/computer/" + computerId;
};
