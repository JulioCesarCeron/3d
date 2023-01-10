import { sRGBEncoding, WebGLRenderer } from "three";

const Renderer = new WebGLRenderer({ antialias: true, precision: "highp" });
Renderer.setPixelRatio(window.devicePixelRatio);

Renderer.setSize(window.innerWidth, window.innerHeight);
Renderer.outputEncoding = sRGBEncoding;
Renderer.shadowMap.enabled = false;

export default Renderer;
