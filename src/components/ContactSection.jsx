import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const contactDetails = [
    {
      platform: "Email",
      icon: <FaEnvelope className="text-4xl text-rose-400 drop-shadow-glow" />,
      value: "glevinroche@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=glevinroche@gmail.com", // Opens Gmail
    },
    {
      platform: "GitHub",
      icon: <FaGithub className="text-4xl text-white drop-shadow-glow" />,
      value: "glevin7523",
      link: "https://github.com/glevin7523",
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin className="text-4xl text-sky-500 drop-shadow-glow" />,
      value: "Glevin Roche",
      link: "https://www.linkedin.com/in/glevin-roche-27b754249/",
    },
  ];

  return (
    <div
      ref={ref}
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white overflow-hidden relative"
    >
      {/* Subtle animated glow background */}
      <div className="absolute inset-0 blur-3xl opacity-20 pointer-events-none animate-pulse bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.4),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.4),transparent_60%)]"></div>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 drop-shadow-glow"
      >
        Let's Connect 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-300 text-lg mb-16"
      >
        Open to collaborations, opportunities, or just a good chat over code ☕
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto z-10 relative">
        {contactDetails.map((contact, index) => (
          <motion.a
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0px 0px 30px rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400 group-hover:animate-border-shimmer pointer-events-none" />
            <div className="flex items-center gap-5">
              {contact.icon}
              <div>
                <h3 className="text-xl font-semibold text-white">{contact.platform}</h3>
                <p className="text-gray-300">{contact.value}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
