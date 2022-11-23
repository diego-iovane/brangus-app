import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import nav_es from './lang/es/nav.json'
import nav_en from './lang/en/nav.json'
import tour_info_es from './lang/es/tour_info.json'
import tour_info_en from './lang/en/tour_info.json'
import expo_info_es from './lang/es/expo_info.json'
import expo_info_en from './lang/en/expo_info.json'
import tour_schedule_en from './lang/en/tour_schedule.json'
import tour_schedule_es from './lang/es/tour_schedule.json'
import expo_schedule_en from './lang/en/expo_schedule.json'
import expo_schedule_es from './lang/es/expo_schedule.json'
import pricing_es from './lang/es/pricing.json'
import pricing_en from './lang/en/pricing.json'
import faq_es from './lang/es/faq.json'
import faq_en from './lang/en/faq.json'
import inscription_form_es from './lang/es/inscription_form.json'
import inscription_form_en from './lang/en/inscription_form.json'
import contact_form_es from './lang/es/contact_form.json'
import contact_form_en from './lang/en/contact_form.json'


i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      expo_info: expo_info_es,
      tour_info: tour_info_es,
      tour_schedule: tour_schedule_es,
      inscription_form: inscription_form_es,
      contact_form: contact_form_es,
      expo_schedule: expo_schedule_es,
      faq: faq_es,
      pricing: pricing_es,
      nav: nav_es
    },
    en: {
      expo_info: expo_info_en,
      tour_info: tour_info_en,
      tour_schedule: tour_schedule_en,
      inscription_form: inscription_form_en,
      contact_form: contact_form_en,
      expo_schedule: expo_schedule_en,
      faq: faq_en,
      pricing: pricing_en,
      nav: nav_en
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);