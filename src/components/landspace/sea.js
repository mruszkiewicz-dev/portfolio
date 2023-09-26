import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Sea = () => (
  <Canvas>
    <ambientLight intensity={2.1} />
    <directionalLight color="white" position={[0, 0, 5]} />
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
    <OrbitControls autoRotate />
  </Canvas>
)

export default Sea
