import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Dropdown from '../../Dropdown/Dropdown'
import {
  MenuContainer,
  List,
  Link,
  DropdownContainer,
} from './Elements'

const MobileNavBar = ({ links, opened, setOpened, reduced }) => {

  const { i18n } = useTranslation()
  const [renderer, setRenderer] = useState(false)

  return (
    <MenuContainer opened={opened} reduced={reduced}>
      <List>
        {
          links.map(link => <Link key={link.url} href={link.url} onClick={() => setOpened(!opened)}> / {link.title}</Link>)
        }
      </List>
      <DropdownContainer>
        <Dropdown i18n={i18n} renderer={renderer} setRenderer={setRenderer}/>
      </DropdownContainer>
    </MenuContainer>
  )
}

export default MobileNavBar