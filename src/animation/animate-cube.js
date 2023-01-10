import { Clock } from "three";
import Cube from "../obejcts/cube";

const clock = new Clock();
let dir = 1;

const animateCube = () => {
	const delta = clock.getDelta();

	Cube.rotation.y += delta * 0.5;
	Cube.rotation.x += delta * 0.5;
	Cube.rotation.y += dir * delta;

	if (Cube.position.x > 2) {
		dir = -1;
	} else if (Cube.position.x < -2) {
		dir = 1;
	}
};

export default animateCube;
