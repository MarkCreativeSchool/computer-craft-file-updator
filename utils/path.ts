import { homedir } from "os";

export const getHomeDir = () => {
  return homedir();
};

export const getGameDir = () => {
  return getHomeDir() + "/Library/Application Support/minecraft/versions/1.12.2-forge1.12.2-14.23.5.2768/saves/New World";
};

export const getComputerDir = () => {
  return getGameDir() + "/computer";
};

export const getComputerDirectories = () => {

};
