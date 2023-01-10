import * as THREE from 'three';

const sphereGeometry = new THREE.SphereGeometry(20, 110, 20);
const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x2b85e4 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(30, 0, 0);

export default sphere;