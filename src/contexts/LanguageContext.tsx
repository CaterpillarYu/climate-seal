import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (code: string) => void;
  languages: Language[];
  t: (key: string) => string;
}

const languages: Language[] = [
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

const translations = {
  zh: {
    nav: {
      home: '首页',
      solutions: '解决方案',
      features: '功能特性',
      about: '关于我们',
      contact: '联系我们',
      pricing: '定价',
    },
    hero: {
      title: '智能碳足迹分析平台',
      subtitle: '为企业提供精准的产品碳足迹计算和生命周期评估服务',
      getStarted: '开始使用',
      learnMore: '了解更多',
      stats: {
        companies: '合作企业',
        calculations: '计算次数',
        accuracy: '准确率',
      },
    },
    solutions: {
      title: '解决方案',
      subtitle: '全面的碳足迹分析解决方案',
      solution1: {
        title: '产品碳足迹',
        description: '精确计算产品全生命周期碳排放',
      },
      solution2: {
        title: '供应链分析',
        description: '深入分析供应链各环节碳排放',
      },
      solution3: {
        title: '合规报告',
        description: '符合国际标准的碳足迹报告',
      },
      solution4: {
        title: '减排建议',
        description: '基于数据的减排策略建议',
      },
    },
    features: {
      title: '功能特性',
      subtitle: '强大的功能助力您的碳管理',
      feature1: {
        title: '数据安全',
        description: '企业级数据安全保护',
      },
      feature2: {
        title: '快速计算',
        description: '高效的碳足迹计算引擎',
      },
      feature3: {
        title: '全球标准',
        description: '符合国际碳足迹标准',
      },
      feature4: {
        title: '可视化报告',
        description: '直观的数据可视化展示',
      },
      feature5: {
        title: '团队协作',
        description: '支持多人协作管理',
      },
    },
    about: {
      title: '关于我们',
      subtitle: '致力于推动企业可持续发展',
      milestone1: {
        title: '使命愿景',
        description: '帮助企业实现碳中和目标',
      },
      milestone2: {
        title: '技术创新',
        description: '领先的碳足迹计算技术',
      },
      milestone3: {
        title: '全球服务',
        description: '为全球企业提供服务',
      },
      milestone4: {
        title: '专业认证',
        description: '获得多项国际认证',
      },
    },
    contact: {
      title: '联系我们',
      subtitle: '我们随时为您提供帮助',
      form: {
        name: '姓名',
        email: '邮箱',
        message: '留言',
        submit: '发送消息',
      },
      info: {
        email: '邮箱地址',
        phone: '联系电话',
        address: '公司地址',
      },
    },
    footer: {
      description: '专业的碳足迹分析平台，助力企业实现可持续发展目标。',
      solutions: '解决方案',
      carbonFootprint: '碳足迹计算',
      lca: '生命周期评估',
      reporting: '合规报告',
      company: '公司',
      about: '关于我们',
      contact: '联系我们',
      privacy: '隐私政策',
      copyright: '© 2024 Climate Seal. 保留所有权利。',
    },
    pricing: {
      title: '定价方案',
      subtitle: '选择适合您的方案',
      faq: {
        title: '常见问题',
        question1: '如何开始使用？',
        answer1: '您可以注册免费试用账户，体验我们的基础功能。',
        question2: '是否支持定制化服务？',
        answer2: '是的，我们为企业客户提供定制化解决方案。',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      features: 'Features',
      about: 'About',
      contact: 'Contact',
      pricing: 'Pricing',
    },
    hero: {
      title: 'Smart Carbon Footprint Analysis Platform',
      subtitle: 'Providing precise product carbon footprint calculation and lifecycle assessment services for enterprises',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      stats: {
        companies: 'Partner Companies',
        calculations: 'Calculations',
        accuracy: 'Accuracy',
      },
    },
    solutions: {
      title: 'Solutions',
      subtitle: 'Comprehensive carbon footprint analysis solutions',
      solution1: {
        title: 'Product Carbon Footprint',
        description: 'Accurately calculate product lifecycle carbon emissions',
      },
      solution2: {
        title: 'Supply Chain Analysis',
        description: 'In-depth analysis of carbon emissions across supply chain',
      },
      solution3: {
        title: 'Compliance Reporting',
        description: 'Carbon footprint reports compliant with international standards',
      },
      solution4: {
        title: 'Reduction Recommendations',
        description: 'Data-driven carbon reduction strategy recommendations',
      },
    },
    features: {
      title: 'Features',
      subtitle: 'Powerful features to support your carbon management',
      feature1: {
        title: 'Data Security',
        description: 'Enterprise-grade data security protection',
      },
      feature2: {
        title: 'Fast Calculation',
        description: 'Efficient carbon footprint calculation engine',
      },
      feature3: {
        title: 'Global Standards',
        description: 'Compliant with international carbon footprint standards',
      },
      feature4: {
        title: 'Visual Reports',
        description: 'Intuitive data visualization display',
      },
      feature5: {
        title: 'Team Collaboration',
        description: 'Support for multi-user collaborative management',
      },
    },
    about: {
      title: 'About Us',
      subtitle: 'Committed to promoting sustainable enterprise development',
      milestone1: {
        title: 'Mission & Vision',
        description: 'Helping enterprises achieve carbon neutrality goals',
      },
      milestone2: {
        title: 'Technical Innovation',
        description: 'Leading carbon footprint calculation technology',
      },
      milestone3: {
        title: 'Global Service',
        description: 'Providing services to enterprises worldwide',
      },
      milestone4: {
        title: 'Professional Certification',
        description: 'Obtained multiple international certifications',
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to help you anytime',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
      },
      info: {
        email: 'Email Address',
        phone: 'Phone Number',
        address: 'Company Address',
      },
    },
    footer: {
      description: 'Professional carbon footprint analysis platform helping enterprises achieve sustainable development goals.',
      solutions: 'Solutions',
      carbonFootprint: 'Carbon Footprint',
      lca: 'Lifecycle Assessment',
      reporting: 'Compliance Reporting',
      company: 'Company',
      about: 'About Us',
      contact: 'Contact Us',
      privacy: 'Privacy Policy',
      copyright: '© 2024 Climate Seal. All rights reserved.',
    },
    pricing: {
      title: 'Pricing Plans',
      subtitle: 'Choose the plan that fits your needs',
      faq: {
        title: 'Frequently Asked Questions',
        question1: 'How do I get started?',
        answer1: 'You can register for a free trial account to experience our basic features.',
        question2: 'Do you offer customized services?',
        answer2: 'Yes, we provide customized solutions for enterprise customers.',
      },
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (code: string) => {
    const language = languages.find(lang => lang.code === code);
    if (language) {
      setCurrentLanguage(language);
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage.code as keyof typeof translations];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, languages, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};