
// BLOCKING EXERCISE

function fathuserdatasync(){
    alert("joog taliye blocking ku hayste")
    return {id:2, name:"abdino"};
}

console.log("waa midka ugu horeeyey ee la daabacaayo")

const user = fathuserdatasync()

console.log("this message blocking----")

// NON-BLOCKING EXERCISE

function getuserdata(callback){
    setTimeout(() => {const user = {id:2, name:"abdino"}
callback(user)}, 2000)
}

getuserdata(function (user){
    console.log(user)
})
