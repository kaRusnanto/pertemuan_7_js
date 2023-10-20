// object yang menggunakan for in
const Timnas_Volly_indonesia = {
    nama_pemain : "Rivan Nurmulki",
    tgl_lahir : "16 Juli 1995",
    umur : "27 tahun",
    tinggi_badan : "185 cm",
    posisi : "Opposite",
} 

const Timnas_volly_italia = {
    nama_pemain : "Fabio Balaso",
    tgl_lahir : "20 Oktober 1995",
    umur : "27 tahun",
    tinggi_badan : "178 cm",
    posisi : "Libero"
}

const Timnas_volly_jepang = {
    nama_pemain : "Yuji Nishida",
    tgl_lahir : "30 Oktober 2000",
    umur : "23 tahun",
    tinggi_badan : "187 cm",
    posisi : "Opposite"
}

const Timnas_volly_malaysia = {
    nama_pemain : "Ngin Jia Ning",
    tgl_lahir : "12 Februari 2000",
    umur : "27 tahun",
    tinggi_badan : "187 cm",
    posisi : "Midll bloker"
}

const Timnas_volly_polandia = {
    nama_pemain : "Lukasz Kaczmarek",
    tgl_lahir : "17 Juni 1994",
    umur : "29 tahun",
    tinggi_badan : "204 cm",
    posisi : "Opposite"
}

const nama_timnas = [Timnas_Volly_indonesia, Timnas_volly_italia, Timnas_volly_jepang, Timnas_volly_malaysia, Timnas_volly_polandia]

for (nama of nama_timnas) {
    console.log(nama);
}

for (nama in Timnas_Volly_indonesia) {
    console.log(nama + '=' + Timnas_Volly_indonesia[nama])
}

for (nama in Timnas_volly_italia) {
    console.log(nama + '=' + Timnas_volly_italia[nama])
}

for (nama in Timnas_volly_jepang) {
    console.log(nama + '=' + Timnas_volly_jepang[nama])
}

for (nama in Timnas_volly_malaysia) {
    console.log(nama + '=' + Timnas_volly_malaysia[nama])
}

for (nama in Timnas_volly_polandia) {
    console.log(nama + '=' + Timnas_volly_polandia[nama])
}