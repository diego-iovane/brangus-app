import { useTranslation } from 'react-i18next'
import { Section } from '../Layout/Elements'
import {
  Inner,
  Title,
  Content,
  Item,
  DateContainer,
  Date,
  Day,
  BodyContainer,
  BodyTitle,
  BodyText,
  BodyLocation,
  LocationIcon,
  LocationText,
  LogoContainer,
  Icon,
  Logo,
} from './Elements'

const ScheduleContainer = ({ data }) => {

  const { t, i18n } = useTranslation(data)


  const items = t('items', { returnObjects: true })


  return (
    <Section bgColor='var(--bg-soft-gray)'>
      <Inner>
        <Title>{t('title')}</Title>
        <Content>
          {
            items.map((item, index) => {
              return (
                <Item key={index}>
                  <DateContainer>
                    <Date>{item.date}</Date>
                    <Day>{item.day}</Day>
                  </DateContainer>
                  <BodyContainer>
                    <BodyTitle>{item.title}</BodyTitle>
                    {
                      item.details.map(item => {
                        return (
                          <BodyText key={item}>{item}</BodyText>
                        )
                      })
                    }
                    {
                      item.icon &&
                      <BodyLocation>
                        <LocationIcon>
                          <Icon src={item.icon} />
                        </LocationIcon>
                        <LocationText>{item.location}</LocationText>
                      </BodyLocation>
                    }
                  </BodyContainer>
                  <LogoContainer>
                    {
                    item.logo && 
                    <Logo src={item.logo} />
                    }
                  </LogoContainer>
                </Item>
              )
            })
          }
        </Content>
      </Inner>
    </Section>
  )
}

export default ScheduleContainer