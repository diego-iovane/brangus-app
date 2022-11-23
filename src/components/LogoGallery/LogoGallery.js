import { Section } from '../Layout/Elements'
import {
    Inner,
    Title,
    Grid,
    Item,
    Logo
} from './Elements'

const LogoGallery = ({ data }) => {
  return (
    <Section>
        <Inner>
            <Title>Cabañas</Title>
            <Grid>
                {
                    data.map(item => <Item key={item}><Logo src={item} alt="logo cabaña" /></Item>)
                }
            </Grid>
        </Inner>
    </Section>
  )
}

export default LogoGallery