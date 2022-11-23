import { useState, useEffect } from 'react'
import {
    SelectContainer,
    SelectLabel,
    SelectButton,
    OptionsContainer,
    Option,
} from './Elements'

const SelectInputField = ({
    options,
    setter,
    label,
    renderer,
    setEnableSecondPerson,
    setEnableThirdPerson,
}) => {

    const [active, setActive] = useState()
    const [opened, setOpened] = useState(false)

    const handleButton = () => setOpened(!opened)

    const handleSelect = (option) => {
        setActive(option)
        setter(option)
        setOpened(false)

        if (option === "Single") {
            setEnableSecondPerson(false)
            setEnableThirdPerson(false)
        }

        if (option === "Double" || option === "Doble") {
            setEnableSecondPerson(true)
            setEnableThirdPerson(false)
        }

        if (option === "Triple") {
            setEnableSecondPerson(true)
            setEnableThirdPerson(true)
        }
    }

    useEffect(() => setActive(options[0]), [renderer])

    return (
        <SelectContainer>
            <SelectLabel for="pack">{label}</SelectLabel>
            <SelectButton type="button" onClick={handleButton}>{active}</SelectButton>
            {
                opened &&
                <OptionsContainer>
                    {
                        options
                        .filter(option => option !== active)
                        .map(option => {
                            return (
                                <Option
                                    key={option}
                                    onClick={() => handleSelect(option)}
                                >
                                    {option}
                                </Option>
                            )
                        })
                    }
                </OptionsContainer>
            }
        </SelectContainer>
    )
}

export default SelectInputField