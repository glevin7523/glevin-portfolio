import React, { useRef, useEffect, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import AOS from 'aos';
import 'aos/dist/aos.css';



function AnimatedAvatar() {
  const group = useRef();
  const { scene, animations } = useGLTF("/model (4).glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.reset().fadeIn(0.5).play();
    }
  }, [actions, animations]);

  return (
    <group ref={group} scale={1.2} position={[0, -0.6, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const wavingHandRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (wavingHandRef.current) {
        wavingHandRef.current.classList.toggle("animate-wave");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-16 bg-[#0b1120] text-white pt-8">
      {/* Left Text Section */}
      <div
        className="max-w-xl space-y-6 text-center md:text-left z-10"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hey, I'm <span className="text-cyan-400">Glevin</span>{" "}
          <span className="inline-block animate-wave">👋</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-300 font-medium">
          <Typewriter
            words={["AI Engineer 🤖", "Data Science Enthusiast 📊", "Tech Explorer 🔍"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="text-lg text-slate-400">
          I'm passionate about building intelligent, optimized solutions using AI and web
          technologies. Always up for exciting opportunities where I can create impact!
        </p>

        <p className="text-cyan-400 font-semibold mt-6">
        I'm always open to connect and collaborate. Let’s talk!
        </p>

        <div className="flex gap-6 justify-center md:justify-start mt-4">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=glevinroche@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope className="text-white text-2xl hover:text-cyan-400 transition" />
          </a>
          <a href="https://github.com/glevin7523" target="_blank" rel="noreferrer">
            <FaGithub className="text-white text-2xl hover:text-cyan-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/glevin-roche-27b754249/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-cyan-400 transition" />
          </a>
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 border border-cyan-400 text-cyan-400 px-6 py-2 rounded-full hover:bg-cyan-500 hover:text-white transition"
        >
          <i className="fas fa-download mr-2" /> Download Resume
        </a>
      </div>

      {/* Right 3D Avatar Canvas */}
      <div
        className="w-full md:w-1/2 h-[600px] md:h-[700px] -mt-10 md:mt-0"
        data-aos="fade-left"
      >
        <Canvas camera={{ position: [0, 0.5, 10.5], fov: 30 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <Suspense fallback={null}>
            <AnimatedAvatar />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}
