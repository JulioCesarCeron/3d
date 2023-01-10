import onWindowResize from "./window-resize";

const events = () => {
	const { addEventListener } = window;

	addEventListener("click", () => console.log({ Controls }));
	addEventListener("resize", onWindowResize, false);
};

export default events;
