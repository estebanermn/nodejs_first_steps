function getCar(id){
    return new Promise((resolve, reject)=>{ 
        setTimeout(()=>{
            console.log('Obtenido coche 30 de nuestra DB')
            resolve({id: 23, model: 'X3', company:'BMW'})
        },3000)
    })
}

function getModel(modelo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Obtenido modelo X3 BMW')
            resolve({speed: 200, seat: 'X3', size:'4*5'})
        },3000)
    })
}

/*
const promesa = getCar(23)
// promesa.then(coche =>console.log(coche))

promesa
    .then(coche=>getModel(coche.model))
    .then(model=>console.log(model))
    .catch(err => console.log(err.message))
*/

async function showModel(){
    try{
    const car = await getCar(23)
    const model = await getModel(car.model)
    console.log(model)
    }catch(err){
        console.log(err.message)
    }
}

showModel()