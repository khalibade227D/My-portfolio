import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function OrbitingShape({ position, scale, color, speed, shape = 'icosahedron' }) {
  const mesh = useRef()
  useFrame((state, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * speed
    mesh.current.rotation.y += delta * speed * 0.72
    mesh.current.position.y += Math.sin(state.clock.elapsedTime * speed) * delta * 0.16
  })

  const geometry = shape === 'octahedron'
    ? <octahedronGeometry args={[1, 0]} />
    : shape === 'torus'
      ? <torusGeometry args={[0.8, 0.025, 12, 80]} />
      : <icosahedronGeometry args={[1, 1]} />

  return (
    <Float speed={0.8 + speed} rotationIntensity={0.35} floatIntensity={0.55}>
      <mesh ref={mesh} position={position} scale={scale}>
        {geometry}
        <meshStandardMaterial
          color={color}
          wireframe
          roughness={0.25}
          metalness={0.8}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  )
}

function SceneObjects() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 3]} intensity={2.2} color="#39d7ff" />
      <pointLight position={[-4, -2, -1]} intensity={1.8} color="#9b8cff" />
      <Stars radius={80} depth={45} count={1800} factor={2.2} saturation={0.2} fade speed={0.5} />
      <Sparkles count={90} scale={[15, 10, 12]} size={1.8} speed={0.25} opacity={0.65} color="#7ceaff" />
      <OrbitingShape position={[-4.2, 1.5, -3]} scale={1.6} color="#39d7ff" speed={0.17} />
      <OrbitingShape position={[4.5, -1.2, -4]} scale={1.3} color="#9b8cff" speed={0.22} shape="octahedron" />
      <OrbitingShape position={[2.6, 3.2, -7]} scale={2.0} color="#5b8dff" speed={0.1} shape="torus" />
      <OrbitingShape position={[-1.5, -3.0, -5]} scale={0.75} color="#e7c878" speed={0.25} shape="octahedron" />
    </>
  )
}

export default function Scene3D() {
  return (
    <div className="scene3d" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 10], fov: 55 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <SceneObjects />
      </Canvas>
      <div className="scene-vignette" />
    </div>
  )
}
