const cn = document.getElementById('cn')
const password = document.getElementById('pass')
const name = document.getElementById('name')

if(cn.value == "" || password.value=="" || name.value==""){
alert("No blank values allowed")
}

if(password.value <= 6){
    alert("Password must be more than 6 characters")
}




