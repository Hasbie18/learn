function TehenFungsi(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Berhasil yey")
        }, 1000)
    })
}


TehenFungsi()
    .then((result)=>{console.log(result)})
    .catch((error)=>console.error(error));


async function ambildata() {
    try{
        const result = await TehenFungsi
        console.log(result)
    } catch (error){
        console.error(error)
    }
}