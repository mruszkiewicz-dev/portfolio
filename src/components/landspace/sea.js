import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'

const Sea = () => {
  return (
    <Canvas shadowMap>
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 5, 0]} intensity={1.5} />
      <Physics degug>
        <RigidBody position={[0, 10, 0]}>
          <Box />
        </RigidBody>
        <RigidBody type="fixed" colliders={'cuboid'} restitution={1.1} position={[0, -1, 0]}>
          <Box position={[0, 0, 0]} args={[10, 1, 10]}>
            <meshStandardMaterial color="green" />
          </Box>
        </RigidBody>
      </Physics>
      <OrbitControls />
    </Canvas>
  )
}

export default Sea
