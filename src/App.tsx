import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Slide00Cover,
  Slide01FundStructure,
  Slide02CurrentState,
  Slide03TheFix,
  Slide04Actions,
  Slide05Vision
} from './slides';
import type { ContentSlide, SlideDefinition } from './types/slides';

const RIAOnChainPitch = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const zoom = 1;

  const slides = [
    Slide00Cover,
    Slide01FundStructure,
    Slide02CurrentState,
    Slide03TheFix,
    Slide04Actions,
    Slide05Vision
  ] satisfies SlideDefinition[];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const isContentSlide = (slide: SlideDefinition): slide is ContentSlide => slide.type === 'content';
  const currentSlideData = slides[currentSlide];
  const totalSlides = slides.length;

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : prev));
          break;
        case 'ArrowLeft':
        case 'PageUp':
          setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
          break;
        case 'Home':
          setCurrentSlide(0);
          break;
        case 'End':
          setCurrentSlide(totalSlides - 1);
          break;
        case 'Escape':
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [totalSlides]);

  return (
    <div className="w-full h-screen bg-slate-950 flex flex-col">

      <div id="slide-capture" className="flex-1 relative bg-slate-950 overflow-hidden">
        {isContentSlide(currentSlideData) && (
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white/90 px-4 sm:px-6 md:px-10 lg:px-12 py-4 md:py-5 border-b border-slate-800/60 backdrop-blur">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-[0.35em] text-blue-400 mb-1">Prime RIA On-Chain</div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-light tracking-tight text-white mb-1">
                  {currentSlideData.title}
                </h2>
                {currentSlideData.subtitle && (
                  <div className="text-xs sm:text-sm text-slate-400 font-light">
                    {currentSlideData.subtitle}
                  </div>
                )}
              </div>
              <div className="text-left sm:text-right">
                <div className="text-xs text-slate-500 uppercase tracking-[0.35em]">Confidential</div>
                <div className="text-xs text-slate-600 mt-1">Slide {currentSlide + 1} of {totalSlides}</div>
              </div>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={
              isContentSlide(currentSlideData)
                ? 'pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-18 px-0 sm:px-2 md:px-6 lg:px-10 h-full overflow-y-auto slide-content export-scroll'
                : 'h-full slide-content export-scroll'
            }
            style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
          >
            {currentSlideData.content}
          </motion.div>
        </AnimatePresence>

        {isContentSlide(currentSlideData) && (
          <div className="absolute bottom-0 left-0 right-0 bg-slate-900/60 border-t border-slate-800 px-6 md:px-12 py-3 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 text-[11px] uppercase tracking-[0.35em] text-slate-500">
            <div>Prime RIA On-Chain · Confidential</div>
            <div>Tokenized PE | Fintech Transformation | 10X Target MOIC</div>
          </div>
        )}
      </div>

      <div className="bg-slate-950 px-3 sm:px-6 md:px-10 py-3 flex items-center justify-between border-t border-slate-900">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-5 py-2 text-xs sm:text-sm font-light transition-all ${
            currentSlide === 0
              ? 'text-slate-600 cursor-not-allowed'
              : 'text-slate-200 hover:text-blue-400'
          }`}
        >
          <ChevronLeft size={16} className="sm:hidden" />
          <ChevronLeft size={18} className="hidden sm:block" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex items-center gap-1 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-blue-500 w-4 sm:w-6 md:w-8'
                  : 'bg-slate-600 w-1 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <span className="text-slate-400 text-xs sm:text-sm font-light">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-5 py-2 text-xs sm:text-sm font-light tracking-wide transition-all ${
            currentSlide === slides.length - 1
              ? 'text-slate-600 cursor-not-allowed'
              : 'text-slate-200 hover:text-blue-400'
          }`}
        >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight size={16} className="sm:hidden" />
            <ChevronRight size={18} className="hidden sm:block" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RIAOnChainPitch;
