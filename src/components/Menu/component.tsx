import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { useEffect, useState } from "react";

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
        className={`fixed top-0 w-full pt-4 z-50 transition-transform duration-500 ${
            showMenu ? "translate-y-0" : "-translate-y-full"
        } flex justify-center`}
        >
            <Menubar className="flex justify-center w-110 bg-neutral-900/95 rounded shadow font-semibold text-neutral-100 text-[1.3rem]">
                <MenubarMenu>
                    <MenubarTrigger asChild>
                        <a href="#about" className="cursor-pointer text-weigth-500 px-4 py-2 hover:bg-neutral-800 rounded">
                            About me
                        </a>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger asChild>
                        <a href="#projects" className="cursor-pointer px-4 py-2 hover:bg-neutral-800 rounded">
                            Projects
                        </a>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger asChild>
                        <a href="#contact" className="cursor-pointer px-4 py-2 hover:bg-neutral-800 rounded">
                            Contact
                        </a>
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </div>
    );
};

export default Menu;