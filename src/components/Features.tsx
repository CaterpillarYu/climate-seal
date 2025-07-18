import React from 'react';
import { Shield, Zap, Globe, BarChart3, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('features.feature1.title'),
      description: t('features.feature1.description'),
    },
    {
      icon: Zap,
      title: t('features.feature2.title'),
      description: t('features.feature2.description'),
    },
    {
      icon: Globe,
      title: t('features.feature3.title'),
      description: t('features.feature3.description'),
    },
    {
      icon: BarChart3,
      title: t('features.feature4.title'),
      description: t('features.feature4.description'),
    },
    {
      icon: Users,
      title: t('features.feature5.title'),
      description: t('features.feature5.description'),
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;