/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import useLoad from '@/store/load'

type GLTFResult = GLTF & {
  nodes: {
    ['more_nfts_voxel-5']: THREE.Mesh
    ['more_nfts_voxel-5_1']: THREE.Mesh
  }
  materials: {
    ['more_nfts_voxel-5 #249']: THREE.MeshBasicMaterial
    ['more_nfts_voxel-5 #242']: THREE.MeshBasicMaterial
  }
}

export default function CastleEnterRight(
  props: JSX.IntrinsicElements['group']
) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    'models/world/castle/castle_entry_right.glb'
  ) as GLTFResult

  const load = useLoad(({ chunkData }) => chunkData('castle-enter-right').load)
  if (!load) return null

  return (
    <group ref={group} {...props} dispose={null} name='castle-enter-right'>
      <group position={[-254, 0, -66]}>
        <mesh
          geometry={nodes['more_nfts_voxel-5'].geometry}
          material={materials['more_nfts_voxel-5 #249']}
          name='castle-enter-right'
        />
        <mesh
          geometry={nodes['more_nfts_voxel-5_1'].geometry}
          material={materials['more_nfts_voxel-5 #242']}
          name='castle-enter-right'
        />{' '}
      </group>
    </group>
  )
}

useGLTF.preload('models/world/castle/castle_entry_right.glb')
