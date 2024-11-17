'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LockIcon, MailIcon } from 'lucide-react'

export default function ResetPassword() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle login logic here
        console.log('Login submitted', { email, password, rememberMe })
    }

    return (
        <div
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

                        <motion.button
                            type="submit"
                            className="w-full bg-gradient-to-r border border-white from-cyan-700 to-gray-900 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Reset Password
                        </motion.button>
                        <div className="flex items-center justify-end">

                            <motion.a
                                href="/login"
                                className="text-sm 00 text-white hover:underline"
                                whileHover={{ scale: 1.05 }}
                            >
                                Login Page
                            </motion.a>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}