import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import InfoSection from '../InfoSection/InfoSection'
import LogoGallery from '../LogoGallery/LogoGallery'
import Footer from '../Footer/Footer'
import ScheduleContainer from '../Schedule/ScheduleContainer'
import Pricing from '../Pricing/Pricing'
import Contact from '../Contact/Contact'
import Faq from '../Faq/Faq'

const Home = ({ data }) => {
    return (
        <>
            <NavBar data={data.nav}/>
            <Hero data={data.hero} />
            <InfoSection id="tour" />
            <LogoGallery data={data.logosCabanas} />
            <ScheduleContainer data='tour_schedule'/>
            <InfoSection id="expo" />
            <ScheduleContainer data='expo_schedule'/>
            <Pricing />
            <Faq />
            <Contact contactData={data.masaiContactData} logos={data.contactFormLogos}/>
            <Footer data={data.logosFooter} />
        </>
    )
}

export default Home