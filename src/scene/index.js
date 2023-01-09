import { Color, Fog, Scene } from "three";

const SceneCustom = new Scene();
SceneCustom.background = new Color(0x111111);
SceneCustom.fog = new Fog(0x111111, 150, 200);

export default SceneCustom;
