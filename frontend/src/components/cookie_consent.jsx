// File: src/components/CookieConsent.jsx

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './CookieConsent.css';
import { MdCookie } from 'react-icons/md';

const CookieConsent = () => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const [consent, setConsent] = useState({
    functional: false,
    analytics:   false,
    performance: false,
  });

  
  const [expanded, setExpanded] = useState({
    functional:  false,
    analytics:   false,
    performance: false,
  });


  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const saved = Cookies.get('cookieConsent');
    if (!saved) {
      
      setIsModalOpen(true);
      return;
    }

    try {
 
      const parsed = JSON.parse(saved);
      setConsent({
        functional:  !!parsed.functional,
        analytics:   !!parsed.analytics,
        performance: !!parsed.performance,
      });
   
    } catch (err) {

      setIsModalOpen(true);
    }
  }, []);


  const saveConsent = (newConsent) => {
    const toStore = {
      necessary:   true,        
      functional:  newConsent.functional,
      analytics:   newConsent.analytics,
      performance: newConsent.performance,
    };


    Cookies.set('cookieConsent', JSON.stringify(toStore), { expires: 365, path: '/' });

    
    setConsent({
      functional:  newConsent.functional,
      analytics:   newConsent.analytics,
      performance: newConsent.performance,
    });
  };

  const handleAcceptAll = () => {
    const allTrue = {
      functional:  true,
      analytics:   true,
      performance: true,
    };
    saveConsent(allTrue);
    setIsModalOpen(false);
  
  };

  const handleRejectAll = () => {
    const allFalse = {
      functional:  false,
      analytics:   false,
      performance: false,
    };
    saveConsent(allFalse);
    setIsModalOpen(false);

  };

 
  const handleSave = () => {
    saveConsent(consent);
    setIsModalOpen(false);
  
  };

  
  const toggleCategory = (categoryKey) => {
    setExpanded((prev) => ({
      ...prev,
      [categoryKey]: !prev[categoryKey],
    }));
  };


  const handleCheckboxChange = (categoryKey) => {
    setConsent((prev) => ({
      ...prev,
      [categoryKey]: !prev[categoryKey],
    }));
  };


  return (
    <>
    
      {isModalOpen && (
        <div className="cc-modal-overlay" role="dialog" aria-modal="true">
          <div className="cc-modal-content">
       
            <button
              className="cc-close-button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close cookie settings"
            >
              &times;
            </button>

          
            <h2>Customize Consent Preferences</h2>
            <p>
              We use cookies to help you navigate efficiently and perform certain functions. You will find
              detailed information about all cookies under each consent category below.
            </p>
            <p>
              The cookies that are categorized as “Necessary” are stored on your browser as they are essential
              for enabling the basic functionalities of the site.&nbsp;
              {!showMore && (
                <span className="cc-show-more" onClick={() => setShowMore(true)}>
                  Show more
                </span>
              )}
            </p>
            {showMore && (
              <p className="cc-more-text">
                Anything that is strictly necessary for the website to function should be under “Necessary.”
                Functional, Analytics, and Performance cookies only run if you enable them. If you have questions,
                please see our Privacy Policy.
              </p>
            )}

          
            <div className="cc-category">
              <div className="cc-category-header">
                <strong>Necessary</strong>
                <span className="cc-always-active">Always Active</span>
              </div>
              <div className="cc-category-body">
                <p>
                  Necessary cookies are required to enable the basic features of this site, such as providing
                  secure log-in or adjusting your consent preferences. These cookies do not store any
                  personally identifiable data.
                </p>
              </div>
            </div>

          
            <div className="cc-category">
              <div
                className="cc-category-header"
                onClick={() => toggleCategory('functional')}
                role="button"
                aria-expanded={expanded.functional}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleCategory('functional');
                  }
                }}
              >
                <strong>Functional</strong>
                <span className={`cc-toggle-arrow ${expanded.functional ? 'expanded' : ''}`}>▾</span>
              </div>
              {expanded.functional && (
                <div className="cc-category-body">
                  <p>
                    Functional cookies help perform certain functionalities like sharing the content of the website on
                    social media platforms, collecting feedback, and other third-party features.
                  </p>
                  <label>
                    <input
                      type="checkbox"
                      checked={consent.functional}
                      onChange={() => handleCheckboxChange('functional')}
                    />{' '}
                    Enable Functional cookies
                  </label>
                </div>
              )}
            </div>

         
            <div className="cc-category">
              <div
                className="cc-category-header"
                onClick={() => toggleCategory('analytics')}
                role="button"
                aria-expanded={expanded.analytics}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleCategory('analytics');
                  }
                }}
              >
                <strong>Analytics</strong>
                <span className={`cc-toggle-arrow ${expanded.analytics ? 'expanded' : ''}`}>▾</span>
              </div>
              {expanded.analytics && (
                <div className="cc-category-body">
                  <p>
                    Analytical cookies are used to understand how visitors interact with the website. These cookies
                    help provide information on metrics such as the number of visitors, bounce rate, traffic
                    source, etc.
                  </p>
                  <label>
                    <input
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={() => handleCheckboxChange('analytics')}
                    />{' '}
                    Enable Analytics cookies
                  </label>
                </div>
              )}
            </div>

        
            <div className="cc-category">
              <div
                className="cc-category-header"
                onClick={() => toggleCategory('performance')}
                role="button"
                aria-expanded={expanded.performance}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleCategory('performance');
                  }
                }}
              >
                <strong>Performance</strong>
                <span className={`cc-toggle-arrow ${expanded.performance ? 'expanded' : ''}`}>▾</span>
              </div>
              {expanded.performance && (
                <div className="cc-category-body">
                  <p>
                    Performance cookies are used to understand and analyze the key performance indexes of the
                    website which helps in delivering a better user experience for the visitors.
                  </p>
                  <label>
                    <input
                      type="checkbox"
                      checked={consent.performance}
                      onChange={() => handleCheckboxChange('performance')}
                    />{' '}
                    Enable Performance cookies
                  </label>
                </div>
              )}
            </div>

         
            <div className="cc-button-row">
              <button className="cc-btn" onClick={handleRejectAll}>
                Reject All
              </button>
              <button className="cc-btn cc-btn-primary" onClick={handleSave}>
                Save My Preferences
              </button>
              <button className="cc-btn cc-btn-primary" onClick={handleAcceptAll}>
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

    
      <button
        id="openCookieModal"
        className="cc-settings-button"
        onClick={() => {
     
          const saved = Cookies.get('cookieConsent');
          if (saved) {
            try {
              const parsed = JSON.parse(saved);
              setConsent({
                functional:  !!parsed.functional,
                analytics:   !!parsed.analytics,
                performance: !!parsed.performance,
              });
            } catch {
          
            }
          }
          setIsModalOpen(true);
        }}
        aria-label="Open cookie settings"
      >
         <MdCookie size={20} style={{ marginRight: '6px' }} />
      </button>
    </>
  );
};

export default CookieConsent;
