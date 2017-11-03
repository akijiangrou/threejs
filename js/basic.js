function initThree(id, color, opacity) {
  	const container = document.getElementById(id);
	  const width = container.clientWidth;
	  const height =container.clientHeight;
	  const render = new THREE.WebGLRenderer({
	    antialias : true
	  });
	  render.setSize(width, height);
	  container.appendChild(render.domElement);
	  render.setClearColor(color, opacity);
	  return { render, width ,height};
	}

function initCamera(width, height) {
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  // camera 位于屏幕外侧1500px的地方，这样可以直接做平面图了。
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 1500;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt(0, 0, 0);

    return camera;
  }

  function initScene() {
    const scene = new THREE.Scene();
    return scene;
  }