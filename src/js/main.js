
let deltaCameraPositionX = 10
let deltaCameraPositionY = 20
let deltaCameraPositionZ = 100

/* CAMERA */
let camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(deltaCameraPositionX, deltaCameraPositionY, deltaCameraPositionZ);
camera.lookAt(0, 0, 0);
/* CAMERA */

/* SCENE */
let scene = new THREE.Scene();
scene.background = new THREE.Color( 0x111111 );
scene.fog = new THREE.Fog(0x111111, 150, 200);
/* SCENE */


/*********** 
 * OBJECTS *
 ***********/

/* CUBE */
let cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
let cubeGeometry = new THREE.CubeGeometry(20, 20, 20);
let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(0, 0, 0);

scene.add(cube);
/* CUBE */

/* SPHERE */
let sphereGeometry = new THREE.SphereGeometry(20, 110, 20);
let sphereMaterial = new THREE.MeshLambertMaterial({ color: 0xffcc00, wireframe: true });
let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(20, 0, 0);

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

/* ZOOM */
const onMouseScroll = (event) => {
	deltaCameraPositionZ = deltaCameraPositionZ - event.deltaY * 0.07;
	camera.position.set(deltaCameraPositionX, deltaCameraPositionY, deltaCameraPositionZ);
}

window.addEventListener('wheel', onMouseScroll, false);
/* ZOOM */


/* RENDERER */
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio( window.devicePixelRatio );

renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );
/* RENDERER */

/* ANIMATION */
let clock = new THREE.Clock();
let animate = function () {
	let dir = 1;
	requestAnimationFrame( animate );

	let delta = clock.getDelta();

  cube.rotation.y += (delta * 0.5);
	cube.rotation.x += (delta * 0.5);
	cube.rotation.y += (dir * delta);
	cube.rotation.x += (dir * delta);
	if( cube.position.x > 2 ) {
		dir = -1;
	} else if ( cube.position.x < -2) {
		dir = 1;
	}

	renderer.render( scene, camera );
};

animate();
/* ANIMATION */