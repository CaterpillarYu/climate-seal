import React, { useState } from 'react';
import { ArrowLeft, Calculator, FileText, BarChart3 } from 'lucide-react';

interface ProductTrial1Props {
  onBack?: () => void;
}

const ProductTrial1: React.FC<ProductTrial1Props> = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    weight: '',
    materials: '',
    energy: '',
    transport: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateFootprint = () => {
    // Simple calculation for demo purposes
    const weight = parseFloat(formData.weight) || 0;
    const energyFactor = 2.5;
    const transportFactor = 0.5;
    const materialFactor = 1.2;
    
    return (weight * materialFactor + weight * energyFactor + weight * transportFactor).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Product Carbon Footprint Calculator
          </h1>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= stepNum
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-600 text-gray-300'
                    }`}
                  >
                    {stepNum}
                  </div>
                  {stepNum < 3 && (
                    <div
                      className={`w-16 h-1 ${
                        step > stepNum ? 'bg-blue-600' : 'bg-gray-600'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2" />
                Product Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={formData.productName}
                    onChange={(e) => handleInputChange('productName', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter product name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="food">Food & Beverage</option>
                    <option value="automotive">Automotive</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter weight in kg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Materials
                  </label>
                  <input
                    type="text"
                    value={formData.materials}
                    onChange={(e) => handleInputChange('materials', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., plastic, metal, wood"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Calculator className="h-6 w-6 mr-2" />
                Production & Transport
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Energy Consumption (kWh)
                  </label>
                  <input
                    type="number"
                    value={formData.energy}
                    onChange={(e) => handleInputChange('energy', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Energy used in production"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Transport Distance (km)
                  </label>
                  <input
                    type="number"
                    value={formData.transport}
                    onChange={(e) => handleInputChange('transport', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Average transport distance"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <BarChart3 className="h-6 w-6 mr-2" />
                Carbon Footprint Results
              </h2>
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    {calculateFootprint()} kg CO₂e
                  </div>
                  <p className="text-gray-300 mb-4">
                    Estimated carbon footprint for {formData.productName || 'your product'}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-800 p-4 rounded">
                      <div className="text-lg font-semibold text-blue-400">Materials</div>
                      <div className="text-2xl font-bold text-white">
                        {(parseFloat(formData.weight) * 1.2 || 0).toFixed(2)} kg
                      </div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <div className="text-lg font-semibold text-yellow-400">Production</div>
                      <div className="text-2xl font-bold text-white">
                        {(parseFloat(formData.weight) * 2.5 || 0).toFixed(2)} kg
                      </div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <div className="text-lg font-semibold text-purple-400">Transport</div>
                      <div className="text-2xl font-bold text-white">
                        {(parseFloat(formData.weight) * 0.5 || 0).toFixed(2)} kg
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="px-6 py-2 bg-gray-600 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 transition-colors"
            >
              Previous
            </button>
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => {
                  alert('Results saved! This is a demo version.');
                }}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Save Results
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTrial1;