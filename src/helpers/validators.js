 export function matchPassword(password,confirmPassword){
     return password===confirmPassword

}

export function isEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}