import {
    Overlay,
    MsjContainer,
    Msj,
} from './Elements'

const Popup = ({ msj }) => {
  return (
    <Overlay>
        <MsjContainer>
            <Msj>{msj}</Msj>
        </MsjContainer>
    </Overlay>
  )
}

export default Popup