import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import FormInscription from './components/Form/FormInscription'
import FormContact from './components/Form/FormContact'

function App() {

  const data = {
    nav: {
      logo: '/static/logos/nav-logo.png',
    },
    hero: {
      bgImg: {
        alt: 'background image',
        src: '/static/img/hero-bg.png',
      },
      logo: {
        alt: 'logo congreso brangus 2023',
        src: '/static/logos/logo-brangus-apaisado-alt.png'
      },
    },
    logosCabanas: [
      '/static/logos/marias.png',
      '/static/logos/ita-siri.png',
      '/static/logos/victoria.png',
      '/static/logos/bagual.png',
      '/static/logos/lilas.png',
      '/static/logos/guasunchos.png',
    ],
    masaiContactData: [
      {
        icon: '/static/icons/whats.png',
        text: '(+54 9) 115-106-2096',
        alt: 'phone icon',
        a: true,
      },
      {
        icon: '/static/icons/mail-icon.png',
        text: 'josefina@masaiviajes.com',
        alt: 'e-mail icon',
        a: false,
      },
    ],
    contactFormLogos : {
      logoBrangus: '/static/logos/logo-brangus.png',
      logoMasai: '/static/logos/logo-masai.png'
    },
    logosFooter: [
      '/static/logos/congreso-logo-footer.png',
      '/static/logos/logo-brangus-white.png',
      '/static/logos/logo-masai-white.png',
    ],
    formLogo: {
      src: '/static/logos/logo-brangus-apaisado.png',
      alt: 'logo brangus',
    },
    formBg: {
      src: '/static/img/hero-bg.png'
    }
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home data={data} />}
        />
        <Route
          path="/contacto"
          element={<FormContact data={data.logosFooter} contactData={data.masaiContactData} logo={data.formLogo} bg={data.formBg}/>}
        />
        <Route
          path="/inscripciones"
          element={<FormInscription data={data.logosFooter} contactData={data.masaiContactData} logo={data.formLogo} bg={data.formBg}/>}
        />
      </Routes>
    </>
  );
}

export default App;
