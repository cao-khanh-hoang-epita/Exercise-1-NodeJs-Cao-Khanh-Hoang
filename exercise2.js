class User  {
    constructor(firstName, lastName, age, email, admin) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
        this.admin = admin
    }

    getUserInfo() {
        return `${this.firstName} ${this.lastName} (${this.age})`
    }

    setAge(newAge) {
        this.age = newAge
    }    
}

const userOne = new User("Khanh", "Hoang", 27, "khanhhoang@hoang", false)

console.log(userOne.getUserInfo())
userOne.setAge(20)
console.log(userOne.getUserInfo())