function fungsiPertama(){
    // variabel global jadi untuk membuat sejumlah variabel
    let angka = 10;  

    // fungsi di dalam fungsi
    function fungsiKedua(){
        // isi nya seperti apa bisa untuk menaruh atau memanggil dari outer fungsi kedua
        console.log(angka)
    }

    return fungsiKedua
}

// contoh ke dua
function fungsiLuar(variabelLuar){
    function fungsiDalam(variabelDalam){
        console.log("variabel luar"+variabelLuar)
        console.log("variabel luar"+variabelDalam)
    }
    return fungsiDalam
}

const panggilFungsi2 = fungsiLuar('ini fungsi');
panggilFungsi2("fungsi dalam")

const panggilFungsi = fungsiPertama();
panggilFungsi()