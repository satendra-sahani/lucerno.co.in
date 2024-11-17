'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LockIcon, MailIcon } from 'lucide-react'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle login logic here
        console.log('Login submitted', { email, password, rememberMe })
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" flex items-center justify-center bg-gradient-to-r from-cyan-700 to-gray-900 py-20 px-2"
        >
            <motion.div
                className="w-full max-w-lg bg-gradient-to-r from-cyan-700 to-gray-900 border border-white rounded-lg shadow-xl overflow-hidden space-y-8  login"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="p-6 sm:p-8">
                    <motion.div
                        className="text-3xl font-bold text-center text-gray-800 mb-6 "
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <img src="/assets/white-logo.png" />
                    </motion.div>
                    <form onSubmit={handleSubmit} className="space-y-8 ">
                        <div className="space-y-3">
                            <label htmlFor="email" className="text-lg font-medium text-white">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-3 pl-10 border text-white border-gray-300 bg-gradient-to-r from-cyan-700 to-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size={18} />
                            </div>
                        </div>
                        <div className="space-y-3 ">
                            <label htmlFor="password" className="text-lg font-medium text-white">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-3 text-white pl-10 border bg-gradient-to-r from-cyan-700 to-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size={18} />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="rounded h-5 w-5 border-gray-300 text-blue-600 focus:ring-blue-500  bg-gradient-to-r from-cyan-700 to-gray-900"
                                />
                                <label htmlFor="remember" className="text-sm text-white">
                                    Remember me
                                </label>
                            </div>
                            <motion.a
                                href="/reset-password"
                                className="text-sm 00 text-white hover:underline"
                                whileHover={{ scale: 1.05 }}
                            >
                                Forgot your password?
                            </motion.a>
                        </div>
                        <motion.button
                            type="submit"
                            className="w-full bg-gradient-to-r border border-white from-cyan-700 to-gray-900 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Sign In
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    )
}