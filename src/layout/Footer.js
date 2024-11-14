
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { FiShare2, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/terms-of-use', label: 'Terms of Use' },
    { href: '/terms-of-use', label: 'Terms of Sale' },
    { href: '/terms-of-use', label: 'Cookies Policy' },
    { href: '/terms-of-use', label: 'Privacy Policy' },
    { href: '/careers', label: 'Careers' },
  ]

  const socialLinks = [
    { href: 'https://facebook.com/caesarstone', icon: FaFacebook, label: 'Facebook' },
    { href: 'https://instagram.com/caesarstone', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://twitter.com/caesarstone', icon: FaTwitter, label: 'Twitter' },
    { href: 'https://youtube.com/caesarstone', icon: FaYoutube, label: 'YouTube' },
    { href: 'https://pinterest.com/caesarstone', icon: FaPinterest, label: 'Pinterest' },
    { href: 'https://linkedin.com/company/caesarstone', icon: FaLinkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-700 text-white py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6 text-sm">
          {navLinks.map((link, index) => (
            <div key={link.href} className="flex items-center">
              <Link 
                href={link.href}
                className="hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
              {index < navLinks.length - 1 && (
                <span className="ml-4 text-gray-400">|</span>
              )}
            </div>
          ))}
        </nav>

        {/* Social Media and Actions */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          <button className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <FiShare2 className="w-5 h-5" />
            <span>Share</span>
          </button>

          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>

        {/* Add to Favorites */}
        <button 
          className="flex items-center gap-2 mx-auto hover:text-gray-300 transition-colors mb-6"
        >
          <FiHeart className="w-5 h-5" />
          <span>Add To Favorites</span>
        </button>

        {/* Company Description */}
        <div className="text-center text-sm text-gray-300 space-y-2 max-w-4xl mx-auto">
          <p>
            Caesarstone is a manufacturer of quality quartz surfaces for a range of applications such as kitchen countertops, 
            bathroom vanities and counters, and custom solutions for home and commercial interiors.
          </p>
          <p>
            Available worldwide, Caesarstone is the professional choice for interior design ideas and beautiful, 
            durable quartz surfaces.
          </p>
        </div>
      </div>
    </footer>
  )
}