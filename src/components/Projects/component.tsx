import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { useRef } from "react";
import PortfolioProyectImg from "@/assets/portfolio-picture.png";
import { Button } from "../ui/button";
import { DiReact } from "react-icons/di";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const Projects = () => {
    const icons = [DiReact, SiTypescript, SiTailwindcss]; 

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    return (
        <div id="projects" className="w-full h-screen bg-neutral-900">
            <h2 className="text-green-500 p-8 text-[3rem] font-semibold text-center">Projects</h2>
            <div className="w-[90%] h-[80%] m-auto bg-neutral-800 rounded flex justify-center items-center">
                <motion.div
                    ref={ref}
                    className="w-[25%]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Card className="bg-neutral-900">
                        <CardHeader>
                            <CardTitle className="text-[1.7rem] text-green-500">Personal Portfolio</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={PortfolioProyectImg} alt="Personal Portfolio" />
                            <div className="pt-10">
                                <span className="text-neutral-100 text-[1.1rem]">I used these skills in building this project:</span>
                                <div className="flex pt-5 pb-10 gap-7">
                                    {icons.map((Icon, index) => (
                                        <Icon key={index} className="text-[5rem] text-neutral-100" />
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="default" className="border w-[10rem] h-[4rem] text-[1.2rem]"><a href="www.google.com">Repository</a></Button>
                            <Button variant="outline" className="w-[10rem] h-[4rem] text-[1.2rem]">Go to page</Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;