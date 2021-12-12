/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import BillBoard from '@/components/billboard'
import useLoad from '@/store/load'

type GLTFResult = GLTF & {
  nodes: {
    ['palace_voxel_final-1']: THREE.Mesh
    ['palace_voxel_final-1_1']: THREE.Mesh
    ['palace_voxel_final-1_2']: THREE.Mesh
  }
  materials: {
    ['palace_voxel_final-1 #249']: THREE.MeshBasicMaterial
    ['palace_voxel_final-1 #242']: THREE.MeshBasicMaterial
    ['palace_voxel_final-1 #250']: THREE.MeshBasicMaterial
  }
}

export default function MidTopRight(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    'models/world/mid/palace-tools.glb'
  ) as GLTFResult

  const load = useLoad(({ chunkData }) => chunkData('palace-top-right').load)
  console.log(load, 'unsub')
  if (!load) return null

  // const loadRef = useRef(useLoad.getState().chunkData('palace-top-right').load)
  // // Connect to the store on mount, disconnect on unmount, catch state-changes in a reference
  // useEffect(
  //   () =>
  //     useLoad.subscribe((state) => {
  //       console.log(state.chunkData('palace-top-right').load, 'sub')
  //       loadRef.current = state.chunkData('palace-top-right').load
  //     }),
  //   []
  // )

  return (
    <group ref={group} {...props} dispose={null} name='palace-top-right'>
      <group position={[-98, 0, -66]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          geometry={nodes['palace_voxel_final-1'].geometry}
          material={materials['palace_voxel_final-1 #249']}
          name='palace-top-right'
        />
        <mesh
          geometry={nodes['palace_voxel_final-1_1'].geometry}
          material={materials['palace_voxel_final-1 #242']}
          name='palace-top-right'
        />
        <mesh
          geometry={nodes['palace_voxel_final-1_2'].geometry}
          material={materials['palace_voxel_final-1 #250']}
          name='palace-top-right'
        />

        <BillBoard position={[40, -50, -40]}>
          Thank you for{' '}
          <a href='https://polygon.technology' target='_blank' rel='noreferrer'>
            <u>Polygon</u>
          </a>{' '}
          for making this project possible.
          <br />
          <br />
          Amazing tools like Blender, Poimandres, Vercel, Magicavoxel, ThreeJS,
          Radix, Ethereum, Solidity, Hardhat have big hands too.. /
        </BillBoard>
      </group>
    </group>
  )
}

useGLTF.preload('models/world/mid/palace-tools.glb')
