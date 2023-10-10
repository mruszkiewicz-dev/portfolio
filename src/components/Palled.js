import React from 'react'
import { useGLTF } from '@react-three/drei'

const Palled = (props) => {
  const { nodes, materials } = useGLTF('./palled/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['None.001']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['None.005']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['None.006']} />
      </group>
    </group>
  )
}

useGLTF.preload('./palled/scene.gltf')

export default Palled
