import {motion} from "framer-motion";
import {ImSpinner8} from "react-icons/im";

/**
 * A loading spinner component used to indicate 'Loading' state.
 *
 * @param className - CSS classes of the component like text color
 * @returns {JSX.Element} - A react component
 */
export default function LoadingSpinner({className}) {
    return (
        <motion.div
            className={`mx-auto my-auto p-4 flex justify-center items-center text-6xl ${className}`}
            animate={{rotate: 360}}
            transition={{duration: 1.5, repeat: Infinity, ease: "linear"}}
        >
            <ImSpinner8/>
        </motion.div>
    );
}