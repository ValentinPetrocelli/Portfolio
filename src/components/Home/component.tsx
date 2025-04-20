import { useEffect, useRef } from "react";
import Menu from "../Menu";
import TypingText from "../TypingText";

import backgroundVideo from "/media/background_animation.mp4";

const Home = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
        videoRef.current.playbackRate = 0.7;
        }
    }, []);

    return (
        <div className="flex justify-center w-full h-screen">
            <Menu />

            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
            >
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            
            <div className="absolute top-[45%] bg-neutral-900/95 text-neutral-100 w-135 rounded">
                <div className="p-8 text-[3rem]">
                    <span>Valentin Petrocelli:</span>
                    <div className="text-green-500">
                        <TypingText text={"Full Stack Developer"} speed={100} deleteSpeed={70} delay={30} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;