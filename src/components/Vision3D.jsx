import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

function AnimatedSphere({ position, size, color }) {
  const ref = useRef();
  
  useFrame((state) => {
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.2;
  });

  return (
    <Sphere ref={ref} args={[size, 16, 16]} position={position}>
      <meshStandardMaterial color={color} wireframe />
    </Sphere>
  );
}

function Vision3D() {
  return (
    <Canvas className="vision-3d-canvas">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphere position={[0, 0, 0]} size={1.5} color="#4285f4" />
      <AnimatedSphere position={[2, -1, -2]} size={0.8} color="#ea4335" />
      <AnimatedSphere position={[-2, 1, -1]} size={1} color="#fbbc05" />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

export default Vision3D;