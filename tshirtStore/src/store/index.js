import { proxy } from "valtio";
const state = proxy({
  intro: true,
  color: "#32de84",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
  pos: {
    x: null,
    y: null,
  },
  logoTextureSize:0.15,
  
});
export default state;
