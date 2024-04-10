import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Loader } from '@react-three/drei';

function Model() {
  const gltf = useGLTF('/model/scene.gltf', true);
  return <primitive object={gltf.scene} scale={0.07} position={[0,-1.5,-0.5]} />;
}

export default function Threejs() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={15} />
          <Model />
          <OrbitControls />
      </Canvas>
      <Loader />
    </>
  );
}
