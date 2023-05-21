const getPerson = (obj) =>{
    try{
        if(typeof obj !== "object" || obj === null || !("name in obj")|| !("age" in obj)){
            throw new Error("Invalid parameter type");
        }
        return "Name : " + obj.name + ", Age : " + obj.age ;
    }

    catch(error){
        return error.message
    }
}

const P1 = { name : "Areeb" , age: 24 };
console.log(getPerson(P1));

const P2 = { name : "Ehtesham"};
console.log(getPerson(P2));