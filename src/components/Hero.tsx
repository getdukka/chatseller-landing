
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-transparent -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-indigo-200/20 rounded-full blur-2xl -z-10" />
      
      <div className="container px-6 md:px-12 mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-blue-100 rounded-full bg-blue-50 text-xs font-medium text-blue-600 animate-fade-in">
            <span className="flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Now available for all e-commerce platforms
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in [animation-delay:200ms]">
            Transform your online store with AI-powered sales assistance
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl animate-fade-in [animation-delay:400ms]">
            ChatSeller helps you boost conversions, enhance customer experience, and drive sales 24/7 with personalized shopping assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in [animation-delay:600ms]">
            <Button size="lg" className="group">
              Get started free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Watch demo
            </Button>
          </div>
          
          <div className="mt-12 px-6 py-6 border rounded-xl bg-white/50 backdrop-blur-sm shadow-sm animate-fade-in [animation-delay:800ms]">
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading brands</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <div className="h-6 w-24 bg-slate-400/20 rounded" />
              <div className="h-6 w-20 bg-slate-400/20 rounded" />
              <div className="h-6 w-28 bg-slate-400/20 rounded" />
              <div className="h-6 w-24 bg-slate-400/20 rounded" />
              <div className="h-6 w-20 bg-slate-400/20 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
