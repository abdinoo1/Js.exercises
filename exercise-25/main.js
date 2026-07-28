
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); 
function multiply(...numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}
console.log(multiply(2, 3, 4)); 