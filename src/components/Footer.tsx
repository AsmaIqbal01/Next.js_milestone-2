import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="w-full p-4 text-center bg-gray-800 text-white">
            <p>&copy; 2024 Asma Iqbal. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
                
                <a href="https://www.linkedin.com/in/asma-iqbal000/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:text-blue-600 transition-colors" />
                </a>
                <a href="https://github.com/AsmaIqbal01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} className="text-xl hover:text-gray-500 transition-colors" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;