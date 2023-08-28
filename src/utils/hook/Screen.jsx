import {useState, useEffect} from 'react';

/**
 * useIsWideScreen is a custom hook that returns a boolean value indicating whether the screen width is greater than
 * a specified value. It listens for window resize events and updates the returned value accordingly.
 *
 * @param {number} width - The value for screen width. Default value is '1024' which is 'lg' in tailwind terms.
 * @returns {boolean} - A boolean value indicating whether the screen width is greater than a given width.
 */
function useIsWideScreen(width = 1024) {
    const [isScreenWide, setIsScreenWide] = useState(window.innerWidth > width);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenWide(window.innerWidth > width);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width]);

    return isScreenWide;
}

export default useIsWideScreen;
