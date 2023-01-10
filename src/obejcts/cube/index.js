import { MeshBasicMaterial, Mesh, BoxGeometry } from "three";

const cubeMaterial = new MeshBasicMaterial({ color: 0xff0000 });
const cubeGeometry = new BoxGeometry(20, 20, 20);
const Cube = new Mesh(cubeGeometry, cubeMaterial);
Cube.position.set(-30, 0, 0);

export default Cube;
