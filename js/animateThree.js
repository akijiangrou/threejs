var renderer;
            function initThree() {
                width = document.getElementById('canvas-frame').clientWidth;
                height = document.getElementById('canvas-frame').clientHeight;
                renderer = new THREE.WebGLRenderer({
                    antialias : true
                });
                renderer.setSize(width, height);
                document.getElementById('canvas-frame').appendChild(renderer.domElement);
                renderer.setClearColor(0xFFFFFF, 1.0);
            }

            var camera;
            function initCamera() {
                camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
                camera.position.x = 0;
                camera.position.y = 0;
                camera.position.z = 600;
                camera.up.x = 0;
                camera.up.y = 1;
                camera.up.z = 0;
                camera.lookAt(0,0,0);
            }

            var scene;
            function initScene() {
                scene = new THREE.Scene();
            }

            var light;
            function initLight() {
                light = new THREE.AmbientLight(0xFF0000);
                light.position.set(100, 100, 200);
                scene.add(light);
                light = new THREE.PointLight(0x00FF00);
                light.position.set(0, 0,300);
                scene.add(light);
            }

            var cube;
            var mesh;
            function initObject() {
                var geometry = new THREE.CylinderGeometry( 100,150,400);
                var material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
                mesh = new THREE.Mesh( geometry,material);
                mesh.position = new THREE.Vector3(100,0,0);
                scene.add(mesh);
            }

            function threeStart() {
                initThree();
                initCamera();
                initScene();
                initLight();
                initObject();
                animation();

            }
            let leftflag = true;
            function animation()
            {
            	if (leftflag) {
            		mesh.position.x-=1;
            	} else {
            		mesh.position.x+=1;
            	}
            	if (mesh.position.x === -100) {
            		leftflag = false;
            	}
            	if (mesh.position.x === 100) {
            		leftflag = true;
            	}
                renderer.render(scene, camera);
                requestAnimationFrame(animation);
            }