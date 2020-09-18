
export const setFlex = ({x = "center", y = "center"}={}) => {
    return `display:flex; justify-content:${x}; align-items: ${y}; `
};
export const setShadow = {
    light: "box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)",
    dark: "box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);",
    darkest: "box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);",
    bottomLight: "box-shadow:0 0 10px rgba(0,0,0,0.5)"
  };


export const color =  {
  royalBrown: "#814c0bd9",
}

  
export const linearGradient = {
    light: "linear-gradient(99.84deg, rgba(167, 175, 187, 0.1) 0.49%, rgba(163, 192, 192, 0.24) 52.89%, rgba(129, 183, 200, 0.29) 88.71%);",
    orange: "linear-gradient(99.84deg, rgba(255, 198, 166, 0.39) 0.49%, rgba(249, 226, 169, 0.55) 41.77%, rgba(240, 250, 203, 0.51) 88.71%);",
    purple: "linear-gradient(99.84deg, rgba(57, 84, 125, 0.29) 0.49%, rgba(102, 104, 157, 0.38) 44.67%, rgba(147, 65, 154, 0.3) 88.71%);"
  }

export const setColor = (color)=> {
return `color:${color? color:"gold"}; font-weight: bold;`;
}

export const setBorder = ({width="1px", type="solid", color="black"}={})=> {
 return `border: ${width} ${type} ${color}`
}

export const getPadding = (t=0,r=0,b=0,l=0)=> {
  return `padding:${t}rem ${r}rem ${b}rem ${l}rem`
}


export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out"
} = {}) => {
  return `transition:${property} ${time} ${timing}`;
};


export const setGrid = ({minWidth="150px",gap="1rem"}={})=> {
 return  {
   display:"grid",
   "align-items": "center",
   "justify-items": "center",
  //  "grid-template-columns": `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
   "grid-gap": `${gap}`

 }
}

export const setSelfGrid = ({alignSelf ="center", justifySelf="center"}={})=> {
  return  {
    display:"grid",
    "align-self":`${alignSelf}`,
    "justify-self":`${justifySelf}`,
    // "grid-gap": `${gap}`
 
  }
 }


export const setWidth = (width=100)=> {
  return `width: ${width}%` 
}


export const sizes = {

  xxlLarge:1600,
  xlLarge:1400,
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

// // Iterate through the sizes and create a media template
// export const media = Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${sizes[label]}) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});

//using media-queries
// ${media.tablet`
//   display:grid;
//   grid-template-columns:1fr 1fr;
//   grid-column-gap:${setRem(32)};
//   `};


// export const media = Object.keys(sizes).reduce(
//   (accumulator, label) => {
//     accumulator[label] = (...args) => css`
//       @media (min-width: ${sizes[label]}) {
//         ${css(...args)};
//       }
//     `;
//     return accumulator;
//   },
//   {}
// );