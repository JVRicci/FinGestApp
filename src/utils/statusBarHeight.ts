import { StatusBar } from "react-native";

export default function statusBarHeight() {
  return StatusBar.currentHeight
    ? StatusBar.currentHeight + 50
    : 64;
  
}