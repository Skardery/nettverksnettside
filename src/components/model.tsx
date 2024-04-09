import { Canvas } from '@react-three/fiber';
import { OrbitControls, Loader, useGLTF, CameraControls } from '@react-three/drei';

function Model() {
  const gltf = useGLTF('/model/scene.gltf', true);
  return <primitive object={gltf.scene} scale={0.05} />;
}

export default function Threejs() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={15} penumbra={1} />
          <Model />
          <OrbitControls/>
      </Canvas>
      <Loader />
    </>
  );
}
