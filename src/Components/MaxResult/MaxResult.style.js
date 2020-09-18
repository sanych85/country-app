import styled from 'styled-components';
import {InnerWrapper} from "../../Components/StyledCpmponents/Wrappers"

export const MaxResultWrapper = styled(InnerWrapper) `

    max-width: 10rem;
    span {
        color:${props=>props.theme.fourthColor}
    }
 `