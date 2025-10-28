import { Circle, Html, OrbitControls, Stats, useProgress } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense, useEffect } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white">{Math.round(progress)}% loaded</div>
    </Html>
  );
}

function ModelScene() {
  const gltf = useLoader(GLTFLoader, '/models/rover.glb');

  useEffect(() => {
    if (!gltf || !gltf.scene) return;
    gltf.scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
}

const Scene: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 600 }}>
      <Canvas shadows camera={{ position: [0, 1.2, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} castShadow intensity={1} />

        <Suspense fallback={<Loader />}>
          <ModelScene />
        </Suspense>

        <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial color="#111827" />
        </Circle>

        <OrbitControls makeDefault target={[0, 0.5, 0]} />
        <axesHelper args={[2]} />
        <Stats />
      </Canvas>
    </div>
  );
};

export default Scene;
