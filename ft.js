import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';
   
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //const renderer = new THREE.WebGLRenderer();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP2sVgbM3Urp4Kt8FCJn8gcvfSNlzN4wUE4UYpLE-NcPb9ev3HHyEF-oE&s=10');
   const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMAENWVbniuzGMcdMJ_6FFaqd8qU6tg9IP6f-rq9YkFn6dAP6Ils6dmp5&s=10');
    const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAg5_BfdzuSS44pB2wJYsHNgdC5_sj5hZcfQ&usqp=CAU');
   const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHG5-ZxfvpOxMmwX5WyiBaExr8kt30JXxStYWfkaKy-GkdUcn3NvnOt3x&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
    export const ft = new THREE.Group();

    // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelGeometry1 = new THREE.CylinderGeometry(0.5, 2, 10, 32);
    const barrelGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial = new THREE.MeshStandardMaterial({ map:texture1 ,metalness:0.0,roughness:0.0,envMap:scene.environment});
    const barrelMaterial1 = new THREE.MeshStandardMaterial({ color : 0x001100,metalness:0.85,roughness:0.0,envMap:scene.environment});
    const barrelMaterial2 = new THREE.MeshStandardMaterial({ emissive:0x87CEEB,color : 0x0000ff,envMap:scene.environment,});
    const barrelMaterial3 = new THREE.MeshStandardMaterial({ color :0x222222});
    const barrelMaterial4 = new THREE.MeshPhongMaterial({ map:texture3,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial5 = new THREE.MeshStandardMaterial({ map : texture4,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture5,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel.position.set(-2,0,0);
  barrel.scale.set(0.3,1,0.3);
  ft.add(barrel);
   const barrel1 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel1.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel1.position.set(2,0,0);
  barrel1.scale.set(0.3,1,0.3);
  ft.add(barrel1);
   const barrel3 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel3.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel3.position.set(-2,0,-4);
  barrel3.scale.set(0.7,0.3,0.7);
  ft.add(barrel3);
   const barrel13 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel13.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel13.position.set(2,0,-4);
  barrel13.scale.set(0.7,0.3,0.7);
  ft.add(barrel13);
   const barrel4 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel4.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel4.position.set(-2,0,4);
  barrel4.scale.set(0.5,0.15,0.5);
  ft.add(barrel4);
   const barrel14 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel14.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel14.position.set(2,0,4);
  barrel14.scale.set(0.5,0.15,0.5);
  ft.add(barrel14);
   const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ map: texture1 ,normalMap:texture1,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const b = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b.position.set(0,-3,-4); // Position it below the barrel
    b.scale.set(1,1,0.5);
   b.rotation.x = -Math.PI/10;
  ft.add(b);
   const b2 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b2.position.set(0,-2,-4); // Position it below the barrel
    b2.scale.set(1.1,0.5,0.7);
   b2.rotation.x = Math.PI/3;
  ft.add(b2);
   const b1 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b1.position.set(0,0,-3); // Position it below the barrel
    b1.scale.set(0.6,0.7,0.5);
  ft.add(b1);
   const b15 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b15.position.set(3,-2,-4); // Position it below the barrel
    b15.scale.set(1.5,0.1,0.3);
   b15.rotation.x = -Math.PI/8;
  ft.add(b15);
   const b15s = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b15s.position.set(4,0,-2); // Position it below the barrel
    b15s.scale.set(0.8,0.1,0.3);
   b15s.rotation.x = -Math.PI/3;
  ft.add(b15s);
   const b1s = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b1s.position.set(4,2,-1.5); // Position it below the barrel
    b1s.scale.set(0.8,0.1,0.2);
   b1s.rotation.x = Math.PI/2;
  ft.add(b1s);
   const b12 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    b12.position.set(0,0.5,-3.5); // Position it below the barrel
    b12.scale.set(0.6,0.7,0.5);
   b12.rotation.x = Math.PI/2;
  ft.add(b12);
   const b13 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    b13.position.set(0,-0.5,-3.5); // Position it below the barrel
    b13.scale.set(0.4,0.7,0.4);
   b13.rotation.x = Math.PI/2;
  ft.add(b13);
   const b134 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    b134.position.set(3,-1,-8); // Position it below the barrel
    b134.scale.set(1.5,0.5,1.5);
   b134.rotation.x = Math.PI/2;
  ft.add(b134);
   const cylinderGeometry = new THREE.CylinderGeometry( 1, 1, 3, 32 ); // RadiusTop, RadiusBottom, Height, RadialSegments
  const cylinderMaterial = new THREE.MeshPhongMaterial( { color: 0x000000,envMap:scene.environment } ); // Red color
  const cylinderGeometry1 = new THREE.CylinderGeometry( 0.5, 2, 3, 32 ); // RadiusTop, RadiusBottom, Height, RadialSegments
  const cylinderMaterial1 = new THREE.MeshPhongMaterial( { color: 0x440000,envMap:scene.environment } ); // Red color
 
  //helmet screen
  const c1 = new THREE.Mesh( cylinderGeometry, barrelMaterial1 );
  ft.add( c1 );
  c1.scale.set(2.5,1.9,0.7);
  c1.position.set(0,0,-7.5);
   c1.rotation.x = Math.PI/2;
    
  
 

   //const ambientLight1 = new THREE.AmbientLight(0x404040, 2);
    //pistol.add(ambientLight1);
  ft.position.x = 0;
  scene.add(ft);
   export default ft;