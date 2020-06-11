let camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-100, 50, 100);
camera.lookAt(0, 0, 0);

let scene = new THREE.Scene();
scene.background = new THREE.Color( 0x111111 );
scene.fog = new THREE.Fog(0x111111, 150, 200);

let material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
let geometry = new THREE.CubeGeometry(20, 20, 20);
let mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 0);

scene.add(mesh);

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio( window.devicePixelRatio );

renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );


let clock = new THREE.Clock();


const onWindowResize = () => {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight);
}

window.addEventListener( 'resize', onWindowResize, false );

let animate = function () {
	let dir = 1;
	requestAnimationFrame( animate );

	let delta = clock.getDelta();

	 mesh.rotation.y += delta * 0.5;	
	// mesh.rotation.x += delta * 0.5;
	// mesh.rotation.y += dir * delta;
	if( mesh.position.x > 2 ) {
		dir = -1;
	} else if ( mesh.position.x < -2) {
		dir = 1;
	}

	renderer.render( scene, camera );
};

animate();