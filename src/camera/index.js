import { PerspectiveCamera } from "three";
import { cameraLookAt, cameraPosition } from "./constants";

const Camera = new PerspectiveCamera(
	40,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

Camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
Camera.lookAt(cameraLookAt.x, cameraLookAt.y, cameraLookAt.z);

export default Camera;
