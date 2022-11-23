import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Hamburguer from './MobileNavBar/Hamburguer'
import MobileNavBar from './MobileNavBar/MobileNavBar'
import Dropdown from '../Dropdown/Dropdown'
import {
    Container,
    Inner,
    LogoContainer,
    LogoAnchor,
    Logo,
    Nav,
    Link,
    NavContainer,
    DropdownContainer,
} from './Elements'

const NavBar = ({ data }) => {

    const { t, i18n } = useTranslation('nav')
    const links = t('links', { returnObjects: true })
    const [renderer, setRenderer] = useState(false)  
    const [scrollPos, setScrollPos] = useState(0)
    const [opened, setOpened] = useState(false)

    const handleScroll = () => setScrollPos(window.pageYOffset)

    useEffect(() => {

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <Container reduced={scrollPos > 75}>
            <Inner>
                <LogoContainer reduced={scrollPos > 75}>
                    <LogoAnchor href="#">
                        <Logo reduced={scrollPos > 75} src={data.logo} alt="logo navegacion congreso brangus" />
                    </LogoAnchor>
                </LogoContainer>
                <NavContainer>
                    <Nav>
                        {links.map(link => <Link key={link.url} href={link.url} reduced={scrollPos > 75}>{link.title}</Link>)}
                    </Nav>
                    <DropdownContainer>
                        <Dropdown i18n={i18n} renderer={renderer} setRenderer={setRenderer}/>
                    </DropdownContainer>
                </NavContainer>
                <Hamburguer opened={opened} setOpened={setOpened} />
                <MobileNavBar links={links} opened={opened} setOpened={setOpened} reduced={scrollPos > 75}/>
            </Inner>
        </Container>
    )
}

export default NavBar