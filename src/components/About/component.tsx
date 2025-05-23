import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import myPicture from "@/assets/Foto_cv.jpg"; // Ajustá según tu estructura
import { Card, CardContent } from "@/components/ui/card"; // Si usás ShadCN
import SkillsCarrusel from "../SkillsCarrusel";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  // Render
  return (
    <div id="about" className="w-full h-screen bg-neutral-900 flex flex-col items-center">
        <h2 className="text-green-500 p-8 text-[1.5rem] md:text-[2rem] font-semibold">About Me</h2>

        <motion.div
            ref={ref}
            className="flex flex-1 items-center justify-center w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 w-[60%] items-center justify-center">
                <img
                    src={myPicture}
                    alt="Mi picture"
                    className="w-20 h-20 md:w-35 md:h-35 lg:w-50 lg:h-50 object-cover rounded-full shadow-lg"
                />
                <div className="max-w-[100%]">
                    <Card className="bg-neutral-900">
                        <CardContent>
                        <p className="text-[0.53rem] md:text-[0.7rem] lg:text-[0.9rem] text-neutral-100">
                            I am an experienced Full-Stack Developer skilled in building robust solutions using .Net, Angular or React.js, and various database engines. I am very passionate about software development, which drives each of my projects. I enjoy teamwork, contributing my knowledge to generate innovative ideas. I am always looking to learn new skills and master emerging technologies to tackle technological challenges. My goal is to continue growing as a Full-Stack Developer, bringing my enthusiasm, collaboration, and openness to innovation to every project.
                        </p>
                        </CardContent>
                    </Card>
                    <div className="flex items-center gap-4">
                        <span className="text-[1rem] md:text-[1.5rem] text-green-500 font-semibold">Skills:</span>
                        <SkillsCarrusel />
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  );
};

export default About;