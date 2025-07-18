import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ProductTrial2Props {
  onBack?: () => void;
}

const ProductTrial2: React.FC<ProductTrial2Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">
            Advanced Product Analysis
          </h1>
          
          <div className="text-center text-gray-300">
            <p className="text-lg mb-4">
              This is the advanced product trial page (ProductTrial2).
            </p>
            <p>
              Advanced features and analysis tools will be implemented here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTrial2;