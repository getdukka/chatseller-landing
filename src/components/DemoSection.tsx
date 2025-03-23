
import React from 'react';
import ChatInterface from './ChatInterface';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DemoSection = () => {
  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See ChatSeller in action
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Experience how our AI assistant guides customers through their shopping journey, answering questions and making personalized product recommendations.
            </p>
            <p className="text-muted-foreground mb-8">
              Try asking about headphones, fitness watches or speakers in the demo.
            </p>
            <Button className="group">
              Start your free trial <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="flex justify-center">
            <ChatInterface />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
