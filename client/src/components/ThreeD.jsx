import React, { useEffect, useRef, useState } from 'react';

const TechStack3D = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if Three.js is available
    if (typeof window === 'undefined' || !window.THREE) {
      // Load Three.js dynamically
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.onload = () => initializeScene();
      script.onerror = () => setError('Failed to load Three.js');
      document.head.appendChild(script);
      
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } else {
      initializeScene();
    }

    function initializeScene() {
      if (!mountRef.current) return;
      
      try {
        const THREE = window.THREE;
        
        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0d1117);
        sceneRef.current = scene;

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.set(0, 0, 20);

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Check if shadow mapping is supported
        if (renderer.shadowMap) {
          renderer.shadowMap.enabled = true;
          renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        }
        
        rendererRef.current = renderer;
        mountRef.current.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(10, 10, 5);
        if (directionalLight.shadow) {
          directionalLight.castShadow = true;
        }
        scene.add(directionalLight);

        // Tech stack data
        const techStack = [
          { name: 'React', color: 0x61DAFB, position: [-8, 4, -5] },
          { name: 'JavaScript', color: 0xF7DF1E, position: [6, 3, -3] },
          { name: 'TypeScript', color: 0x3178C6, position: [-4, -2, 2] },
          { name: 'Node.js', color: 0x339933, position: [8, -1, 4] },
          { name: 'Python', color: 0x3776AB, position: [-6, 2, 6] },
          { name: 'MongoDB', color: 0x47A248, position: [4, -4, -2] },
          { name: 'Docker', color: 0x2496ED, position: [-2, 5, 1] },
          { name: 'AWS', color: 0xFF9900, position: [7, 1, -4] },
          { name: 'Git', color: 0xF05032, position: [-5, -3, -1] },
          { name: 'GraphQL', color: 0xE10098, position: [2, 6, 3] },
        ];

        const techMeshes = [];

        // Create tech stack elements
        techStack.forEach((tech, index) => {
          let geometry;
          const rand = Math.random();
          
          if (rand < 0.3) {
            geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
          } else if (rand < 0.6) {
            geometry = new THREE.SphereGeometry(0.8, 32, 32);
          } else {
            geometry = new THREE.CylinderGeometry(0.8, 0.8, 1.5, 8);
          }

          const material = new THREE.MeshLambertMaterial({
            color: tech.color,
            transparent: true,
            opacity: 0.8
          });

          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(...tech.position);
          
          if (mesh.castShadow !== undefined) {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
          
          scene.add(mesh);
          
          techMeshes.push({
            mesh,
            originalPosition: new THREE.Vector3(...tech.position),
            rotationSpeed: {
              x: (Math.random() - 0.5) * 0.02,
              y: (Math.random() - 0.5) * 0.02,
              z: (Math.random() - 0.5) * 0.02
            },
            floatSpeed: Math.random() * 0.5 + 0.5,
            tech: tech
          });

          // Create simple text label
          const canvas = document.createElement('canvas');
          canvas.width = 256;
          canvas.height = 64;
          const context = canvas.getContext('2d');
          
          // Background
          context.fillStyle = `#${tech.color.toString(16).padStart(6, '0')}`;
          context.fillRect(0, 0, 256, 64);
          
          // Text
          context.fillStyle = '#ffffff';
          context.font = 'bold 24px Arial';
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillText(tech.name, 128, 32);

          const texture = new THREE.CanvasTexture(canvas);
          const labelMaterial = new THREE.MeshBasicMaterial({ 
            map: texture, 
            transparent: true
          });
          const labelGeometry = new THREE.PlaneGeometry(2, 0.5);
          const label = new THREE.Mesh(labelGeometry, labelMaterial);
          
          label.position.copy(mesh.position);
          label.position.y += 1.5;
          scene.add(label);
          
          techMeshes[techMeshes.length - 1].label = label;
        });

        // Create particles
        const particleCount = 100;
        const particleGeometry = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount; i++) {
          particlePositions[i * 3] = (Math.random() - 0.5) * 60;
          particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 60;
          particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 60;
        }
        
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        
        const particleMaterial = new THREE.PointsMaterial({
          color: 0x4a9eff,
          size: 0.3,
          transparent: true,
          opacity: 0.6
        });
        
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        // Mouse interaction
        const mouse = { x: 0, y: 0 };
        const target = { x: 0, y: 0 };

        const handleMouseMove = (event) => {
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Resize handler
        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Animation variables
        let startTime = Date.now();

        // Animation loop
        const animate = () => {
          frameRef.current = requestAnimationFrame(animate);
          
          const currentTime = Date.now();
          const elapsedTime = (currentTime - startTime) * 0.001; // Convert to seconds

          // Smooth mouse following
          target.x += (mouse.x - target.x) * 0.02;
          target.y += (mouse.y - target.y) * 0.02;

          // Update camera position
          camera.position.x += (target.x * 3 - camera.position.x) * 0.02;
          camera.position.y += (target.y * 3 - camera.position.y) * 0.02;
          camera.lookAt(scene.position);

          // Animate tech meshes
          techMeshes.forEach(({ mesh, label, originalPosition, rotationSpeed, floatSpeed }, index) => {
            // Rotation
            mesh.rotation.x += rotationSpeed.x;
            mesh.rotation.y += rotationSpeed.y;
            mesh.rotation.z += rotationSpeed.z;

            // Floating motion
            const floatY = Math.sin(elapsedTime * floatSpeed + index) * 0.5;
            const floatX = Math.cos(elapsedTime * floatSpeed * 0.7 + index) * 0.3;
            const floatZ = Math.sin(elapsedTime * floatSpeed * 0.5 + index) * 0.4;
            
            mesh.position.x = originalPosition.x + floatX;
            mesh.position.y = originalPosition.y + floatY;
            mesh.position.z = originalPosition.z + floatZ;
            
            // Update label position
            if (label) {
              label.position.copy(mesh.position);
              label.position.y += 1.5;
              label.lookAt(camera.position);
            }
          });

          // Animate particles
          const positions = particles.geometry.attributes.position.array;
          for (let i = 0; i < particleCount; i++) {
            positions[i * 3 + 1] += Math.sin(elapsedTime + positions[i * 3]) * 0.002;
            positions[i * 3] += Math.cos(elapsedTime + positions[i * 3 + 2]) * 0.001;
          }
          particles.geometry.attributes.position.needsUpdate = true;
          particles.rotation.y += 0.0005;

          renderer.render(scene, camera);
        };

        // Start animation
        animate();
        setIsLoaded(true);

        // Cleanup function
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('resize', handleResize);
          
          if (frameRef.current) {
            cancelAnimationFrame(frameRef.current);
          }
          
          if (mountRef.current && renderer.domElement) {
            try {
              mountRef.current.removeChild(renderer.domElement);
            } catch (e) {
              console.warn('Could not remove renderer element:', e);
            }
          }
          
          // Dispose of resources
          scene.traverse((object) => {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach(material => material.dispose());
              } else {
                object.material.dispose();
              }
            }
          });
          
          renderer.dispose();
        };
        
      } catch (err) {
        console.error('Three.js initialization error:', err);
        setError('Failed to initialize 3D scene: ' + err.message);
      }
    }

  }, []);

  if (error) {
    return (
      <div className="relative w-full h-screen overflow-hidden bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl mb-4">3D Scene Error</h2>
          <p className="text-gray-400 mb-4">{error}</p>
          <p className="text-sm text-gray-500">Falling back to 2D layout...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#101010b3]">
    <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/noise.png')",
            backgroundSize: "",
            backgroundRepeat: "repeat",
            opacity: 0.4,
            zIndex: 1,
          }}
        ></div>

      <div ref={mountRef} className="absolute" />
    </div>
  );
};

export default TechStack3D;