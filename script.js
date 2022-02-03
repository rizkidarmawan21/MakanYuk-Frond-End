
$(window).on("load", function () {
    $(".loader").fadeOut(900);
    $(".all").fadeIn(900);
})


let dataUser;

const url = "http://foodmarket.test:8080/api/login/"


var email = document.querySelector('#exampleInputEmail1').value
var pasw = document.querySelector('#exampleInputPassword1').value

// function login() {


    // }


    axios.post(url, {
        email: 'rizki@gmail.com',
        password: '12345678'

    }).then((data) => {
        const token = data.data
        // dataUser = token
        // document.querySelector('#exampleInputEmail1').value = token
        // Token(token)
        console.log(token)
    }).catch((err) => {
        console.log(err)
    })

// console.log(dataUser)

