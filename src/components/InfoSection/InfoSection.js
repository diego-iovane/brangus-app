import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../Layout/Elements'
import {
    Inner,
    Left,
    Title,
    Dates,
    Description,
    Right,
    Img,
} from './Elements'

const InfoSection = ({ id }) => {

    const json = id === "tour" ? 'tour_info' : 'expo_info'
    const { t, i18n } = useTranslation(json)
    const image = t("img", { returnObjects: true })

    return (
        <Section id={id}>
            <Inner>
                <Left>
                    <Title>{t('title')}</Title>
                    <Dates>{t('dates')}</Dates>
                    <Description>{t('description')}</Description>
                </Left>
                <Right>
                    <Img src={image.src} alt={image.alt} />
                </Right>
            </Inner>
        </Section>
    )
}

export default InfoSection