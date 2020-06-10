let camera = new THREE.PerspectiveCamera(
	40,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.z = 150;

let scene = new THREE.Scene();
scene.background = new THREE.Color( 0x111111 );
scene.fog = new THREE.Fog(0x111111, 150, 200);


// -------
let subdivisions = 6;
let recursion = 1;

/* let points = GeometryUtils.hilbert3D(
	new THREE.Vector3( 0, 0, 0 ),
	25.0,
	recursion,
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7
);

let spline = new THREE.CatmullRomCurve3( points );
let samples = spline.getPoints( points.length * subdivisions );
var geometrySpline = new THREE.BufferGeometry().setFromPoints( samples ); */
var geometrySpline = new THREE.BufferGeometry().setFromPoints();

var line = new THREE.Line(
	geometrySpline,
	new THREE.LineDashedMaterial({
		color: 0xffffff,
		dashSize: 1,
		gapSize: 0.5
	})
);
line.computeLineDistances();

scene.add( line );

var geometryBox = box(
	50,
	50,
	50
);

let material = new THREE.LineDashedMaterial({
	color: 0xffaa00,
	dashSize: 3,
	gapSize: 1 
}); 

var lineSegments = new THREE.LineSegments(
	geometryBox,
	material
);
lineSegments.computeLineDistances();

scene.add( lineSegments );
// -------


let renderer = new THREE.WebGLRenderer({
	antialias: true
});
renderer.setPixelRatio( window.devicePixelRatio );

renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );


let animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();