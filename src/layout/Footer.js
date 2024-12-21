"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, PinIcon, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/term-usage", label: "Terms of Use" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ];

  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Youtube, label: "YouTube" },
    { href: "#", icon: PinIcon, label: "Pinterest" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 9557649980" },
    { icon: Mail, text: "Sales.team@lucerno.co.in" },
    { icon: MapPin, text: "E-96, Shashi Garden, Mayur Vihar, Phase-1, Delhi (India) - 110091." }
  ];

  return (
    <footer className="bg-gray-950 text-gray-200 py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Icon.png"
                width={48}
                height={48}
                alt="Icon Logo"
                className="w-12 h-12"
              />
              <Image
                src="/assets/white-logo.png"
                width={160}
                height={40}
                alt="White Logo"
                className="w-40 h-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Crafting sustainable and elegant solutions for your everyday needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="grid grid-cols-1 gap-2">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-400">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-gray-400">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            {/* <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm bg-gray-900 border border-gray-800 rounded-md text-white focus:outline-none focus:border-gray-600"
              />
              <button className="px-4 py-2 text-sm bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-200">
                Subscribe
              </button>
            </div> */}
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          {/* Legal Links */}
          <nav className="flex gap-4 text-sm justify-center flex-wrap">
            {navLinks.slice(4).map((link, index) => (
              <div key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
                {index < navLinks.slice(4).length - 1 && (
                  <span className="ml-4 text-gray-700">|</span>
                )}
              </div>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Simply Natural. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

