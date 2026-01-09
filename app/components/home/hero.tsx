"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAccessibility } from '@/contexts/AccessibilityContext';

const HeroSection = () => {
  const router = useRouter();
  const { settings } = useAccessibility();
  const [animationsTriggered, setAnimationsTriggered] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const quotes = [
    'Your Mental Health Matters',
    'You Are Not Alone',
    'Healing Starts Here',
    'Your Journey, Your Pace',
    'Every Step Counts'
  ];

  useEffect(() => {
    setAnimationsTriggered(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentQuote = quotes[currentQuoteIndex];
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseAfterTyping = 3000;
    const pauseAfterDeleting = 500;

    if (!isDeleting && displayedText === currentQuote) {
      setTimeout(() => setIsDeleting(true), pauseAfterTyping);
      return;
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      setTimeout(() => {}, pauseAfterDeleting);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentQuote.substring(0, displayedText.length - 1)
          : currentQuote.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentQuoteIndex]);

  const getHeadline = () => {
    if (settings.language === 'es') return displayedText || 'Tu Salud Mental Importa';
    if (settings.language === 'fr') return displayedText || 'Votre Santé Mentale Compte';
    if (settings.language === 'de') return displayedText || 'Ihre Psychische Gesundheit Ist Wichtig';
    if (settings.language === 'zh') return displayedText || '您的心理健康很重要';
    return displayedText || 'Your Mental Health Matters';
  };

  const getDescription = () => {
    if (settings.language === 'es') return 'Lumina te conecta con soporte de IA y terapeutas con licencia.';
    if (settings.language === 'fr') return 'Lumina vous connecte avec un support IA et des thérapeutes agréés.';
    if (settings.language === 'de') return 'Lumina verbindet Sie mit KI-Unterstützung und lizenzierten Therapeuten.';
    if (settings.language === 'zh') return 'Lumina随时随地为您提供AI支持和持证治疗师服务。';
    return 'Lumina connects you with AI support and licensed therapists anytime, anywhere.';
  };

  const getButtonPrimary = () => {
    if (settings.language === 'es') return 'Obtener Ayuda Inmediata';
    if (settings.language === 'fr') return 'Obtenir Aide';
    if (settings.language === 'de') return 'Sofortige Hilfe';
    if (settings.language === 'zh') return '立即获得帮助';
    return 'Get Immediate Help';
  };

  const getButtonSecondary = () => {
    if (settings.language === 'es') return 'Reservar Terapeuta';
    if (settings.language === 'fr') return 'Réserver Thérapie';
    if (settings.language === 'de') return 'Therapeutensitzung Buchen';
    if (settings.language === 'zh') return '预约治疗师';
    return 'Book a Therapist';
  };
  
  return (
    <section 
      className="relative overflow-hidden bg-[#F9FAFB]"
      role="banner"
      style={{ marginTop: '80px', minHeight: '90vh' }}
    >
      {/* Main container */}
      <div className="relative flex items-center justify-center px-8 md:px-16 lg:px-24 py-12 min-h-[90vh] max-w-7xl mx-auto">
        
        {/* Centered Text Content */}
        <div className="w-full text-center z-10">
          <h1 
            className={`text-[#1F2933] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 mx-auto transition-all duration-700 ease-in-out ${
              animationsTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '500ms', minHeight: '1.2em' }}
          >
            <span className="inline-block">{getHeadline()}</span>
            <span className="inline-block w-1 h-16 bg-[#FF7A59] ml-2 animate-pulse" style={{ animationDuration: '1s' }}></span>
          </h1>

          <p 
            className={`text-[#6B7280] text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-10 max-w-3xl mx-auto transition-all duration-1000 ${
              animationsTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            {getDescription()}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA - Warm Coral */}
            <button 
              onClick={() => router.push('/aitherapist')}
              className={`bg-[#FF7A59] hover:bg-[#FF8A69] text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 ${
                animationsTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '2000ms' }}
            >
              {getButtonPrimary()}
            </button>
            
            {/* Secondary CTA - Soft Sky Blue */}
            <button 
              onClick={() => router.push('/therapists')}
              className={`bg-transparent border-2 border-[#6EC1E4] text-[#6EC1E4] px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-[#6EC1E4] hover:text-white hover:scale-105 ${
                animationsTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '2500ms' }}
            >
              {getButtonSecondary()}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
