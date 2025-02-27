import useWindowDimensions from "@/helper/hooks/useWindowDimensions"
import PlaceholderLogo from '@/assets/logos/placeholder_logo.png';
import { NAVIGATION_LINKS } from "../Constants";
import { Link, useLocation } from "react-router-dom";

export default function NavigationBar() {
    const { isMobile } = useWindowDimensions();
    const location = useLocation();

    return (
        <nav className="bg-white fixed top-0 left-0 right-0 w-full z-10">
            <div className="container mx-auto px-4 py-3">
                {/* Single row layout for both desktop and mobile */}
                <div className="flex items-center">
                    {/* Logo on the left */}
                    <div className="flex-shrink-0 mr-4">
                        <img src={PlaceholderLogo} alt="Logo" className="h-10" />
                    </div>
                        
                    {/* Links in the center */}
                    <div className="flex-grow flex justify-center">
                        <ul className={`flex ${isMobile ? 'space-x-3 text-xs' : 'space-x-8 text-sm'}`}>
                        {NAVIGATION_LINKS.map((navigationLink, index) => {
                            const isActive = location.pathname === navigationLink.path;
                            return (
                                <li key={index}>
                                    <p 
                                    className={`${isActive ? ' text-gray-800' : 'text-gray-700'} font-medium transition-all duration-200 uppercase ${isMobile ? '' : 'tracking-wide'} py-2`}
                                    >
                                        <Link 
                                        to={navigationLink.path}
                                        >
                                            {navigationLink.label}
                                        </Link>
                                    </p>
                                    
                                </li>
                            );
                        })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}