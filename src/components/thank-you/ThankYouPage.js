'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { FaGift, FaThumbsUp, FaStar, FaHeart, FaFire } from 'react-icons/fa';

export default function ThankYouPage() {
    const [isConfettiActive, setIsConfettiActive] = useState(false)

    useEffect(() => {
       
        confetti({
            particleCount: 500,
            spread: 500,
            startVelocity: 50,
            origin: { x: 0.5, y: 0.3 }
        })
    }, [])

    const launchConfetti = () => {
        setIsConfettiActive(true)
        confetti({
            particleCount: 500,
            spread: 100,
            origin: { y: 0.6 }
        })
        setTimeout(() => setIsConfettiActive(false), 3000)
    }

    const icons = [FaGift, FaThumbsUp, FaStar, FaHeart, FaFire];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 flex flex-col items-center justify-center p-4 overflow-hidden">
            <motion.div
                className="text-center relative z-10 max-w-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-bounce"
                >
                    Thank You!
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl lg:text-3xl text-white mb-4"
                >
                    Your support means the world to us!
                </motion.p>

                <motion.p
                    className="text-md md:text-lg lg:text-xl text-white mb-12"
                >
                    We are thrilled to have you with us on this journey. Keep celebrating with us!
                </motion.p>

                <motion.div className="flex flex-wrap justify-center gap-6 mb-12">
                    {icons.map((Icon, index) => (
                        <motion.div
                            key={index}
                            className="animate-float"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <Icon className="w-14 h-14 md:w-16 md:h-16 text-white opacity-80" />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button
                        onClick={launchConfetti}
                        disabled={isConfettiActive}
                        className="bg-transparent border border-white text-white py-3 px-4 rounded transition-all duration-300 transform hover:scale-105 animate-pulse"
                    >
                        {isConfettiActive ? "Celebrating!" : "Click for More Confetti!"}
                    </button>
                    <button
                        className="bg-transparent px-4 py-3 rounded border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
                    >
                     <a href='/'>Return to Home</a>
                    </button>
                </motion.div>
            </motion.div>

            {/* Animated background shapes */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white opacity-10"
                    style={{
                        width: Math.random() * 300 + 50,
                        height: Math.random() * 300 + 50,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{
                        scale: [0, 1, 1.2, 1],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.2,
                    }}
                />
            ))}

            <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
        </div>
    )
}
