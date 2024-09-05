function doSomething(callback){
    setTimeout(()=>{callback("done"),1000})
}

doSomething(result => console.log(result))