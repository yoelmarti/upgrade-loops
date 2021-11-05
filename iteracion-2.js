// Iteracion#2

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Juan Miranda', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]


for (let alumn of alumns){
    if(alumn.T2 === true){
        alumn['isApproved'] = true ;
    }else{
        alumn['isApproved'] = false ;
    }
    for(let key in alumn){
        console.log(key + ': ' + alumn[key]);
    }
}