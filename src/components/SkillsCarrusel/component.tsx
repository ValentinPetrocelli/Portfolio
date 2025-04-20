import { motion } from "framer-motion";
import { DiReact, DiGit, DiCss3, DiHtml5, DiAngularSimple, DiGithubBadge, DiPython, DiDjango } from "react-icons/di";
import { SiOracle, SiTailwindcss, SiMysql, SiPostgresql, SiJavascript, SiTypescript, SiBackblaze, SiGooglebigquery } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";

const SkillsCarrusel = () => {
    const icons = [
        SiGooglebigquery,
        SiBackblaze,
        SiPostgresql,
        SiMysql,
        SiOracle,
        SiTailwindcss,
        DiReact, 
        SiJavascript, 
        DiGit, 
        DiCss3, 
        DiHtml5,
        SiTypescript,
        DiAngularSimple,
        DiGithubBadge,
        DiDjango,
        DiPython,
        AiOutlineDotNet
    ];

    // Render
    return (
        <div className="overflow-hidden bg-neutral-900 py-4">
            <motion.div
                className="flex gap-6 text-white"
                animate={{
                    x: ["-100%", "100%"]
                }}
                transition={{
                    x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                    }
                }}
                >
                {icons.map((Icon, index) => (
                    <Icon key={index} className="text-[5rem]" />
                ))}
            </motion.div>
        </div>
    );
};

export default SkillsCarrusel;