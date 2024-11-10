async function orderfood(name,time) {
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            console.log("order"+name+"prepared");
        },time);
    });
}