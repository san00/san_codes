import styled from 'styled-components'

const Container = styled.div`
    padding-left: ${props => {
        if (props.full) return 0
        return 'calc((100vw - 60em) / 2)'
    }};
    padding-right: ${props => {
        if (props.full) return 0
        return 'calc((100vw - 60em) / 2)'
    }};
    padding-top: ${props => {
        if (props.fullVertical) return 0
        if (props.small) return '0.9375em'
        return '1.5625em'
    }};
    padding-bottom: ${props => {
        if (props.fullVertical) return 0
        if (props.small) return '0.9375em'
        return '1.5625em'
    }};
`

export default Container