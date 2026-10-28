# Mini Project: Logic Sistem Checkout Produk Sederhana

Program JavaScript sederhana untuk menghitung pembayaran saat checkout produk berdasarkan harga, jumlah produk, dan status member. Program memvalidasi input, menghitung subtotal dan diskon, menentukan ongkos kirim, lalu menghasilkan total pembayaran.

Aturan perhitungan:

- Harga harus berupa angka positif dan jumlah harus berupa bilangan bulat positif. Jika tidak valid, program mengembalikan pesan `Input tidak valid`.
- Subtotal = harga × jumlah.
- Member mendapat diskon 10% dari subtotal; non-member tidak mendapat diskon.
- Ongkos kirim gratis jika total setelah diskon minimal Rp250.000. Jika kurang, ongkos kirim Rp15.000.
- Total pembayaran = total setelah diskon + ongkos kirim.

## Cara Menjalankan

Pastikan [Node.js](https://nodejs.org/) sudah terpasang. Dari direktori proyek, jalankan:

```bash
node checkout.js
```

File tersebut menjalankan contoh skenario checkout dan mencetak hasilnya ke terminal. Logika utama tersedia pada fungsi `hitungCheckout` di `checkout.js`.

## Deliverables

- [`analysis.md`](analysis.md): problem decomposition.
- [`flowchart.drawio`](flowchart.drawio) dan [`flowchart.png`](flowchart.png): flowchart.
- [`pseudocode.md`](pseudocode.md): pseudocode.
- [`checkout.js`](checkout.js): implementasi JavaScript dan contoh skenario.
- [`testing.md`](testing.md): skenario pengujian.

## Penggunaan AI

AI digunakan sebagai partner untuk membantu menyusun README berdasarkan panduan assignment dan meninjau kesesuaian dokumentasi dengan file proyek. Logika program, flowchart, pseudocode, dan hasil pengujian dibuat sendiri.
