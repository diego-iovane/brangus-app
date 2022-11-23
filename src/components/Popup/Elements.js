import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;
`

export const MsjContainer = styled(motion.div)`
    max-width: 20rem;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: var(--container-shadow);
    background-color: #ffffff;
`

export const Msj = styled.p`

`