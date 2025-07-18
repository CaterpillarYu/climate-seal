import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Climate Seal</h3>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.solutions')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.carbonFootprint')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.lca')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.reporting')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.about')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.contact')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.privacy')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;