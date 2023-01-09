import {
	PerspectiveCamera,
	Scene,
	Color,
	Fog,
	AmbientLight,
	WebGLRenderer,
	sRGBEncoding,
	Clock,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import "./css/style.css";
import printMe from "./print";
import Cube from "./obejcts/cube/cube";
import sphere from "./obejcts/sphere/sphere";
import defaultLight from "./lights/defaultLight";

const cameraPosition = {
	x: 0,
	y: 0,
	z: 180,
};

const cameraLookAt = {
	x: 0,
	y: 0,
	z: 0,
};

/* CAMERA */
let camera = new PerspectiveCamera(
	40,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
camera.lookAt(cameraLookAt.x, cameraLookAt.y, cameraLookAt.z);
/* CAMERA */

/* SCENE */
let scene = new Scene();
scene.background = new Color(0x111111);
scene.fog = new Fog(0x111111, 150, 200);
/* SCENE */

/* LIGHTS */
scene.add(new AmbientLight(0x666666));

scene.add(defaultLight);
/* LIGHTS */

/***********
 * ADD OBJECTS TO SCENE *
 ***********/

scene.add(Cube);
scene.add(sphere);

/***********
 * ADD OBJECTS TO SCENE *
 ***********/

/* EVENT RESIZE */
const onWindowResize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;

	camera.updateProjectionMatrix();
};

window.addEventListener("resize", onWindowResize, false);
/* EVENT RESIZE */

/* RENDERER */
let renderer = new WebGLRenderer({ antialias: true, precision: "highp" });
renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.outputEncoding = sRGBEncoding;
renderer.shadowMap.enabled = false;
/* RENDERER */

/* CONTROLS */
// controls
var controls = new OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI * 0.5;
controls.minDistance = 100;
controls.maxDistance = 500;

window.addEventListener("click", () => console.log("controls", controls));
/* CONTROLS */

/* STATS */
const stats = new Stats();
document.body.appendChild(stats.dom);
/* STATS */

/* ANIMATION */
let clock = new Clock();
let animate = function () {
	let dir = 1;
	requestAnimationFrame(animate);

	let delta = clock.getDelta();

	Cube.rotation.y += delta * 0.5;
	Cube.rotation.x += delta * 0.5;
	Cube.rotation.y += dir * delta;
	if (Cube.position.x > 2) {
		dir = -1;
	} else if (Cube.position.x < -2) {
		dir = 1;
	}

	controls.update();
	renderer.render(scene, camera);
	stats.update();
};

animate();
/* ANIMATION */

setTimeout(() => {
	printMe();
}, 3000);
