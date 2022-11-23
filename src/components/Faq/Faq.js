import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from "../Layout/Elements"
import {
    Inner, 
    Item,
    Qheader,
    Q,
    ArrowContainer,
    Arrow,
    AContainer,
    A,
} from './Elements'

const Faq = () => {

    const [active, setActive] = useState(1)
    const { t } = useTranslation('faq')
    const content = t('faq', { returnObjects: true })

    const handleActive = (id) => {
        active === id ? setActive(0) : setActive(id)
    }

    return (
        <Section minHeight='10rem' bottomMargin='2rem'>
            <Inner>
                {
                    content.map(item => {
                        return(
                            <Item key={item.id}>
                                <Qheader onClick={() => handleActive(item.id)}>
                                    <Q>{item.q}</Q>
                                    <ArrowContainer>
                                        <Arrow src={item.icon} active={item.id === active}/>
                                    </ArrowContainer>
                                </Qheader>
                                <AContainer active={item.id === active}>
                                    {
                                        item.a.map(item => <A key={item}>{item}</A>)
                                    }
                                </AContainer>
                            </Item>
                        )
                    })
                }
            </Inner>
        </Section>
    )
}

export default Faq