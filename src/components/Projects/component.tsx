import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import PortfolioProyectImg from "@/assets/portfolio-picture.png";
import { Button } from "../ui/button";
import { DiReact } from "react-icons/di";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const projects = [
    {
        title: "Portfolio Personal",
        image: PortfolioProyectImg,
        icons: [DiReact, SiTypescript, SiTailwindcss],
        repoUrl: "https://github.com/ValentinPetrocelli/Portfolio",
        pageUrl: "https://miportfolio.com",
    }
];

const Projects = () => {
  return  (
    <div id="projects" className="w-full h-screen bg-neutral-900 flex flex-col items-center">
      <h2 className="text-green-500 p-8 text-[1.5rem] md:text-[2rem] font-semibold">Projects</h2>

      <div className="flex justify-center items-center w-[90%] h-[75%] bg-neutral-800 rounded">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center"
        >
          {projects.map((project, index) => (
            <Card key={index} className="bg-neutral-900 w-[16rem] pt-5 pb-5 flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-[1rem] text-green-500">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={project.image} alt={project.title} className="w-full" />
                <div className="pt-5">
                  <span className="text-neutral-100 text-[0.6rem] lg:text-[0.7rem]">
                    I used these skills in building this project:
                  </span>
                  <div className="flex pt-4 pb-4 gap-5 flex-wrap">
                    {project.icons.map((Icon, i) => (
                      <Icon key={i} className="text-[2.3rem] text-neutral-100" />
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex p-0 pl-2 pr-2 justify-between gap-2">
                <Button variant="default" className="border w-[7rem] h-[2rem] text-[0.6rem]">
                  <a href={project.repoUrl} target="_blank">
                    Repository
                  </a>
                </Button>
                <Button variant="outline" className="w-[7rem] h-[2rem] text-[0.6rem]">
                  <a href={project.pageUrl} target="_blank">
                    Go to page
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;