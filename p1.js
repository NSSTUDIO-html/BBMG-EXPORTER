import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';
   
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x444442 );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //const renderer = new THREE.WebGLRenderer();
   // renderer.setSize(window.innerWidth, window.innerHeight);
   // document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzh6WibbezzSfixdsz9Y4oWWtAGSFfDVDWK5z-85o-xB7gAnehzNGDZy1&s=10');
    const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMAENWVbniuzGMcdMJ_6FFaqd8qU6tg9IP6f-rq9YkFn6dAP6Ils6dmp5&s=10');
    const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVEB9h5IakyY1th2qFJYGZuft99sDzYRi0uQ&usqp=CAU')
   const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHG5-ZxfvpOxMmwX5WyiBaExr8kt30JXxStYWfkaKy-GkdUcn3NvnOt3x&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
   export const pistol = new THREE.Group();

    // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelGeometry1 = new THREE.CylinderGeometry(0.5, 2, 10, 32);
    const barrelGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial = new THREE.MeshStandardMaterial({ color:0x000000,bumpMap:texture1 ,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial1 = new THREE.MeshPhongMaterial({ color : 0x222222,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial2 = new THREE.MeshStandardMaterial({ color : 0xFFD700 ,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial3 = new THREE.MeshStandardMaterial({ map : texture2,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial4 = new THREE.MeshStandardMaterial({ map:texture3,normalMap : texture1,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial5 = new THREE.MeshStandardMaterial({ map : texture4,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture5,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    barrel.position.set(0,1.1,0);
  barrel.scale.set(0.75,0.5,0.75);
  pistol.add(barrel);
   const barrel1 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel1.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    barrel1.position.set(0,1.1,0);
  barrel1.scale.set(0.5,0.51,0.5);
  pistol.add(barrel1);
   const barrel2 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel2.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    barrel2.position.set(0,0.8,-4.5);
  barrel2.scale.set(0.9,0.2,0.9);
  pistol.add(barrel2);
   const barrel3 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel3.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    barrel3.position.set(0,0.8,-4.9);
  barrel3.scale.set(1,0.2,1);
  pistol.add(barrel3);
   const barrel4 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel4.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    barrel4.position.set(0,0.8,-6);
  barrel4.scale.set(1.5,0.1,1.5);
  pistol.add(barrel4);
   const barrel5 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel5.rotation.x = Math.PI / 6; // Rotate to make it horizontal
    barrel5.position.set(0,1.2,-6);
  barrel5.scale.set(0.5,0.1,1.5);
  pistol.add(barrel5);
   const barrel6 = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel6.rotation.x = Math.PI / 6; // Rotate to make it horizontal
    barrel6.position.set(0,-1,-6.5);
  barrel6.scale.set(0.8,0.5,0.7);
  pistol.add(barrel6);
   const barrel7 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel7.rotation.x = Math.PI; // Rotate to make it horizontal
    barrel7.position.set(0,-1,-6);
  barrel7.scale.set(0.5,0.2,0.7);
  pistol.add(barrel7);
   const barrel8 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel8.rotation.x = Math.PI/2; // Rotate to make it horizontal
    barrel8.position.set(0,-1.9,-5);
  barrel8.scale.set(0.5,0.2,0.2);
  pistol.add(barrel8);
   const barrel9 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel9.rotation.x = Math.PI/4; // Rotate to make it horizontal
    barrel9.position.set(0,-1.3,-3.5);
  barrel9.scale.set(0.5,0.2,0.2);
  pistol.add(barrel9);
   const barrel0 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel0.rotation.x = Math.PI; // Rotate to make it horizontal
    barrel0.position.set(0,-1.3,-5);
  barrel0.scale.set(0.3,0.15,0.5);
  pistol.add(barrel0);
   
   const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ map: texture1 ,normalMap:texture1,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const body = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body.position.set(0,0.5,0); // Position it below the barrel
    body.scale.set(0.5,0.5,0.5);
  pistol.add(body);
   const body2 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body2.position.set(0,1.5,-3); // Position it below the barrel
    body2.scale.set(0.5,0.2,0.2);
   body2.rotation.set(Math.PI/6,0,0);
  pistol.add(body2);
   const body3 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body3.position.set(0,1.5,-2.5); // Position it below the barrel
    body3.scale.set(0.4,0.15,0.2);
   body3.rotation.set(Math.PI/6,0,0);
  pistol.add(body3);
   const body4 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body4.position.set(0,2.1,-4.7); // Position it below the barrel
    body4.scale.set(0.55,0.13,0.2);
   body4.rotation.set(Math.PI,0,0);
  pistol.add(body4);
   const body5 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body5.position.set(0,0.5,-3); // Position it below the barrel
    body5.scale.set(0.51,0.35,0.23);
   body5.rotation.set(Math.PI/2,0,0);
  pistol.add(body5);
   const body6 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    body6.position.set(0,0.5,-1.5); // Position it below the barrel
    body6.scale.set(0.51,0.6,0.2);
   body6.rotation.set(0,0,0);
  pistol.add(body6);
   const body1 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body1.position.set(0,-0.5,-2); // Position it below the barrel
    body1.scale.set(0.45,0.2,0.9);
  pistol.add(body1);
   
   
   
    const ambientLight = new THREE.AmbientLight(0x404040, 3);
    pistol.add(ambientLight);
  
 

   //const ambientLight1 = new THREE.AmbientLight(0x404040, 2);
    //pistol.add(ambientLight1);
  pistol.position.x = 0;
  scene.add(pistol);
   export const pistol2 = new THREE.Group();
   pistol2.add(pistol);
   scene.add(pistol2);
    