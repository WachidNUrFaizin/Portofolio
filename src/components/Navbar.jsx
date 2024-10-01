import logo from '../assets/logo.png';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={50} height={33} alt="logo"/>
                </a>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="http://www.linkedin.com/in/your-linkedin"
                   target="_blank"
                    rel="noopener noreferrer"
                   aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="http://www.github.com/your-github"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="http://www.instagram.com/your-instagram"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Instagram">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;