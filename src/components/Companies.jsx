import { motion } from "framer-motion";

import { styles } from "../styles";
import { companies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CompanyCard = ({ index, company }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="flex max-w-2xl flex-col gap-4 rounded-2xl border border-white/5 bg-tertiary p-5 sm:flex-row sm:items-center sm:p-6"
  >
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-black-100 p-1.5">
      <img
        src={company.logo}
        alt={`${company.name} logo`}
        width={56}
        height={56}
        loading="lazy"
        decoding="async"
        className="h-full w-full rounded-lg object-contain"
      />
    </div>

    <div className="min-w-0 flex-1">
      <h3 className="text-[20px] font-bold text-white">{company.name}</h3>
      <p className="text-[14px] text-secondary">{company.role}</p>
    </div>

    <p className="whitespace-nowrap text-[13px] font-medium text-[#915eff]">
      {company.date}
    </p>
  </motion.div>
);

const Companies = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Client work</p>
        <h2 className={styles.sectionHeadText}>Companies I've worked with</h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-5">
        {companies.map((company, index) => (
          <CompanyCard key={company.name} index={index} company={company} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Companies, "companies");
