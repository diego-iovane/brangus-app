import { 
  BgSection,
  Inner,
  Logo,
  LogoContainer,
} from './Elements'

const Hero = ({ data }) => {
  return (
    <BgSection bg={data.bgImg.src}>
        <Inner>
            <LogoContainer>
              <Logo src={data.logo.src} alt={data.logo.alt}/>
            </LogoContainer>
        </Inner>
    </BgSection>
  )
}

export default Hero