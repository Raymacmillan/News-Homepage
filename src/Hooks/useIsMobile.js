import { useEffect, useState} from "react";

export default function useIsMobile(bound = 768){
    const [windowSize, setWindowSize] = useState(window.innerWidth <= bound);

    useEffect(()=> {
    
        function handleResize(){
            setWindowSize(window.innerWidth <= bound);
        }

        window.addEventListener("resize", handleResize);

        return ()=> window.removeEventListener("resize", handleResize);
    }, [setWindowSize, bound])

    return windowSize;
}