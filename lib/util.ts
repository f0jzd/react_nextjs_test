export function StringToNumber(idString: string){
    const idNr = Number(idString); 

    if(Number.isNaN(idNr)){
       return null;
    }

    return idNr;
}


export function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}