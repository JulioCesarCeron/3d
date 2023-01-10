import Cube from "./obejcts/cube";
import sphere from "./obejcts/sphere";
import SceneCustom from "./scene";
import Renderer from "./renderer";
import statsCustom from "./stats";
import animate from "./animation";
import events from "./events";
import "./css/style.css";

/* ADD TO SCENE */
SceneCustom.add(Cube);
SceneCustom.add(sphere);

/* RENDERER */
document.body.appendChild(Renderer.domElement);

//stats
document.body.appendChild(statsCustom.dom);

events();

/* ANIMATION */
animate();
