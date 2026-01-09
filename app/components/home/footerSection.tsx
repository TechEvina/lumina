"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const FooterSection = () => {
  const router = useRouter();
  return (
    <footer className="bg-blue-950 text-white">
      {/* hero section */}
      <div className="px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl text-white mb-6 leading-tight">
          The only all inclusive mental health hub 
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          you'll ever need!
        </p>
        
        {/* cta banner */}
        <div className="bg-gray-100 rounded-2xl px-8 py-6 max-w-4xl mx-auto flex items-center justify-between">
          <p className="text-gray-800 text-lg font-medium">
            Book an appointment with a licensed therapist today!
          </p>
          <button 
            onClick={() => router.push('/therapists')}
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors ml-8"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* main footer content */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* top row - logo, nav, badges */}
          <div className="flex items-center justify-between mb-12">
            {/* left - logo & nav */}
            <div className="flex items-center space-x-12 justifty-between w-full">
              {/* logo */}
              <div>
                <h2 className="text-3xl  text-white">Lumina</h2>
              </div>
              
              {/* social icons */}
              {/* nav links */}
          <div className="space-x-8">
            <button 
              onClick={() => router.push('/')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => router.push('/resources')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Our Solutions
            </button>
            <button 
              onClick={() => router.push('/therapists')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Therapists
            </button>
            <button 
              onClick={() => router.push('/support')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Support Community
            </button>
            <a 
              href="https://www.mentalhealth.gov/get-help/immediate-help" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Crisis Help
            </a>
            <button 
              onClick={() => router.push('/resources')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Resources
            </button>
          </div>
            </div>

          
          </div>

        

          {/* bottom section - crisis resources */}
          <div className="border-t border-gray-700 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              {/* warning msg */}
              <div className="md:col-span-1 flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-red-400 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                </div>
                <p className="text-gray-300 text-sm">
                  If you or a loved one is in emotional distress, here are some resources
                </p>
              </div>

              {/* suicide & crisis lifeline */}
              <div className="text-center md:text-left">
                <h4 className="text-white font-semibold mb-1">Suicide and Crisis Lifeline</h4>
                <p className="text-gray-300 text-sm">Call or text 9-8-8 (Available 24/7)</p>
              </div>

              {/* crisis text line */}
              <div className="text-center md:text-left">
                <h4 className="text-white font-semibold mb-1">Crisis Text Line</h4>
                <p className="text-gray-300 text-sm">Text HOME to 741741</p>
              </div>

              {/* crisis resources btn */}
              <div className="text-center md:text-right">
                <a 
                  href="https://www.mentalhealth.gov/get-help/immediate-help" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition-colors inline-block"
                >
                  Crisis Resources
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;