import { useRef, useMemo, forwardRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';

function Particles({ count = 400 }) {
  const points = useRef<THREE.Points>(null!);
  const { theme } = useTheme();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    points.current.rotation.y = clock.getElapsedTime() * 0.015;
    points.current.rotation.x = clock.getElapsedTime() * 0.008;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={theme === 'dark' ? '#00d4ff' : '#6366f1'}
        transparent
        opacity={theme === 'dark' ? 0.5 : 0.35}
        sizeAttenuation
      />
    </points>
  );
}

function OrbitRing({ radius, speed, color, thickness = 0.015 }: { radius: number; speed: number; color: string; thickness?: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * speed * 0.3) * 0.5 + 0.8;
    ref.current.rotation.y = clock.getElapsedTime() * speed;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, thickness, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} transparent opacity={0.4} />
    </mesh>
  );
}

function GlowingSphere({ position, size, color, speed }: { position: [number, number, number]; size: number; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    ref.current.position.y = position[1] + Math.sin(t) * 0.5;
    ref.current.position.x = position[0] + Math.cos(t * 0.7) * 0.3;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} transparent opacity={0.6} />
    </mesh>
  );
}

function CentralIcosahedron() {
  const ref = useRef<THREE.Mesh>(null!);
  const { theme } = useTheme();

  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.getElapsedTime() * 0.08;
    ref.current.rotation.y = clock.getElapsedTime() * 0.12;
  });

  const mainColor = theme === 'dark' ? '#00d4ff' : '#6366f1';
  const emissiveColor = theme === 'dark' ? '#a855f7' : '#8b5cf6';

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={mainColor}
          emissive={emissiveColor}
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.9}
          distort={0.25}
          speed={1.5}
          transparent
          opacity={theme === 'dark' ? 0.5 : 0.35}
        />
      </mesh>
    </Float>
  );
}

function FloatingOctahedron() {
  const ref = useRef<THREE.Mesh>(null!);
  const { theme } = useTheme();
  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * 0.15;
    ref.current.position.y = -2 + Math.sin(clock.getElapsedTime() * 0.4) * 0.5;
  });

  return (
    <mesh ref={ref} position={[3.5, -2, -2]} scale={0.6}>
      <octahedronGeometry args={[1, 0]} />
      <MeshWobbleMaterial
        color={theme === 'dark' ? '#ec4899' : '#f472b6'}
        emissive={theme === 'dark' ? '#ec4899' : '#f472b6'}
        emissiveIntensity={0.5}
        factor={0.4}
        speed={1}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function MouseLight() {
  const light = useRef<THREE.PointLight>(null!);
  const { viewport } = useThree();

  useFrame(({ pointer }) => {
    light.current.position.x = (pointer.x * viewport.width) / 2;
    light.current.position.y = (pointer.y * viewport.height) / 2;
  });

  return <pointLight ref={light} position={[0, 0, 4]} intensity={0.6} color="#ffffff" distance={10} />;
}

function Scene() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ambientLight intensity={isDark ? 0.15 : 0.4} />
      <pointLight position={[5, 5, 5]} intensity={isDark ? 0.8 : 0.5} color={isDark ? '#00d4ff' : '#6366f1'} />
      <pointLight position={[-5, -3, 5]} intensity={isDark ? 0.4 : 0.3} color={isDark ? '#a855f7' : '#8b5cf6'} />
      <pointLight position={[0, -5, 3]} intensity={0.2} color={isDark ? '#ec4899' : '#f472b6'} />
      <MouseLight />

      <CentralIcosahedron />
      <FloatingOctahedron />

      <OrbitRing radius={3} speed={0.3} color={isDark ? '#00d4ff' : '#6366f1'} />
      <OrbitRing radius={3.8} speed={0.2} color={isDark ? '#a855f7' : '#8b5cf6'} thickness={0.01} />
      <OrbitRing radius={4.5} speed={0.15} color={isDark ? '#ec4899' : '#f472b6'} thickness={0.008} />

      <GlowingSphere position={[-3, 2, -1]} size={0.12} color={isDark ? '#00d4ff' : '#6366f1'} speed={0.6} />
      <GlowingSphere position={[3, 1.5, -2]} size={0.08} color={isDark ? '#a855f7' : '#8b5cf6'} speed={0.8} />
      <GlowingSphere position={[-2, -2, -1]} size={0.1} color={isDark ? '#ec4899' : '#f472b6'} speed={0.5} />
      <GlowingSphere position={[2, -1, 1]} size={0.06} color={isDark ? '#00ffaa' : '#34d399'} speed={0.7} />

      <Particles count={350} />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 7], fov: 55 }} dpr={[1, 1.5]}>
        <Scene />
      </Canvas>
    </div>
  );
}
