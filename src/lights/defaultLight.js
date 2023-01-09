import * as THREE from 'three';

const defaultLight = new THREE.DirectionalLight( 0xdfebff, 1 );
defaultLight.position.set( 50, 200, 100 );
defaultLight.position.multiplyScalar( 1.3 );
defaultLight.castShadow = false;
defaultLight.shadow.mapSize.width = 1024;
defaultLight.shadow.mapSize.height = 1024;

const distance = 600;

defaultLight.shadow.camera.left = - distance;
defaultLight.shadow.camera.right = distance;
defaultLight.shadow.camera.top = distance;
defaultLight.shadow.camera.bottom = - distance;

defaultLight.shadow.camera.far = 1000;

export default defaultLight;