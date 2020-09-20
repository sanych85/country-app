export const getRandomData = (array)=> {
    if(!array) {
        return
    }
    return array[Math.floor(Math.random() * (array.length  + 1))]
}


//Get Maximum number of elem
export const getTotalMax = (state)=> {
    const obj =state.games.gamesArchive;


    if(Object.values(obj).length>0) {
        const arr = Object.values(obj)
     return  arr.sort((a, b)=> {
        if (b.rate > a.rate) {
            
          return 1;

        }
        if (b.rate < a.rate) {
          return -1;
        }
      
        return 0;
      })[0].rate;
     

    }
    return

}


export const getFilteredElem = (arr, attr, value)=> {
 return arr.filter(elem=>elem[attr].toLowerCase().includes(value.toLowerCase()))
}

