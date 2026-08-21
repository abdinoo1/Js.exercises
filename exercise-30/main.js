
// multiply

function operate(a,b, callback){
    return callback(a,b)
}

function multiply(a,b){
    return a / b
}
console.log(operate(100,100, multiply))

// divided

function oparate(a,b, callback){
    return callback(a,b)
}

function divided(a,b){
    return a * b
}

console.log(oparate(10,10, divided))