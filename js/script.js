document.title="AIQ"//memberikan nama untuk judul web
const tabel = document.getElementById('tabel') //membuat variabel dengan nama tabel dengan mengambil nilai dari id tabel
const tombolKlik = document.getElementsByClassName('tombol-menu')[0];
const menu = document.getElementsByClassName('menu')[0];

tombolKlik.onclick = function() {//memberikan fungsi onclik aktif agar nantinya ketika tombol menu /garis 3 bisa di klik
    menu.classList.toggle('active');
}
menu.onclick = function() {//memberikan fungsi onclik aktif agar nantinya ketika tombol menu /garis 3 di klik maka menu seperti home, deskripsi sebagainya bisa muncul
    menu.classList.toggle('active');
}
tabel.style.border = 'none'
tabel.style.fontSize = '23px'
tabel.style.color = '#364f6b'//Memberikan style melalui javascript dengan cara memberikan style pada variabel tabel yang dimana pada variabel ini sudah menampung nilai dari id tabel
tabel.style.background = ' #78a4d7'
tabel.style.padding = '15px'
tabel.style.borderRadius = '10px'

function klik(){// memberikan function klik (onclick)agar nantinya ketika tombol di klik akan muncul kalimat seperti di bawah
    alert('Terimakasih Sudah Datang di Website kami. Jangan Lupa Hadir Lagi yaaa 👏')
}
function test(){// memberikan function onemouseover agar nantinya ketika mouse diarahkan ke tombol maka tombol akan ke trigger
    tabel.textContent = 'Terimakasih'
    tabel.style.background = 'Lavender'
    tabel.style.transition ='1s'
}
function test2(){// memberikan function onemouseout agar nantinya ketika mouse dipindahkan setelah diarahkan ke tombol sebelumnya maka tombol akan ke trigger
    tabel.textContent = 'Keluar'
    tabel.style.background = '#78a4d7'
    tabel.style.transition ='1s'
}


