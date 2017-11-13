
function threeStart() {
  const { render, width, height } = initThree('canvas-frame', 0xeeeeee, 1.0);
  // initCamera是环境光的camera
  const camera1 = initCamera(width, height);
  const camera = initCamera1(width, height);
  
  const scene = initScene();
  //环境光
  // initLight('ambient', scene);
  // 平行光
  initLight('parallel', scene);
  // 点光源
  //initLight('spot', scene);
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
      light.position.set(800, 100, 400);
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
	const cube = new THREE.CubeGeometry(100, 200, 300, 2,2,3);
	const material = (color) => new THREE.MeshLambertMaterial({color: color });

  const greenCube = new THREE.Mesh(cube);
  greenCube.position.x = 300;
  scene.add(greenCube);
  border = new THREE.BoxHelper( greenCube, 0x1535f7 );
  border.position.x = 300;
  scene.add(border);

  const whiteCube = new THREE.Mesh(cube, material(0xeeffff));
  whiteCube.position.x = -300;
  scene.add(whiteCube);
  
  // 球
  const sphere = new THREE.SphereGeometry(100, 14, 14);
  const blueSpehre = new THREE.Mesh(sphere, material(0xffff00));
  scene.add(blueSpehre);
  // 平面圆
  const circle = new THREE.CircleGeometry(100, 14, Math.PI / 3, Math.PI / 3 * 4);
  const circleObj= new THREE.Mesh(circle, material(0x3311ff));
  circleObj.position.y = 300;
  scene.add(circleObj);
  // 圆台
  const cylinder = new THREE.CylinderGeometry(25, 50, 200, 13, 3)
  const cylinderObj= new THREE.Mesh(cylinder, material(0x00ffff));
  cylinderObj.position.y = 300;
  cylinderObj.position.x = 300;
  cylinderObj.rotation.x = 45;
  scene.add(cylinderObj);

  // 正四面体
  const tri = new THREE.TetrahedronGeometry(150);
  const triObj= new THREE.Mesh(tri, material(0x333333));
  triObj.position.y = -300;
  triObj.position.x = 300;
  scene.add(triObj); 

  // 正八面体
  const octo = new THREE.OctahedronGeometry(150);
  const octoObj= new THREE.Mesh(octo, material(0x33ff33));
  octoObj.position.y = -300;
  octoObj.position.x = -300;
  scene.add(octoObj);

  // 正二十面体
  const icos = new THREE.IcosahedronGeometry(150);
  const icosObj= new THREE.Mesh(icos, material(0xff3333));
  icosObj.position.y = -300;
  icosObj.position.x = 0;
  scene.add(icosObj);
  // 甜甜圈
  const torus = new THREE.TorusGeometry(150, 50, 50, 20);
  const torusObj= new THREE.Mesh(torus, material(0xff33ff));
  torusObj.position.x = 600;
  scene.add(torusObj);
  // 圆环节
  const ktorus = new THREE.TorusKnotGeometry(100, 30, 50, 20);
  const ktorusObj= new THREE.Mesh(ktorus, material(0x339933));
  ktorusObj.position.x = -600;
  scene.add(ktorusObj);

}