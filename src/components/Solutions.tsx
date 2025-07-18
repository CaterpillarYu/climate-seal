import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ProductDemo from './ProductDemo';

const Solutions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="solutions" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* Product Demo */}
        <div className="mb-16">
          <ProductDemo />
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              {t('solutions.solution1.title')}
            </h3>
            <p className="text-gray-300">
              {t('solutions.solution1.description')}
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              {t('solutions.solution2.title')}
            </h3>
            <p className="text-gray-300">
              {t('solutions.solution2.description')}
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              {t('solutions.solution3.title')}
            </h3>
            <p className="text-gray-300">
              {t('solutions.solution3.description')}
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              {t('solutions.solution4.title')}
            </h3>
            <p className="text-gray-300">
              {t('solutions.solution4.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;