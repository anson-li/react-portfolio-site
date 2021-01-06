import React, { PureComponent } from 'react';
import * as THREE from 'three';
import './style.scss';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';

class JellicentObject extends PureComponent {
	constructor(props) {
		super(props);
		var windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2,
		camera, scene, renderer, composer,
		renderPass, glitchPass;

		init();
		
    function init() {

      var container;

      container = document.createElement('div');
      document.body.appendChild(container);

      camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 2000 );
			camera.position.x = 26.2;
			camera.position.y = 38.6;
			camera.position.z = 23;
			camera.rotation.x = 0.44;
			camera.rotation.y = -0.31;
			camera.rotation.z = -167.14;

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

			let jsonObject = require( '../../../../../web/assets/scene/jellicent.json' );
			scene = new THREE.ObjectLoader().parse(jsonObject);
			
			composer = new EffectComposer( renderer );
			renderPass = new RenderPass( scene, camera );
			composer.addPass( renderPass );

			glitchPass = new GlitchPass();
			composer.addPass( glitchPass );

			window.addEventListener( 'resize', onWindowResize, false );

			animate();
		}

		function onWindowResize() {
			windowHalfX = window.innerWidth / 2;
			windowHalfY = window.innerHeight / 2;
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( window.innerWidth, window.innerHeight );
		}

    function animate() {
			animateCamera();
      requestAnimationFrame( animate );
      composer.render();
    }

    function animateCamera() {
			camera.rotation.x -= 0.001;
			if (camera.rotation.x < -1.3) {
				camera.rotation.x = 0.8;
			}
		}
  }

  render() {
    return (
			<>
				<div id="jellicent-details" className="col-4 d-none d-lg-block">
					<h4 id="jellicent-details-header">
						Jellicent - #593
					</h4>
					<p id="jellicent-details-body">
						Jellicent is a large jellyfish-like Pokémon whose appearance varies based on gender. Both genders have five tentacles, two of which are long with petal-shaped ends. The remaining three are short and tapered. <br /><br />A male is blue with a short, white crown, and a white, mustache-like collar. Its eyes are red with blue sclerae, and there is one eyelash over each eye. Its long tentacles have white edges, while its short tentacles have white spots. A female is pink with a tall, white crown and a puffy, white collar. Its eyes are blue with red sclerae and surrounded by two eyelashes. Its mouth is red and heart-shaped. The long tentacles have white edges like the male, but the short ones have white frills.
					</p>
				</div>
				<div ref={ref => (this.mount = ref)} />
			</>
    );
  }
}

export default JellicentObject;


