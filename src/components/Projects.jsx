import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered YouTube Video Summarizer & Q&A",
    date: "Feb 2025",
    description:
      "Built an advanced AI system using Gemini 1.5 Pro, LangChain, FAISS, and Whisper AI to transcribe, summarize, and answer questions on YouTube videos in multiple languages. The solution enabled fast, scalable video understanding through semantic search and NLP, all within an intuitive, responsive Streamlit interface that delivers real-time interaction and insight extraction.",
  },
  {
    title: "Credit Card Fraud Detection using Facial Recognition",
    date: "May – July 2024",
    description:
      "Developed a hybrid fraud detection system combining facial recognition (via OpenCV, Haarcascade, and LBPH) with machine learning, achieving 85% real-time accuracy and reducing fraud cases by 60%. The solution featured automatic card blocking, email alerts for failed attempts, and was built to scale securely for enterprise and government transactions.",
  },
  {
    title: "Multi-Purpose AI Toolkit",
    date: "Nov 2024 – Jan 2025",
    description:
      "Created a full-fledged AI productivity suite featuring tools like AI image generation, speech-to-text, text-to-speech, language translation, and a document-aware chatbot. With additional utilities like QR code generators and typing tests, the platform offers a unified, real-time solution designed to boost productivity for students, educators, and professionals, all within a seamless and scalable architecture.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-5 bg-gradient-to-br from-black via-[#0f0f1f] to-[#1a1a2e] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-16 tracking-wide neon-text"
      >
        Projects 🚀
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="group relative rounded-3xl p-6 backdrop-blur-lg bg-white/5 border border-white/10 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_30px_#00ffff33] cursor-pointer overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-glow" />

            <h3 className="text-2xl font-semibold mb-2 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mb-3">{project.date}</p>
            <p className="text-gray-200 leading-relaxed">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
