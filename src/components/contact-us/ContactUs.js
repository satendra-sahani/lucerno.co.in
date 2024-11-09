'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

export default function ContactUs() {
    const router = useRouter()
    const [isHovered, setIsHovered] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)
    const images = [
        "/assets/ceramic-tiles/ceramic-tiles1.jpg",
        "/assets/tableware/tableware1.jpg",
        "/assets/home-decor/home2.jpg"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length)
        }, 2000) // Change every 2 seconds

        return () => clearInterval(interval)
    }, [images.length])

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push('/thank-you')  // Redirect to thank-you page
    }

    return (
        <div className="relative min-h-screen w-full flex items-center overflow-hidden">
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: index === currentImage ? 1 : 0, scale: index === currentImage ? 1.1 : 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            ))}
            <div className="absolute inset-0 bg-black/70 " />

            <div className="relative px-4 py-12 max-w-7xl mx-auto">
                <h1 className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">Connect With Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {[
                        { icon: <MapPin className='h-8 w-8 text-pink-900' />, title: 'OUR MAIN OFFICE', text: 'SoHo 94 Broadway St New York, NY 1001' },
                        { icon: <Phone className='h-8 w-8 text-green-500' />, title: 'PHONE NUMBER', text: '234-9876-5400\n888-0123-4567 (Toll-Free)' },
                        { icon: <Phone className='h-8 w-8 text-blue -500' />, title: 'FAX', text: '1-234-567-8900' },
                        { icon: <Mail className='h-8 w-8 text-pink-500' />, title: 'EMAIL', text: 'hello@theme.com' },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                        >
                            <div className="bg-white/95 backdrop-blur p-6 text-center rounded bg-gradient-to-r from-pink-300 to-blue-300">
                                <div className="w-6 h-6 text-orange-500 mx-auto mb-4">{item.icon}</div>
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <form className="space-y-6" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onSubmit={handleSubmit}>
                            <div>
                                <input
                                    placeholder="Enter a valid email address"
                                    type="email"
                                    className="bg-transparent border-white/20 border border-white focus:ring-2 rounded text-white placeholder:text-white/50 w-full p-3"
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Enter your Name"
                                    className="bg-transparent border-white/20 text-white placeholder:text-white/50 w-full p-3 rounded focus:ring-2 border border-white"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Enter your message"
                                    className="bg-transparent border-white/20 text-white placeholder:text-white/50 w-full p-3 rounded focus:ring-2 border border-white min-h-[150px]"
                                />
                            </div>
                            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-2 rounded">
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-white space-y-6"
                    >
                        <h2 className="text-4xl font-bold">Get in touch</h2>
                        <p className="italic">Homemade is proud to offer the best online cooking classes for free! Browse our upcoming virtual events, register for free to sign up!</p>
                        <p className="text-white/70">
                            Etiam sit amet convallis erat - class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit amet convallis erat.
                        </p>
                        <div className="flex space-x-4 pt-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-8 h-8 text-blue-600 hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-8 h-8 text-pink-500 hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className="w-8 h-8 text-blue-400 hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-8 h-8 text-blue-700 hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <Youtube className="w-8 h-8 text-red-600 hover:scale-110 transition-transform duration-300" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
