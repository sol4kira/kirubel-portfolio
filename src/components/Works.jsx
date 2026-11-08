import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  project_type,
  client,
  client_logo,
  description,
  tags,
  image,
  image_srcset,
  image_avif_srcset,
  image_width,
  image_height,
  live_demo_link,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col justify-between"
      >
        <div>
          <div className="relative w-full h-[230px]">
            {/* AVIF first; browsers fall back to the WebP img below. */}
            <picture className="block w-full h-full">
              <source
                type="image/avif"
                srcSet={image_avif_srcset}
                sizes="(min-width: 640px) 360px, 100vw"
              />
              <img
                src={image}
                srcSet={image_srcset}
                sizes="(min-width: 640px) 360px, 100vw"
                width={image_width}
                height={image_height}
                alt={name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-2xl"
              />
            </picture>

            <div className="absolute inset-0 flex justify-end gap-2 m-3 card-img_hover">
              {live_demo_link && (
                <a
                  href={live_demo_link}
                  target="_blank"
                  rel="noreferrer"
                  title="View Live Demo"
                  aria-label={`View live demo of ${name}`}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform shadow-md"
                >
                  {/* External-link icon */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="text-white"
                    aria-hidden="true"
                  >
                    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                  </svg>
                </a>
              )}
              <a
                href={source_code_link}
                target="_blank"
                rel="noreferrer"
                title="View Source Code on GitHub"
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform shadow-md"
              >
                <img
                  src={github}
                  alt="source code"
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                  className="w-1/2 h-1/2 object-contain"
                />
              </a>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>

            {project_type && (
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#915eff]">
                {project_type}
              </p>
            )}

            {client && (
              <div className="mt-2 flex items-center gap-2">
                <img
                  src={client_logo}
                  alt={`${client} logo`}
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-md object-contain"
                />
                <span className="text-secondary text-[13px]">
                  Client: {client}
                </span>
              </div>
            )}

            <p className="mt-2 text-secondary text-[14px] leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
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

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects showcase my skills and experiences through real-world examples of my work. Each project is briefly described with links to code repositories and live demos.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
