import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    // Destructure pathname from useLocation to get the current route
    const { pathname } = useLocation();

    // useEffect runs when pathname changes, triggering scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to the top of the page
    }, [pathname]);  // Dependency on pathname ensures it runs every time the route changes

    return null;  // This component doesn't render anything
};

export default ScrollToTop;