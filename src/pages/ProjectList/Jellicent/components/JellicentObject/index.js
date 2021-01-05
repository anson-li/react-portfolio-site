import React, { PureComponent } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

class JellicentObject extends PureComponent {
  componentDidMount() {
    var mouseX = 0, mouseY = 0,

    windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2,
    camera, scene, renderer;

    var xDirection = true, yDirection = false;

    init();
    animate();

    function init() {

      var container;

      container = document.createElement('div');
      document.body.appendChild(container);

      camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 2000 );
			camera.position.x = 42;
			camera.position.y = 55;
			camera.position.z = -59;

      scene = new THREE.Scene();

      renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true
      });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      renderer.autoClear = false;
      renderer.shadowMap.type = THREE.PCFShadowMap;
      renderer.shadowMapSoft = true;

      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      container.appendChild( renderer.domElement );

      // const objLoader = new OBJLoader();
			// load a resource

			// scene = new THREE.ObjectLoader().parse( '../../../../../web/assets/scene/jellicent.json' );
			let jsonObject = require( '../../../../../web/assets/scene/jellicent.json' );
			scene = new THREE.ObjectLoader().parse(jsonObject);
			// var loader = new THREE.ObjectLoader();
			// loader.load('../../../../../web/assets/scene/jellicent.json', function(object) {
			// 	console.log(object);
			// 	scene.add(object); // load the object into your scene here
			// });

			// console.log(scene);

			// const color = 0xFFFFFF;
			// const intensity = 1;
			// const light = new THREE.DirectionalLight(color, intensity);
			// light.position.set(0, 10, 0);
			// light.target.position.set(-5, 0, 0);
			// scene.add(light);
			// scene.add(light.target);

      document.addEventListener( 'mousemove', onDocumentMouseMove, false );
      document.addEventListener( 'touchstart', onDocumentTouchStart, false );
      document.addEventListener( 'touchmove', onDocumentTouchMove, false );
      window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX - windowHalfX) / 2;
      mouseY = (event.clientY - windowHalfY) / 2;
    }

    function onDocumentTouchStart( event ) {
      if ( event.touches.length > 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
      }
    }

    function onDocumentTouchMove( event ) {
      if ( event.touches.length === 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
      } else {
        mouseX += 0.05;
        mouseY -= 0.05;
      }
    }

    function animate() {
      requestAnimationFrame( animate );
      render();
    }

    function render() {
			console.log(mouseX);
      if (xDirection) {
        if (mouseX >= 500) {
          xDirection = false;
        } else {
          mouseX += 0.1;
        }
      } else {
        if (mouseX < -500) {
          xDirection = true;
        } else {
          mouseX -= 0.1;
        }
      }

      if (yDirection) {
        if (mouseY >= 400) {
          yDirection = false;
        } else {
          mouseY += 0.1;
        }
      } else {
        if (mouseY <= -400) {
          yDirection = true;
        } else {
          mouseY -= 0.1;
        }
			}
			
			console.log(camera.position);

      camera.position.x += ( mouseX - camera.position.x ) * .0015;
      camera.position.y += ( mouseY - camera.position.y ) * .0015;
      camera.lookAt( scene.position );
      camera.rotation.x += 1 * Math.PI / 360;
      camera.rotation.y += 1 * Math.PI / 360;
      renderer.render( scene, camera );
    }
  }

  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    );
  }
}

export default JellicentObject;


