function fetchuserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const guulayso = true;
            if(guulayso) {
                resolve({id:3, name:"abdino"})
            } else {
                reject("diidmo")
            }
        },2000);
    })
   
}
 async function displayfetchdata() {
        const user = await fetchuserData()
        console.log(user)
    }
    try{

    } catch(err){
        console.log(err)
    }
displayfetchdata()