// First Form
let btnDiv = document.querySelector (".btn-div")
let emailFirst = document.getElementById ("email-first")
let getStarted = document.querySelector (".get-started")

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

getStarted.addEventListener ("click", (e) => {
    e.preventDefault ()

    let firstEmailInput = emailFirst.value.trim ()

    if (!emailRegex.test (firstEmailInput))  {
        emailFirst.style.borderColor = "red"
    }
    else {
        emailFirst.style.borderColor = "green"
    }

    setTimeout(() => {
        emailFirst.value = " "
        emailFirst.style.borderColor = "hsl(0, 0%, 75%)"
    }, 1000);
},)

// Second Form
let getForm = document.querySelector (".get-form")
let emailSecond = document.getElementById ("email-second")
let submit = document.querySelector (".submit")

submit.addEventListener ("click", (e) => {
    e.preventDefault ()

    let secondEmailInput = emailSecond.value.trim ()

    if (!emailRegex.test (secondEmailInput)) {
        emailSecond.style.borderColor = "red"
    }
    else {
        emailSecond.style.borderColor = "green"
    }

    setTimeout(() => {
        emailSecond.value = " "
        emailSecond.style.borderColor = "hsl(0, 0%, 75%)"
    }, 1000);
},)