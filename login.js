function login()
{
    let a = localStorage.getItem("email")
    let b = localStorage.getItem("password")
  
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    if(a==email && b==password)
    {
        // window.alert("Logged in Successfully.....!!")
        window.location.href = "./dash.html"
    }
    else
    {
       window.alert("Please enter valid email and password")
    }
}    