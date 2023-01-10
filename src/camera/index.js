import { PerspectiveCamera } from "three";
import { cameraLookAt, cameraPosition } from "./constants";

const CameraCustom = new PerspectiveCamera(
	40,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

CameraCustom.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
CameraCustom.lookAt(cameraLookAt.x, cameraLookAt.y, cameraLookAt.z);

export default CameraCustom;
