import FormLanding from '../Form/FormLanding'
import { Section } from '../Layout/Elements'
import { Inner, LogoContainer, Logo } from './Elements'

const Contact = ({ contactData, logos }) => {
  return (
    <Section>
        <Inner>
            <FormLanding contactData={contactData} logo={logos.logoMasai}/>
            <LogoContainer>
                <Logo src={logos.logoBrangus}/>
            </LogoContainer>
        </Inner>
    </Section>
  )
}

export default Contact