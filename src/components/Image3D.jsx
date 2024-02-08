import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, Html, OrbitControls, Preload, useProgress, useTexture } from '@react-three/drei';

export default function Image3D({ image }) {
    const { progress } = useProgress();

    function LoadingOverlay({ progress }) {
        return (
            <Html>
                <div className="loading-overlay">
                    <span className="loading-spinner"></span>
                    <p>Loading: {progress.toFixed(2)}%</p>
                </div>
            </Html>
        );
    }

    function Logo3D() {
        const [decal] = useTexture([image]);
        const [position, setPosition] = useState([0, 0, 0.05])
        return (
            <>
                <ambientLight intensity={0.5} />
                <directionalLight position={position} />
                <Float speed={6} rotationIntensity={1.5}>
                    <mesh scale={2} castShadow receiveShadow>
                        <boxGeometry args={[1.5, 1.5, 1.5]} />
                        <meshStandardMaterial color="#7e61e7" polygonOffset polygonOffsetFactor={-5} flatShading />
                        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
                    </mesh>
                </Float>
            </>
        );
    }

    return (
        <Canvas>
            <Preload all />
            <Suspense fallback={<LoadingOverlay progress={progress} />}>
                <OrbitControls enableZoom={false} enablePan={false} />
                <Logo3D imgUrl={image} />
            </Suspense>
        </Canvas>
    );

}