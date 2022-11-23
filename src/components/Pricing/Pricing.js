import { useTranslation } from 'react-i18next'
import { Section } from "../Layout/Elements"
import {
    Inner,
    Card,
    Top,
    Pack,
    Title,
    Dates,
    Bottom,
    DetailsContainer,
    DetailsTitle,
    Details,
    Detail,
    Prices,
    Price,
    Strong,
    Note,
    GlobalNote,
} from './Elements'

const Pricing = () => {

    const { t } = useTranslation('pricing')
    const content = t('packs', { returnObjects: true })

    return (
        <Section>
            <Inner>
                {
                    content.map((item, index) => {
                        return(
                            <Card key={index}>
                                <Top>
                                    <Pack>{item.pack}</Pack>
                                    <Title>{item.title}</Title>
                                    <Dates>{item.date}</Dates>
                                </Top>
                                <Bottom>
                                    {
                                        item.detailsOne &&
                                        <DetailsContainer>
                                            <DetailsTitle>{item.detailsOneTitle}</DetailsTitle>
                                            <Details>
                                                {
                                                    item.detailsOne.map((item, index) => <Detail key={index}>{item}</Detail>)
                                                }
                                            </Details>
                                        </DetailsContainer>
                                    }
                                    {
                                        item.detailsTwo &&
                                        <DetailsContainer>
                                            <DetailsTitle>{item.detailsTwoTitle}</DetailsTitle>
                                            <Details>
                                                {
                                                    item.detailsTwo.map((item, index) => <Detail key={index}>{item}</Detail>)
                                                }
                                            </Details>
                                        </DetailsContainer>
                                    }
                                    <Prices>
                                        {
                                            item.prices.map((item, index) => {
                                                return(
                                                    <Price key={index}>
                                                        <Strong>{item.price} </Strong>
                                                        - {item.date}
                                                    </Price>
                                                )
                                            }
                                            )
                                        }
                                    <Note>{item.note}</Note>
                                    </Prices>
                                </Bottom>
                            </Card>
                        )
                    })
                }
            </Inner>
            <GlobalNote>{t('globalNote')}</GlobalNote>
        </Section>
    )
}

export default Pricing