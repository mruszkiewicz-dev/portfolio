import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box, Sphere } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'

const Sea = () => {
  return (
    <Canvas shadowMap>
      <ambientLight intensity={1.5} />
      <spotLight position={[0, 5, 0]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Physics gravity={[0, -1, 0]} interpolation={false} colliders="ball">
        <RigidBody includeInvisible colliders="hull">
          <Sphere />
        </RigidBody>
        <RigidBody colliders={'cuboid'} restitution={1.1} position={[0, -1, 0]}>
          <Box scale={0.5} receiveShadow castShadow>
            <meshPhysicalMaterial color={'green'} />
          </Box>
        </RigidBody>
      </Physics>
      <OrbitControls />
    </Canvas>
  )
}

export default Sea
