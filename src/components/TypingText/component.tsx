import { useEffect, useState } from "react";
import './styles.css';

interface TypingTextProps {
    text: string;
    speed?: number;
    deleteSpeed?: number;
    delay?: number;
  }
  
const TypingText = ({
    text,
    speed = 100,
    deleteSpeed = 50,
    delay = 1000
  }: TypingTextProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;
      
        if (!isDeleting && index < text.length) {
          timer = setTimeout(() => {
            setDisplayedText(text.slice(0, index + 1));
            setIndex(index + 1);
          }, speed);
        } else if (isDeleting && index > 0) {
          timer = setTimeout(() => {
            setDisplayedText(text.slice(0, index - 1));
            setIndex(index - 1);
          }, deleteSpeed);
        } else if (index === text.length && !isDeleting) {
          timer = setTimeout(() => setIsDeleting(true), delay);
        } else if (index === 0 && isDeleting) {
          timer = setTimeout(() => setIsDeleting(false), delay);
        }
      
        return () => clearTimeout(timer);
      }, [text, speed, deleteSpeed, delay, index, isDeleting]);

    return (
        <div className="">
            <span style={{ whiteSpace: 'pre' }}>
            {displayedText}
            <span className="cursor">|</span>
            </span>
        </div>
    );
};

export default TypingText;