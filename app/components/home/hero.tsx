"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAccessibility } from '@/contexts/AccessibilityContext';

const HeroSection = () => {
  const router = useRouter();
  const { settings } = useAccessibility();
  const [animationsTriggered, setAnimationsTriggered] = useState(false);

  useEffect(() => {
    setAnimationsTriggered(true);
  }, []);

  const getHeadline = () => {
    if (settings.language === 'es') return 'Tu Salud Mental Importa';
    if (settings.language === 'fr') return 'Votre Santé Mentale Compte';
    if (settings.language === 'de') return 'Ihre Psychische Gesundheit Ist Wichtig';
    if (settings.language === 'zh') return '您的心理健康很重要';
    return 'Your Mental Health Matters';
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
      className="relative overflow-hidden"
      role="banner"
      style={{ marginTop: '80px', minHeight: '100vh' }}
    >
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="https://cdn.pixabay.com/video/2023/04/27/159558-821662086_large.mp4" type="video/mp4" />
      </video>

      <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/40 to-black/60"
        style={{ zIndex: 1 }}
      />

      <div className="relative flex items-center justify-center px-8 md:px-16 lg:px-24 py-12 min-h-screen" style={{ zIndex: 2 }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`text-white text-4xl md:text-6xl font-bold leading-tight mb-6 transition-all duration-1000 ${
              animationsTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            {getHeadline()}
          </h1>

          <p 
            className={`text-white text-lg md:text-2xl font-light leading-relaxed mb-10 transition-all duration-1000 ${
              animationsTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            {getDescription()}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => router.push('/aitherapist')}
              className={`text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl transition-all duration-1000 hover:scale-110 ${
                animationsTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '2000ms', backgroundColor: '#FF6E40' }}
            >
              {getButtonPrimary()}
            </button>
            <button 
              onClick={() => router.push('/therapists')}
              className={`bg-white bg-opacity-20 backdrop-blur-md text-white border-2 border-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-1000 hover:bg-opacity-30 hover:scale-110 ${
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
