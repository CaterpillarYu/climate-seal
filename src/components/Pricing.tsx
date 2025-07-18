import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Basic Plan */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
            <div className="text-4xl font-bold text-white mb-6">
              $99<span className="text-lg text-gray-300">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-green-400 mr-3" />
                Up to 100 products
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-green-400 mr-3" />
                Basic reporting
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-green-400 mr-3" />
                Email support
              </li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-gray-800 p-8 rounded-lg border-2 border-blue-500 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
            <div className="text-4xl font-bold text-white mb-6">
              $299<span className="text-lg text-gray-300">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-green-400 mr-3" />
                Up to 1,000 products
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-green-400 mr-3" />
                Advanced reporting
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-green-400 mr-3" />
                API access
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-green-400 mr-3" />
                Priority support
              </li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
            <div className="text-4xl font-bold text-white mb-6">
              Custom<span className="text-lg text-gray-300">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-green-400 mr-3" />
                Unlimited products
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-green-400 mr-3" />
                Custom integrations
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-green-400 mr-3" />
                Dedicated support
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-green-400 mr-3" />
                On-premise deployment
              </li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
              Contact Sales
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {t('pricing.faq.title')}
          </h3>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">
                {t('pricing.faq.question1')}
              </h4>
              <p className="text-gray-300">
                {t('pricing.faq.answer1')}
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">
                {t('pricing.faq.question2')}
              </h4>
              <p className="text-gray-300">
                {t('pricing.faq.answer2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;