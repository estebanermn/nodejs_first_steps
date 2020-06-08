const promesa1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Leyendo datos de FB')
        resolve({amigos: 100, likes: 200})
    }, 1000)
})

const promesa2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Leyendo datos de TW')
        resolve({amigos: 300, likes: 900})
    }, 4000)
})

/*
Promise.all([promesa1, promesa2])
    .then(result=> console.log(result))
    .catch(err => console.log(err.message))
*/

Promise.race([promesa1, promesa2])
    .then(result=> console.log(result))
    .catch(err => console.log(err.message))    