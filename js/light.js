
function threeStart() {
  const { render, width, height } = initThree('canvas-frame', 0x000000, 1.0);
  // initCamera是环境光的camera
  const camera1 = initCamera(width, height);
  const camera = initCamera1(width, height);
  
  const scene = initScene();
  // 环境光
  // initLight('ambient', scene);
  // 平行光
  // initLight('parallel', scene);
  // 点光源
  initLight('spot', scene);
  // 聚光灯
  //initLight('lence', scene);
  initObject(scene);
  render.clear();
  render.render(scene, camera);
}

function initCamera1(width, height) {
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 8000);
	  // camera 位于屏幕外侧1500px的地方，这样可以直接做平面图了。
	  camera.position.x = 500;
	  camera.position.y = 500;
	  camera.position.z = 1500;
	  camera.lookAt(100, 0, 1);

	  return camera;
}

function initCamera(width, height) {
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 8000);
  // camera 位于屏幕外侧1500px的地方，这样可以直接做平面图了。
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 1500;
  camera.lookAt(0, 20, 1);

  return camera;
}

function initLight(type, scene) {
	let light = '';
	switch(type) {
		case 'ambient':
		  light = new THREE.AmbientLight(0xffffff);
      break;
    case 'parallel':
      light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(800, 0, 400);
      break;
    case 'point':
      light = new THREE.PointLight(0xffffff, 2, 500);
      light.position.set(0, 200, 300);
      break;
    case 'spot':
      light = new THREE.SpotLight(0xffff00, 2, 1000, Math.PI /4 , 25);
      light.position.set(300, 500, 0);
    default:
      light = light;
	}
	scene.add(light);
}

function initObject(scene) {
	const cube = new THREE.CubeGeometry(200, 200, 200);
	const material = (color) => new THREE.MeshLambertMaterial({color: color });

  const greenCube = new THREE.Mesh(cube, material(0x00ff00));
  greenCube.position.x = 300;
  scene.add(greenCube);

  const whiteCube = new THREE.Mesh(cube, material(0xffffff));
  whiteCube.position.x = -300;
  scene.add(whiteCube);
}