import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";

import { github,playicon } from "../assets"; 
import { SectionWrapper } from "../hoc";
import { projects } from "../constants"; // Imports the projects array (with your added live_demo_link)
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link, // <-- MODIFICATION: Accept the new prop
}) => {
  // --- TEMPORARY Placeholder Icon (Remove if you import a real one) ---
  // If you don't have an icon yet, you can use a text character temporarily
  // or find an SVG icon online to paste here.
  // For now, let's assume you will import 'liveDemoIcon'
  const liveDemoIcon = playicon; // TEMPORARY: Using github icon as placeholder, REPLACE THIS
  // --- END TEMPORARY Placeholder ---


  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          {/* Container for overlay icons */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {/* GitHub Icon (Existing) */}
            {source_code_link && ( // Good practice to check if link exists
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                title="View Source Code" // Added title for accessibility
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}

            {/* --- MODIFICATION: Live Demo Link Icon --- */}
            {/* Conditionally render this only if live_demo_link exists */}
            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                // Added margin left (ml-2) for spacing from github icon
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2'
                title="View Live Demo" // Added title for accessibility
              >
                <img
                  // --- Make sure 'liveDemoIcon' is imported from your assets ---
                  src={playicon} // Replace with your actual icon variable
                  alt='live demo'
                  className='w-1/2 h-1/2 object-contain' // Adjust styling if needed for the new icon
                />
              </div>
            )}
            {/* --- END MODIFICATION --- */}

          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// No changes needed in the Works component itself
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          // MODIFICATION: Updated description slightly to mention live demos
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories {/** MODIFICATION: Removed trailing period */}
          {/** MODIFICATION: Added mention of live demos */} and live demos where available. It reflects my
          ability to work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
        
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, ""); 