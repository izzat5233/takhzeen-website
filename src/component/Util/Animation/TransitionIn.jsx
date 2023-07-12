import {useEffect, useRef} from "react";
import "./animation.css";

export default function TransitionIn({animation, className, timeout, children}) {
    const ref = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            if (ref.current) {
                ref.current.classList.add(animation);
            }
        }, timeout);
    }, []);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

export function FadeIn({timeout, children}) {
    return (
        <TransitionIn animation="fade-in" timeout={timeout} className="opacity-0">
            {children}
        </TransitionIn>
    );
}

export function ExpandedBackgroundElement({timeout, className}) {
    return (
        <TransitionIn animation="expand-x" timeout={timeout}
                      className={"absolute -z-10 " + className}>
        </TransitionIn>
    );
}
