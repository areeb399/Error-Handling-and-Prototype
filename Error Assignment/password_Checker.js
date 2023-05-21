class User{
    constructor(username, password){
        this.username = username;
        this._password = password;
    }

    get password(){
        return this._password.replace(/./g, '*');
    }

    set password(newPassword){
        if(
            newPassword.length >= 8 &&
            /[0-9]/.test(newPassword) &&
            /[A-z]/.test(newPassword)
        )
        {this._password = newPassword;}
        else{
            console.error("Invalid password ! Password must be at least 8 characters long and contains at least one number and one uppercase letter.")
        }
        
    }
}

const user = new User("areeb399", "Amm14arb");
console.log(user.password);

user.password = "mjkn12n"
console.log(user.password);

user.setPassword = "kmjjbvg" ;
console.log(user.setPassword)