import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  OrbitControls,
  Preload,
  OrthographicCamera,
  Stats,
  AdaptiveDpr,
} from '@react-three/drei'
import { EffectComposer } from '@react-three/postprocessing'
import useStore from '@/store/store'
import AdaptivePixelRatio from '@/components/adaptivePixelRatio'
import { Perf } from 'r3f-perf'

const LControl = () => {
  const dom = useStore((state) => state.dom)

  const { scene } = useThree()

  const camera = useRef(null)
  const control = useRef(null)

  const vector = new THREE.Vector3()

  useFrame(() => {
    if (control.current) {
      const character = scene.getObjectByName('character')
      if (character) {
        const { x, y, z } = character.position
        control.current.target = vector.set(x, y, z)
      }
    }
  })

  useEffect(() => {
    if (control.current) {
      dom.current.style['touch-action'] = 'none'
      control.current.enabled = true
    }
  }, [dom, control])
  // @ts-ignore
  return (
    <>
      <OrthographicCamera
        position={[100, 100, 100]}
        zoom={15}
        makeDefault
        ref={camera}
        near={0.001}
      />
      <OrbitControls
        ref={control}
        camera={camera.current}
        domElement={dom.current}
        enablePan={false}
        enableRotate={false}
        mouseButtons={{
          LEFT: THREE.MOUSE.PAN,
          MIDDLE: THREE.MOUSE.DOLLY,
          RIGHT: THREE.MOUSE.ROTATE,
        }}
        rotateSpeed={0.4}
        zoomSpeed={0.8}
        // target={character?.position}
      />
    </>
  )
}
const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <Canvas
      mode='concurrent'
      // frameloop='demand'
      style={{
        position: 'absolute',
        top: 0,
      }}
      onCreated={(state) => {
        const { camera, gl } = state
        state.events.connect(dom.current)

        gl.gammaFactor = 2.2
        gl.outputEncoding = THREE.sRGBEncoding
        // gl.powerPreference = 'high-performance'
        // gl.setPixelRatio(Math.min(window.devicePixelRatio, 3))

        console.log(gl.info)

        camera.layers.enableAll()
        // raycaster.layers.set(1)
      }}
    >
      <color attach='background' args={[0x000000]} /> {/* 0x343a40 */}
      <Perf position='bottom-right' />
      {/* <AdaptivePixelRatio /> */}
      {/* <AdaptiveDpr pixelated /> */}
      {/* <EffectComposer> */}
      {/* <DepthOfField
          focusDistance={0.07}
          focalLength={0.02}
          bokehScale={2}
          // height={1000}
          // width={1000}
        />
        <Vignette eskil={false} offset={0.05} darkness={0.4} /> */}
      {/* </EffectComposer> */}
      <Stats showPanel={0} className='stats' />
      {/* <HUD /> */}
      <LControl />
      <Preload all />
      {/* <axesHelper scale={1000} /> */}
      {children}
    </Canvas>
  )
}

export default LCanvas
