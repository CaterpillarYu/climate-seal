import React from 'react';
import { Target, Lightbulb, Globe, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const milestones = [
    {
      icon: Target,
      title: t('about.milestone1.title'),
      description: t('about.milestone1.description'),
    },
    {
      icon: Lightbulb,
      title: t('about.milestone2.title'),
      description: t('about.milestone2.description'),
    },
    {
      icon: Globe,
      title: t('about.milestone3.title'),
      description: t('about.milestone3.description'),
    },
    {
      icon: Award,
      title: t('about.milestone4.title'),
      description: t('about.milestone4.description'),
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <milestone.icon className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {milestone.title}
              </h3>
              <p className="text-gray-300">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;