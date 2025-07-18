import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';
   
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //const renderer = new THREE.WebGLRenderer();
   // renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP2sVgbM3Urp4Kt8FCJn8gcvfSNlzN4wUE4UYpLE-NcPb9ev3HHyEF-oE&s=10');
   const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMAENWVbniuzGMcdMJ_6FFaqd8qU6tg9IP6f-rq9YkFn6dAP6Ils6dmp5&s=10');
    const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAg5_BfdzuSS44pB2wJYsHNgdC5_sj5hZcfQ&usqp=CAU');
   const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHG5-ZxfvpOxMmwX5WyiBaExr8kt30JXxStYWfkaKy-GkdUcn3NvnOt3x&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
   export const mg = new THREE.Group();

    // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelGeometry1 = new THREE.CylinderGeometry(0.5, 2, 10, 32);
    const barrelGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial = new THREE.MeshStandardMaterial({ map:texture1 ,metalness:0.0,roughness:0.0,envMap:scene.environment});
    const barrelMaterial1 = new THREE.MeshStandardMaterial({ color : 0x404040,metalness:0.85,roughness:0.0,envMap:scene.environment});
    const barrelMaterial2 = new THREE.MeshStandardMaterial({ emissive:0x87CEEB,color : 0x0000ff,envMap:scene.environment,});
    const barrelMaterial3 = new THREE.MeshPhongMaterial({ color:0x000000,envMap:scene.environment});
    const barrelMaterial4 = new THREE.MeshPhongMaterial({ map:texture3,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial5 = new THREE.MeshStandardMaterial({ map : texture4,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture5,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel.position.set(-1,-0.5,0);
  barrel.scale.set(0.5,1.5,0.5);
  mg.add(barrel);
   const barrel1 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel1.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel1.position.set(-1,0.5,0);
  barrel1.scale.set(0.5,1.5,0.5);
  mg.add(barrel1);
   const barrel2 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel2.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel2.position.set(-2,0,0);
  barrel2.scale.set(0.5,1.5,0.5);
  mg.add(barrel2);
   const barrel3 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel3.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel3.position.set(1,-0.5,0);
  barrel3.scale.set(0.5,1.5,0.5);
  mg.add(barrel3);
   const barrel14 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel14.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel14.position.set(1,0.5,0);
  barrel14.scale.set(0.5,1.5,0.5);
  mg.add(barrel14);
   const barrel25 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel25.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel25.position.set(2,0,0);
  barrel25.scale.set(0.5,1.5,0.5);
  mg.add(barrel25);
   const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ map: texture1 ,normalMap:texture1,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const b = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b.position.set(2,0,0); // Position it below the barrel
    b.scale.set(0.3,0.3,1.49);
  mg.add(b);
   const b1 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b1.position.set(-2,0,0); // Position it below the barrel
    b1.scale.set(0.3,0.3,1.49);
  mg.add(b1);
   const b12 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b12.position.set(-1,0.5,0); // Position it below the barrel
    b12.scale.set(0.3,0.3,1.49);
  mg.add(b12);
   const b2 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b2.position.set(1,0.5,0); // Position it below the barrel
    b2.scale.set(0.3,0.3,1.49);
  mg.add(b2);
   const b123 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b123.position.set(-1,-0.5,0); // Position it below the barrel
    b123.scale.set(0.3,0.3,1.49);
  mg.add(b123);
   const b23 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b23.position.set(1,-0.5,0); // Position it below the barrel
    b23.scale.set(0.3,0.3,1.49);
  mg.add(b23);
   const c23 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    c23.position.set(1,0.5,6.9); // Position it below the barrel
    c23.scale.set(0.4,0.4,0.1);
   c23.rotation.z = Math.PI/4;
  mg.add(c23);
   const c3 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    c3.position.set(-1,0.5,6.9); // Position it below the barrel
    c3.scale.set(0.4,0.4,0.1);
   c3.rotation.z = Math.PI/4;
  mg.add(c3);
   const c2 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    c2.position.set(1,-0.5,6.9); // Position it below the barrel
    c2.scale.set(0.4,0.4,0.1);
   c2.rotation.z = Math.PI/4;
  mg.add(c2);
   const c42 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    c42.position.set(-1,-0.5,6.9); // Position it below the barrel
    c42.scale.set(0.4,0.4,0.1);
   c42.rotation.z = Math.PI/4;
  mg.add(c42);
   const c425 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    c425.position.set(2,0,6.9); // Position it below the barrel
    c425.scale.set(0.4,0.4,0.1);
   c425.rotation.z = Math.PI/4;
  mg.add(c425);
   const c426 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    c426.position.set(-2,0,6.9); // Position it below the barrel
    c426.scale.set(0.4,0.4,0.1);
   c426.rotation.z = Math.PI/4;
  mg.add(c426);
   const cc23 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    cc23.position.set(1,0.5,2); // Position it below the barrel
    cc23.scale.set(0.4,0.4,0.1);
   cc23.rotation.z = Math.PI/4;
  mg.add(cc23);
   const cc3 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    cc3.position.set(-1,0.5,2); // Position it below the barrel
    cc3.scale.set(0.4,0.4,0.1);
   cc3.rotation.z = Math.PI/4;
  mg.add(cc3);
   const cc2 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    cc2.position.set(1,-0.5,2); // Position it below the barrel
    cc2.scale.set(0.4,0.4,0.1);
   cc2.rotation.z = Math.PI/4;
  mg.add(cc2);
   const cc42 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    cc42.position.set(-1,-0.5,2); // Position it below the barrel
    cc42.scale.set(0.4,0.4,0.1);
   cc42.rotation.z = Math.PI/4;
  mg.add(cc42);
   const cc425 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    cc425.position.set(2,0,2); // Position it below the barrel
    cc425.scale.set(0.4,0.4,0.1);
   cc425.rotation.z = Math.PI/4;
  mg.add(cc425);
   const cc426 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    cc426.position.set(-2,0,2); // Position it below the barrel
    cc426.scale.set(0.4,0.4,0.1);
   cc426.rotation.z = Math.PI/4;
  mg.add(cc426);
  const backtop = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    backtop.position.set(0,1.5,-3); // Position it below the barrel
    backtop.scale.set(1,0.1,0.8);
   backtop.rotation.z = Math.PI;
  mg.add(backtop);
   const backtop1 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    backtop1.position.set(-2.1,1.2,-3.5); // Position it below the barrel
    backtop1.scale.set(0.5,0.1,0.8);
   backtop1.rotation.z = Math.PI/10;
  mg.add(backtop1);
   const backtop2 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    backtop2.position.set(2.1,1.2,-3.5); // Position it below the barrel
    backtop2.scale.set(0.5,0.1,0.8);
   backtop2.rotation.z = -Math.PI/10;
  mg.add(backtop2);
   const motor2 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    motor2.position.set(0,0,-3.5); // Position it below the barrel
    motor2.scale.set(2,0.5,0.4);
   motor2.rotation.z = -Math.PI;
  mg.add(motor2);
   const slide2 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    slide2.position.set(2,1.5,-0.5); // Position it below the barrel
    slide2.scale.set(0.5,0.1,0.4);
   slide2.rotation.x = -Math.PI/2;
  mg.add(slide2);
   const slide3 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    slide3.position.set(2,4,-1); // Position it below the barrel
    slide3.scale.set(0.3,0.1,0.2);
   slide3.rotation.x = Math.PI/3;
  mg.add(slide3);
   const bulletl = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    bulletl.position.set(-3,-1.5,-2); // Position it below the barrel
    bulletl.scale.set(0.5,0.5,0.5);
   bulletl.rotation.x = Math.PI/8;
  mg.add(bulletl);
   const cylinderGeometry = new THREE.CylinderGeometry( 1, 1, 3, 32 ); // RadiusTop, RadiusBottom, Height, RadialSegments
  const cylinderMaterial = new THREE.MeshPhongMaterial( { color: 0x000000,envMap:scene.environment } ); // Red color
  const cylinderGeometry1 = new THREE.CylinderGeometry( 0.5, 2, 3, 32 ); // RadiusTop, RadiusBottom, Height, RadialSegments
  const cylinderMaterial1 = new THREE.MeshPhongMaterial( { color: 0x440000,envMap:scene.environment } ); // Red color
 
  //helmet screen
  const c1 = new THREE.Mesh( cylinderGeometry, barrelMaterial1 );
  mg.add( c1 );
  c1.scale.set(1.7,1.7,0.5);
  c1.position.set(0,0,-7.5); // Position to the left
c1.rotation.z = Math.PI/2;
   const c22 = new THREE.Mesh( cylinderGeometry, barrelMaterial1 );
  mg.add( c22 );
  c22.scale.set(0.2,1,0.2);
  c22.position.set(-2,2,-4); // Position to the left
c22.rotation.x = Math.PI/3;
   const c233 = new THREE.Mesh( cylinderGeometry, barrelMaterial1 );
  mg.add( c233 );
  c233.scale.set(0.2,1,0.2);
  c233.position.set(2,2,-4); // Position to the left
c233.rotation.x = Math.PI/3;
   const c2334 = new THREE.Mesh( cylinderGeometry, barrelMaterial1 );
  mg.add( c2334 );
  c2334.scale.set(0.2,1.5,0.2);
  c2334.position.set(0,2.8,-2.6); // Position to the left
c2334.rotation.z = Math.PI/2;
   
   // Lighting
    
  
 

  // const ambientLight1 = new THREE.AmbientLight(0x404040, 1);
    //mg.add(ambientLight1);
  mg.position.x = 0;
  scene.add(mg);
   export default mg;