const numberChecker = (numbers) =>{
    return function(number){
        return numbers.includes(number);
    }
}

const arr = [1,2,3,4,5,6];
const checkNum = numberChecker(arr);

console.log(checkNum(3)); //return : true 

console.log(checkNum(8)); // return : false 
