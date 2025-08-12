"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import mlsamiet from "../../../assets/mlsamietlogo1.webp"

interface ConfettiParticle {
  id: number
  left: number
  delay: number
  color: string
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden p-4">
  
      <div className="relative z-10 flex flex-col items-center  mt-0 px-4 py-8">
        <div className=" overflow-hidden md:ml-168 rounded-2xl w-2/3">
              <Image
                src={mlsamiet}
                width={300}
                height={300}
                alt="MLSA MIET"
                className=" object-cover"
              />
            </div>
            <div className="slide-up mb-6">
              <div className="pulse-glow md:w-20 md:h-20 w-15 h-15 bg-cyan-600 rounded-full flex items-center justify-center ">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Main Content */}
            <div className="slide-up text-center max-w-3xl mx-auto" style={{ animationDelay: "0.2s" }}>
              <h1 className="font-serif font-bold text-2xl md:text-4xl text-gray-900 mb-4 leading-tight">
                Registration Successful !!
              </h1>
              <h2 className="font-serif text-xl md:text-2xl text-cyan-600 mb-4">Thank You!! For showing your interest..</h2>

              <p className="font-sans text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                Join our WhatsApp group by clicking below to stay updated on the next steps.
              </p>
              <div className="space-y-3">
                  <a
                    href="https://wa.me/+919876543210?text=Hi%2C%20I%20just%20registered%20as%20a%20volunteer%20for%20MLSA%20MIET%20and%20would%20like%20to%20join%20the%20WhatsApp%20group%20for%20updates."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-sans font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-102 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    Join WhatsApp Group
                  </a>
                </div>
            </div>
            </div>
      </div>
  )
}
