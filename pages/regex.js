//regex its a pattern that helps us to validate inputs
//2 ways:
//1=> new RegExp("PATTERN")
//2=> /PATTERN/

//to validate the input we will use test method

const numbersRegex = new RegExp('^[0-9]+$')
numbersRegex.test("sdgdsfd")// false
numbersRegex.test("45454")// true

const lpRegex = new RegExp('^[A-Z]{1,3}-[A-Z]{1,2}-[0-9]{1,4}$')
lpRegex.test("A-A-343")// true
lpRegex.test("A-A-454555")// false

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[#$^+=!*()@%&]).{8,10}$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const form = document.getElementById("formValidation");
const DOM = {
    userName: form["userName"],
    error: form.querySelector("#error"),
    success: form.querySelector("#success"),
    password: form["userPassword"],
    error1: form.querySelector("#error1"),
    success1: form.querySelector("#success2")
}

console.log(DOM)


DOM.userName.addEventListener("input", function (event) {
    resetErrors()
    console.log(event.currentTarget)
    console.log(event.currentTarget.value)
    console.log([event.currentTarget])
    const { value } = event.currentTarget

    console.log(value)


    if (!value) return raiseMessage(DOM.error, "Input Is Required")
    const emailValidationResult = validateEmail(value)
    if (!emailValidationResult) return raiseMessage(DOM.error, "Its not an email")
    return raiseMessage(DOM.success, "You are ok!")
})
function resetErrors() {
    const { error, success } = DOM;
    error.innerHTML = "";
    success.innerHTML = "";
}
function validateEmail(input) {
    return emailRegex.test(input.toLowerCase())
}

function raiseMessage(element, message) {
    element.innerHTML = message
}