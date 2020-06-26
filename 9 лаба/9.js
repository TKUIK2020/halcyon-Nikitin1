const button = document.getElementById('but')
const input = document.getElementById('send')
let mail =  /[-.\w]+@([\w-]+\.)+[\w-]+/g
function check() {
    if (input.value.replace(/ /g, "").match(mail)) {
        input.style.borderColor = "green"
        localStorage.setItem("e-mail", input.value)
    } else {
        input.style.borderColor = "red"
        input.setCustomValidity("Некорректный e-mail");
    }
}
let q = localStorage.getItem("e-mail")
if (q != null) {
    input.value = q
} 