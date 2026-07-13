export function StringToNumber(idString: string){
    const idNr = Number(idString); 

    if(Number.isNaN(idNr)){
       return null;
    }

    return idNr;
}
