import styled,{css} from 'styled-components';


const baseStyle = css `
text-align:center;
color: ${props=>props.color|| props.theme.secondaryColor || "red" };
text-transform: uppercase;
padding-left:1rem;
padding-right: 1rem;

`

export const H1 = styled.h1 `
${baseStyle};
font-size: 2.3rem;

`
export const H2 = styled.h2 `
${baseStyle};
font-size: 1.8rem;

`
export const H3 = styled.h3 `
${baseStyle};
font-size: 1.5rem;

`
export const H4 = styled.h4 `
${baseStyle};
font-size: 1.2rem;

`
export const H5 = styled.h5 `
${baseStyle};
font-size: 1.1rem;

`