// Iteración#1

const products = [
    'Camiseta de Pokemon',
    'Pantalón coquinero', 
    'Gorra de gansta', 
    'Camiseta de Basket', 
    'Cinrurón de Orión', 
    'AC/DC Camiseta'
]

let incluyeCamiseta = function(elemento){
    for(let i = 0; i < elemento.length; i++){
        if(elemento[i].includes('Camiseta')){
            console.log(elemento[i]);
        };
    };
};

incluyeCamiseta(products);