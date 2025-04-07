import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const certificationsData = [
  {
    title: "Comedkares Internship Certificate",
    image: "/certifications/comedkares certificate.png",
    category: "Internship",
    description:
      "Successfully completed internship under Comedkares, leading impactful tech-driven projects like a smart rainwater harvesting system (30% cost reduction) and an IoT-based smart water ATM for secure, pay-per-use water access.",
  },
  {
    title: "NPTEL - Python For Data Science",
    image: "/certifications/NPTEL Python for Data Science.png",
    category: "NPTEL",
    description:
      "Completed an 4-week course covering Python basics, NumPy, Pandas, data visualization, and key data analysis techniques for real-world Data Science applications.",
  },
  {
    title: "NPTEL - Data Mining",
    image: "/certifications/NPTEL Data Mining.png",
    category: "NPTEL",
    description:
      "Gained practical knowledge of data mining techniques including classification, clustering, and association rules through NPTEL's rigorous academic course.",
  },
  {
    title: "NPTEL - Problem Solving through Programming in C",
    image: "/certifications/NPTEL Problem Solving Through Programming In C.png",
    category: "NPTEL",
    description:
      "Strengthened foundational programming skills in C by solving algorithmic problems and mastering control structures, arrays, and functions.",
  },
  {
    title: "NPTEL - Cloud Computing",
    image: "/certifications/NPTEL Cloud Computing.png",
    category: "NPTEL",
    description:
      "Developed in-depth understanding of cloud architectures, services (IaaS, PaaS, SaaS), and deployment models via NPTEL's academic course.",
  },
  {
    title: "Power BI - be10x",
    image: "/certifications/Power BI be10x Certificate.png",
    category: "Be10x",
    description:
      "Learned to build interactive dashboards and perform powerful data visualizations using Microsoft Power BI, focusing on real-time analytics.",
  },
  {
    title: "Be10x Certificate",
    image: "/certifications/Be10x Certificate.png",
    category: "Be10x",
    description:
      "Attended Be10x workshop focusing on upskilling in modern tech tools and AI-driven decision making for future-ready career development.",
  },
  {
    title: "Salesforce Virtual Internship",
    image: "/certifications/salesforce_certificate.png",
    category: "Internship",
    description:
      "Acquired hands-on skills in Salesforce CRM, including cloud navigation, data modeling, and automation through Trailhead modules.",
  },
  {
    title: "TCS Data Visualization Virtual Internship",
    image: "/certifications/TATA_CONSULTANCY_SERVICES_Data_Visualisation_Virtual_Internship_Certificate.png",
    category: "Internship",
    description:
      "Completed TCS iON Data Visualization Virtual Internship, using Excel, Tableau, and Python to clean, analyze, and visualize datasets for actionable insights.",
  },
  {
    title: "Accenture Data Analytics & Visualization Virtual Internship",
    image: "/certifications/Accenture Data Analytics and Visualization Virtual Internship Certificate.png",
    category: "Internship",
    description:
      "Applied data analytics life cycle using tools like Power BI and Excel to solve real-world client problems and communicate insights visually at Accenture.",
  },
  {
    title: "Deloitte Data Analytics Virtual Internship",
    image: "/certifications/Deloitte Data Analytics Virtual Internship Certificate.png",
    category: "Internship",
    description:
      "Completed Deloitte's Virtual Internship analyzing client data with Excel and Tableau to identify growth opportunities and automate business insights.",
  },
];

const categories = ["All", "NPTEL", "Internship", "Be10x"];

const CertificationCard = ({ cert, onClick }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      whileHover={{
        scale: 1.05,
        rotate: 1,
        transition: { duration: 0.3 },
      }}
      className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 cursor-pointer"
      onClick={() => onClick(cert)}
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-56 object-contain bg-black/10 p-4"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-white mb-2">{cert.title}</h2>
        <p className="text-sm text-gray-300">{cert.description}</p>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalCert, setModalCert] = useState(null);

  const filteredCerts =
    selectedCategory === "All"
      ? certificationsData
      : certificationsData.filter((cert) => cert.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 py-14 relative z-0">
      <h1 className="text-5xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
        Certifications
      </h1>
      <p className="text-center text-gray-300 mb-10 text-lg">
        A glimpse into the certifications I've earned from reputed platforms and internships.
      </p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md ${
              selectedCategory === category
                ? "bg-blue-600 text-white scale-105"
                : "bg-white/10 hover:bg-white/20 text-gray-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4"
      >
        <AnimatePresence>
          {filteredCerts.map((cert, index) => (
            <CertificationCard key={index} cert={cert} onClick={setModalCert} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalCert && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalCert(null)}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl max-w-2xl w-full shadow-xl border border-white/20 text-white relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalCert(null)}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                &times;
              </button>
              <img
                src={modalCert.image}
                alt={modalCert.title}
                className="w-full h-64 object-contain bg-black/20 rounded mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{modalCert.title}</h2>
              <p className="text-gray-300">{modalCert.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certifications;
