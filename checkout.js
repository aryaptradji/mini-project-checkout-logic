function hitungCheckout(payload) {
    const { price, quantity, member } = payload;

    if (typeof price !== "number" || price <= 0 || !Number.isInteger(price) || typeof quantity !== "number" || quantity <= 0 || !Number.isInteger(quantity)) return "Input tidak valid";

    const subtotal = price * quantity;
    let discount = 0;

    if (member) discount = 0.1 * subtotal;

    const total = subtotal - discount;
    let shipping = 0;

    if (total < 250000) shipping = 15000;

    const totalPayment = total + shipping;

    return { subtotal, discount, shipping, totalPayment };
}

// 1. Member mendapat diskon
console.log("1. Member mendapat diskon");
console.log(hitungCheckout({ price: 100000, quantity: 3, member: true }));
// Expected Output:
// {
//   subtotal: 300000,
//   discount: 30000,
//   shipping: 0,
//   totalPayment: 270000
// }

// 2. Non-member tanpa diskon
console.log("\n2. Non-member tanpa diskon");
console.log(hitungCheckout({ price: 100000, quantity: 2, member: false }));
// Expected Output:
// {
//   subtotal: 200000,
//   discount: 0,
//   shipping: 15000,
//   totalPayment: 215000
// }

// 3. Total setelah diskon di bawah Rp250.000
console.log("\n3. Total setelah diskon di bawah Rp250.000");
console.log(hitungCheckout({ price: 100000, quantity: 2, member: true }));
// Expected Output:
// {
//   subtotal: 200000,
//   discount: 20000,
//   shipping: 15000,
//   totalPayment: 195000
// }

// 4. Total tepat Rp250.000
console.log("\n4. Total tepat Rp250.000");
console.log(hitungCheckout({ price: 250000, quantity: 1, member: false }));
// Expected Output:
// {
//   subtotal: 250000,
//   discount: 0,
//   shipping: 0,
//   totalPayment: 250000
// }

// 5. Total di atas Rp250.000
console.log("\n5. Total di atas Rp250.000");
console.log(hitungCheckout({ price: 260000, quantity: 1, member: false }));
// Expected Output:
// {
//   subtotal: 260000,
//   discount: 0,
//   shipping: 0,
//   totalPayment: 260000
// }

// 6. Quantity bernilai 0
console.log("\n6. Quantity bernilai 0");
console.log(hitungCheckout({ price: 100000, quantity: 0, member: false }));
// Expected Output: "Input tidak valid"

// 7. Quantity berupa bilangan pecahan
console.log("\n7. Quantity berupa bilangan pecahan");
console.log(hitungCheckout({ price: 100000, quantity: 1.5, member: false }));
// Expected Output: "Input tidak valid"

// 8. Harga bernilai 0
console.log("\n8. Harga bernilai 0");
console.log(hitungCheckout({ price: 0, quantity: 2, member: false }));
// Expected Output: "Input tidak valid"

// 9. Harga bernilai negatif
console.log("\n9. Harga bernilai negatif");
console.log(hitungCheckout({ price: -100000, quantity: 2, member: false }));
// Expected Output: "Input tidak valid"

// 10. Harga berupa bilangan pecahan
console.log("\n10. Harga berupa bilangan pecahan");
console.log(hitungCheckout({ price: 100.5, quantity: 2, member: false }));
// Expected Output: "Input tidak valid"