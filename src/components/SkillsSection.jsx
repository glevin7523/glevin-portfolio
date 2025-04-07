// src/components/SkillsSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { SiPython, SiC, SiJupyter, SiTensorflow, SiOpencv, SiScikitlearn, SiNumpy, SiPandas, SiPytorch, SiKeras, SiLangchain } from "react-icons/si";
import { FaChartBar, FaRobot, FaDatabase, FaPaintBrush, FaCogs } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbBrandOpenai } from "react-icons/tb";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import CustomIcon from "./CustomIcon"; // Make sure CustomIcon is set up correctly
import "./SkillsSection.css";

// Local SVG Icons
import vscodeIcon from "../assets/icons/vscode.svg";
import matplotlibIcon from "../assets/icons/matplotlib.svg";
import seabornIcon from "../assets/icons/seaborn.svg";

const skillCategories = [
  {
    title: "Programming",
    description: "Efficient in writing and understanding logical structures using robust programming languages.",
    icon: <BsCodeSlash size={24} />,
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "C", icon: <SiC /> },
    ],
  },
  {
    title: "Developer Tools & IDEs",
    description: "Equipped with tools for streamlined development and debugging.",
    icon: <FaCogs size={24} />,
    skills: [
      { name: "VS Code", icon: <CustomIcon src={vscodeIcon} alt="VS Code" /> },
      { name: "Jupyter Notebook", icon: <SiJupyter /> },
    ],
  },
  {
    title: "AI & ML Frameworks",
    description: "Hands-on experience with industry-standard libraries for AI and ML development.",
    icon: <GiArtificialIntelligence size={24} />,
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Keras", icon: <SiKeras /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Numpy", icon: <SiNumpy /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: "LangChain", icon: <SiLangchain className="glow-icon" /> },
    ],
  },
  {
    title: "Domains",
    description: "Working across modern, scalable, and impactful AI subfields.",
    icon: <FaRobot size={24} />,
    skills: [
      { name: "AI & ML" },
      { name: "Deep Learning" },
      { name: "Computer Vision" },
      { name: "Data Science" },
      { name: "Prompt Engineering", icon: <TbBrandOpenai className="pulse-icon" /> },
    ],
  },
  {
    title: "AI-Enhanced UI/UX Design",
    description: "Focused on building adaptive, smart interfaces powered by AI.",
    icon: <MdDesignServices size={24} />,
    skills: [
      { name: "AI-driven Interfaces" },
      { name: "Adaptive Design" },
      { name: "Smart Interaction" },
    ],
  },
  {
    title: "Data Analytics",
    description: "Skilled at extracting insights and patterns through exploratory and visual analysis.",
    icon: <FaChartBar size={24} />,
    skills: [
      { name: "Matplotlib", icon: <CustomIcon src={matplotlibIcon} alt="Matplotlib" /> },
      { name: "Seaborn", icon: <CustomIcon src={seabornIcon} alt="Seaborn" /> },
      { name: "Exploratory Data Analysis (EDA)" },
      { name: "Data Cleaning & Visualization" },
    ],
  },
];

const SkillsSection = () => {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-20">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "#000000" },
          particles: {
            number: { value: 50 },
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 130 },
            move: { enable: true, speed: 1.2 },
            size: { value: 2 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">My Technical Arsenal 🚀</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#0f0f0f] border border-gray-800 rounded-2xl shadow-xl p-6 transform hover:scale-105 transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-2xl text-cyan-400 mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sidx) => (
                  <div
                    key={sidx}
                    className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-cyan-900 transition-all duration-200"
                  >
                    {skill.icon && <span className="text-cyan-300">{skill.icon}</span>}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
