import React from 'react'
import { 
    Hamb,
    Span,
} from './Elements'

const Hamburguer = ({ opened, setOpened }) => {
  return (
    <Hamb onClick={() => setOpened(!opened)}>
        <Span opened={opened} />
        <Span opened={opened} />
        <Span opened={opened} />
    </Hamb>
  )
}

export default Hamburguer