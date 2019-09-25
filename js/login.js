document.querySelector('.btn-login').addEventListener('click', entrar)
let erro = document.querySelector('.erro')


// document.querySelector('.status').addEventListener('click', scroll)
// function scroll(){

// }






function entrar(){
    if(email.value == 'adm@monitoreasy.com.br' && senha.value =='monitoreasy'){
        window.location = 'dashboard.html'
    }else{
        erro.style.display = 'block'
    }
}


