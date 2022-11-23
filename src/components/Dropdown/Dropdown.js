import { useEffect } from "react"
import { useState } from "react"
import {
    Button,
    DropdownBox,
    DropdownContainer,
    DropdownItem,
    FlagContainer,
    Flag,
    Arrow,
} from "./Elements"


const Dropdown = ({ i18n, setRenderer, renderer }) => {

    const [active, setActive] = useState('')
    const [opened, setOpened] = useState(false)

    const languages = [
        {
            flag: '/static/icons/english-flag.png',
            value: 'en',
        },
        {
            flag: '/static/icons/argentina-flag.png',
            value: 'es',
        },
    ]

    useEffect(() => setActive(languages[1]), [])

    const handleOpen = () => setOpened(!opened)

    const changeLanguage = (value) => {

        setRenderer(!renderer)

        i18n.changeLanguage(value)

        setOpened(!opened)

        setActive(languages.find(language => language.value === value))
    }

    return (
        <DropdownContainer>
            <Button onClick={handleOpen}>
                <FlagContainer>
                    <Flag src={active.flag} />
                </FlagContainer>
                <Arrow opened={opened} />
            </Button>
            <DropdownBox opened={opened}>
                <DropdownItem>
                    {
                        languages
                        .filter(language => language.value !== active.value)
                        .map(language => {
                            return (
                                <FlagContainer 
                                    key={language.value}
                                    onClick={() => changeLanguage(language.value)}
                                >
                                    <Flag src={language.flag} />
                                </FlagContainer>
                            )
                        })
                    }
                </DropdownItem>
            </DropdownBox>
        </DropdownContainer>
    )
}

export default Dropdown