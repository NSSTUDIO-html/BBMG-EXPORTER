import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';
   
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
   // const renderer = new THREE.WebGLRenderer();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkq4WZeSYTVwGb9spn1Ie1GBx8J2LG_qrv1mby71EJbZIcxs1ovAjUWx5N&s=10');
   const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMAENWVbniuzGMcdMJ_6FFaqd8qU6tg9IP6f-rq9YkFn6dAP6Ils6dmp5&s=10');
    const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAg5_BfdzuSS44pB2wJYsHNgdC5_sj5hZcfQ&usqp=CAU');
   const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHxOHYfZGsWPLHy2TikEz_8rAnupQTUZx4gAQDmVJXrQxOn4s1QIlOTk&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
   export const MMG = new THREE.Group();

    // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelGeometry1 = new THREE.CylinderGeometry(1, 0.1, 2, 32);
    const barrelGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial4 = new THREE.MeshStandardMaterial({ map:texture1,transparent:true,opacity:0.8 ,envMap:scene.environment});
    const barrelMaterial = new THREE.MeshStandardMaterial({ color : 0x404040,metalness:0.85,roughness:0.0,envMap:scene.environment});
    const barrelMaterial2 = new THREE.MeshStandardMaterial({color : 0x0000ff,envMap:scene.environment,});
    const barrelMaterial3 = new THREE.MeshPhongMaterial({ color:0xffa500,envMap:scene.environment});
    const barrelMaterial5 = new THREE.MeshPhongMaterial({ map:texture3,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture4,metalness:0.85,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial1 = new THREE.MeshStandardMaterial({ map : texture5,metalness:0.45,roughness:0.0,envMap:scene.environment});
    
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel.position.set(0,0,0);
  barrel.scale.set(1,2,1);
  MMG.add(barrel);
   const barrel6 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel6.rotation.x = -Math.PI / 10; // Rotate to make it horizontal
    barrel6.position.set(0,2,-20);
  barrel6.scale.set(2,1,1);
  MMG.add(barrel6);
   const barrel5= new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel5.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel5.position.set(0,2.5,-10);
  barrel5.scale.set(2,2,1);
  MMG.add(barrel5);
   const barrel51= new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel51.rotation.x = Math.PI; // Rotate to make it horizontal
    barrel51.position.set(0,2.5,-12);
  barrel51.scale.set(2,1,1);
  MMG.add(barrel51);
   const barrel2 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel2.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel2.position.set(0,0,0);
  barrel2.scale.set(6,0.5,6);
  MMG.add(barrel2);
   const barrel23 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel23.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel23.position.set(0,0,-8);
  barrel23.scale.set(6,0.5,6);
  MMG.add(barrel23);
   const barrel23s = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel23s.rotation.z = Math.PI/2; // Rotate to make it horizontal
    barrel23s.position.set(0,0,-8);
  barrel23s.scale.set(6,0.5,6);
  MMG.add(barrel23s);
   const barrel2s = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel2s.rotation.z = Math.PI/2; // Rotate to make it horizontal
    barrel2s.position.set(0,-3,-10);
  barrel2s.scale.set(2,1.5,2);
  MMG.add(barrel2s);
   const barrel1 = new THREE.Mesh(barrelGeometry1, barrelMaterial3);
    barrel1.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel1.position.set(0,0,12);
  barrel1.scale.set(1,2,1);
  MMG.add(barrel1);
   
   const barrels = new THREE.Group();
   const barrels1 = new THREE.Group();
   const barrels2 = new THREE.Group();
   const barrels3 = new THREE.Group();
   // Cylinder Setup
        const numCylinders = 16;
        const cylinderRadius = 0.8;
        const circleRadius = 5;

        const cylinderGeometry = new THREE.CylinderGeometry(cylinderRadius, cylinderRadius, 15, 32);
        const cylinderMaterial = new THREE.MeshPhongMaterial({ color: 0xffa500 }); // Use MeshStandardMaterial

        for (let i = 0; i < numCylinders; i++) {
            const angle = (i / numCylinders) * Math.PI * 2;
            const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);

            const x = Math.sin(angle) * circleRadius;
            const y = Math.cos(angle) * circleRadius;
            cylinder.position.set(x, y, 0);
           cylinder.rotation.x = Math.PI/2;
            
            barrels.add(cylinder);
           MMG.add(barrels);
           
        }
           const numCylinders1 = 10;
        const cylinderRadius1 = 0.7;
        const circleRadius1 = 3;

        const cylinderGeometry1 = new THREE.CylinderGeometry(cylinderRadius1, cylinderRadius1, 15, 32);
        const cylinderMaterial1 = new THREE.MeshPhongMaterial({ color: 0xffa500 }); // Use MeshStandardMaterial

        for (let i = 0; i < numCylinders1; i++) {
            const angle1 = (i / numCylinders1) * Math.PI * 2;
            const cylinder1 = new THREE.Mesh(cylinderGeometry1, cylinderMaterial1);

            const x = Math.sin(angle1) * circleRadius1;
            const y = Math.cos(angle1) * circleRadius1;
            cylinder1.position.set(x, y, 0);
           cylinder1.rotation.x = Math.PI/2;
            
            barrels1.add(cylinder1);
           MMG.add(barrels1);
        }
           
           const numCylinders2 = 16;
        const cylinderRadius2 = 0.7;
        const circleRadius2 = 5;

        const cylinderGeometry2 = new THREE.CylinderGeometry(cylinderRadius2, cylinderRadius2, 15, 32);
        const cylinderMaterial2 = new THREE.MeshPhongMaterial({ color: 0x000000 }); // Use MeshStandardMaterial

        for (let i = 0; i < numCylinders2; i++) {
            const angle2= (i / numCylinders2) * Math.PI * 2;
            const cylinder2 = new THREE.Mesh(cylinderGeometry2, cylinderMaterial2);

            const x = Math.sin(angle2) * circleRadius2;
            const y = Math.cos(angle2) * circleRadius2;
            cylinder2.position.set(x, y, 0.1);
           cylinder2.rotation.x = Math.PI/2;
            
            barrels2.add(cylinder2);
           MMG.add(barrels2);
        }
           const numCylinders12 = 10;
        const cylinderRadius12 = 0.6;
        const circleRadius12 = 3;

        const cylinderGeometry12 = new THREE.CylinderGeometry(cylinderRadius12, cylinderRadius12, 15, 32);
        const cylinderMaterial12 = new THREE.MeshPhongMaterial({ color: 0x000000 }); // Use MeshStandardMaterial

        for (let i = 0; i < numCylinders12; i++) {
            const angle12 = (i / numCylinders12) * Math.PI * 2;
            const cylinder12 = new THREE.Mesh(cylinderGeometry12, cylinderMaterial12);

            const x = Math.sin(angle12) * circleRadius12;
            const y = Math.cos(angle12) * circleRadius12;
            cylinder12.position.set(x, y, 0.1);
           cylinder12.rotation.x = Math.PI/2;
            
            barrels3.add(cylinder12);
           MMG.add(barrels3);
        }
   const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color:0x222222,metalness:0.85,roughnessMap:0.0,envMap:scene.environment});
    const b = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b.position.set(0,0,-15); // Position it below the barrel
    b.scale.set(1.2,1.8,1);
  MMG.add(b);
           const b3 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    b3.position.set(0,9.5,-11.8); // Position it below the barrel
    b3.scale.set(2,2,0.1);
  MMG.add(b3);
   const geometry1 = new THREE.TorusGeometry(2, 1, 20, 200);
    const geometry2 = new THREE.TorusGeometry(2, 0.5, 20, 200);
    
           const textureLoader3 = new THREE.TextureLoader();
    const texture11 = textureLoader3.load('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKgBKwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAgEDB//EACYQAQEBAAAFBAICAwAAAAAAAAABEQIhMfDxEkFhcTLhsdEicqH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APEgGkAAAAAAAAAAAaDGjcBg1qokUYCRTMBjFMRWDWAAAAAAAAAAAAAAAAAAAAAAANABuDYqBjW4ozGtxuAnDFYYCDFYYCLGYuxmIJrFVgMY1iKAAAAAAAAAAAAAAAAAAA0BsI2KjY2QkbIoSNkbIqQGYYrFekEYYvD0g54zHSxNgqLE46WJsERYyxVjKCBrEGAIoAAAAAAAAAAAAAAAA0aDY2MVFRsVGRUUbIuQkXIDM536Vjc536biKmQxedPpl6oIsTY62JsUcbE2Otn8IsVHOxNi6mgisqqmpRjK1iKAAAAAAAAAAAAAAAQGtjGxRUbGRUVFRfCmL4RVcLpE8K4yGc/C5OXgk539qk75gmTp+PQs5+Fz2+vllnfMEWcv7xF638XW9PKOL3/YOfEiutjlxLBzqaupqoipqqmgkbWMqwAAAAAAAAAAAAAAgQGtjGxUUqJioouL4URfCDpO+i530RFzp5ZVX+O36+Fzp4TLzv7VL3zBs9PLp/xl9O+Gz2+vllvfMGX05fv4Rev9Yu3l5Ret/YJvfRz4u+jpxOdWDnU1VTVRFTVVIMY2pZUAAAAAAAAAAAAAAIANbGNUVFREVFRcXwucVwg68NdI5SrlRV+/hcvfJz3nVagrf9Ten38J3p9M0G28vCeL3/FtqbQZXPiVaiqJqa2pqjE1tTRGAxlQAAAAAAAAAAAAAAABrGg1UTGyqi4qIlbKo6SrlcpWyg7arXHVTiRXSU1z9R6jBdqbU6m3qCrUaWptVCpLWWgyspWIDARQAAAAAAAAAAAAAAABrAGtjARcbKiNlUXK2VGt1R001Gt0F6ajTQVrNTpoNtTaVloFrLSsQYDEUAAAAAAAAAAAAAAAAAAAAawBrZWAKhrBUVrUa3QVokUaaxmpo3WWsAbawYit1gAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAQAFGAAAAAAAAAAAAAAAD//Z');
  const material11 = new THREE.MeshPhongMaterial({ color:0x000000});
    const torus1 = new THREE.Mesh(geometry1, material11);
    torus1.position.set(6, -3, -10);
    torus1.scale.set(1.3,1.3,1.5);
           torus1.rotation.y = Math.PI/2;
    torus1.castShadow = true;
    MMG.add(torus1);
           const torus2= new THREE.Mesh(geometry1, material11);
    torus2.position.set(-6, -3, -10);
    torus2.scale.set(1.3,1.3,1.5);
           torus2.rotation.y = Math.PI/2;
    torus2.castShadow = true;
    MMG.add(torus2);
           const torus4= new THREE.Mesh(geometry1, material11);
    torus4.position.set(0, -3, -25);
    torus4.scale.set(1.3,1.3,2.5);
           torus4.rotation.y = Math.PI/2;
    torus4.castShadow = true;
    MMG.add(torus4);
           const torus41= new THREE.Mesh(barrelGeometry, barrelMaterial3);
    torus41.position.set(0, -3, -25);
    torus41.scale.set(1.5,0.5,1.5);
           torus41.rotation.z = Math.PI/2;
    torus41.castShadow = true;
    MMG.add(torus41);
           const torus3= new THREE.Mesh(geometry2, barrelMaterial3);
    torus3.position.set(0, -2, -22);
    torus3.scale.set(1.5,1.5,1.5);
           torus3.rotation.x = Math.PI/2;
    torus3.castShadow = true;
    MMG.add(torus3);
   
const dmbientLight1 = new THREE.DirectionalLight(0x000000, 0);
    MMG.add(dmbientLight1);
  MMG.position.x = 0;
  scene.add(MMG);
   export default MMG;
    