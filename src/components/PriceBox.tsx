
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PriceBoxProps {
  title: string;
  price: string;
  speed: string;
  features: string[];
  popular?: boolean;
  className?: string;
}

const PriceBox = ({
  title,
  price,
  speed,
  features,
  popular = false,
  className,
}: PriceBoxProps) => {
  return (
    <div 
      className={cn(
        `bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:translate-y-[-8px]`,
        popular ? 'border-2 border-primary relative' : 'border border-gray-200',
        className
      )}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
            Most Popular
          </div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-extrabold text-gray-900">₹{price}</span>
          <span className="ml-1 text-xl font-medium text-gray-500">/mo</span>
        </div>
        <p className="mt-2 text-gray-600">{speed}</p>
      </div>
      <div className="p-6 bg-gray-50 border-t border-gray-100">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button 
            className={`w-full ${popular ? 'bg-primary hover:bg-primary-hover' : 'bg-gray-800 hover:bg-gray-900'} text-white`}
          >
            Explore Offer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PriceBox;
