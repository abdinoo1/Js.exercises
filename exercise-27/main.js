function fetchuserData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const guulayso = true;
            if(guulayso){
                resolve({id:2, name:"abdino"})
            } else{
                reject("diidmo")
            }
        },2000)
    })
}

fetchuserData()
.then((xog) => console.log(xog))
.catch((err) => console.log(err))