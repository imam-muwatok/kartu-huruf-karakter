function acakHuruf() {
    var huruf = "abcdefghijklmnopqrstuvwxyz"
    var acak = Math.floor(Math.random()*huruf.length+1)
    var jumlah = huruf.length
    var min = acak - 1
    var hasil = huruf.slice(min,acak)
    document.getElementById("hasil").innerHTML = "<img src='/img/" +hasil+ ".png' height='200'>";

}