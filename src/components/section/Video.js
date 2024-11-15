'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Maximize, Volume2, VolumeX } from 'lucide-react'

const Video = () => {
  const [isClient, setIsClient] = useState(false)
  const videoContainerRef = useRef(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleFullscreen = () => {
    if (typeof window !== 'undefined' && videoContainerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoContainerRef.current.requestFullscreen()
      }
    }
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-8">

      <h1 class="text-6xl font-extrabold text-center text-gray-700 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">
        Shaped by nature: The new Pebbles collection
      </h1>

      <div
        ref={videoContainerRef}
        className="relative w-full aspect-video bg-black rounded-lg overflow-hidden group"
      >
        <video
          className="absolute inset-0 w-full h-full"
          src="/assets/video-2.mp4"
          title="The Pebbles Collection by Caesarstone - Shape by Nature"

          autoPlay
          loop
          muted
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Toggle fullscreen"
            >
              <Maximize className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Video