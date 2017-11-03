var light;
  var cube;

  function initLight(scene) {
    light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
    light.position.set(100, 100, 500);
    scene.add(light);
  }
		var cube;
	function initObject(scene) {
	  var geometry = new THREE.Geometry();
	  var p1 = new THREE.Vector3( -500, 0, 0);
	  var p2 = new THREE.Vector3(  500, 0, 0);
	  geometry.vertices.push(p1);
	  geometry.vertices.push(p2);

	  var material = new THREE.LineBasicMaterial({ color: 0x800080, opacity: 0.6});
	  for ( let i = 0; i <= 20; i ++ ) {
			var line = new THREE.Line( geometry, material );
			line.position.y = ( i * 50 ) - 500;
			scene.add( line );
			
			var line = new THREE.Line( geometry, material);
			line.position.x = ( i * 50 ) - 500;
			// 将x轴方向的线，沿着z轴旋转90度，就变成了垂直的线~~
			line.rotation.z = 90 * Math.PI / 180;

			scene.add( line );
    }
	}
	function threeStart() {
    const { render, width, height } = initThree('canvas-frame', 0xFFFFFF, 1.0);
    const camera = initCamera(width, height);
    const scene = initScene();
    initLight(scene);
    initObject(scene);
    render.clear();
    render.render(scene, camera);
  }