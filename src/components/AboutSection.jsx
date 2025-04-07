import { motion } from "framer-motion";

const traits = [
  { title: "Curious Innovator", description: "Always eager to explore the newest trends in AI and tech." },
  { title: "Efficient Problem Solver", description: "Love creating optimized, real-world solutions." },
  { title: "Goal-Driven", description: "Focused on making an impact in tech and public sectors." },
];

const softSkills = [
  { title: "Problem Solving", description: "Enjoy breaking down complex challenges into efficient solutions." },
  { title: "Fast Learner", description: "Quickly adapt to new technologies and concepts." },
  { title: "Innovative Thinking", description: "Bring creativity and out-of-the-box ideas to the table." },
  { title: "Team Collaboration", description: "Work well in diverse teams, valuing shared growth and communication." },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2 
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Introduction and Image */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <motion.img
            src="/pic.png"
            alt="Glevin Roche"
            className="w-52 h-52 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            className="max-w-xl text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-4">
              Hi, I'm <span className="text-blue-400 font-semibold">Glevin Roche</span>, a passionate learner and builder
              diving deep into the world of Artificial Intelligence and Machine Learning.
            </p>
            <p className="text-lg mb-4">
              My mission is to leverage technology to create meaningful impact — whether it’s through solving real-world
              problems or contributing to innovations in the public sector.
            </p>
            <p className="text-lg">
              I've explored innovation through experiences like the <span className="text-blue-300">Salesforce Virtual Internship</span> and
              Comedkares’ <span className="text-blue-300">IDT IoT-based Internship</span>, which have fueled my enthusiasm for smart systems
              and real-world problem solving.
            </p>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <div className="mt-16">
          <motion.h3 
            className="text-2xl font-bold text-center mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Education 🎓
          </motion.h3>

          <div className="space-y-6">
            <motion.div 
              className="border-l-4 border-blue-500 pl-4 py-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-xl font-semibold">Little Rock Indian School, Udupi (CBSE)</h4>
              <p className="text-gray-300">Grades 1 to 12 • 2009 - 2021</p>
            </motion.div>

            <motion.div 
              className="border-l-4 border-blue-500 pl-4 py-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold">Alva's Institute of Engineering & Technology, Mangalore</h4>
              <p className="text-gray-300">B.E in Artificial Intelligence & Machine Learning • 2021 - 2025</p>
            </motion.div>
          </div>
        </div>

        {/* Traits Cards */}
        <div className="mt-16">
          <motion.h3 
            className="text-2xl font-bold text-center mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            My Values & Traits 🌟
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {traits.map((trait, i) => (
              <motion.div
                key={i}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-gray-600 text-center shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h4 className="text-xl font-bold text-blue-300 mb-2">{trait.title}</h4>
                <p className="text-gray-200">{trait.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mt-16">
          <motion.h3 
            className="text-2xl font-bold text-center mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Soft Skills & Traits 💡
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, i) => (
              <motion.div
                key={i}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-gray-600 text-center shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h4 className="text-lg font-semibold text-blue-200 mb-2">{skill.title}</h4>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
