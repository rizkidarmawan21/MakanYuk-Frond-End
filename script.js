
$(window).on("load", function () {
    $(".loader").fadeOut(900);
    $(".all").fadeIn(900);
})


const url = "http://foodmarket.test:8080/"

let dataUser = {} 
const STORAGE_USER = "STORAGE_USER"

// ================== LOGIN API =====================

var form_login = document.getElementById('form-login')

form_login.addEventListener('submit' ,function(event){
    event.preventDefault()
    let email = document.getElementById('email-form').value
    let pasw = document.getElementById('password-form').value
    
    axios.post(url+'api/login/', {
        email: email,
        password: pasw

    }).then((data) => {
        console.log(data.data.data)
        dataUser['token'] = data.data.data
        // console.log(dataUser)
        sessionStorage.setItem(STORAGE_USER,JSON.stringify(dataUser))
        alert('Login berhasil')
        window.location.replace("http://192.168.43.115:5500/index.html");
    }).catch((error) => {
        console.log('error = ',error.response.data)
        alert(error.response.data.message)
        window.location.replace("http://192.168.43.115:5500/login.html");
    })
})
