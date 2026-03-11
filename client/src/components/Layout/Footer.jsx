import { Link } from 'react-router-dom';
import { 
  FiFacebook, FiTwitter, FiInstagram, FiYoutube, 
  FiMessageCircle, FiShield, FiAward, FiHeart,
  FiHelpCircle, FiMail, FiMapPin, FiPhone, FiGithub,
  FiLinkedin, FiGlobe, FiLock, FiCheckCircle
} from 'react-icons/fi';
import { GiGamepad } from 'react-icons/gi';
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  const footerLinks = {
    'Gaming': [
      { label: 'Live Casino', path: '/live-casino' },
      { label: 'Slots', path: '/slots' },
      { label: 'Table Games', path: '/table-games' },
      { label: 'Tournaments', path: '/tournaments' },
      { label: 'Jackpots', path: '/jackpots' },
    ],
    'Providers': [
      { label: 'NetEnt', path: '/providers/netent' },
      { label: 'Microgaming', path: '/providers/microgaming' },
      { label: 'Play\'n GO', path: '/providers/playngo' },
      { label: 'Evolution', path: '/providers/evolution' },
      { label: 'Pragmatic Play', path: '/providers/pragmatic' },
    ],
  };

  const paymentMethods = [
    { name: 'ZillPay', logo: 'ZP', color: 'text-green-600' },
    { name: 'UPI', logo: 'UPI', color: 'text-orange-500' },
    { name: 'USDT', logo: 'USDT', color: 'text-yellow-500' },
  ];

  const certifications = [
    { icon: <FiShield />, text: 'SSL Secured', desc: '256-bit Encryption' },
    { icon: <FiLock />, text: 'Licensed', desc: 'MGA, UKGC, Curacao' },
    { icon: <FiCheckCircle />, text: 'Certified', desc: 'RNG Tested & Verified' },
    { icon: <FiAward />, text: 'Awarded', desc: 'Best Gaming Platform 2024' },
  ];

  return (
    <footer className={`
      transition-colors duration-300 border-t relative
      ${theme === 'dark' 
        ? 'bg-gradient-to-b from-[#0d1117] to-[#0a0e14] border-gray-800/50' 
        : 'bg-gradient-to-b from-white to-gray-50 border-gray-200/50'
      }
      mt-auto
    `}>

      {/* Bottom Footer */}
      <div className={`
        border-t py-6 ${theme === 'dark' ? 'border-gray-800/50' : 'border-gray-200/50'}
        ${theme === 'dark' ? 'bg-[#0a0e14]' : 'bg-gray-50'}
      `}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            {/* Payment Methods */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full md:w-auto">
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Accepted Payments:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {paymentMethods.map((method) => (
                  <span key={method.name} className={`
                    flex items-center justify-center w-10 h-6 rounded text-xs font-bold
                    ${method.color}
                    ${theme === 'dark' 
                      ? 'bg-gray-800/50 border border-gray-700' 
                      : 'bg-white border border-gray-200'
                    }
                    shadow-sm
                  `}>
                    {method.logo}
                  </span>
                ))}
              </div>
            </div>
            {/* Copyright & Legal */}
            <div className="text-center md:text-right flex-1 space-y-1">
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                © {new Date().getFullYear()} GameVerse. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 text-xs">
                <Link 
                  to="/terms" 
                  className={`${theme === 'dark' ? 'text-gray-500 hover:text-gray-400' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Terms of Service
                </Link>
                <Link 
                  to="/privacy" 
                  className={`${theme === 'dark' ? 'text-gray-500 hover:text-gray-400' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/cookies" 
                  className={`${theme === 'dark' ? 'text-gray-500 hover:text-gray-400' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Cookie Policy
                </Link>
                <Link 
                  to="/responsible" 
                  className={`${theme === 'dark' ? 'text-gray-500 hover:text-gray-400' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Responsible Gaming
                </Link>
              </div>
              <p className="text-xs mt-2 opacity-75 text-gray-500 dark:text-gray-400">
                18+ only. Gambling can be addictive. Please play responsibly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;