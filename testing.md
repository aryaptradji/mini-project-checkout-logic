# Dry Run — Sistem Checkout Produk

| No. | Skenario Pengujian | Price | Quantity | Member | Expected Result | Test Result |
|---:|---|---:|---:|:---:|---|:---:|
| 1 | Member mendapat diskon | 100000 | 3 | `true` | Subtotal: 300000, Discount: 30000, Shipping: 0, Total Payment: 270000 | PASS |
| 2 | Non-member tanpa diskon | 100000 | 2 | `false` | Subtotal: 200000, Discount: 0, Shipping: 15000, Total Payment: 215000 | PASS |
| 3 | Total setelah diskon di bawah Rp250.000 | 100000 | 2 | `true` | Subtotal: 200000, Discount: 20000, Shipping: 15000, Total Payment: 195000 | PASS |
| 4 | Total tepat Rp250.000 | 250000 | 1 | `false` | Subtotal: 250000, Discount: 0, Shipping: 0, Total Payment: 250000 | PASS |
| 5 | Total di atas Rp250.000 | 260000 | 1 | `false` | Subtotal: 260000, Discount: 0, Shipping: 0, Total Payment: 260000 | PASS |
| 6 | Quantity bernilai 0 | 100000 | 0 | `false` | `"Input tidak valid"` | PASS |
| 7 | Quantity berupa bilangan pecahan | 100000 | 1.5 | `false` | `"Input tidak valid"` | PASS |
| 8 | Harga bernilai 0 | 0 | 2 | `false` | `"Input tidak valid"` | PASS |
| 9 | Harga bernilai negatif | -100000 | 2 | `false` | `"Input tidak valid"` | PASS |
| 10 | Harga berupa bilangan pecahan | 100.5 | 2 | `false` | `"Input tidak valid"` | PASS |
