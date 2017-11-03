var light;

  function initLight(scene) {
    light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
    light.position.set(100, 100, 200);
    scene.add(light);
  }
	function initObject(scene) {
	  var geometry = new THREE.Geometry();
	  var material = new THREE.LineBasicMaterial( { vertexColors: true } );
	  var color1 = new THREE.Color( 0x444444 ), color2 = new THREE.Color( 0xFF0000 ); 
	  var p1 = new THREE.Vector3( -100, 0, 100 );
	  var p2 = new THREE.Vector3(  100, 0, -100 );
	  geometry.vertices.push(p1);
	  geometry.vertices.push(p2);
	  geometry.colors.push( color1, color2 );
	  var line = new THREE.Line( geometry, material, THREE.LineSegments );
	  scene.add(line);
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