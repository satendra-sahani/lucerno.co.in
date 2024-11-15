'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'



export default function EmailModalProps({ isOpen, setIsEmailModalOpen }) {
  const [formData, setFormData] = useState({
    sendTo: '',
    subject: '',
    sendCopy: false,
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsEmailModalOpen(false)
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-800"
            onClick={() => setIsEmailModalOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-xl"
          >
            <button
              onClick={() => setIsEmailModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <h2 className="text-2xl font-light text-gray-900 mb-6">Send Email</h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label htmlFor="sendTo" className="block text-sm font-medium text-gray-700 mb-1">
                  Send To
                </label>
                <input
                  type="email"
                  id="sendTo"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  value={formData.sendTo}
                  onChange={(e) => setFormData({ ...formData, sendTo: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Your favorite models by Caesarstone"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sendCopy"
                  className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  checked={formData.sendCopy}
                  onChange={(e) => setFormData({ ...formData, sendCopy: e.target.checked })}
                />
                <label htmlFor="sendCopy" className="ml-2 text-sm text-gray-600">
                  Send a copy to myself
                </label>
              </div>


              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Dear customer,\nHere are your favorite models by caesarstone."
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-orange-500 px-6 py-2 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}