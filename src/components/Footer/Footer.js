import { Section } from '../Layout/Elements'
import {
    Inner,
    Content,
    Logo,
    LogoContainer,
} from './Elements'

const Footer = ({ data }) => {
  return (
    <Section bgColor="var(--main-black)" minHeight="15rem">
        <Inner>
          <Content>
            {
                data.map(item => <LogoContainer key={item}><Logo src={item} /></LogoContainer>)
            }
          </Content>
        </Inner>
    </Section>
  )
}

export default Footer