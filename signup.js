function run()
{
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let number = document.querySelector("#number").value
    let password = document.querySelector("#password").value
localStorage.setItem("name" , name)
localStorage.setItem("email" , email)
localStorage.setItem("number" , number)
localStorage.setItem("password" , password)
window.location.href = "./login.html"
}