import CameraCustom from "../../Camera";
import Renderer from "../../renderer";

const onWindowResize = () => {
	const { innerWidth, innerHeight } = window;

	Renderer.setSize(innerWidth, innerHeight);
	CameraCustom.aspect = innerWidth / innerHeight;

	CameraCustom.updateProjectionMatrix();
};

export default onWindowResize;
