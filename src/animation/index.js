import CameraCustom from "../Camera";
import Controls from "../controls";
import Renderer from "../renderer";
import SceneCustom from "../scene";
import statsCustom from "../stats";
import animateCube from "./animate-cube";

const animate = () => {
	requestAnimationFrame(animate);

	animateCube();

	Controls.update();
	Renderer.render(SceneCustom, CameraCustom);
	statsCustom.update();
};

export default animate;
