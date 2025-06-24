// LanguageSelector.jsx
import { useEffect } from 'react';

const LanguageSelector = () => {
  useEffect(() => {
    window.loadGoogleTranslate = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,es,zh-CN,zh-TW,de,fr', 
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_element'
      );
    };

    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup when the component unmounts
    return () => {
      document.body.removeChild(script);
      delete window.loadGoogleTranslate;
    };
  }, []);

  return <div id="google_element" />;
};

export default LanguageSelector;
