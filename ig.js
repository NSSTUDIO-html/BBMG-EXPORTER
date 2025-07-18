import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';
   
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x444442 );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
   // renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXo74xhtyE7cHFzeK2K-FyhRTWi56nuQdORqJdGgrmWZllcDvFRb2SnAK4&s=10');
   const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMAENWVbniuzGMcdMJ_6FFaqd8qU6tg9IP6f-rq9YkFn6dAP6Ils6dmp5&s=10');
    const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAg5_BfdzuSS44pB2wJYsHNgdC5_sj5hZcfQ&usqp=CAU');
   const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHG5-ZxfvpOxMmwX5WyiBaExr8kt30JXxStYWfkaKy-GkdUcn3NvnOt3x&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
   export const icegun = new THREE.Group();

    // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelGeometry1 = new THREE.CylinderGeometry(0.5, 2, 10, 32);
    const barrelGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial = new THREE.MeshStandardMaterial({ map:texture1 ,metalness:0.85,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial1 = new THREE.MeshStandardMaterial({ color : 0x00FFFF,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial2 = new THREE.MeshStandardMaterial({ color : 0x00FFFF,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment,transparent:true,opacity:0.3});
    const barrelMaterial3 = new THREE.MeshStandardMaterial({ color:0x000000,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial4 = new THREE.MeshPhongMaterial({ map:texture3,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial5 = new THREE.MeshStandardMaterial({ map : texture4,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture5,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel.position.set(0,0,0);
  barrel.scale.set(0.15,1.5,0.15);
  icegun.add(barrel);
   
   const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ map: texture1 ,normalMap:texture1,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const b = new THREE.Mesh(bodyGeometry, barrelMaterial);
    b.position.set(0,1,0); // Position it below the barrel
    b.scale.set(0.32,0.4,1.5);
  icegun.add(b);
   const b1= new THREE.Mesh(bodyGeometry, barrelMaterial);
    b1.position.set(0,-1,0); // Position it below the barrel
    b1.scale.set(0.32,0.4,1.5);
  icegun.add(b1);
   const b11= new THREE.Mesh(bodyGeometry, barrelMaterial);
    b11.position.set(0,-1.7,5); // Position it below the barrel
    b11.scale.set(0.32,0.1,0.5);
  icegun.add(b11);
   const b12= new THREE.Mesh(bodyGeometry, barrelMaterial);
    b12.position.set(0,1.7,5); // Position it below the barrel
    b12.scale.set(0.32,0.1,0.5);
  icegun.add(b12);
   const b13= new THREE.Mesh(bodyGeometry, barrelMaterial);
    b13.position.set(0,-2.5,-2); // Position it below the barrel
    b13.scale.set(0.3,0.2,0.3);
   b13.rotation.set(-Math.PI/3,0,0);
  icegun.add(b13);
   const b15= new THREE.Mesh(bodyGeometry, barrelMaterial);
    b15.position.set(0,-2.5,-4.5); // Position it below the barrel
    b15.scale.set(0.3,0.2,0.3);
   b15.rotation.set(-Math.PI/3,0,0);
  icegun.add(b15);
   const b16= new THREE.Mesh(bodyGeometry, barrelMaterial);
    b16.position.set(0,-2.5,-7.4); // Position it below the barrel
    b16.scale.set(0.3,0.4,0.3);
   b16.rotation.set(Math.PI/3,0,0);
  icegun.add(b16);
   const b14= new THREE.Mesh(bodyGeometry, barrelMaterial);
    b14.position.set(0,-3.5,-5); // Position it below the barrel
    b14.scale.set(0.29,0.1,0.5);
   b14.rotation.set(Math.PI,0,0);
  icegun.add(b14);
   const b146= new THREE.Mesh(bodyGeometry, barrelMaterial);
    b146.position.set(0,-2,-3.5); // Position it below the barrel
    b146.scale.set(0.1,0.3,0.2);
   b146.rotation.set(Math.PI/2.2,0,0);
  icegun.add(b146);
   const b2= new THREE.Mesh(bodyGeometry, barrelMaterial2);
    b2.position.set(0,0,0); // Position it below the barrel
    b2.scale.set(0.32,0.3,1.5);
  icegun.add(b2);
   const b3= new THREE.Mesh(bodyGeometry, barrelMaterial);
    b3.position.set(0,1,-7); // Position it below the barrel
    b3.scale.set(0.4,0.5,0.5);
  icegun.add(b3);
   const b4= new THREE.Mesh(bodyGeometry, barrelMaterial);
    b4.position.set(0,-1,-7); // Position it below the barrel
    b4.scale.set(0.4,0.5,0.5);
  icegun.add(b4);
   const b5= new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b5.position.set(0,0,-8); // Position it below the barrel
    b5.scale.set(0.4,0.2,0.5);
  icegun.add(b5);
   const b6= new THREE.Mesh(bodyGeometry, barrelMaterial);
    b6.position.set(0,0,-10); // Position it below the barrel
    b6.scale.set(0.5,0.5,0.3);
   b6.rotation.x = Math.PI/2;
  icegun.add(b6);
   const b7= new THREE.Mesh(bodyGeometry, barrelMaterial);
    b7.position.set(0,-1,-10); // Position it below the barrel
    b7.scale.set(0.5,0.8,0.05);
   b7.rotation.x = Math.PI/2;
  icegun.add(b7);
   const b8= new THREE.Mesh(bodyGeometry, barrelMaterial);
    b8.position.set(0,2,-3); // Position it below the barrel
    b8.scale.set(0.5,0.8,0.1);
   b8.rotation.x = Math.PI/2;
  icegun.add(b8);
   const b9= new THREE.Mesh(bodyGeometry, barrelMaterial);
    b9.position.set(0,1.5,-5); // Position it below the barrel
    b9.scale.set(0.5,0.8,0.1);
   b9.rotation.x = Math.PI/3;
  icegun.add(b9);
   const b91= new THREE.Mesh(bodyGeometry, barrelMaterial);
    b91.position.set(0,2.5,-4); // Position it below the barrel
    b91.scale.set(0.1,0.8,0.1);
   b91.rotation.x = Math.PI/2;
  icegun.add(b91);
   
   
  
 

   //const ambientLight1 = new THREE.AmbientLight(0x404040, 2);
    //pistol.add(ambientLight1);
  icegun.position.x = 0;
  scene.add(icegun);
   