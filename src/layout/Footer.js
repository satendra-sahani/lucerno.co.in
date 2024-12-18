import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { FiShare2, FiHeart } from "react-icons/fi";

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/terms-of-use", label: "Terms of Use" },
    { href: "/terms-of-use", label: "Terms of Sale" },
    { href: "/terms-of-use", label: "Cookies Policy" },
    { href: "/terms-of-use", label: "Privacy Policy" },
    // { href: '/careers', label: 'Careers' },
  ];

  const socialLinks = [
    { href: "#", icon: FaFacebook, label: "Facebook" },
    { href: "#", icon: FaInstagram, label: "Instagram" },
    { href: "#", icon: FaTwitter, label: "Twitter" },
    { href: "#", icon: FaYoutube, label: "YouTube" },
    { href: "#", icon: FaPinterest, label: "Pinterest" },
    { href: "#", icon: FaLinkedin, label: "LinkedIn" },
  ];

  return (
    <footer
      className="bg-gray-700 text-white py-8 px-4 md:px-6"
      style={{ background: "black" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row  flex-wrap justify-center items-center gap-6">
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/Icon.png" className="w-12 h-auto" alt="Icon Logo" />
            <img
              src="/assets/white-logo.png"
              className="w-40 h-auto"
              alt="White Logo"
            />
          </Link>
        </div>
        <nav className="flex gap-4 text-sm justify-center flex-wrap">
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
      </div>
      <div className="flex justify-center items-center gap-4">
        {/* <button className="flex items-center gap-2 hover:text-gray-300 transition-colors">
          <FiShare2 className="w-5 h-5" />
          <span>Share</span>
        </button> */}
        <div className="flex  gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <social.icon className="w-3 h-3" />
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center text-sm text-gray-300 space-y-2 max-w-4xl mx-auto mt-6">
      <p>
      © 2024 Simply Natural. All rights reserved.
        </p>
        {/* <p>
          Lucerno is a manufacturer of quality quartz surfaces for a range of applications such as kitchen countertops,
          bathroom vanities and counters, and custom solutions for home and commercial interiors.
        </p>
        <p>
          Available worldwide, Lucerno is the professional choice for interior design ideas and beautiful,
          durable quartz surfaces.
        </p> */}
      </div>
    </footer>
  );
}
