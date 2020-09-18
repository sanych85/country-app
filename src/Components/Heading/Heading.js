
import React from 'react';
import  {H1, H2,H3,H4,H5} from "./Heading.style"

 const Heading = ({type, children, ...restProps})=> {
    if(type==="h1") {
    return <H1  {...restProps}>{children}</H1>
    }
    else if(type==="h2") {
        return <H2  {...restProps}>{children}</H2>
    }
    else if(type==="h3") {
        return <H3  {...restProps}>{children}</H3>
    }
    else if(type==="h4") {
        return <H4  {...restProps}>{children}</H4>
    }
    else if(type==="h5") {
        return <H5  {...restProps}>{children}</H5>
    }
}
export default Heading
    



