import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGit, FaNode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Skills.css'

const Skills = () => {
  const skillItems = [
    { icon: <FaHtml5 size={50} color="#E34F26" />, name: 'HTML5' },
    { icon: <FaCss3Alt size={50} color="#1572B6" />, name: 'CSS3' },
    { icon: <FaJsSquare size={50} color="#F7DF1E" />, name: 'JavaScript' },
    { icon: <FaReact size={50} color="#61DAFB" />, name: 'React' },
    { icon: <FaGit size={50} color="#F05032" />, name: 'Git' },
    { icon: <FaNode size={50} color="#339933" />, name: 'Node.js' }
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <motion.div
        className="skills-list"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {skillItems.map((skill, index) => (
          <motion.div
            key={index}
            className="skill"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {skill.icon}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
