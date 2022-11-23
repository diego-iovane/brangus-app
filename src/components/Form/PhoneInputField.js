import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { PhoneContainer, PhoneNote } from './Elements'
import './styles.css'

const PhoneInputField = ({ setPhone, placeholder, msj }) => {
  return (
    <PhoneContainer>
      <PhoneInput
        country={'ar'}
        value=""
        placeholder={placeholder}
        onChange={phone => setPhone({phone})}
      />
      <PhoneNote>{msj}</PhoneNote>
    </PhoneContainer>
  )
}

export default PhoneInputField