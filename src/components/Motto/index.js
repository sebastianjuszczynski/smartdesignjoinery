import React from 'react'
import { Text, Span, ExclamationMark } from './styled'

const Motto = () => {
    return (
        <Text id="motto">
            We are not just <Span>building</Span>...<br></br>...we <Span>create </Span><ExclamationMark>!</ExclamationMark>
        </Text>
    )
}

export default Motto;