import React, { useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'

function SpinningKnot() {
  const meshRef = React.useRef()
  const [hueBase] = React.useState(() => Math.random())

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.35
      meshRef.current.rotation.y = t * 0.25
      meshRef.current.position.y = Math.sin(t * 0.8) * 0.2
    }
  })

  const colors = useMemo(() => {
    const stop1 = `hsl(${(hueBase * 360) % 360}deg 90% 60%)`
    const stop2 = `hsl(${(hueBase * 360 + 60) % 360}deg 90% 60%)`
    const stop3 = `hsl(${(hueBase * 360 + 120) % 360}deg 90% 60%)`
    return [stop1, stop2, stop3]
  }, [hueBase])

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.32, 220, 32]} />
        <meshStandardMaterial color={colors[1]} metalness={0.4} roughness={0.2} />
      </mesh>
    </Float>
  )
}

export default function LoadingOverlay({ visible = true, message = 'Crafting your experience…' }) {
  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0a0f1f] via-[#070a14] to-black">
      <div className="absolute inset-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[4, 4, 4]} intensity={0.8} />
          <Stars radius={60} depth={40} count={2000} factor={3} saturation={0} fade speed={1} />
          <SpinningKnot />
        </Canvas>
      </div>
      <div className="relative text-center px-6">
        <div className="inline-block rounded-2xl border border-white/15 bg-white/5 px-5 py-3 backdrop-blur-xl">
          <div className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent text-sm tracking-wide">SUNIKA EDUSPHERE</div>
          <div className="mt-1 text-white text-lg font-semibold">{message}</div>
        </div>
      </div>
    </div>
  )
}
