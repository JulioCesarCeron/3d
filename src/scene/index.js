import { AmbientLight, Color, Fog, Scene } from "three";
import defaultLight from "../lights/defaultLight";

const SceneCustom = new Scene();
SceneCustom.background = new Color(0x111111);
SceneCustom.fog = new Fog(0x111111, 150, 200);
SceneCustom.add(new AmbientLight(0x666666));
SceneCustom.add(defaultLight);

export default SceneCustom;
