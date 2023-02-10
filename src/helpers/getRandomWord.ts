let words: string [] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'TELEFONO',
    'CELULAR',
    'HELADO',
] 




export function getRandomWord ( ) {

    const randomIndex =  ( Math.floor( Math.random() * words.length ) ); 
    return words [randomIndex]; 

}
