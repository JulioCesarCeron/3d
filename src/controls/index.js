import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CameraCustom from "../Camera";
import Renderer from "../renderer";

const Controls = new OrbitControls(CameraCustom, Renderer.domElement);
Controls.maxPolarAngle = Math.PI * 0.5;
Controls.minDistance = 100;
Controls.maxDistance = 500;

export default Controls;
