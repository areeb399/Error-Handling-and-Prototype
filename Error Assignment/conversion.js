const convertToNumber = (str) =>{
    try{
        let num = Number(str);
        if(isNaN(num)){
            throw new Error("Invalid Number");
        }
        return num;
    }
    catch(error){
        return error.message ;
    }
}

console.log(convertToNumber("567"));
console.log(convertToNumber("Hi"));