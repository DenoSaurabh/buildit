/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    ['character_3_export-0']: THREE.Mesh
    ['character_3_export-0_1']: THREE.Mesh
    ['character_3_export-0_2']: THREE.Mesh
    ['character_3_export-0_3']: THREE.Mesh
    ['character_3_export-1']: THREE.Mesh
    ['character_3_export-1_1']: THREE.Mesh
    ['character_3_export-1_2']: THREE.Mesh
    ['character_3_export-1_3']: THREE.Mesh
    ['character_3_export-1_4']: THREE.Mesh
    ['character_3_export-1_5']: THREE.Mesh
    ['character_3_export-5']: THREE.Mesh
    ['character_3_export-5_1']: THREE.Mesh
    ['character_3_export-3']: THREE.Mesh
    ['character_3_export-3_1']: THREE.Mesh
    ['character_3_export-3_2']: THREE.Mesh
    ['character_3_export-4']: THREE.Mesh
    ['character_3_export-4_1']: THREE.Mesh
    ['character_3_export-2']: THREE.Mesh
    ['character_3_export-2_1']: THREE.Mesh
    ['character_3_export-2_2']: THREE.Mesh
  }
  materials: {
    ['character_3_export-0 #220']: THREE.MeshStandardMaterial
    ['character_3_export-0 #229']: THREE.MeshStandardMaterial
    ['character_3_export-0 #225']: THREE.MeshStandardMaterial
    ['character_3_export-0 #228']: THREE.MeshStandardMaterial
    ['character_3_export-1 #229']: THREE.MeshStandardMaterial
    ['character_3_export-1 #231']: THREE.MeshStandardMaterial
    ['character_3_export-1 #219']: THREE.MeshStandardMaterial
    ['character_3_export-1 #232']: THREE.MeshStandardMaterial
    ['character_3_export-1 #221']: THREE.MeshStandardMaterial
    ['character_3_export-1 #220']: THREE.MeshStandardMaterial
    ['character_3_export-5 #229']: THREE.MeshStandardMaterial
    ['character_3_export-5 #217']: THREE.MeshStandardMaterial
    ['character_3_export-3 #217']: THREE.MeshStandardMaterial
    ['character_3_export-3 #229']: THREE.MeshStandardMaterial
    ['character_3_export-3 #219']: THREE.MeshStandardMaterial
    ['character_3_export-4 #229']: THREE.MeshStandardMaterial
    ['character_3_export-4 #217']: THREE.MeshStandardMaterial
    ['character_3_export-2 #217']: THREE.MeshStandardMaterial
    ['character_3_export-2 #229']: THREE.MeshStandardMaterial
    ['character_3_export-2 #219']: THREE.MeshStandardMaterial
  }
}

type ActionName =
  | 'headAction'
  | 'bodyAction'
  | 'right_legAction'
  | 'left_legAction'
  | 'right_handAction'
  | 'left_handAction'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/character-3-with-ani.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="body" position={[0, 16.37, 0]}>
        <mesh geometry={nodes['character_3_export-0'].geometry} material={materials['character_3_export-0 #220']} />
        <mesh geometry={nodes['character_3_export-0_1'].geometry} material={materials['character_3_export-0 #229']} />
        <mesh geometry={nodes['character_3_export-0_2'].geometry} material={materials['character_3_export-0 #225']} />
        <mesh geometry={nodes['character_3_export-0_3'].geometry} material={materials['character_3_export-0 #228']} />
        <group name="head" position={[0, 10, 0]}>
          <mesh geometry={nodes['character_3_export-1'].geometry} material={materials['character_3_export-1 #229']} />
          <mesh geometry={nodes['character_3_export-1_1'].geometry} material={materials['character_3_export-1 #231']} />
          <mesh geometry={nodes['character_3_export-1_2'].geometry} material={materials['character_3_export-1 #219']} />
          <mesh geometry={nodes['character_3_export-1_3'].geometry} material={materials['character_3_export-1 #232']} />
          <mesh geometry={nodes['character_3_export-1_4'].geometry} material={materials['character_3_export-1 #221']} />
          <mesh geometry={nodes['character_3_export-1_5'].geometry} material={materials['character_3_export-1 #220']} />
        </group>
        <group name="left_hand" position={[5.5, 4.92, 0.01]}>
          <mesh geometry={nodes['character_3_export-5'].geometry} material={materials['character_3_export-5 #229']} />
          <mesh geometry={nodes['character_3_export-5_1'].geometry} material={materials['character_3_export-5 #217']} />
        </group>
        <group name="left_leg" position={[1.98, -6.04, 0]}>
          <mesh geometry={nodes['character_3_export-3'].geometry} material={materials['character_3_export-3 #217']} />
          <mesh geometry={nodes['character_3_export-3_1'].geometry} material={materials['character_3_export-3 #229']} />
          <mesh geometry={nodes['character_3_export-3_2'].geometry} material={materials['character_3_export-3 #219']} />
        </group>
        <group name="right_hand" position={[-5.5, 4.99, 0.1]}>
          <mesh geometry={nodes['character_3_export-4'].geometry} material={materials['character_3_export-4 #229']} />
          <mesh geometry={nodes['character_3_export-4_1'].geometry} material={materials['character_3_export-4 #217']} />
        </group>
        <group name="right_leg" position={[-2.03, -6.06, 0]}>
          <mesh geometry={nodes['character_3_export-2'].geometry} material={materials['character_3_export-2 #217']} />
          <mesh geometry={nodes['character_3_export-2_1'].geometry} material={materials['character_3_export-2 #229']} />
          <mesh geometry={nodes['character_3_export-2_2'].geometry} material={materials['character_3_export-2 #219']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/character-3-with-ani.glb')
