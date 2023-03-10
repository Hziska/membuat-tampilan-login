let username = document.getElementById('username')
let password = document.getElementById('password')
const btn = document.getElementById('btn')
const murid = document.getElementById('murid')
const guru = document.getElementById('guru')
const admin = document.getElementById('admin')
const tdkTerdaftar = document.getElementById('tidak-terdaftar')
const kata = document.getElementById('login')
const klikLogout = document.getElementById('logout')
const kembali = document.getElementById('kembali')

murid.style.display='none'
guru.style.display='none'
admin.style.display='none'
tdkTerdaftar.style.display='none'
klikLogout.style.display='none'
kembali.style.display='none'

localStorage.setItem('hazza','123')
localStorage.setItem('wahyu','111')
localStorage.setItem('admin','admin123')

function klik(){
    btn.style.display= 'none';
    username.style.display='none'
    password.style.display='none'
    kata.style.display='none'

    if(username.value=='hazza' && password.value=='123'){
        murid.style.display='block'
        klikLogout.style.display='block'
    }else if(username.value=='wahyu' && password.value=='111'){
        guru.style.display='block'
        klikLogout.style.display='block'
    }
    else if(username.value=='admin' && password.value=='admin123'){
        admin.style.display='block'
        klikLogout.style.display='block'
    }else{
        tdkTerdaftar.style.display='block'
        kembali.style.display='block'
    }

}


function logout(){
    localStorage.clear();
    location.reload();
}

