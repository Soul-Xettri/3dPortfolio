import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

interface ServiceCardProps {
  title: string;
  icon: string;
  index: number;
}

const ServiceCard = ({ title, icon, index }: ServiceCardProps) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn({
          direction: "right",
          type: "spring",
          delay: 0.5 * index,
          duration: 0.75,
        })}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant({ delay: 0.1 })}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview</p>
      </motion.div>

      <motion.p
        variants={fadeIn({ direction: "", type: "", delay: 0.1, duration: 1 })}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a full-stack developer with a passion for building beautiful and
        functional websites. I have experience working with both front-end and
        back-end technologies, and I'm always looking to learn new things. I'm
        currently looking for new opportunities, so feel free to reach out if
        you think I'd be a good fit for your team.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper({ Component: About, idName: "about" });
