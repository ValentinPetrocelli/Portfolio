import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Projects from "@/components/Projects";

export const MainPage = () => {
    // Render
    return (
        <>
            <Home />
            <About />
            {/* <Projects />
            <Contact /> */}
        </>
    );
};

export default MainPage;