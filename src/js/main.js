import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';
import Stats from '../../node_modules/three/examples/jsm/libs/stats.module.js';

let cameraPositionX = 0;
let cameraPositionY = 0;
let cameraPositionZ = 190;

let cameraLookAtX = 0;
let cameraLookAtY = 0;
let cameraLookAtZ = 0;
let mouseMoveCamera = false;

/* CAMERA */
let camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(cameraPositionX, cameraPositionY, cameraPositionZ);
camera.lookAt(cameraLookAtX, cameraLookAtY, cameraLookAtZ);
/* CAMERA */

/* SCENE */
let scene = new THREE.Scene();
scene.background = new THREE.Color( 0x111111 );
scene.fog = new THREE.Fog(0x111111, 150, 200);
/* SCENE */


/* LIGHTS */
scene.add( new THREE.AmbientLight( 0x666666 ) );

const light = new THREE.DirectionalLight( 0xdfebff, 1 );
light.position.set( 50, 200, 100 );
light.position.multiplyScalar( 1.3 );
light.castShadow = false;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;

const d = 300;

light.shadow.camera.left = - d;
light.shadow.camera.right = d;
light.shadow.camera.top = d;
light.shadow.camera.bottom = - d;

light.shadow.camera.far = 1000;

scene.add( light );
/* LIGHTS */

/*********** 
 * OBJECTS *
 ***********/

/* CUBE */
let cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
let cubeGeometry = new THREE.CubeGeometry(20, 20, 20);
let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(-30, 0, 0);

scene.add(cube);
/* CUBE */

/* SPHERE */
let sphereGeometry = new THREE.SphereGeometry(20, 110, 20);
let sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x2b85e4 });
let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(30, 0, 0);

scene.add(sphere);
/* SPHERE */

/*********** 
 * OBJECTS *
 ***********/


/* EVENT RESIZE */
const onWindowResize = () => {
	renderer.setSize( window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	
	camera.updateProjectionMatrix();
}

window.addEventListener('resize', onWindowResize, false );
/* EVENT RESIZE */


/* RENDERER */
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio( window.devicePixelRatio );

renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.enabled = false;
/* RENDERER */

/* CONTROLS */
// controls
var controls = new OrbitControls( camera, renderer.domElement );
console.log('controls', controls);
controls.maxPolarAngle = Math.PI * 0.5;
controls.minDistance = 100;
controls.maxDistance = 500;

window.addEventListener('click', () => console.log("controls", controls));
/* CONTROLS */


/* STATS */
const stats = new Stats();
document.body.appendChild( stats.dom );
/* STATS */

/* ANIMATION */
let clock = new THREE.Clock();
let animate = function () {
	let dir = 1;
	requestAnimationFrame( animate );

	let delta = clock.getDelta();

  cube.rotation.y += (delta * 0.5);
	cube.rotation.x += (delta * 0.5);
	cube.rotation.y += (dir * delta);
	if( cube.position.x > 2 ) {
		dir = -1;
	} else if ( cube.position.x < -2) {
		dir = 1;
	}

	controls.update();
	renderer.render( scene, camera );
	stats.update()
};

animate();
/* ANIMATION */