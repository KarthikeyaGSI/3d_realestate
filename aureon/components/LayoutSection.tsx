"use client";

import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import SectionLabel from "./ui/SectionLabel";
import { gsap } from "@/lib/gsap";

function LayoutModel() {
  try {
    // The GLB is in the root of public/
    const { scene } = useGLTF("/3d_layout.glb");
    return <primitive object={scene} scale={0.02} position={[0, -1, 0]} />;
  } catch (e) {
    return (
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#C8A96A" wireframe />
      </mesh>
    );
  }
}

export default function LayoutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Optional enter animation for the section
      gsap.fromTo(sectionRef.current, { opacity: 0 }, {
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: true
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="layout" className="h-screen w-full bg-[var(--background)] relative z-10 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-12 left-12 z-20">
        <SectionLabel index="06" title="Architecture" className="!text-[var(--ink)] [&>div]:bg-[var(--ink)] [&>span:first-child]:text-[var(--bronze)]" />
      </div>

      <div className="absolute top-12 right-12 z-20 text-right max-w-sm">
        <h3 className="text-3xl font-editorial text-[var(--ink)] mb-4">Spatial Mastery</h3>
        <p className="text-sm text-[var(--muted-ink)] leading-relaxed">
          Interact with the masterplan. Every dimension and elevation is engineered to command the landscape.
        </p>
      </div>

      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [10, 8, 10], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[15, 20, 10]} intensity={2} color="#FFF5E5" />
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            maxPolarAngle={Math.PI / 2 - 0.1}
            minDistance={5}
            maxDistance={30}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <LayoutModel />
          <Environment preset="city" />
        </Canvas>
      </div>
    </section>
  );
}
