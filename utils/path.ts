import { homedir } from "os";
import { readdir } from "fs-extra";

export const getHomeDir = ():string => {
  return homedir();
};

export const getGameDir = ():string => {
  return getHomeDir() + "/Library/Application Support/minecraft/versions/1.12.2-forge1.12.2-14.23.5.2768/saves/New World";
};

export const getComputerDir = ():string => {
  return getGameDir() + "/computer";
};

export const getComputerDirectories = async ():Promise<any[]> => {
  const dirs = await readdir(getComputerDir());
  return dirs;
};
