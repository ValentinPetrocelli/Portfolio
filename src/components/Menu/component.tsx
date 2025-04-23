import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { useEffect, useState } from "react";
import { Link } from 'react-scroll';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const currentY = window.scrollY;

        if (currentY > lastScrollY && currentY > 50) {
            setShowMenu(false); // Scroll hacia abajo
        } else {
            setShowMenu(true); // Scroll hacia arriba
        }

        setLastScrollY(currentY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    
    // Render
    return (
        <div
        className={`fixed w-[19rem] lg:w-[25rem] top-0 pt-4 z-50 transition-transform duration-500 ${
            showMenu ? "translate-y-0" : "-translate-y-full"
        }`}
        >
            <Menubar className="flex justify-center bg-neutral-900/95 rounded shadow font-semibold text-neutral-100 text-[0.8rem] lg:text-[1rem]">
                <MenubarMenu>
                    <MenubarTrigger asChild>
                        <Link to="about" smooth={true} duration={300} className="cursor-pointer text-weigth-500 px-4 py-2 hover:bg-neutral-800 rounded">
                            About me
                        </Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger asChild>
                        <Link to="projects" smooth={true} duration={300} className="cursor-pointer px-4 py-2 hover:bg-neutral-800 rounded">
                            Projects
                        </Link>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger asChild>
                        <Link to="contact" smooth={true} duration={300} className="cursor-pointer px-4 py-2 hover:bg-neutral-800 rounded">
                            Contact
                        </Link>
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </div>
    );
};

export default Menu;