import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons";

interface ThreeComponentProps {
  image: string;
  backSideImage?: string;
}

export default function ThreeComponent() {
  useEffect(() => {
    //Creating scene and styling
    const scene = new THREE.Scene();
    const color = new THREE.Color(0x181b23);
    scene.background = color;

    //Listener to resize the scene when window resizes
    window.addEventListener("resize", onWindowResize);

    //Creating camera and positioning
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 2);

    //Setting scene size
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(10, 7);
    document.body.appendChild(renderer.domElement);

    //Card geometry
    const geometry = new THREE.PlaneGeometry(1, 1.5);

    //Loading Card textures
    var frontSideTexture = new THREE.TextureLoader().load(
      "https://cards.scryfall.io/large/front/d/e/deb3721d-fba1-444f-8b31-1cd10c94c4a0.jpg?1702429246"
    );
    var backSideTexture = new THREE.TextureLoader().load(
      "/magic.jpg"
    );

    //Applying material to sides
    const frontSideMaterial = new THREE.MeshBasicMaterial({
      map: frontSideTexture,
      transparent: true,
      side: THREE.FrontSide,
    });
    const backSideMaterial = new THREE.MeshBasicMaterial({
      map: backSideTexture,
      transparent: true,
      side: THREE.BackSide,
    });

    //Creating objetc with geometry and material
    const frontSideCard = new THREE.Mesh(geometry, frontSideMaterial);
    const backSideCard = new THREE.Mesh(geometry, backSideMaterial);

    //Flip backside object
    backSideCard.scale.x = -1;

    //Adding objects to scene
    scene.add(frontSideCard);
    scene.add(backSideCard);

    //Creating controllers
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxDistance = 2
    controls.minDistance = 2
    controls.maxPolarAngle = 1.55
    controls.minPolarAngle = 1.55
    controls.update();

    function onWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    function animate() {
      requestAnimationFrame(animate);

      controls.update();

      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return <div></div>;
}
